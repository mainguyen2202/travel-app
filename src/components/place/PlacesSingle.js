


import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { ACCESS_TOKEN, SERVER_URL } from "../../constants/constants";
import { getCurrentUser } from '../../services/authServices';
import { articlesDetail, articlesListPlaceIdSubtopicId } from '../../services/articlesServices';
import { clickView } from '../../services/historyArticlesServices';
import { itineraryArticlesCreate } from '../../services/itineraryArticlesServices';
import { listBySearchItineraries } from '../../services/itinerarieServices';
import { likeCreate, listBySearchLike } from '../../services/likeServices';
import { feedbacksCreate, listBySearchFeedbacks } from '../../services/feedbacksServices';

const PlacesSingle = (props) => {
    const navigate = useNavigate();

    // const {placeId } = useParams();// route param /:id
    const [searchParams, setSearchParams] = useSearchParams();
    // Get a specific query parameter
    const articleId = searchParams.get('article_id') ? parseInt(searchParams.get('article_id')) : 0;
    const [articles, setArticles] = useState([]);
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState(0);
    const [placesId, setPlacesId] = useState(0); // giá trị mặc định
    const [itinerariesOfUser, setItinerariesOfUser] = useState([]); // giá trị mặc định
    const [articlesPlacesId, setArticlesPlacesId] = useState([]);
    const [feedbacksOfArticleId, setFeedbacksOfArticleId] = useState([]); // giá trị mặc 
    // console.log("articleId =" + articleId);


    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        const userInfo = getCurrentUser();
        if (userInfo && userInfo.USER_ID !== userId) {
            setUserId(userInfo.USER_ID);
            console.log("userId", userInfo.USER_ID);
        }
    }

    useEffect(() => {
        if (articleId != 0) {
            handleClickView(articleId);
        } else {
            navigate('/places');
        }

        fetchData();
        fetchInitDataItineraries();
        fetchInitDataFeedbacks();
        fetchDataArticlesBySearch();
        getListLike4ArticlesByUserId();
    }, []);

    const fetchData = async () => {

        console.log(articleId);
        const response = await articlesDetail(articleId);
        if (response.status === 200) {
            const data = await response.data;

            setData(data);
            const placesIda = data.places.id;
            setPlacesId(placesIda);
        }

    };

    const handleClickView = async (idArticles) => {
        try {

            const response = await clickView(idArticles);
            if (response.status === 200) {
                const data = response.data;
                console.log(data);

                if (data.status == 1) {
                    // toast.success(data.message);
                } else {
                    console.log(data.message);
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

    // tạo hàm xử lí lấy danh sách
    const fetchInitDataItineraries = async () => {
        // Retrieve the object from the storage
        if (token) {

            const response = await listBySearchItineraries(userId);
            if (response.status === 200) {
                const data = await response.data;
                console.log(data);
                if (data.length > 0) {
                    setItinerariesOfUser(data);
                }
            } else {
                console.error('Error:', data.status);
            }
        }
    }

    const handleCreateItineraries = async (e, idArticles, idItineraries) => {
        e.preventDefault();
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

    // START LIKE
    const [likedArticlesId, setLikedArticlesId] = useState([]);
    const handleCreateLike = async (e, idArticles) => {
        e.preventDefault();
        if (token) {
            try {

                const response = await likeCreate(idArticles, userId);



                if (response.status === 200) {
                    const data = response.data;
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
                console.error('Error:', response.status);
            }
        }
    };

    // END LIKE

    // tạo hàm xử lí lấy danh sách
    const fetchInitDataFeedbacks = async () => {
        // Retrieve the object from the storage


        const response = await listBySearchFeedbacks(articleId);
        if (response.status === 200) {
            const data = await response.data;
            console.log("fetchInitDataFeedbacks" + data);
            if (data.length > 0) {
                setFeedbacksOfArticleId(data);
            }
        } else {
            console.error('Error:', response.status);
        }

    }
    // ${SERVER_URL}/feedbacks/listByHeart?heart=5&articles_id=5

    const handleFeedbacksHeart = async (e, heart) => {
        // Retrieve the object from the storage
        // const tmpHeart = parseInt(heart);
        console.log("tmpHeart", heart, "tmpHeart", articleId);

        const response = await handleFeedbacksHeart(heart,articleId);
        if (response.status === 200) {
            const data = await response.data;
            console.log("handleFeedbacksHeart", data);
            if (data.length > 0) {
                setFeedbacksOfArticleId(data);
            }
        } else {
            console.error('Error:', response.status);
        }

    }
    const handleCreateFeedbacks = async (e) => {
        e.preventDefault();
        if (token) {
            try {

                const response = await feedbacksCreate(articleId, userId,currentValue,review);



                if (response.status === 200) {
                    const data = response.data;
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
        }
    };

    // tạo hàm xử lí lấy danh sách
    const fetchDataArticlesBySearch = async () => {
        // Retrieve the object from the storage

        console.log("placesId =", placesId);
        let subtopicId = 8;
        console.log("subtopicId =", subtopicId);

        const response = await articlesListPlaceIdSubtopicId(placesId, subtopicId);
        if (response.status === 200) {
            const data = response.data;
            console.log("fetchDataArticlesBySearch", data);
            if (data.length > 0) {
                setArticlesPlacesId(data);
            }
        } else {
            console.error('Error:', response.status);
        }

    }

    // START: đánh giá sao bình luận
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [review, setReview] = useState("");
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)

        console.log(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
        console.log("handleMouseOver" + newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"

    };
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        stars: {
            display: "flex",
            flexDirection: "row",
        },
        textarea: {
            border: "1px solid #a9a9a9",
            borderRadius: 5,
            padding: 10,
            margin: "20px 0",
            minHeight: 100,
            width: 300
        },
        button: {
            border: "1px solid #a9a9a9",
            borderRadius: 5,
            width: 300,
            padding: 10,
        }

    };
    //   END: đánh giá sao bình luận 

    return (
        <div>

            <div className="hero-wrap js-fullheight" style={{ height: '300px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            {/* <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Places</span></p> */}
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Địa điểm chi tiết</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section ftco-degree-bg">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-md-12 ftco-animate ">
                                    {/* <div className="col-lg-3 sidebar"> */}
                                    {/* <div className="sidebar-wrap ftco-animate"> */}

                                    {token ? (

                                        <div>
                                            <a
                                                onClick={(e) => handleCreateLike(e, articleId)}
                                                className={`like ${likedArticlesId.includes(articleId) ? 'liked' : ''}`}
                                                title="Like"
                                                data-toggle="tooltip"
                                            >
                                                <span className="s18_s">
                                                    <i className="material-icons" style={{ fontSize: '50px' }}>
                                                        {likedArticlesId.includes(articleId) ? 'favorite' : 'favorite_border'}
                                                    </i>
                                                </span>
                                            </a>

                                            <form action="#">

                                                <div className="fields col-lg-3  ">

                                                    <div className="form-group">
                                                        <div className="select-wrap one-third">
                                                            <h3 className="heading mb-4">Kế hoạch</h3>
                                                            <select
                                                                name=""
                                                                id=""
                                                                className="form-control"
                                                                placeholder="Tìm kiếm theo từ khóa"
                                                                onClick={(e) => {
                                                                    handleCreateItineraries(e, articleId, e.target.value);
                                                                }}
                                                            >
                                                                {itinerariesOfUser.map((itinerary, ii) => (
                                                                    <option value={itinerary.id} key={ii} >
                                                                        {itinerary.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>

                                    ) : (
                                        <div>
                                            <a href="/itinerarie" className="btn btn-primary">
                                                Tạo kế hoạch
                                            </a>
                                        </div>
                                    )}

                                    {/* </div> */}

                                    {/* </div> */}
                                </div>
                                <div className="col-md-12 hotel-single mt-4 mb-5 ftco-animate">
                                    {/* <div className="reservation-form" > */}
                                    {/* <h2>{data.name}</h2> */}
                                    <div className="row">

                                        <div id="map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px" frameBorder="0"
                                                allowFullScreen=""
                                            >
                                            </iframe>
                                        </div>

                                    </div>
                                    {/* </div> */}
                                </div>


                                <div className="col-md-12 hotel-single mt-4 mb-5 ftco-animate">

                                    <span>Our Best hotels &amp; Rooms</span>
                                    <h2>{data.name}</h2>
                                    <p>{data.content}</p>

                                </div>

                                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                                    <h4 className="mb-4">Đi tham quan</h4>
                                    <div className="block-16">
                                        <figure>
                                            <img src={data.image} alt="Image placeholder" className="img-fluid" />
                                            <a href={data.title} className="play-button popup-vimeo" target="blank"><span className="icon-play"></span></a>
                                        </figure>
                                    </div>
                                </div>



                                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">

                                    <h4 className="mb-4">Xem bình luận</h4>


                                    <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                                        <div className="col-md-12 ftco-animate">

                                            <div className="tag-widget post-tag-container mb-5 mt-5">
                                                <div className="tagcloud">

                                                    <button
                                                        // className="tag-cloud-link" 
                                                        type="button" class="btn btn-outline-secondary"
                                                        onClick={(e) => { fetchInitDataFeedbacks() }} >Tất cả
                                                    </button>



                                                    <button type="button" class="btn btn-outline-secondary"
                                                        onClick={(e) => { handleFeedbacksHeart(e, 5); }}

                                                    ><i className="icon-star" style={{ color: '#f9be37' }}></i> <i className="icon-star" style={{ color: '#f9be37' }}></i> <i className="icon-star" style={{ color: '#f9be37' }}></i> <i className="icon-star" style={{ color: '#f9be37' }}></i> <i className="icon-star" style={{ color: '#f9be37' }}></i>

                                                    </button>
                                                    <button type="button" class="btn btn-outline-secondary"
                                                        onClick={(e) => { handleFeedbacksHeart(e, 4); }}

                                                    ><i className="icon-star" style={{ color: '#f9be37' }}></i> <i className="icon-star" style={{ color: '#f9be37' }}></i> <i className="icon-star" style={{ color: '#f9be37' }}></i> <i className="icon-star" style={{ color: '#f9be37' }}></i>

                                                    </button>
                                                    <button type="button" class="btn btn-outline-secondary"
                                                        onClick={(e) => { handleFeedbacksHeart(e, 3); }}

                                                    > <i className="icon-star" style={{ color: '#f9be37' }}></i> <i className="icon-star" style={{ color: '#f9be37' }}></i> <i className="icon-star" style={{ color: '#f9be37' }}></i>

                                                    </button>
                                                    <button type="button" class="btn btn-outline-secondary"
                                                        onClick={(e) => { handleFeedbacksHeart(e, 2); }}

                                                    ><i className="icon-star" style={{ color: '#f9be37' }}></i> <i className="icon-star" style={{ color: '#f9be37' }}></i>

                                                    </button>
                                                    <button type="button" class="btn btn-outline-secondary"
                                                        onClick={(e) => { handleFeedbacksHeart(e, 1); }}

                                                    > <i className="icon-star" style={{ color: '#f9be37' }}></i>

                                                    </button>

                                                </div>
                                            </div>

                                            {/* <div className="about-author d-flex p-4 bg-light">
                                                    <div className="bio mr-5">
                                                        <img src="images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4" />
                                                    </div>
                                                    <div className="desc">
                                                        <h3>George Washington</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                                    </div>
                                                </div> */}
                                            {feedbacksOfArticleId.map((feedbacksOfUsers, i) => (

                                                <div className="pt-5 mt-5">
                                                    {/* <h3 className="mb-5">6 Comments</h3> */}
                                                    <ul className="comment-list">


                                                        <li className="comment">
                                                            <div className="vcard bio">
                                                                <img src="images/person_1.jpg" alt="Image placeholder" />
                                                            </div>
                                                            <div className="comment-body">
                                                                <h3>{feedbacksOfUsers.users.name}</h3>
                                                                {/* <div className="meta">{feedbacksOfUsers.heart} <i className="icon-star" style={{ color: '#f9be37' }}></i></div> */}


                                                                <div className="meta">
                                                                    {[...Array(feedbacksOfUsers.heart)].map((_, index) => (
                                                                        <i key={index} className="icon-star" style={{ color: '#f9be37' }}></i>
                                                                    ))}
                                                                </div>

                                                                <div className="meta">{feedbacksOfUsers.creatAt}</div>
                                                                <p>{feedbacksOfUsers.review}</p>
                                                                <p><a href="#" className="reply">Reply</a></p>
                                                            </div>

                                                          

                                                        </li>


                                                    </ul>



                                                </div>

                                            ))}
                                        </div>
                                    </div>








                                </div>

                                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">

                                    <h4 className="mb-4">Đánh giá &Bình luận</h4>

                                    {token ? (
                                        <div>

                                            <div>

                                                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">

                                                    <div className="row">

                                                        <div className="col-md-12">
                                                            <form method="post" className="star-rating" onSubmit={handleCreateFeedbacks}>

                                                                <label htmlFor="message">Đánh giá</label>
                                                                {/* <div style={{ marginTop: '20%' }}> */}
                                                                {/* <div style={styles.container}> */}
                                                                <div style={styles.stars}>
                                                                    {stars.map((_, index) => {
                                                                        return (
                                                                            <FaStar
                                                                                key={index}
                                                                                size={24}
                                                                                onClick={() => handleClick(index + 1)}// lấy sao
                                                                                // onMouseOver={() => handleMouseOver(index + 1)} // di chuyển chuột
                                                                                onMouseLeave={handleMouseLeave}
                                                                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                                                                style={{
                                                                                    marginRight: 10,
                                                                                    cursor: "pointer"
                                                                                }}
                                                                            />
                                                                        )
                                                                    })}
                                                                </div>
                                                                <div className="form-group" style={{ marginTop: '5%' }}>
                                                                    <label htmlFor="message">Bình luận</label>
                                                                    <textarea name="" id="message" cols="30" rows="10" className="form-control"
                                                                        value={review} onChange={e => setReview(e.target.value)} ></textarea>

                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="submit" value="Đăng bình luận" className="btn py-3 px-4 btn-primary" />
                                                                </div>


                                                              

                                                            </form>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>




                                        </div>
                                    ) : (

                                        <div>
                                            <a href="/login" className="btn btn-primary">
                                                Đăng nhập
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-5">
                                    <h4 className="mb-4">Related Hotels</h4>

                                    <div className="row">

                                        {articlesPlacesId.map((articlesPlacesIds, i) => (


                                            <div className="col-md-3" key={i}>
                                                <div className="destination" style={{ boxShadow: '0px 2px 10px #d9d9d9' }}>
                                                    <div className="card">
                                                        <Link to={`/detail?article_id=${articlesPlacesIds.id}`}>
                                                            <img src={articlesPlacesIds.image} className="card-img-top card-img-top-mainguyen" style={{ height: '170px' }} alt="..." />
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
                                                                    <h3 style={{ color: 'black', height: '100px' }}><a href={`/detail?article_id=${articlesPlacesIds.id}`}>{articlesPlacesIds.name}</a></h3>

                                                                </div>
                                                                <div className="two"></div>
                                                                <span className="price">{articlesPlacesIds.price + "VNĐ"}</span>
                                                            </div>
                                                            <p className="days">
                                                                {articlesPlacesIds.historyArticles.length > 0 ?
                                                                    <span> {articlesPlacesIds.historyArticles[0].count} lượt xem</span>
                                                                    :
                                                                    <span>Xem chi tiết</span>
                                                                }
                                                            </p>
                                                            <hr />
                                                            <div>
                                                                {sessionStorage.getItem('username') ? (
                                                                    <div className="bottom-area d-flex">

                                                                        <a
                                                                            onClick={(e) => handleCreateLike(e, articlesPlacesIds.id)}
                                                                            className={`like ${likedArticlesId.includes(articlesPlacesIds.id) ? 'liked' : ''}`}
                                                                            title="Like"
                                                                            data-toggle="tooltip"
                                                                        >
                                                                            <span className="s18_s">
                                                                                <i className="material-icons">
                                                                                    {likedArticlesId.includes(articlesPlacesIds.id) ? 'favorite' : 'favorite_border'}
                                                                                </i>
                                                                            </span>
                                                                        </a>

                                                                        <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Kế hoạch">
                                                                            {itinerariesOfUser.map((itinerary, ii) => (
                                                                                <Dropdown.Item

                                                                                    value={itinerary.id}
                                                                                    key={ii}
                                                                                    onClick={(e) => {
                                                                                        handleCreateItineraries(e, articlesPlacesIds.id, itinerary.id);
                                                                                    }}
                                                                                >
                                                                                    {itinerary.name}
                                                                                </Dropdown.Item>
                                                                            ))}
                                                                        </DropdownButton>
                                                                    </div>
                                                                ) : (
                                                                    <div className="bottom-area d-flex">
                                                                        <div>
                                                                            <a href="/itinerarie" className="btn btn-primary btn-lg btn-block btn-kehoach">Kế hoạch</a>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
            </section >


        </div >
    )
}

export default PlacesSingle;