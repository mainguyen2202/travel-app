
import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ACCESS_TOKEN } from "../../constants/constants";
import { showAllPlace } from "../../services/placeServices";
import { showTopicsBySubTopicId } from "../../services/topicServices";
import { getCurrentUser } from "../../services/authServices";
import { likeCreate, listBySearchLike } from "../../services/likeServices";
import { listBySearchItineraries } from "../../services/itinerarieServices";
import { itineraryArticlesCreate } from "../../services/itineraryArticlesServices";


const Home = (props) => {
    const [place, setPlace] = useState([]);
    const [topic, setTopic] = useState([]);
    const [like, setLike] = useState([]);
    const [userId, setUserId] = useState(0);
    const [shownLikes, setShownLikes] = useState(6);

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
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetchInitDataPlace();
        await fetchInitDataTopic();
        await fetchInitDataLike();
        await fetchInitDataItineraries();
        await getListLike4ArticlesByUserId();
    };



    // tạo hàm xử lí lấy danh sách
    const fetchInitDataPlace = async () => {

        // Retrieve the object from the storage

        const response = await showAllPlace();
        if (response.status === 200) {
            const placeData = response.data;
            console.log(placeData);
            if (placeData.length > 0) {
                setPlace(placeData.slice(0, 12));
                // setPlace(placeData);
            }
        } else {
            console.error('Error:', response);
        }


    };

    // tạo hàm xử lí lấy danh sách
    const fetchInitDataTopic = async () => {
        // Retrieve the object from the storage

        let subTopicsId = 0;
        const response = await showTopicsBySubTopicId(subTopicsId);
        if (response.status === 200) {
            const data = await response.data;
            console.log(data);
            if (data.length > 0) {
                setTopic(data);
            }
        } else {
            console.error('Error:', response);
        }
    };


    // tạo hàm xử lí lấy danh sách
    const fetchInitDataLike = async () => {
        // const userId = 1;
        if (token) {
            const response = await listBySearchLike(userId);
            if (response.status === 200) {
                const data = await response.data;
                console.log(data);
                if (data.length > 0) {
                    setLike(data);

                }
            } else {
                console.error('Error:', response);
            }
        }

    };

    // tạo hàm xử lí lấy danh sách
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


    return (
        <div>

            <div className="hero-wrap js-fullheight" style={{ height: '800px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div className="overlay"></div>
                <div className="container">





                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true"
                        style={{ height: '919px' }}

                    ><div className="col-md-9 ftco-animate mb-5 pb-5 text-center text-md-left" data-scrollax=" properties: { translateY: '70%' }"
                    // style={{ transform: 'translateZ(0px) , translateY(0%)' }}
                    ><h1 className="mb-4"
                        data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"

                    // style={{ opacity: 1, transform: 'translateZ(0px) , translateY(0%)' }}
                    >Phát hiện
                                <br /> Một địa điểm mới</h1>
                            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Tìm những địa điểm tuyệt vời để lưu trú, ăn uống, mua sắm hoặc ghé thăm từ các chuyên gia địa phương</p>
                        </div>
                    </div>




                </div>
            </div>


            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <h2 className="mb-4">Điểm đến thịnh hành</h2>
                            <p>Bắt đầu quá trình lập kế hoạch kỳ nghỉ của bạn với hướng dẫn toàn diện của chúng tôi về các điểm đến chính của Việt Nam.</p>
                        </div>
                    </div>
                    <div className="row">
                        {place.map((places, i) => (
                            <div className="col-md-4  ftco-animate">
                                <a href={`/places?place_id=${places.id}`} className="destination-entry img image" style={{ backgroundImage: `url(${places.image})` }}>

                                    <div className="text text-center">
                                        <h3>{places.name}</h3>
                                    </div>
                                </a>
                            </div>
                        ))}



                    </div>

                </div>
            </section>

            <section className="ftco-about d-md-flex">
                <div className="one-half img" style={{ backgroundImage: `url('./images/about.jpg')` }}></div>
                <div className="one-half ftco-animate">
                    <div className="heading-section ftco-animate ">
                        <h2 className="mb-4">Công ty Du lịch Tốt Nhất</h2>
                    </div>

                    <p>Web du lịch Việt Nam mang đến cho du khách trải nghiệm du lịch tuyệt vời với dịch vụ chuyên nghiệp, lựa chọn đa dạng về điểm đến và hướng dẫn riêng biệt, đồng hành cùng họ khám phá những vẻ đẹp độc đáo của Việt Nam. Với sự chăm sóc và quan tâm tận tâm, chúng tôi cam kết đem đến cho du khách những kỷ niệm vô giá trị và trọn vẹn trong mỗi chuyến đi.</p>

                </div>
            </section>








            <section className="ftco-section services-section bg-light">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block">
                                <div className="icon"><span className="flaticon-yatch"></span></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Hoạt động đặc biệt</h3>
                                    <p>Tổ chức các chuyến du lịch khám phá văn hóa và ẩm thực tại các thành phố lớn như Hà Nội và Sài Gòn..</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block">
                                <div className="icon"><span className="flaticon-around"></span></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Sắp xếp chuyến đi</h3>
                                    <p>Tạo ra những chuyến đi không thể quên đến những điểm đến đẹp như Hạ Long Bay, Sapa, Huế và Nha Trang, mang đến trải nghiệm tuyệt vời cho du khách..</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block">
                                <div className="icon"><span className="flaticon-compass"></span></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Hướng dẫn riêng</h3>
                                    <p>Hướng dẫn riêng và cá nhân hóa cho từng du khách, giúp họ khám phá và trải nghiệm vẻ đẹp độc đáo của Việt Nam một cách tốt nhất..</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block">
                                <div className="icon"><span className="flaticon-map-of-roads"></span></div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Vị trí</h3>
                                    <p>Thông tin và cung cấp dịch vụ du lịch đa dạng, giúp du khách tìm hiểu và lựa chọn các chuyến đi tới Việt Nam..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <h2 className="mb-4">Trải nghiệm du lịch</h2>
                            <p>Đem đến cho bạn cơ hội khám phá đất nước theo sở thích riêng, từ du lịch văn hóa, du lịch mạo hiểm, du lịch ẩm thực, du lịch thiên nhiên đến du lịch lịch sử, tạo nên những trải nghiệm độc đáo và không thể quên.</p>
                        </div>
                    </div>
                    <div className="row" >
                        {topic.map((topics, i) => (
                            <div className="col-md-4 ftco-animate">
                                <a href={`/places?topic_id=${topics.id}`} className="destination-entry img"
                                    style={{ backgroundImage: `url(${topics.image})` }}
                                >

                                    <div className="text text-center">
                                        <h3>{topics.title}</h3>
                                    </div>
                                </a>
                            </div>
                        ))}


                    </div>

                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <h2 className="mb-4">Điểm đến yêu thích</h2>
                        </div>
                    </div>
                </div>
                <div
                    // className="col-md-12 hotel-single ftco-animate mb-5 mt-5" 
                    className="container my-5 "
                >
                    {token ? (
                        <div className="row">
                            {like.slice(0, shownLikes).map((likes, i) => (
                                <div className="col-md-4 mb-4" key={i}>
                                    <div className="card h-100 shadow-sm">
                                        <Link to={`/detail?article_id=${likes.articles.id}`}>
                                            <img
                                                src={likes.articles.image}
                                                className="card-img-top"
                                                alt="..."
                                            />
                                        </Link>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div className="one">
                                                    <h3 className="truncate-3-lines">
                                                        <Link to={`/detail?article_id=${likes.articles.id}`}>
                                                            {likes.articles.name}
                                                        </Link>
                                                    </h3>
                                                    <p className="card-text">
                                                        {likes.articles.historyArticles.length > 0 ? (
                                                            <span>{likes.articles.historyArticles[0].count} lượt xem</span>
                                                        ) : (
                                                            <span>Xem chi tiết</span>
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <p className="price">
                                                        {new Intl.NumberFormat('vi-VN', {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }).format(likes.articles.price)}
                                                    </p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between">
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
                                                <DropdownButton
                                                    id={`dropdown-basic-button-${likes.articles.id}`}
                                                    title="Kế hoạch"
                                                    className="ml-auto"
                                                >
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
                            ))}
                        </div>
                    ) : (
                        <div className="col-12">
                            <p className="text-center">Đăng nhập để thấy địa điểm yêu thích</p>
                        </div>
                    )}
                    {like.length > shownLikes && (
                        <div className="col-12 text-center mt-4">
                            {/* <button
            className="btn btn-primary mr-2"
            onClick={() => setShownLikes(shownLikes + 6)}
          >
            Xem thêm
          </button> */}
                            <Link to="/like" onClick={() => window.scrollTo(0, 0)} className="btn btn-primary mr-2">
                                Xem thêm
                            </Link>
                        </div>
                    )}
                </div>


            </section>







        </div>
    )
}

export default Home;