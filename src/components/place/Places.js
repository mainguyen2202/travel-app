import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SERVER_URL } from "../../constants/constants";

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

    // START: Get a specific query parameter
    const [searchParams, setSearchParams] = useSearchParams();
    const placeIdSearch = searchParams.get('place_id') ? parseInt(searchParams.get('place_id')) : 0;
    const topicIdSearch = searchParams.get('topic_id') ? parseInt(searchParams.get('topic_id')) : 0;
    const tuKhoaSearch = searchParams.get('keyword') ? searchParams.get('keyword') : '';
    // END: Get a specific query parameter

    // hàm khởi tạo ban đầu
    // useEffect(() => {
    //     console.log("key", process.env.REACT_APP_GOOGLE_MAPS_KEY);
    //     fetchInitData();// sử dụng hàm lấy danh sách
    //     fetchInitDataLike();
    //     fetchInitDataDescDate();

    //     timkiem();

    // }, []);

    useEffect(() => {
        console.log("key", process.env.REACT_APP_GOOGLE_MAPS_KEY);
        fetchData();
    }, []);


    const fetchData = async () => {

        await getListLike4ArticlesByUserId();

        if (placeIdSearch !== 0 && placeIdSearch !== null) {
            await fetchInitDataPlaces();

            setPlacesId(placeIdSearch);
            await getArticlesBySearch(placeIdSearch, subTopicsId);

            await fetchInitDataTopics();

            await fetchInitDataItineraries();
        } else if (topicIdSearch !== 0 && topicIdSearch !== null) {
            await fetchInitDataPlaces();

            await fetchInitDataTopics();
            setTopicsId(topicIdSearch);
            await getSubTopicsByTopicId(topicIdSearch);

            await fetchInitDataItineraries();
        } else if (tuKhoaSearch !== '' && tuKhoaSearch !== null) {
            await fetchInitDataPlaces();

            // await getArticlesBySearch(placesId, subTopicsId);
            await timkiem();

            await fetchInitDataTopics();

            await fetchInitDataItineraries();

        } else {
            await fetchInitDataPlaces();

            await getArticlesBySearch(placesId, subTopicsId);

            await fetchInitDataTopics();

            await fetchInitDataItineraries();
        }
        // await fetchInitDataLike();
        // await fetchInitDataDescDate();
    };


    const timkiem = async () => {
        if (searchParams.get("keyword") !== null) {
            let tuKhoa = searchParams.get("keyword");
            //có từ khóa tìm kiếm
            console.log("maiaiaiaSearch Keyword ", tuKhoa.trim());
            const response = await fetch(`${SERVER_URL}/articles/listSearchKeyWord?name=${tuKhoa.trim()}`)
            if (response.ok) {
                const data = await response.json();
                console.log("timkiem", data);
                if (data.length > 0) {
                    setArticles(data);// làm việc 
                }
            } else {
                console.error('Error:', response.status);
            }
        }

    }


    // tạo hàm xử lí lấy danh sách
    const fetchInitDataPlaces = async () => {

        const placesResponse = await fetch('${SERVER_URL}/places/list');
        if (placesResponse.ok) {
            const placesData = await placesResponse.json();
            console.log(placesData);
            if (placesData.length > 0) {
                let tmpPlaceId = placesData[0].id;
                // setPlacesId(tmpPlaceId);
            }
            setPlaces(placesData);
        } else {
            console.error('Error:', placesResponse.status);
        }
    };

    const fetchInitDataTopics = async () => {
        const topicsResponse = await fetch('${SERVER_URL}/topics/list');
        if (topicsResponse.ok) {
            const topicsData = await topicsResponse.json();
            console.log(topicsData);

            const filteredTopics = topicsData.filter(item => item.subTopicsId == subTopicsId);
            setTopics(filteredTopics);

            console.log(filteredTopics);
            if (filteredTopics.length > 0) {
                let tmpTopicId = filteredTopics[0].id;
                setTopicsId(tmpTopicId);

                const filteredSubTopics = topicsData.filter(item => item.subTopicsId == tmpTopicId);
                if (filteredSubTopics.length > 0) {
                    setShowNatureSelect(true);
                    setSubTopics(filteredSubTopics);
                    setSubTopicsId(filteredSubTopics[0].id);// giá trị mặc định của SubTopicId
                } else {
                    setShowNatureSelect(false);
                }
            }
        } else {
            console.error('Error:', topicsResponse.status);
        }
    };

    const fetchInitDataItineraries = async () => {
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


    const handleSelectChangePlaces = (e, inPlacesId) => {
        const tmpPlacesId = parseInt(inPlacesId);
        setPlacesId(tmpPlacesId);// giá trị placesId vẫn sai khi thoát func thì mới đúng
        console.log("when click place placeid=", tmpPlacesId, "subtopicId=", subTopicsId);

        getArticlesBySearch(tmpPlacesId, subTopicsId); // gọi api
    };

    const handleSelectChangeTopics = async (e, inTopicId) => {
        const tmpTopicId = parseInt(inTopicId);
        setTopicsId(tmpTopicId);
        console.log("when click topic placeid=", placesId, "subtopicId=", subTopicsId, "topicId=", tmpTopicId);

        await getSubTopicsByTopicId(tmpTopicId);
    };

    const getSubTopicsByTopicId = async (inTopicId) => {

        let subTopicResponse = await fetch(`${SERVER_URL}/topics/list?${inTopicId}`)
        if (subTopicResponse.ok) {
            let data = await subTopicResponse.json();
            console.log(data);
            if (data.length > 0) {
                const filteredSubTopics = data.filter(item => item.subTopicsId == inTopicId);
                if (filteredSubTopics.length > 0) {
                    setShowNatureSelect(true);
                    setSubTopics(filteredSubTopics);

                    let tmpTopicId = filteredSubTopics[0].id;
                    setSubTopicsId(tmpTopicId);// giá trị mặc định của SubTopicId
                    await getArticlesBySearch(placesId, tmpTopicId);

                } else {
                    setShowNatureSelect(false);
                }
            }
        } else {
            console.error('Error:', subTopicResponse.status);
        }
    };

    const handleSelectChangeSubTopics = (e, inSubTopicId) => {
        const tmpSubTopicId = parseInt(inSubTopicId);
        setSubTopicsId(tmpSubTopicId);// giá trị mặc định của SubTopicId
        console.log("when click subtopic placeid=", placesId, "subtopicId=", tmpSubTopicId);

        getArticlesBySearch(placesId, tmpSubTopicId); // gọi api
    };

    // phương thức bất động bồ , await gọi để sử dụng đồng bộ
    async function getArticlesBySearch(inPlaceId, inSubtopicId) {
        // placeId = 0;// TODO mainguyen debug
        // topicId = 0;// TODO mainguyen debug
        console.log("getAPI placeId=", inPlaceId, "subtopicId=", inSubtopicId);
        await fetch(`${SERVER_URL}/articles/list?places_id=${inPlaceId}&topics_id=${inSubtopicId}`)
            .then(response => response.json())
            .then(data => {
                setArticles(data);// làm việc 
                console.log("Articles", data, articles);
                let ltsMarkers = data.map(item => ({
                    id: item.id,
                    name: item.name,
                    position: {
                        lat: parseFloat(item.latitude),
                        lng: parseFloat(item.longitude)
                    },

                    title: item.title,
                    price: item.price,
                    image: item.image,
                    createAt: item.createAt,
                    content: item.content,
                    status: item.status,
                    count: item.historyArticles?.length > 0 ? item.historyArticles[0].count : 0

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

            const response = await fetch(`${SERVER_URL}/itineraryArticles/create`, {
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

    // danh sách địa điểm yêu thích nhất
    // tạo hàm xử lí lấy danh sách
    const fetchInitDataLike = async () => {
        console.log("fetchInitDataLike");
        // Retrieve the object from the storage
        const userInfoString = sessionStorage.getItem("userInfo");
        const userInfoConvertObject = JSON.parse(userInfoString);
        if (userInfoConvertObject !== null) {

            const idUser = userInfoConvertObject.id;
            setUserId(idUser);

            const response = await fetch(`${SERVER_URL}/likes/listBySearch?users_id=${idUser}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data.length > 0) {
                    // setLike(data);
                    let dataItem = data.map(item => ({
                        id: item.articles.id,
                        name: item.articles.name,
                        title: item.articles.title,
                        price: item.articles.price,
                        image: item.articles.image,
                        createAt: item.articles.createAt,
                        content: item.articles.content,
                        status: item.articles.status,
                       

                    }));
                    setArticles(dataItem);// làm việc 
                 
                }
            } else {
                console.error('Error:', response.status);
            }
        }

    };
    const fetchInitDataHistoryArticles = async () => {


        const response = await fetch(`${SERVER_URL}/historyArticles/list`);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            if (data.length > 0) {

                let dataItem = data.map(item => ({
                    id: item.articles.id,
                    name: item.articles.name,
                    title: item.articles.title,
                    price: item.articles.price,
                    image: item.articles.image,
                    createAt: item.articles.createAt,
                    content: item.articles.content,
                    status: item.articles.status

                }));
                setArticles(dataItem);// làm việc 
            }
        } else {
            console.error('Error:', response.status);
        }


    };
    const fetchInitDataDescDate = async () => {


        const response = await fetch(`${SERVER_URL}/articles/listDate`);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            if (data.length > 0) {

                setArticles(data);// làm việc 
            }
        } else {
            console.error('Error:', response.status);
        }


    };


    // START LIKE
    const [likedArticlesId, setLikedArticlesId] = useState([]);
    const handleCreateLike = async (e, idArticles) => {
        e.preventDefault();
        const userInfoString = sessionStorage.getItem("userInfo");
        const userInfoConvertObject = JSON.parse(userInfoString);
        if (userInfoConvertObject !== null) {
            const idUser = userInfoConvertObject.id;
            setUserId(idUser);

            try {

                const regObj = {
                    articles: {
                        id: idArticles,
                    },
                    users: {
                        id: idUser,
                    },
                };
                console.log(regObj);

                let response = await fetch(`${SERVER_URL}/likes/clickLike`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(regObj),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);

                    if (data.status == 1) {
                        toast.success(data.message);

                        await getListLike4ArticlesByUserId();// lấy lại danh sách mới

                    } else {
                        toast.error(data.message);
                    }
                } else if (response.status == 400) {
                    // Handle 400 Bad Request error
                } else if (response.status == 401) {
                    // Handle 401 Unauthorized error
                } else {
                    // Handle other errors
                }
            } catch (err) {
                toast.error('Failed: ' + err.message);
            }
        }
    };

    const [likedArticlesByUserId, setLikedArticlesByUserId] = useState([]);
    const getListLike4ArticlesByUserId = async () => {
        // Retrieve the object from the storage
        const userInfoString = sessionStorage.getItem("userInfo");
        const userInfoConvertObject = JSON.parse(userInfoString);
        if (userInfoConvertObject !== null) {
            const idUser = userInfoConvertObject.id;
            setUserId(idUser);

            const checkResponse = await fetch(`${SERVER_URL}/likes/listBySearch?users_id=${idUser}`);
            if (checkResponse.ok) {
                const data = await checkResponse.json();
                console.log(data);
                if (data.length > 0) {
                    setLikedArticlesByUserId(data);

                    let tmpLikedArticlesId = [];
                    data.map(item => {
                        if (item.status === 1) {
                            tmpLikedArticlesId.push(item.articles.id);
                        }
                    });
                    setLikedArticlesId(tmpLikedArticlesId);
                }
            } else {
                console.error('Error:', checkResponse.status);
            }
        }
    };

    // END LIKE


    // START: googlemap
    const [markers, setMarkers] = useState([]);// mảng dữ liệu
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBteHKcrWBm8HhuQwy0wxYmFbKDJNcAYU8',
        // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
        libraries: ['places'],
    });
    const [idActiveMarker, setIdActiveMarker] = useState(null);// tham số lưu thông tin key của vị trí đang click chọn

    const handleActiveMarker = (idMarker) => {
        console.log("id", idMarker, idActiveMarker);
        if (idMarker == idActiveMarker) {
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






    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ height: '300px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Địa điểm</h1>
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
                                                    onChange={
                                                        (e) => {
                                                            handleSelectChangePlaces(e, e.target.value);
                                                        }
                                                    }
                                                >
                                                    {places.map((place, i) => (
                                                        <option value={place.id} key={i} selected={place.id === placesId ? true : false}>
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
                                                        onChange={
                                                            (e) => {
                                                                handleSelectChangeTopics(e, e.target.value);
                                                            }
                                                        }
                                                    >
                                                        {topics.map((topic, i) => (
                                                            <option value={topic.id} key={i} selected={topic.id === topicsId ? true : false}>
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
                                                                onChange={
                                                                    (e) => {
                                                                        handleSelectChangeSubTopics(e, e.target.value);
                                                                    }
                                                                }
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
                                <div className="d-flex gap-3">
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={fetchInitDataLike}
                                    >
                                        Yêu thích
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={fetchInitDataHistoryArticles}
                                    >
                                        Nổi Bật
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={fetchInitDataDescDate}
                                    >
                                        Mới nhất
                                    </button>
                                </div>


                            </div>


                        </div>

                        <div className="col-lg-9" >

                            <div className="reservation-form mainguyen" >
                                {/* <div className="container"> */}
                                <div className="row">
                                    {/* <div className="col-lg-12"> */}

                                    <div id="map">


                                        <Fragment>
                                            <div className="container">
                                                <div style={{ height: "90vh", width: "100%" }}>
                                                    {isLoaded ? (
                                                        <GoogleMap
                                                            center={userLocation}
                                                            zoom={10}
                                                            onClick={() => setIdActiveMarker(null)}
                                                            mapContainerStyle={{ width: "100%", height: "90vh" }}
                                                        >
                                                            {/* {
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
                                                            } */}

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
                                                                        idActiveMarker == item.id ? (
                                                                            <InfoWindowF
                                                                            onCloseClick={() => setIdActiveMarker(null)}
                                                                        >
                                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                                                                <Link to={`/detail?article_id=${item.id}`} style={{ fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>
                                                                                    {item.name}
                                                                                </Link>
                                                                                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                                                                                    <img
                                                                                        src={item.image || 'default-product-image.jpg'}
                                                                                        alt={item.name}
                                                                                        style={{ width: '80px', height: '80px', marginRight: '12px' }}
                                                                                    />
                                                                                    <div>
                                                                                        <p style={{ margin: '4px 0' }}>Giá: {item.price}</p>
                                                                                        <p style={{ margin: '4px 0' }}>Lượt xem: {item.count}</p>
                                                                                    </div>
                                                                                </div>
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
                                    <div className="col-sm col-md-6 col-lg-4 ftco-animate" key={i} >
                                        <div className="destination" style={{ boxShadow: '0px 2px 10px #d9d9d9' }}>
                                            <div className="card"  >
                                                <Link to={`/detail?article_id=${article.id}`}>
                                                    <img src={article.image}

                                                        className="card-img-top card-img-top-mainguyen" style={{ height: '170px' }} alt="..." />
                                                </Link>


                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <div className="one">
                                                            <p className="rate">
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star-o"></i>
                                                            </p>
                                                            <h3 style={{ color: 'black', height: '100px' }}><a href={`/detail?article_id=${article.id}`}>{article.name}</a></h3>


                                                        </div>
                                                        <div className="two">
                                                            <span className="price">{article.price + "VNĐ"}</span>
                                                        </div>

                                                    </div>
                                                    <p className="days">
                                                        {article.historyArticles.length > 0 ?
                                                            <span> {article.historyArticles[0].count} lượt xem</span>
                                                            :
                                                            <span>Xem chi tiết</span>
                                                        }
                                                    </p>


                                                    <hr />
                                                    <div>
                                                        {sessionStorage.getItem('username') ? (
                                                            <div className="bottom-area d-flex">


                                                                <a
                                                                    onClick={(e) => handleCreateLike(e, article.id)}
                                                                    className={`like ${likedArticlesId.includes(article.id) ? 'liked' : ''}`}
                                                                    title="Like"
                                                                    data-toggle="tooltip"
                                                                >
                                                                    <span className="s18_s">
                                                                        <i className="material-icons">
                                                                            {likedArticlesId.includes(article.id) ? 'favorite' : 'favorite_border'}
                                                                        </i>
                                                                    </span>
                                                                </a>



                                                                {/* <button onClick={(e) => {
                                                                    handleCreateLike(e, article.id);
                                                                }}> <span className="s18_s"><i className="material-icons">favorites</i></span></button> */}
                                                                <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Kế hoạch">
                                                                    {itinerariesOfUser.map((itinerary, ii) => (
                                                                        <Dropdown.Item

                                                                            value={itinerary.id}
                                                                            key={ii}
                                                                            onClick={(e) => {
                                                                                handleCreate(e, article.id, itinerary.id);
                                                                            }}
                                                                        >
                                                                            {itinerary.name}
                                                                        </Dropdown.Item>
                                                                    ))}
                                                                </DropdownButton>
                                                            </div>
                                                        ) : (
                                                            <div className="bottom-area d-flex">
                                                                {/* <div>
                                                                    <a href="/itinerarie" className="btn btn-primary btn-lg btn-block btn-kehoach">Kế hoạch</a>
                                                                </div> */}
                                                                <DropdownButton href="/itinerarie" id="dropdown-basic-button" className="ml-auto" title="Kế hoạch">

                                                                </DropdownButton>
                                                            </div>

                                                        )}

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