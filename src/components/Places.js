import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { toast, ToastContainer, Zoom } from 'react-toastify';

import { Fragment } from "react";
import {
    GoogleMap,
    InfoWindowF,
    MarkerF,
    useJsApiLoader,
} from "@react-google-maps/api";

const Places = () => {
    const [topics, setTopics] = useState([]);
    const [subTopics, setSubTopics] = useState([]);
    const [showNatureSelect, setShowNatureSelect] = useState(false);// giá trị mặc đinh là true hoặc false

    const [places, setPlaces] = useState([]);
    const [articles, setArticles] = useState([]);

    const [placesId, setPlacesId] = useState(0); // giá trị mặc định
    const [topicsId, setTopicsId] = useState(0); // giá trị mặc định
    const [subTopicsId, setSubTopicsId] = useState(0); // giá trị mặc định

    const [itinerariesOfUser, setItinerariesOfUser] = useState([]); // giá trị mặc định
    const [userId, setUserId] = useState(0);


    // START: googlemap
    const [markers, setMarkers] = useState([]);// mảng dữ liệu
    // const myLocaction = {
    //     lat: 10.744890604860146,
    //     lng: 106.72973747516444
    // };
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'mai_AIzaSyBteHKcrWBm8HhuQwy0wxYmFbKDJNcAYU8',
        libraries: ['places'],
    });
    const [idActiveMarker, setIdActiveMarker] = useState(null);// tham số lưu thông tin key của vị trí đang click chọn

    const handleActiveMarker = (idMarker) => {
        console.log("id", idMarker, idActiveMarker);
        if (idMarker === idActiveMarker) {
            return;
        }
        setIdActiveMarker(idMarker);
    };


    const [userLocation, setUserLocation] = useState(null);

    // define the function that finds the users geolocation
    const getUserLocation = () => {
        // if geolocation is supported by the users browser
        if (navigator.geolocation) {
            // get the current users location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // save the geolocation coordinates in two variables
                    const { latitude, longitude } = position.coords;
                    // update the value of userlocation variable
                    setUserLocation({ lat: latitude, lng: longitude });
                },
                // if there was an error getting the users location
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        }
        // if geolocation is not supported by the users browser
        else {
            console.error('Geolocation is not supported by this browser.');
        }
    };
    if (!isLoaded) {
        // tìm kiếm vị trí của tôi
        getUserLocation();
        return
    }
    // END: googlemap

    // hàm khởi tạo ban đầu
    useEffect(() => {

        // tạo hàm xử lí lấy danh sách
        const fetchInitData = async () => {

            const placesResponse = await fetch('http://localhost:8080/places/list');
            if (placesResponse.ok) {
                const placesData = await placesResponse.json();
                console.log(placesData);
                if (placesData.length > 0) {
                    let placeId = placesData[0].id;
                    setPlacesId(placeId);

                    let selectedSubTopicId = 0;
                    getArticlesBySearch(placeId, selectedSubTopicId);
                }
                setPlaces(placesData);
            } else {
                console.error('Error:', placesResponse.status);
            }

            const topicsResponse = await fetch('http://localhost:8080/topics/list');
            if (topicsResponse.ok) {
                const topicsData = await topicsResponse.json();
                console.log(topicsData);

                let selectedDefaultTopicId = 0;
                const filteredTopics = topicsData.filter(item => item.subTopicsId === selectedDefaultTopicId);
                setTopics(filteredTopics);

                console.log(filteredTopics);
                if (filteredTopics.length > 0) {
                    let selectedTopicId = filteredTopics[0].id;
                    setTopicsId(selectedTopicId);

                    const filteredSubTopics = topicsData.filter(item => item.subTopicsId === selectedTopicId);
                    if (filteredSubTopics.length > 0) {
                        setShowNatureSelect(true);
                        setSubTopics(filteredSubTopics);
                    } else {
                        setShowNatureSelect(false);
                    }
                }
            } else {
                console.error('Error:', topicsResponse.status);
            }

            // Retrieve the object from the storage
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

        fetchInitData();// sử dụng hàm lấy danh sách
    }, []);


    const handleSelectChangePlaces = (event) => {
        const selectedPlacesId = parseInt(event.target.value);
        setPlacesId(selectedPlacesId);
        console.log("click place", selectedPlacesId);// giá trị placesId vẫn sai khi thoát func thì mới đúng

        let selectedSubTopicId = 0;
        getArticlesBySearch(selectedPlacesId, selectedSubTopicId); // gọi api
    };

    const handleSelectChangeTopics = (event) => {
        console.log("placeid = when click topic", placesId);

        const selectedTopicId = parseInt(event.target.value);
        console.log("click topic", selectedTopicId);

        fetch(`http://localhost:8080/topics/list/${selectedTopicId}`)
            .then(response => response.json())
            .then(data => {
                const filteredSubTopics = data.filter(item => item.subTopicsId === selectedTopicId);
                if (filteredSubTopics.length > 0) {
                    setShowNatureSelect(true);
                    setSubTopics(filteredSubTopics);
                } else {
                    setShowNatureSelect(false);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleSelectChangeSubTopics = (event) => {
        console.log("placeid = when click subtopic", placesId);
        const selectedSubTopicId = parseInt(event.target.value);
        setSubTopicsId(selectedSubTopicId);// giá trị mặc định của SubTopicId

        console.log("click subtopic", selectedSubTopicId);

        getArticlesBySearch(placesId, selectedSubTopicId); // gọi api
    };

    // phương thức bất động bồ , await gọi để sử dụng đồng bộ
    async function getArticlesBySearch(placeId, topicId) {
        // placeId = 0;// TODO mainguyen debug
        // topicId = 0;// TODO mainguyen debug
        await fetch(`http://localhost:8080/articles/list?places_id=${placeId}&topics_id=${topicId}`)
            .then(response => response.json())
            .then(data => {
                setArticles(data);// làm việc 
                console.log("Articles", data, articles);
                let ltsMarkers = data.map(item => ({
                    id: item.id,
                    name: item.places.name,
                    position: {
                        lat: parseFloat(item.places.coordinates.latitude),
                        lng: parseFloat(item.places.coordinates.longitude)
                    }
                }));
                setMarkers(ltsMarkers);
                console.log("Markers", ltsMarkers, markers);
            })
            .catch(error => {
                console.error(error);
                return [];
            });
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

                if (data.status === 1) {
                    toast.success(data.message);
                } else {
                    toast.error(data.message);
                }
            } else if (response.status === 400) {
                // Xử lý khi có lỗi 400 (Bad Request)
            } else if (response.status === 401) {
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
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Places</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Destinations</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section">
                <div className="container">
                    <div className="row">


                        <div className="col-lg-3 sidebar order-md-first ftco-animate ">
                            <div className="sidebar-wrap ftco-animate">
                                <h3 className="heading mb-4">Điểm đến</h3>
                                <form action="#" className="card1">
                                    <div className="fields">
                                        {/* <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Destination, City" />
                                        </div> */}
                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select
                                                    name="places"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Keyword search"
                                                    onChange={handleSelectChangePlaces}
                                                >
                                                    {places.map((place, i) => (
                                                        <option value={place.id} key={i}>
                                                            {place.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </form>


                                <div>
                                    <h3 className="heading mb-4">Trải nghiệm</h3>
                                    <form action="#" className="card1">
                                        <div className="fields">
                                            <div className="form-group">
                                                <div className="select-wrap one-third">
                                                    <div className="icon">
                                                        <span className="ion-ios-arrow-down"></span>
                                                    </div>
                                                    <select
                                                        name="topics"
                                                        id=""
                                                        className="form-control"
                                                        placeholder="Keyword search"
                                                        onChange={handleSelectChangeTopics}
                                                    >
                                                        {topics.map((topic, i) => (
                                                            <option value={topic.id} key={i}>
                                                                {topic.title}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </form>


                                    {showNatureSelect && (
                                        <div>
                                            <form action="#" className="card1">
                                                <div className="fields">
                                                    <div className="form-group">
                                                        <div className="select-wrap one-third">
                                                            <div className="icon">
                                                                <span className="ion-ios-arrow-down"></span>
                                                            </div>
                                                            <select
                                                                name="topics"
                                                                id=""
                                                                className="form-control"
                                                                placeholder="Keyword search"
                                                                onChange={handleSelectChangeSubTopics}
                                                            >
                                                                {subTopics.map((topic, i) => (
                                                                    <option value={topic.id} key={i}>
                                                                        {topic.title}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </div>





                                <h3 className="heading mb-4">Lựa chọn</h3>
                                <form action="#" className="card1">
                                    <div className="fields">

                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control" placeholder="Keyword search">
                                                    <option value="">Nổi bật</option>
                                                    <option value="">Yêu thích</option>
                                                    <option value="">Mới nhất đến cũ nhất</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </form>

                            </div>


                        </div>

                        <div className="col-lg-9" >

                            <div className="reservation-form" >
                                {/* <div className="container"> */}
                                <div className="row">
                                    {/* <div className="col-lg-12"> */}

                                    <div id="map">


                                        <Fragment>
                                            <div className="container">
                                                <h1 className="text-center">Vite + React | Google Map Markers</h1>
                                                <div style={{ height: "90vh", width: "100%" }}>
                                                    {isLoaded ? (
                                                        <GoogleMap
                                                            center={userLocation}
                                                            zoom={15}
                                                            onClick={() => setIdActiveMarker(null)}
                                                            mapContainerStyle={{ width: "100%", height: "90vh" }}
                                                        >
                                                            {
                                                                userLocation !== null ? (
                                                                    <MarkerF
                                                                        key={0}
                                                                        position={userLocation}
                                                                        icon={{
                                                                            url: "https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
                                                                            scaledSize: { width: 50, height: 50 }
                                                                        }}
                                                                    >
                                                                    </MarkerF>
                                                                ) : null
                                                            }

                                                            {markers.map((item) => (
                                                                <MarkerF
                                                                    key={item.id}
                                                                    position={item.position}
                                                                    onClick={() => handleActiveMarker(item.id)}
                                                                // icon={{
                                                                //   url:"https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
                                                                //   scaledSize: { width: 50, height: 50 }
                                                                // }}
                                                                >
                                                                    {
                                                                        idActiveMarker === item.id ? (
                                                                            <InfoWindowF
                                                                                onCloseClick={() => setIdActiveMarker(null)}
                                                                            >
                                                                                <div>
                                                                                    <p>{item.name}</p>
                                                                                </div>
                                                                            </InfoWindowF>
                                                                        ) : null
                                                                    }
                                                                </MarkerF>
                                                            ))}
                                                        </GoogleMap>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </Fragment>





                                    </div>
                                    {/* </div> */}

                                </div>
                                {/* </div> */}
                            </div>

                            <div className="row">
                                {articles.map((article, i) => (
                                    <div className="col-sm col-md-6 col-lg-4 ftco-animate" key={i}>
                                        <div className="destination" style={{ boxShadow: '0px 2px 10px #d9d9d9' }}>
                                            <div className="card">
                                                <Link to={`/detail?article_id=${article.id}`}>
                                                    <img src="./image1/home/hoChiMinh.jpg" className="card-img-top" alt="..." />
                                                </Link>
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="one">
                                                            <Link to={`/detail?article_id=${article.id}`}>{article.id}</Link>
                                                            <h3><a href="">{article.name}</a></h3>
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
                                                    <p>{article.description}</p>
                                                    <hr />
                                                    <div>
                                                        <div className="bottom-area d-flex">
                                                            <a href="/Like" className="like" title="Like" data-toggle="tooltip">
                                                                <span className="s18_s"><i className="material-icons">favorite_border</i></span>
                                                            </a>
                                                            {sessionStorage.getItem('username') ? (
                                                                <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Kế hoạch">
                                                                    {itinerariesOfUser.map((itinerary, ii) => (
                                                                        <Dropdown.Item

                                                                            value={itinerary.id}
                                                                            key={ii}
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                handleCreate(e, article.id, itinerary.id);
                                                                            }}
                                                                        >
                                                                            {itinerary.name}
                                                                        </Dropdown.Item>
                                                                    ))}
                                                                </DropdownButton>
                                                            ) : (
                                                                <div>
                                                                    <a href="/itinerarie" className="btn btn-primary btn-lg btn-block btn-kehoach">Kế hoạch</a>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                    </div >
                </div >
            </section >

        </div >
    )
}

export default Places;