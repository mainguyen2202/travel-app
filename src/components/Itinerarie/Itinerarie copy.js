import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SERVER_URL } from "../../constants/constants";

const Itinerarie = (props) => {
    const [itinerarieId, setItinerarieId] = useState(-1);
    const [name, setName] = useState('');
    const [participantCount, setParticipantCount] = useState(1);
    const [content, setContent] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [popupIsOpen, setPopupIsOpen] = useState(true);
    const [itinerariesOfUser, setItinerariesOfUser] = useState([]);
    const [userId, setUserId] = useState(0);

    const [detailItinerarie, setDetailItinerarie] = useState([]);

    useEffect(() => {

        fetchInitData();// sử dụng hàm lấy danh sách mới nhất

    }, []);

    // tạo hàm xử lí lấy danh sách
    const fetchInitData = async () => {

        // Retrieve the object from the storage
        const userInfoString = sessionStorage.getItem("userInfo");
        const userInfoConvertObject = JSON.parse(userInfoString);
        if (userInfoConvertObject !== null) {

            const idUser = userInfoConvertObject.id;
            setUserId(idUser);

            const itinerariesResponse = await fetch(`${SERVER_URL}/itineraries/listBySearch?user_id=${idUser}`);
            if (itinerariesResponse.ok) {
                const itinerariesData = await itinerariesResponse.json();
                console.log(itinerariesData);
                if (itinerariesData.length > 0) {
                    setItinerariesOfUser(itinerariesData);
                }
            } else {
                console.error('Error:', itinerariesResponse.status);
            }
        }

    };

    const closePopup = () => {
        setPopupIsOpen(false);
    };

    const handleCreate = async (e) => {
        e.preventDefault();

        if (!isInputValid()) {
            return;
        }


        try {
            // Lấy thông tin người dùng từ sessionStorage
            const userInfoString = sessionStorage.getItem("userInfo");
            const userInfoConvertObject = JSON.parse(userInfoString);
            if (userInfoConvertObject !== null) {
                const idUser = userInfoConvertObject.id;
                setUserId(idUser);

                const regObj = {
                    name: name,
                    content: content,
                    dateStart: dateStart,
                    dateEnd: dateEnd,
                    usersId: idUser
                };
                const response = await fetch(`${SERVER_URL}/itineraries/create`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(regObj)
                });

                // console.log(response);

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);

                    if (data.status == 1) {
                        toast.success(data.message);

                        setPopupIsOpen(false);

                        return;
                    } else {
                        toast.error(data.message);
                    }
                } else if (response.status == 400) {
                    // Xử lý khi có lỗi 400 (Bad Request)
                } else if (response.status == 401) {
                    // Xử lý khi có lỗi 401 (Unauthorized)
                } else {
                    // Xử lý khi có lỗi khác
                }
            }
        } catch (err) {
            toast.error('Failed: ' + err.message);
        }
    };

    const isInputValid = () => {
        if (!name) {
            toast.warning('Please enter name');
            return false;
        }
        return true;
    };

    const handleRemove = async (e, itineraryId) => {
        e.preventDefault();

        try {
            const response = await fetch(`${SERVER_URL}/itineraries/remove/${itineraryId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);

                if (data.status == 1) {
                    toast.success(data.message);

                    // fetchInitData();// sử dụng hàm lấy danh sách mới nhất

                    /*
                    let newArrayItinerariesOfUser = [];
                    for(let i = 0; i < itinerariesOfUser.length(); i++){
                        let item = itinerariesOfUser.getItem(i);
                        if (item.id !== itineraryId ){
                            newArrayItinerariesOfUser.push(item);//
                        }
                    }
                    setItinerariesOfUser(newArrayItinerariesOfUser);
                    */

                    const newArray = itinerariesOfUser.filter((item, i) => item.id !== itineraryId);// lọc danh sách không chứa id đã xóa
                    setItinerariesOfUser(newArray);

                } else {
                    toast.error(data.message);
                }
            } else {
                console.log('Deletion failed');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };


    const getDetailByItineraryId = async (e, itineraryId) => {
        try {
            const response = await fetch(`${SERVER_URL}/itineraries/detail/${itineraryId}`);
            if (response.ok) {
                const itinerarieData = await response.json();
                setDetailItinerarie(itinerarieData);

                setItinerarieId(itinerarieData.id);
                setName(itinerarieData.name); // Assign the value to name state variable
                setContent(itinerarieData.content); // Assign the value to content state variable
                setDateStart(itinerarieData.dateStart); // Assign the value to dateStart state variable
                setDateEnd(itinerarieData.dateEnd); // Assign the value to dateEnd state variable
            } else {
                console.log('Failed to fetch itinerary data');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };


    const handleEdit = async (e, itineraryId) => {
        e.preventDefault();

        try {
            const response = await fetch(`${SERVER_URL}/itineraries/edit/${itineraryId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name, // Tên kế hoạch mới
                    dateStart: dateStart, // Ngày bắt đầu mới
                    dateEnd: dateEnd, // Ngày kết thúc mới
                    content: content // Ghi chú mới
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);

                if (data.status == 1) {
                    toast.success(data.message);

                    return;
                } else {
                    toast.error(data.message);
                }
            } else {
                console.log('Update failed');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ height: '300px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            {/* <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Itinerarie</span></p> */}
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Kế hoạch</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section">

                <div className="container">
                    {/* <div className="col-sm-12 hotel-single ftco-animate mb-5 mt-4"> */}
                    <h2 className="mb-5">Lập kế hoạch</h2>
                    {/* </div> */}
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">

                                <div className="row">
                                    <div className="col-sm-1">
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Tạo</button>

                                        {/* modal */}
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLongTitle">Lập kế hoạch</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closePopup}>
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className={`modal-body ${popupIsOpen ? 'active' : ''}`}>
                                                        <form className="container">
                                                            <div className="mb-3 mt-4">
                                                                <label htmlFor="exampleInput" className="form-label">Tên kế hoạch</label>
                                                                <input value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Tên kế hoạch" />
                                                            </div>
                                                            <div className="mb-3 mt-4">
                                                                <label htmlFor="participantCount" className="form-label">
                                                                    Số lượng người tham gia
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    min="1"
                                                                    max="100"
                                                                    id="participantCount"
                                                                    value={participantCount}
                                                                    onChange={(e) => setParticipantCount(e.target.value)}
                                                                    className="form-control"
                                                                    placeholder="Số lượng người tham gia"
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="dateStart" className="form-label">Ngày bắt đầu:</label>
                                                                <input type="date" id="dateStart" className="form-control" value={dateStart} onChange={e => setDateStart(e.target.value)} required />
                                                            </div>
                                                            <div className="mb-3 mt-4">
                                                                <label htmlFor="dateEnd" className="form-label">Ngày kết thúc:</label>
                                                                <input type="date" id="dateEnd" className="form-control" value={dateEnd} onChange={e => setDateEnd(e.target.value)} required />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Ghi chú</label>
                                                                <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" placeholder="Ghi chú" />
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closePopup}>Close</button>
                                                                <button type="submit" className="btn btn-primary" onClick={(e) => { handleCreate(e); }}>Lưu</button>
                                                            </div>
                                                        </form>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>





                                    </div>
                                    <div className="col-sm-1">
                                        <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Sắp xếp">
                                            <Dropdown.Item href="#/action-1">Mới tới cũ</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Cũ tới mới</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                    <div className="col-sm-10">
                                        <div className="search-box" >
                                            <input type="text" className="form-control" placeholder="Tìm kiếm" />
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <table className="table table-striped table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Tên kế hoạch <i className="fa fa-sort"></i></th>
                                        <th>Ngày bắt đầu</th>
                                        <th>Ngày kết thúc <i className="fa fa-sort"></i></th>
                                        {/* <th>Ghi chú</th> */}
                                        <th>Hành động</th>
                                        <th>Chia sẻ</th>
                                    </tr>
                                </thead>





                                {sessionStorage.getItem('username') ? (
                                    <tbody>
                                        {itinerariesOfUser.map((itinerary, ii) => (
                                            <tr key={ii}>
                                                <td value={itinerary.id}>  {itinerary.id}</td>
                                                <td> {itinerary.name}</td>
                                                <td> {itinerary.dateStart}</td>
                                                <td>{itinerary.dateEnd}</td>
                                                {/* <td>{itinerary.content}</td> */}
                                                <td>
                                                    <Link to={`/itinerarieView?itinerarie_id=${itinerary.id}`} className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></Link>
                                                    <a
                                                        className="edit"
                                                        title="Edit"
                                                        data-toggle="modal"
                                                        data-target="#exampleModalEdit"
                                                        onClick={(e) => {

                                                            getDetailByItineraryId(e, itinerary.id);
                                                        }}
                                                    >
                                                        <i className="material-icons">&#xE254;</i>
                                                    </a>
                                                    {/* modal */}
                                                    <div className="modal fade" id="exampleModalEdit" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="exampleModalLongTitle">Cập nhật kế hoạch</h5>
                                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closePopup}>
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div className={`modal-body ${popupIsOpen ? 'active' : ''}`}>
                                                                    <form className="container">
                                                                        <div className="mb-3 mt-4">
                                                                            <label htmlFor="exampleInput" className="form-label">Tên kế hoạch</label>
                                                                            <input value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Tên kế hoạch" />
                                                                        </div>
                                                                        <div className="mb-3 mt-4">
                                                                            <label htmlFor="participantCount" className="form-label">
                                                                                Số lượng người tham gia
                                                                            </label>
                                                                            <input
                                                                                type="number"
                                                                                min="1"
                                                                                max="100"
                                                                                id="participantCount"
                                                                                value={participantCount}
                                                                                onChange={(e) => setParticipantCount(e.target.value)}
                                                                                className="form-control"
                                                                                placeholder="Số lượng người tham gia"
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="dateStart" className="form-label">Ngày bắt đầu:</label>
                                                                            <input type="date" id="dateStart" className="form-control" value={dateStart} onChange={e => setDateStart(e.target.value)} required />
                                                                        </div>
                                                                        <div className="mb-3 mt-4">
                                                                            <label htmlFor="dateEnd" className="form-label">Ngày kết thúc:</label>
                                                                            <input type="date" id="dateEnd" className="form-control" value={dateEnd} onChange={e => setDateEnd(e.target.value)} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Ghi chú</label>
                                                                            <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" placeholder="Ghi chú" />
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closePopup}>Đóng</button>
                                                                            <button type="submit" className="btn btn-primary" onClick={(e) => { handleEdit(e, itinerarieId); }}>Gửi</button>
                                                                        </div>
                                                                    </form>
                                                                 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <a
                                                        className="delete"
                                                        title="Xóa"
                                                        data-toggle="tooltip"
                                                        onClick={(e) => handleRemove(e, itinerary.id)}
                                                    >
                                                        <i className="material-icons">&#xE872;</i>
                                                    </a>


                                                </td>
                                                <td>
                                                    <select>
                                                        <option value="option1">Option 1</option>
                                                        <option value="option2">Option 2</option>
                                                        <option value="option3">Option 3</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                ) :


                                    (
                                        <p>Hãy tạo kế hoạch</p>

                                    )}



                            </table>
                            <div className="clearfix">
                                <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                                <ul className="pagination">
                                    <li className="page-item disabled"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                                    <li className="page-item"><a href="#" className="page-link">1</a></li>
                                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                                    <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                    <li className="page-item"><a href="#" className="page-link">4</a></li>
                                    <li className="page-item"><a href="#" className="page-link">5</a></li>
                                    <li className="page-item"><a href="#" className="page-link"><i className="fa fa-angle-double-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >



        </div >
    )
}

export default Itinerarie;