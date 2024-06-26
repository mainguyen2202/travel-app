import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import ReactPaginate from 'react-paginate';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { ACCESS_TOKEN } from "../../constants/constants";
import { getCurrentUser } from "../../services/authServices";
import { itinerariesDetail, itinerariesRemove, itineraryCreate, itineraryEdit, listBySearchItineraries } from "../../services/itinerarieServices";
import { listShareItinerariesUserId, shareItinerariesUserId } from "../../services/shareItinerariesServices";
import { checkUserName } from "../../services/userServices";


const Itinerarie = (props) => {
    const [itinerarieId, setItinerarieId] = useState(-1);
    const [name, setName] = useState('');
    const [participantCount, setParticipantCount] = useState(1);
    const [content, setContent] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [popupIsOpen, setPopupIsOpen] = useState(false);
    const [itinerariesOfUser, setItinerariesOfUser] = useState([]);
    const [userId, setUserId] = useState(0);
    const [email, emailchange] = useState("");
    const [username, usernamechange] = useState("");
    const [detailItinerarie, setDetailItinerarie] = useState([]);
    const [itinerariesShareOfUser, setItinerariesShareOfUser] = useState([]);
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        const userInfo = getCurrentUser();
        if (userInfo && userInfo.USER_ID !== userId) {
            setUserId(userInfo.USER_ID);
            console.log("userId", userInfo.USER_ID);
        }
    }

    useEffect(() => {

        fetchInitData();// sử dụng hàm lấy danh sách mới nhất
        fetchInitDataShare();

    }, []);

    // tạo hàm xử lí lấy danh sách
    const fetchInitData = async () => {

        if (token) {
            const response = await listBySearchItineraries(userId);
            if (response.status === 200) {
                const data = await response.data;
                console.log(data);
                if (data.length > 0) {
                    setItinerariesOfUser(data);
                }
            } else {
                console.error('Error:', response);
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
            if (token) {
                const response = await itineraryCreate(name, participantCount, content, dateStart, dateEnd, userId);
                if (response.status === 200) {
                    const data = await response.data;
                    toast.success(data.message);
                    // console.log(data);
                    if (data.status === 1) {
                        toast.success(data.message);

                        // Cập nhật danh sách itineraries bằng cách thêm itinerary mới
                        // setItinerariesOfUser([...itinerariesOfUser, data.data]);
                          // Add data-dismiss="modal" to the "Lưu" button
                    const saveButton = document.querySelector('#exampleModal .btn-primary:last-child');
                    saveButton.setAttribute('data-dismiss', 'modal');
                     // Refresh the page
                     window.location.reload();
                       
                        return;
                    }

                    else {
                        toast.error(data.message);
                    }
                } else if (response.status === 400) {
                    // Xử lý khi có lỗi 400 (Bad Request)
                } else if (response.status === 401) {
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
        // Validate content
        if (!content || content.trim() === '') {
            toast.warning('Vui lòng nhập nội dung lịch trình.');
            return;
        }

        // Validate dateStart and dateEnd
        if (!dateStart || !dateEnd || dateStart > dateEnd) {
            toast.warning('Ngày bắt đầu phải trước ngày kết thúc.');
            return;
        }
        return true;
    };

    const handleRemove = async (e, itineraryId) => {
        e.preventDefault();

        try {
            const result = await Swal.fire({
                title: 'Bạn có chắc không?',
                text: "Bạn sẽ không thể hoàn nguyên điều này!",
                icon: 'cảnh báo',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Đồng ý'
            });
            const response = await itinerariesRemove(itineraryId);
            if (response.status === 200) {
                const data = await response.data;
                console.log(data);

                if (data.status === 1) {
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
            const response = await itinerariesDetail(itineraryId);
            if (response.status === 200) {
                const data = await response.data;
                setDetailItinerarie(data);
                setItinerarieId(data.id);
                setName(data.name); // Assign the value to name state variable
                setParticipantCount(data.participantCount); // Assign the value to name state variable
                setContent(data.content); // Assign the value to content state variable
                setDateStart(data.dateStart); // Assign the value to dateStart state variable
                setDateEnd(data.dateEnd); // Assign the value to dateEnd state variable
            } else {
                console.log('Failed to fetch itinerary data');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };


    const handleEdit = async (e, itineraryId) => {
        e.preventDefault();
        console.log(" handleEdit itineraryId itineraryId: participantCount" + participantCount);

        try {

            const response = await itineraryEdit(name, participantCount, content, dateStart, dateEnd, itineraryId);
            if (response.status === 200) {
                const data = await response.data;
                console.log(data);

                if (data.status === 1) {
                    toast.success(data.message);

                    // Cập nhật danh sách itineraries
                    const updatedItineraries = itinerariesOfUser.map(itinerary => {
                        if (itinerary.id === itineraryId) {
                            return {
                                ...itinerary,
                                name,
                                participantCount,
                                content,
                                dateStart,
                                dateEnd
                            };
                        }
                        return itinerary;
                    });
                    setItinerariesOfUser(updatedItineraries);
                    const saveButton = document.querySelector('#exampleModal .btn-primary:last-child');
                    saveButton.setAttribute('data-dismiss', 'modal');
                     // Refresh the page
                     window.location.reload();
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


    const handleShare = async (e, itineraryId) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }

        try {
            const responseCheck = await checkUserName(username);
            if (responseCheck.status === 200) {
                const dataCheck = await responseCheck.data;
                const useridShare = dataCheck.id;

                const response = await shareItinerariesUserId(useridShare, itineraryId);
                if (response.status === 200) {
                    const dataShere = response.data;
                    console.log(dataShere);

                    if (dataShere.status === 1) {
                        toast.success(dataShere.message);
                    } else {
                        toast.error(dataShere.message);
                    }
                }
            }
        } catch (err) {
            console.error('Error sharing itinerary:', err);
            toast.error('Failed to share itinerary.');
        }
    };

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }

        return result;
    };
    // End Share

    //STRART TAB
    const [key, setKey] = useState('home');

    //END TAB

    // tạo hàm xử lí lấy danh sách
    const fetchInitDataShare = async () => {

        if (token) {
            const response = await listShareItinerariesUserId(userId);
            if (response.status === 200) {
                const data = await response.data;
                console.log(data);
                if (data.length >= 0) {

                    let dataItem = data.map(item => ({
                        id: item.itineraries.id,
                        name: item.itineraries.name,
                        participantCount: item.itineraries.participantCount,
                        dateStart: item.itineraries.dateStart,
                        dateEnd: item.itineraries.dateEnd,
                        content: item.itineraries.content,
                        usersName: item.itineraries.users.name



                    }));
                    setItinerariesShareOfUser(dataItem);
                }
            } else {
                console.error('Error:', response);
            }
        }

    };

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // START PAGE

    const [currentPage, setCurrentPage] = useState(0);
    const articlesPerPage = 6; // số lượng likes hiển thị trên mỗi trang

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };
    // END PAGE

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
                    <div className="col-sm-12 hotel-single ftco-animate mb-5 mt-4">
                        {/* <h1 className="mb-5">Lập kế hoạch</h1> */}
                        <div className="row" style={{ marginBottom: '2%' }}>
                            <div className="col-sm-1">
                                {token &&(

                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Tạo</button>
                                )

                                }

                                {/* modal tạo */}
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
                                                        <input
                                                            type="date"
                                                            id="dateStart"
                                                            className="form-control"
                                                            value={dateStart}
                                                            onChange={(e) => setDateStart(e.target.value)}
                                                            min={getCurrentDate()}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="dateStart" className="form-label">Ngày kết thúc:</label>
                                                        <input
                                                            type="date"
                                                            id="dateStart"
                                                            className="form-control"
                                                            value={dateEnd}
                                                            onChange={(e) => setDateEnd(e.target.value)}
                                                            min={getCurrentDate()}
                                                            required
                                                        />
                                                    </div>
                                                   
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Ghi chú</label>
                                                        <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" placeholder="Ghi chú" />
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={closePopup}>Đóng</button>
                                                        <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={(e) => { handleCreate(e); }}>Lưu</button>
                                                       
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* modal edit */}
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
                                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={closePopup}>Đóng</button>
                                                        <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={(e) => { handleEdit(e, itinerarieId); }}>Cập nhật</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* modal exampleModalShare */}
                                <div className="modal fade" id="exampleModalShare" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLongTitle">Chia sẻ kế hoạch</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closePopup}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className={`modal-body ${popupIsOpen ? 'active' : ''}`}>
                                                <form className="container"  >
                                                    {/* <div className="mb-3 mt-4">
                                                        <label htmlFor="exampleInput" className="form-label">Email</label>
                                                            <input value={email} onChange={e => emailchange(e.target.value)} className="form-control" placeholder="Email"></input>
                                                    </div> */}
                                                    <div className="mb-3 mt-4">
                                                        <label htmlFor="exampleInput" className="form-label">Tên đăng nhập</label>
                                                        <input value={username}

                                                            onChange={e => usernamechange(e.target.value)} className="form-control" placeholder="Tên đăng nhập" ></input>
                                                    </div>




                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={closePopup}>Đóng</button>
                                                        <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={(e) => handleShare(e, itinerarieId)} >Gửi</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>





                            </div>
                            {/* <div className="col-sm-1">
                                <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Sắp xếp">
                                    <Dropdown.Item href="#/action-1">Mới tới cũ</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Cũ tới mới</Dropdown.Item>
                                </DropdownButton>
                            </div> */}
                            {/* <div className="col-sm-10">
                                <div className="search-box" >
                                    <input type="text" className="form-control" placeholder="Tìm kiếm" />
                                </div>
                            </div> */}
                        </div>
                        {/* Start tab */}
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Kế hoạch cá nhân">
                                <div>
                                    {!token ? (
                                        <p>Vui lòng đăng nhập để xem các kế hoạch cá nhân</p>
                                    ) : (
                                        <div>
                                            <div className="row">
                                                {itinerariesOfUser.length > 0 ? (
                                                    itinerariesOfUser
                                                        .slice(currentPage * articlesPerPage, (currentPage + 1) * articlesPerPage)
                                                        .map((itinerary, i) => (
                                                            <div className="col-sm col-md-6 col-lg-3 ftco-animate" key={i}>
                                                                <div className="destination" style={{ boxShadow: '0px 2px 10px #d9d9d9' }}>
                                                                    <div className="card">
                                                                        <div className="card-body">
                                                                            <div className="d-flex">
                                                                                <div className="one">
                                                                                    <h3 className="truncate-3-lines">
                                                                                        <Link
                                                                                            to={`/itinerarieView?itinerarie_id=${itinerary.id}`}
                                                                                            className="view"
                                                                                            title="View"
                                                                                            data-toggle="tooltip"
                                                                                        >
                                                                                            {itinerary.name}
                                                                                        </Link>
                                                                                    </h3>
                                                                                    <hr />
                                                                                    <p>{itinerary.dateStart + ' -> ' + itinerary.dateEnd}</p>
                                                                                    <p>{'Số lượng: ' + itinerary.participantCount + ' người'}</p>
                                                                                    <p className="truncate-3-lines">{itinerary.content + '.'}</p>
                                                                                </div>
                                                                            </div>
                                                                            <hr />
                                                                            <div>
                                                                                <div className="bottom-area d-flex">
                                                                                    <a
                                                                                        className="edit"
                                                                                        title="Chỉnh sửa"
                                                                                        data-toggle="modal"
                                                                                        data-target="#exampleModalEdit"
                                                                                        onClick={(e) => getDetailByItineraryId(e, itinerary.id)}
                                                                                    >
                                                                                        <i className="material-icons">&#xE254;</i>
                                                                                    </a>
                                                                                    <a
                                                                                        className="delete"
                                                                                        title="Xóa"
                                                                                        data-toggle="tooltip"
                                                                                        onClick={(e) => handleRemove(e, itinerary.id)}
                                                                                    >
                                                                                        <i className="material-icons">&#xE872;</i>
                                                                                    </a>
                                                                                    <a
                                                                                        className="share"
                                                                                        title="Chia sẻ"
                                                                                        data-toggle="modal"
                                                                                        data-target="#exampleModalShare"
                                                                                        onClick={(e) => getDetailByItineraryId(e, itinerary.id)}
                                                                                    >
                                                                                        <i className="material-icons">&#xE80D;</i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                ) : (
                                                    <div className="col-12 text-center">
                                                        <h3>Hãy tạo kế hoạch</h3>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="row mt-5">
                                                <div className="col text-center">
                                                    <nav aria-label="Page navigation">
                                                        <ul className="pagination justify-content-center">
                                                            {itinerariesOfUser.length > articlesPerPage && (
                                                                <ReactPaginate
                                                                    breakLabel="..."
                                                                    nextLabel={<span>&gt;</span>}
                                                                    onPageChange={handlePageClick}
                                                                    pageRangeDisplayed={5}
                                                                    pageCount={Math.ceil(itinerariesOfUser.length / articlesPerPage)}
                                                                    previousLabel={<span>&lt;</span>}
                                                                    renderOnZeroPageCount={null}
                                                                    containerClassName="pagination"
                                                                    activeClassName="active"
                                                                    pageClassName="page-item"
                                                                    pageLinkClassName="page-link"
                                                                    previousClassName="page-item"
                                                                    previousLinkClassName="page-link"
                                                                    nextClassName="page-item"
                                                                    nextLinkClassName="page-link"
                                                                />
                                                            )}
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Kế hoạch được chia sẻ">
                                {!token ? (
                                    <p>Vui lòng đăng nhập để xem các kế hoạch được chia sẻ</p>
                                ) : (
                                    <div>
                                        <div className="row">
                                            {itinerariesShareOfUser.length > 0 ? (
                                                itinerariesShareOfUser.slice(currentPage * articlesPerPage, (currentPage + 1) * articlesPerPage).map((itinerary, i) => (

                                                    <div className="col-sm col-md-6 col-lg-3 ftco-animate" key={i}>
                                                        <div className="destination" style={{ boxShadow: '0px 2px 10px #d9d9d9' }}>
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <div className="d-flex">
                                                                        <div className="one">
                                                                            <h3 className="truncate-3-lines">
                                                                                <Link
                                                                                    to={`/itinerarieView?itinerarie_id=${itinerary.id}`}
                                                                                    className="view"
                                                                                    title="View"
                                                                                    data-toggle="tooltip"
                                                                                >
                                                                                    {itinerary.name}
                                                                                </Link>
                                                                                <hr />
                                                                            </h3>
                                                                            <p>{itinerary.dateStart + ' -> ' + itinerary.dateEnd}</p>
                                                                            <p>{'Số lượng: ' + itinerary.participantCount + 'người'}</p>
                                                                            <p>Người chia sẻ: <b>{itinerary.usersName}</b></p>
                                                                            <p className="truncate-3-lines">{itinerary.content + '.'}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="col-12 text-center">
                                                    <h3>Chưa được chia sẻ</h3>
                                                </div>
                                            )}
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col text-center">
                                                <nav aria-label="Page navigation">
                                                    <ul className="pagination justify-content-center">
                                                        {itinerariesOfUser.length > articlesPerPage && (
                                                            <ReactPaginate
                                                                breakLabel="..."
                                                                nextLabel={<span>&gt;</span>}
                                                                onPageChange={handlePageClick}
                                                                pageRangeDisplayed={5}
                                                                pageCount={Math.ceil(itinerariesOfUser.length / articlesPerPage)}
                                                                previousLabel={<span>&lt;</span>}
                                                                renderOnZeroPageCount={null}
                                                                containerClassName="pagination"
                                                                activeClassName="active"
                                                                pageClassName="page-item"
                                                                pageLinkClassName="page-link"
                                                                previousClassName="page-item"
                                                                previousLinkClassName="page-link"
                                                                nextClassName="page-item"
                                                                nextLinkClassName="page-link"
                                                            />
                                                        )}
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>


                                )}
                            </Tab>
                        </Tabs>






                    </div>

                </div>
            </section >



        </div >
    )
}

export default Itinerarie;