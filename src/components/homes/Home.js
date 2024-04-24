import { Margin } from "@mui/icons-material";
import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = (props) => {
    const [place, setPlace] = useState([]);
    const [topic, setTopic] = useState([]);
    const [like, setLike] = useState([]);
    const [userId, setUserId] = useState(0);

    const [itinerariesOfUser, setItinerariesOfUser] = useState([]); // giá trị mặc định
    

    useEffect(() => {

        fetchInitDataPlace();// sử dụng hàm lấy danh sách mới nhất
        fetchInitDataTopic();
        fetchInitDataLike();
        fetchInitDataItineraries();
    }, []);

    // tạo hàm xử lí lấy danh sách
    const fetchInitDataPlace = async () => {

        // Retrieve the object from the storage


        const response = await fetch(`http://127.0.0.1:8080/places/list`);
        if (response.ok) {
            const placeData = await response.json();
            console.log(placeData);
            if (placeData.length > 0) {
                setPlace(placeData);
            }
        } else {
            console.error('Error:', response.status);
        }


    };

    // tạo hàm xử lí lấy danh sách
    const fetchInitDataTopic = async () => {

        // Retrieve the object from the storage
        const status = 0;

        const response = await fetch(`http://127.0.0.1:8080/topics/list/${status}`);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            if (data.length > 0) {
                setTopic(data);
            }
        } else {
            console.error('Error:', response.status);
        }


    };

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

            <div className="hero-wrap js-fullheight" style={{ height: '919px', backgroundImage: `url('./images/bg_1.jpg')` }}>
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
                            <h2 className="mb-4">Khám phá theo sở thích</h2>
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
                                                            <h3><a href="">{likes.articles.price+"VNĐ/ Khách"}</a></h3>
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
            </section>




            {/* <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <h2><strong>Blog</strong> &amp; Tin tức</h2>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-4 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: `url('./images/image_1.jpg')` }}>
                                </a>
                                <div className="text">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><a href="#">8 Best homestay in Philippines that you don't miss out</a></h3>
                                    <div className="meta mb-3">
                                        <div><a href="#">October 3, 2018</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: `url('./images/image_2.jpg')` }}>
                                </a>
                                <div className="text">
                                    <span className="tag">Culture</span>
                                    <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                    <div className="meta mb-3">
                                        <div><a href="#">October 3, 2018</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: `url('./images/image_3.jpg')` }}>
                                </a>
                                <div className="text">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                    <div className="meta mb-3">
                                        <div><a href="#">October 3, 2018</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



        </div>
    )
}

export default Home;