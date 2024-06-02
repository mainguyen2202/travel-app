import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Margin } from "@mui/icons-material";
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from 'react-paginate';
import { Dropdown, DropdownButton } from "react-bootstrap";
import { ACCESS_TOKEN, SERVER_URL } from "../../constants/constants";
import { getCurrentUser } from '../../services/authServices';
import { likeCreate, listBySearchLike } from '../../services/likeServices';
import { itineraryArticlesCreate } from '../../services/itineraryArticlesServices';
import { listBySearchItineraries } from '../../services/itinerarieServices';


const Like = (props) => {
    const [like, setLike] = useState([]);
    const [userId, setUserId] = useState(0);
    const [itinerariesOfUser, setItinerariesOfUser] = useState([]); // giá trị mặc định
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        const userInfo = getCurrentUser();
        if (userInfo && userInfo.USER_ID !== userId) {
            setUserId(userInfo.USER_ID);
            console.log("userId", userInfo.USER_ID);
        }
    }

    useEffect(() => {
        fetchInitDataItineraries();
        fetchInitDataLike();
        getListLike4ArticlesByUserId();
    }, []);

    // START LIKE
    // tạo hàm xử lí lấy danh sách
    const fetchInitDataLike = async () => {
        if (token) {
            const response = await listBySearchLike(userId);
            if (response.status === 200) {
                const data = await response.data;
                console.log(data);
                if (data.length > 0) {
                    setLike(data);
                }
            } else {
                console.error('Error:', response.status);
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
                console.error('Error:', response.status);
            }
        }

    };
    const handleCreate = async (e, idArticles, idItineraries) => {
        e.preventDefault();

        try {
            const response = await itineraryArticlesCreate(idArticles, idItineraries);
            if (response.status === 200) {
                const { data } = response;
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

    // END Itineraries


    // START PAGE

    const [currentPage, setCurrentPage] = useState(0);
    const articlesPerPage = 2; // số lượng likes hiển thị trên mỗi trang

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

                            <div className="reservation-form mainguyen" >
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
                                    {token ? (

                                        <div className="row">
                                            {like.slice(currentPage * articlesPerPage, (currentPage + 1) * articlesPerPage).map((likes, i) => (
                                                // {like.map((likes, i) => (
                                                <div className="col-sm col-md-6 col-lg-4 ftco-animate" key={i} >
                                                    <div className="destination" style={{ boxShadow: '0px 2px 10px #d9d9d9' }}>
                                                        <div className="card"  >
                                                            <Link to={`/detail?article_id=${likes.articles.id}`}>
                                                                <img src={likes.articles.image}

                                                                    className="card-img-top card-img-top-mainguyen" alt="..." />
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
                                                                        <h3 style={{ color: 'black', height: '100px' }}><a href={`/detail?article_id=${likes.articles.id}`}>{likes.articles.name}</a></h3>
                                                                    </div>
                                                                    <div className="two">
                                                                        <span className="price">{likes.articles.price + "VNĐ"}</span>
                                                                    </div>

                                                                </div>
                                                                <p className="days">
                                                                    {likes.articles.historyArticles.length > 0 ?
                                                                        <span> {likes.articles.historyArticles[0].count} lượt xem</span>
                                                                        :
                                                                        <span>Xem chi tiết</span>
                                                                    }
                                                                </p>

                                                                <hr />
                                                                <div>
                                                                    {token ? (
                                                                        <div className="bottom-area d-flex">
                                                                            <a
                                                                                onClick={(e) => handleCreateLike(e, likes.articles.id)}
                                                                                className={`like ${likedArticlesId.includes(likes.articles.id) ? 'liked' : ''}`}
                                                                                title="Like"
                                                                                data-toggle="tooltip"
                                                                            >
                                                                                <span className="s18_s">
                                                                                    <i className="material-icons">
                                                                                        {likedArticlesId.includes(likes.articles.id) ? 'favorite' : 'favorite_border'}
                                                                                    </i>
                                                                                </span>
                                                                            </a>

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
                                                                    ) : (
                                                                        <div className="bottom-area d-flex">

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
                                    ) : (
                                        <div>
                                            <p>Đăng nhập để thấy địa điểm yêu thích</p>
                                        </div>
                                    )}




                                </div>
                             
                            </div>

                       

                            <div className="row mt-5">
                                <div className="col text-center">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-center">
                                            {like.length > articlesPerPage && (
                                                <ReactPaginate
                                                    breakLabel="..."
                                                    nextLabel={<span>&gt;</span>}
                                                    onPageChange={handlePageClick}
                                                    pageRangeDisplayed={5}
                                                    pageCount={Math.ceil(like.length / articlesPerPage)}
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
                    </div>
                </div >
            </section >
        </div >
    )
}

export default Like;