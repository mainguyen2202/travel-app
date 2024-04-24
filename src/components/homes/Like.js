import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Margin } from "@mui/icons-material";
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Dropdown, DropdownButton } from "react-bootstrap";


const Like = (props) => {
    const [like, setLike] = useState([]);
    const [userId, setUserId] = useState(0);
    const [itinerariesOfUser, setItinerariesOfUser] = useState([]); // giá trị mặc định
    

    useEffect(() => {
        fetchInitDataItineraries();
        fetchInitDataLike();
    }, []);
        // tạo hàm xử lí lấy danh sách
        const fetchInitDataLike = async () => {
            // Retrieve the object from the storage
            const userInfoString = sessionStorage.getItem("userInfo");
            const userInfoConvertObject = JSON.parse(userInfoString);
            if (userInfoConvertObject !== null) {
    
                const idUser = userInfoConvertObject.id;
                setUserId(idUser);
    
                const response = await fetch(`http://127.0.0.1:8080/likes/listBySearch?users_id=${idUser}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    if (data.length > 0) {
                        setLike(data);
                    }
                } else {
                    console.error('Error:', response.status);
                }
            }
    
        };
         // tạo hàm xử lí lấy danh sách
       const fetchInitDataItineraries = async () => {
        const userInfoString = sessionStorage.getItem("userInfo");
        const userInfoConvertObject = JSON.parse(userInfoString);
        if (userInfoConvertObject !== null) {

            const idUser = userInfoConvertObject.id;
            setUserId(idUser);

            const itinerariesResponse = await fetch(`http://localhost:8080/itineraries/listBySearch?user_id=${idUser}`);
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
    const handleCreate = async (e, idArticles, idItineraries) => {
        e.preventDefault();

        try {
            const regObj = {
                articles: {
                    id: idArticles
                },
                itineraries: {
                    id: idItineraries
                },
                status: 1
            };
            console.log(regObj);

            const response = await fetch("http://127.0.0.1:8080/itineraryArticles/create", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(regObj)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);

                if (data.status == 1) {
                    toast.success(data.message);
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
        } catch (err) {
            toast.error('Failed: ' + err.message);
        }
    };


    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            {/* <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Like</span></p> */}
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Yêu thích</h1>
                        </div>
                    </div>
                </div>
            </div>
         
            <section className="ftco-section">
                <div className="container">
                    <div className="row">



                        <div className="col-lg-12">

                            <div className="reservation-form" >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">

                                            <div id="map">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px" frameBorder="0"
                                                    allowFullScreen=""
                                                //  style ={{border:0}}
                                                >
                                                </iframe>
                                            </div>
                                        </div>

                        </div>
                    </div>
                </div>




                <div className="container">

                    <div className="row">
                        {sessionStorage.getItem('username') ? (

                            <div className="row">
                                {like.map((likes, i) => (
                                    <div className="col-sm col-md-6 col-lg-4 ftco-animate" key={i}>
                                        <div className="destination" style={{ boxShadow: '0px 2px 10px #d9d9d9' }}>
                                            <div className="card">
                                                <Link to={`/detail?article_id=${likes.articles.id}`}>
                                                    <img src={likes.articles.image} className="card-img-top" alt="..." />
                                                </Link>
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="one">
                                                            {/* <Link to={`/detail?article_id=${likes.articles.id}`}>{likes.articles.id}</Link> */}
                                                            <h3><a href="">{likes.articles.name}</a></h3>
                                                            <p className="rate">
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star-o"></i>
                                                            </p>
                                                        </div>
                                                        <div className="two"></div>
                                                    </div>
                                                    <p>{likes.articles.content}</p>
                                                    <hr />
                                                    <div>
                                                        <div className="bottom-area d-flex">

                                                            <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Kế hoạch">
                                                                {itinerariesOfUser.map((itinerary, ii) => (
                                                                    <Dropdown.Item

                                                                        value={itinerary.id}
                                                                        key={ii}
                                                                        onClick={(e) => {
                                                                            handleCreate(e, likes.articles.id, itinerary.id);
                                                                        }}
                                                                    >
                                                                        {itinerary.name}
                                                                    </Dropdown.Item>
                                                                ))}
                                                            </DropdownButton>

                                                        </div>
                                                    </div>
                                                                     
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>
                                <p>Đăng nhập để thấy địa điểm yêu thích</p>
                            </div>
                        )}




                    </div>
                </div>


                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div>
    )
}

export default Like;