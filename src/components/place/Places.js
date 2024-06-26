import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ACCESS_TOKEN } from "../../constants/constants";
import ReactPaginate from 'react-paginate';
import { Fragment } from "react";
import {
    GoogleMap,
    InfoWindowF,
    MarkerF,
    useJsApiLoader,
} from "@react-google-maps/api";
import { showAllPlace } from '../../services/placeServices';
import { showTopicsBySubTopicId, showAllTopic } from '../../services/topicServices';
import { articlesListPlaceIdSubtopicId, getSearchResults, showAllArticlesListDate } from '../../services/articlesServices';
import { listBySearchItineraries } from '../../services/itinerarieServices';
import { itineraryArticlesCreate } from '../../services/itineraryArticlesServices';
import { getCurrentUser } from '../../services/authServices';
import { likeCreate, listBySearchLike } from '../../services/likeServices';
import { showAllHistoryArticles } from '../../services/historyArticlesServices';


import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const Places = () => {
    const [topics, setTopics] = useState([]);
    const [subTopics, setSubTopics] = useState([]);
    const [showNatureSelect, setShowNatureSelect] = useState(false);// giá trị mặc đinh là true hoặc false

    const [articles, setArticles] = useState([]);

    // const [places, setPlaces] = useState([]);
    // const [placesId, setPlacesId] = useState(0); // giá trị mặc định
    const [places, setPlaces] = useState([]);
    const [placesId, setPlacesId] = useState(0);
    const [topicsId, setTopicsId] = useState(0); // giá trị mặc định
    const [subTopicsId, setSubTopicsId] = useState(0); // giá trị mặc định

    const [itinerariesOfUser, setItinerariesOfUser] = useState([]); // giá trị mặc định


    // START: Get a specific query parameter
    const [searchParams, setSearchParams] = useSearchParams();
    const placeIdSearch = searchParams.get('place_id') ? parseInt(searchParams.get('place_id')) : 0;
    const topicIdSearch = searchParams.get('topic_id') ? parseInt(searchParams.get('topic_id')) : 0;
    const tuKhoaSearch = searchParams.get('keyword') ? searchParams.get('keyword') : '';
    // END: Get a specific query parameter
    const [userId, setUserId] = useState(0);
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        const userInfo = getCurrentUser();
        if (userInfo && userInfo.USER_ID !== userId) {
            setUserId(userInfo.USER_ID);
            console.log("userId", userInfo.USER_ID);
        }
    }

    // hàm khởi tạo ban đầu
    useEffect(() => {
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
        // Lấy từ khóa tìm kiếm từ URL search params
        const searchKeyword = searchParams.get("keyword");

        if (searchKeyword !== null) {
            try {
                // Gọi hàm lấy kết quả tìm kiếm
                const response = await getSearchResults(searchKeyword);

                // Cập nhật danh sách bài viết vào state
                if (response.status === 200) {
                    const data = response.data;
                    console.log("timkiem", data);
                    if (data.length > 0) {
                        setArticles(data);// làm việc 
                     
                    }
                } else {
                    console.error('Error:', response);
                };


            } catch (error) {
                console.error('Error handling search:', error);
            }
        }
    };

    // const fetchInitDataPlaces = async () => {
    //     const placeResponse = await showAllPlace();
    //     if (placeresponse.status === 200) {
    //         const placesData = placeResponse.data;
    //         console.log(placesData);
    //         if (placesData.length > 0) {
    //             setPlacesId(placesData[0].id);
    //         }
    //         setPlaces(placesData);
    //     } else {
    //         console.error('Error:', placeresponse);
    //     }
    // };





    // tạo hàm xử lí lấy danh sách
    const fetchInitDataPlaces = async () => {

        const response = await showAllPlace();
        if (response.status === 200) {
            const placesData = response.data;
            console.log(placesData);
            if (placesData.length > 0) {
                setPlacesId(placesData[0].id);
                // let tmpPlaceId = placesData[0].id;
                // setPlacesId(tmpPlaceId);
            }
            setPlaces(placesData);
        } else {
            console.error('Error:', response);
        }
    };

    const placeOptions = places.map((place) => ({
        value: place.id,
        label: place.name,
    }));




    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectChangePlaces = (options) => {
        console.log(options.length);
        if (options.length === 0 && placeOptions.length > 0) {
            // Nếu người dùng xóa option được chọn mặc định, gán lại option mặc định
            // setSelectedOptions([placeOptions[0]]);
            // setPlacesId(placeOptions[0].value);
            // getArticlesBySearch(placeOptions[0].value, subTopicsId);
            // Quay về lấy tất cả
            setSelectedOptions([]);
            setPlacesId();
            getArticlesBySearch(0, subTopicsId, '');
        } else if (options.length > 0) {
            // setSelectedOptions(options);
            // const lastSelectedOption = options[options.length - 1];
            // setPlacesId(lastSelectedOption.value);
            // getArticlesBySearch(lastSelectedOption.value, subTopicsId);
            setSelectedOptions(options);
            const placesIds = options.map(option => option.value).join(',');
            setPlacesId(placesIds);
            getArticlesBySearch(0, subTopicsId, placesIds);
        }
    };


    /*
      const handleSelectChangePlaces = (e, inPlacesId) => {
        const tmpPlacesId = parseInt(inPlacesId);
        setPlacesId(tmpPlacesId);// giá trị placesId vẫn sai khi thoát func thì mới đúng
        console.log("when click place placeid=", tmpPlacesId, "subtopicId=", subTopicsId);
        getArticlesBySearch(tmpPlacesId, subTopicsId); // gọi api
    };
    */

    const fetchInitDataTopics = async () => {

        const response = await showAllTopic();
        if (response.status === 200) {
            const topicsData = response.data;
            console.log("topicsData", topicsData);

            const filteredTopics = topicsData.filter(item => item.subTopicsId === subTopicsId);
            setTopics(filteredTopics);

            console.log(filteredTopics);
            if (filteredTopics.length > 0) {
                let tmpTopicId = filteredTopics[0].id;
                setTopicsId(tmpTopicId);

                const filteredSubTopics = topicsData.filter(item => item.subTopicsId === tmpTopicId);
                if (filteredSubTopics.length > 0) {
                    setShowNatureSelect(true);
                    setSubTopics(filteredSubTopics);
                    setSubTopicsId(filteredSubTopics[0].id);// giá trị mặc định của SubTopicId
                } else {
                    setShowNatureSelect(false);
                }
            }
        } else {
            console.error('Error:', response);
        }
    };

    const handleSelectChangeTopics = async (e, inTopicId) => {
        const tmpTopicId = parseInt(inTopicId);
        setTopicsId(tmpTopicId);
        console.log("when click topic placeid=", placesId, "subtopicId=", subTopicsId, "topicId=", tmpTopicId);

        await getSubTopicsByTopicId(tmpTopicId);
    };

    const getSubTopicsByTopicId = async (inTopicId) => {
        const response = await showTopicsBySubTopicId(inTopicId);// TODO mainguyen
        if (response.status === 200) {
            const data = await response.data;
            console.log(data);
            if (data.length > 0) {
                const filteredSubTopics = data.filter(item => item.subTopicsId === inTopicId);
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
            console.error('Error:', response);
        }
    };

    const handleSelectChangeSubTopics = (e, inSubTopicId) => {
        const tmpSubTopicId = parseInt(inSubTopicId);
        setSubTopicsId(tmpSubTopicId);// giá trị mặc định của SubTopicId
        console.log("when click subtopic placeid=", placesId, "subtopicId=", tmpSubTopicId);

        getArticlesBySearch(placesId, tmpSubTopicId); // gọi api
    };

    // phương thức bất động bồ , await gọi để sử dụng đồng bộ
    async function getArticlesBySearch(inPlaceId, inSubtopicId, inPlaceIdsMulti='') {
        console.log("getAPI placeId=", inPlaceId, "subtopicId=", inSubtopicId);
        const response = await articlesListPlaceIdSubtopicId(inPlaceId, inSubtopicId, inPlaceIdsMulti);

        if (response.status === 200) {
            const data = response.data;
            console.log(data);
            if (data.length > 0) {
                let tmpPlaceId = data[0].id;
                // setPlacesId(tmpPlaceId);
            }
            setArticles(data);
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


        } else {
            console.error('Error:', response);
        }



    }

    const fetchInitDataHistoryArticles = async () => {

        const response = await showAllHistoryArticles();
        if (response.status === 200) {
            const data = response.data;
            console.log(data);
            if (data.length > 0) {
                // setPlace(data);
                // let dataItem = data.map(item => ({
                //     id: item.articles.id,
                //     name: item.articles.name,
                //     title: item.articles.title,
                //     price: item.articles.price,
                //     image: item.articles.image,
                //     createAt: item.articles.createAt,
                //     content: item.articles.content,
                //     status: item.articles.status,

                // }));

                const dataItem = data.map(item => ({
                    ...item.articles            //sử dụng toán tử spread ...item.articles để gán tất cả các thuộc tính của item.articles vào một đối tượng mới.
                }));
                setArticles(dataItem);// làm việc 
            }
        } else {
            console.error('Error:', response);
        }


    };


    const fetchInitDataDescDate = async () => {


        const response = await showAllArticlesListDate();
        if (response.status === 200) {
            const data = response.data;
            console.log(data);
            if (data.length > 0) {


                setArticles(data);// làm việc 
            }
        } else {
            console.error('Error:', response);
        }


    };

    // START Itineraries

    const fetchInitDataItineraries = async () => {

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

    const handleCreate = async (e, idArticles, idItineraries) => {
        e.preventDefault();
        console.log("idArticles, idItineraries", idArticles, idItineraries);

        try {
            const response = await itineraryArticlesCreate(idArticles, idItineraries);
            if (response.status === 200) {
                const { data } = response;
                console.log(data);

                if (data.status === 1) {
                    toast.success(data.message);
                } else {
                    toast.error(data.message);
                }
            } else if (response.status === 400) {
                // Xử lý khi có lỗi 400 (Bad Request)
                toast.error('Bad Request');
            } else if (response.status === 401) {
                // Xử lý khi có lỗi 401 (Unauthorized)
                toast.error('Unauthorized');
            } else {
                // Xử lý khi có lỗi khác
                toast.error('Unknown error');
            }
        } catch (err) {
            toast.error('Failed: ' + err.message);
        }
    };
    // END


    // START LIKE


    // check box


    const [selectedOption, setSelectedOption] = useState(null);

const handleOptionChange = (option) => {
  setSelectedOption(option);
  switch (option) {
    case 'like':
      fetchInitDataLike();
      break;
    case 'feature':
      fetchInitDataHistoryArticles();
      break;
    case 'newest':
      fetchInitDataDescDate();
      break;
    default:
      break;
  }
};
    // check

    // danh sách địa điểm yêu thích nhất
    // tạo hàm xử lí lấy danh sách


    const fetchInitDataLike = async () => {
        // const userId = 1;
        if (token) {
            const response = await listBySearchLike(userId);
            if (response.status === 200) {
                const data = await response.data;
                console.log(data);
                if (data.length > 0) {
                    // setLike(data);

                    // let dataItem = data.map(item => ({
                    //     id: item.articles.id,
                    //     name: item.articles.name,
                    //     title: item.articles.title,
                    //     price: item.articles.price,
                    //     image: item.articles.image,
                    //     createAt: item.articles.createAt,
                    //     content: item.articles.content,
                    //     status: item.articles.status,
                    // }));

                    const dataItem = data.map(item => ({
                        ...item.articles            //sử dụng toán tử spread ...item.articles để gán tất cả các thuộc tính của item.articles vào một đối tượng mới.
                    }));
                    setArticles(dataItem);// làm việc 

                }
            } else {
                console.error('Error:', response);
            }
        }

    };

    const [likedArticlesId, setLikedArticlesId] = useState([]);
    const handleCreateLike = async (e, idArticles) => {
        e.preventDefault();
        if (token) {
            try {

                const response = await likeCreate(idArticles, userId);



                if (response.status === 200) {
                    const data = response.data;
                    console.log(data);

                    if (data.status === 1) {
                        toast.success(data.message);

                        await getListLike4ArticlesByUserId();// lấy lại danh sách mới

                    } else {
                        toast.error(data.message);
                    }
                } else if (response.status === 400) {
                    // Handle 400 Bad Request error
                } else if (response.status === 401) {
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
        if (token) {

            const response = await listBySearchLike(userId);
            if (response.status === 200) {
                const data = await response.data;
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
                console.error('Error:', response);
            }
        }
    };

    // END LIKE

    // START PAGE

    const [currentPage, setCurrentPage] = useState(0);
    const articlesPerPage = 6; // số lượng likes hiển thị trên mỗi trang

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };


    // END PAGE


    // START: googlemap
    const [markers, setMarkers] = useState([]);// mảng dữ liệu
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
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

                        <div className="col-lg-3 sidebar order-md-first ftco-animate">
                            <div className="sidebar-wrap ftco-animate">
                                <h3 className="heading mb-4">Trải nghiệm</h3>

                                <div className="fields">

                                    <div className="select-wrap one-third">
                                        <div className="icon">
                                            <span className="ion-ios-arrow-down"></span>
                                        </div>
                                        <select
                                            name="topics"
                                            id=""
                                            className="form-control"
                                            placeholder="Keyword search"
                                            onChange={(e) => handleSelectChangeTopics(e, e.target.value)}
                                        >
                                            {topics.map((topic, i) => (
                                                <option
                                                    value={topic.id}
                                                    key={i}
                                                    selected={topic.id === topicsId ? true : false}
                                                >
                                                    {topic.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                </div>

                                {showNatureSelect && (
                                    <div>
                                        {/* <form action="#" className="card1"> */}
                                        <div className="fields">

                                            <div className="select-wrap one-third">
                                                <div className="icon">
                                                    <span className="ion-ios-arrow-down"></span>
                                                </div>
                                                <select
                                                    name="topics"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Keyword search"
                                                    onChange={(e) => handleSelectChangeSubTopics(e, e.target.value)}
                                                >
                                                    {subTopics.map((topic, i) => (
                                                        <option value={topic.id} key={i}>
                                                            {topic.title}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                        </div>
                                        {/* </form> */}
                                    </div>
                                )}

                                <h3 className="heading mb-4">Lựa chọn</h3>
                                <div className="option-container">
    <div className="option-item">
      <input
        type="radio"
        id="like-radio"
        name="option-radio"
        className="option-radio"
        checked={selectedOption === 'like'}
        onChange={() => handleOptionChange('like')}
      />
      <label htmlFor="like-radio" className="option-label">
        Yêu thích
      </label>
    </div>
    <div className="option-item">
      <input
        type="radio"
        id="feature-radio"
        name="option-radio"
        className="option-radio"
        checked={selectedOption === 'feature'}
        onChange={() => handleOptionChange('feature')}
      />
      <label htmlFor="feature-radio" className="option-label">
        Nổi Bật
      </label>
    </div>
    <div className="option-item">
      <input
        type="radio"
        id="newest-radio"
        name="option-radio"
        className="option-radio"
        checked={selectedOption === 'newest'}
        onChange={() => handleOptionChange('newest')}
      />
      <label htmlFor="newest-radio" className="option-label">
        Mới nhất
      </label>
    </div>
  </div>

                            </div>
                        </div>

                        <div className="col-lg-9" >


                            <div className="reservation-form " >
                                <div className="container">
                                    <div className="row" style={{ height: '450px' }}>
                                        {/* <div className="col-lg-12"> */}

                                        <div id="map" >


                                            <Fragment>
                                                <div className="container">
                                                    <div >
                                                        {isLoaded ? (
                                                            <GoogleMap
                                                                center={userLocation}
                                                                zoom={10}
                                                                onClick={() => setIdActiveMarker(null)}
                                                                mapContainerStyle={{ width: "100%", height: "40vh" }}
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
                                                                            idActiveMarker === item.id ? (
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


                                </div>
                            </div>

                            <div className="row" style={{ marginBottom: '30px' }}>
                                <div className="row" style={{ marginRight: '30px' }}>
                                    <h3 className="heading mb-4">Điểm đến</h3>
                                </div>
                                {/* <Select
                                    className="form-control"
                                    placeholder="Keyword search"
                                    options={placeOptions}
                                    value={placeOptions.find((option) => option.value === placesId)}
                                    onChange={handleSelectChangePlaces}
                                    components={animatedComponents}

                                    
                                   
                                /> */}

                                <div className="row" >
                                    <Select
                                        // className="form-control"
                                        placeholder="Tìm kiếm hoặc chọn"
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        value={selectedOptions}
                                        onChange={handleSelectChangePlaces}
                                        isMulti
                                        options={placeOptions}
                                    />

                                </div>

                            </div>
                            <div className="row">
                                {articles.slice(currentPage * articlesPerPage, (currentPage + 1) * articlesPerPage).map((article, i) => (
                                    <div className="col-sm col-md-6 col-lg-4 ftco-animate" key={i} >
                                        <div className="destination" style={{ boxShadow: '0px 2px 10px #d9d9d9' }}>
                                            <div className="card"  >
                                                <Link to={`/detail?article_id=${article.id}`}>
                                                    <img src={article.image}

                                                        className="card-img-top card-img-top-mainguyen" style={{ height: '170px' }} alt="..." />
                                                </Link>


                                                <div className="card-body">


                                                    <div className="d-flex justify-content-between">
                                                        <div className="one">
                                                            {/* <p className="rate"> 
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star-o"></i>
                                                            </p> */}
                                                            <h3
                                                                className="truncate-3-lines"
                                                            >
                                                                <Link to={`/detail?article_id=${article.id}`}>
                                                                    {article.name}
                                                                </Link>
                                                            </h3>
                                                            <p className="card-text">
                                                                {article.historyArticles && article.historyArticles.length > 0 ?
                                                                    <span>{article.historyArticles[0].count} lượt xem</span>


                                                                    :
                                                                    <span>Xem chi tiết</span>
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="two">
                                                            <p className="price">
                                                                {new Intl.NumberFormat('vi-VN', {
                                                                    style: 'currency',
                                                                    currency: 'VND',
                                                                }).format(article.price)}
                                                            </p>
                                                        </div>
                                                    </div>


                                                    <hr />
                                                    <div>
                                                        {token ? (
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
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-center">
                                            {articles.length > articlesPerPage && (
                                                <ReactPaginate
                                                    breakLabel="..."
                                                    nextLabel={<span>&gt;</span>}
                                                    onPageChange={handlePageClick}
                                                    pageRangeDisplayed={5}
                                                    pageCount={Math.ceil(articles.length / articlesPerPage)}
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
                    </div >
                </div >
            </section >

        </div >
    )
}

export default Places;