import { useEffect, useState } from "react";
import { Dropdown, DropdownButton, NavLink } from "react-bootstrap";

import { Link } from 'react-router-dom'


const Places = (props) => {





    let MockupAPITopics = {
        "status": 1,
        "message": "",
        "Item": [
            {
                "id": 1,
                "title": "Thiên nhiên",
                "subTopicsId": 0
            },
            {
                "id": 2,
                "title": "Truyền thống",
                "subTopicsId": 0
            },
            {
                "id": 3,
                "title": "Biển",
                "subTopicsId": 1
            },
            {
                "id": 4,
                "title": "Núi",
                "subTopicsId": 1
            },
            ,
            {
                "id": 5,
                "title": "hát",
                "subTopicsId": 2
            },
            {
                "id": 6,
                "title": "múa",
                "subTopicsId": 2
            }
        ]
    };

    const [topics, setTopics] = useState([]);
    const [subTopics, setSubTopics] = useState([]);
    const [showNatureSelect, setShowNatureSelect] = useState(false);

    // khởi tạo ban đầu khi vào từng trang
    useEffect(() => {
        console.log(MockupAPITopics.Item);

        let selectedDefaultTopicId = 0;
        // Filter items with subTopicsId equal to 0
        const filteredTopics = MockupAPITopics.Item.filter(item => item.subTopicsId === selectedDefaultTopicId);// khởi tạo ban đầu của menu cha
        setTopics(filteredTopics);

        console.log(filteredTopics);
        if (filteredTopics.length > 0) {

            let selectedTopicId = filteredTopics[0].id;

            // Filter items with subTopicsId equal to selectedTopicId (for nature topics)
            const filteredSubTopics = MockupAPITopics.Item.filter(item => item.subTopicsId === selectedTopicId);// khỏi tạo menu con tho bộlọc dữ liệu theo cấp cha

            if (filteredSubTopics.length > 0) {
                setShowNatureSelect(true);
                setSubTopics(filteredSubTopics);

                let selectedSubTopicId = filteredSubTopics[0].id;

                // Tìm danh sách sản phẩm tương ứng với chủ đề được chọn
                const filteredPlaces = MockupAPI.Item.filter(
                    (item) => item.idTopic === selectedSubTopicId
                );

                // Cập nhật danh sách sản phẩm và chủ đề được chọn
                setPlaces(filteredPlaces);

            } else {
                setShowNatureSelect(false);
            }
        }

    }, []);

    // Xử lý khi chọn chủ đề
    const handleSelectChange = (event) => {
        const selectedTopicId = parseInt(event.target.value);
        console.log(selectedTopicId);// thiên nhiên hoặc truyền thống

        // Filter items with subTopicsId equal to selectedTopicId (for nature topics)
        const filteredSubTopics = MockupAPITopics.Item.filter(item => item.subTopicsId === selectedTopicId);// khỏi tạo menu con tho bộlọc dữ liệu theo cấp cha

        if (filteredSubTopics.length > 0) {
            setShowNatureSelect(true);
            setSubTopics(filteredSubTopics);
        } else {
            setShowNatureSelect(false);
        }
    };


    const [places, setPlaces] = useState([]);

    let MockupAPI = {
        "status": 1,
        "message": "",
        "Item": [
            {
                "id": 1,
                "name": "mai",
                "idTopic": 3
            },
            {
                "id": 2,
                "name": "my",
                "idTopic": 5
            }
        ]
    };
    const handleSelectChangeBien = (event) => {
        const selectedTopicId = parseInt(event.target.value);

        // Tìm danh sách sản phẩm tương ứng với chủ đề được chọn
        const filteredPlaces = MockupAPI.Item.filter(
            (item) => item.idTopic === selectedTopicId
        );

        // Cập nhật danh sách sản phẩm và chủ đề được chọn
        setPlaces(filteredPlaces);
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
                                                <select name="" id="" className="form-control" placeholder="Keyword search">
                                                    <option value="">Hồ Chí Minh</option>
                                                    <option value="">Hà Nội</option>
                                                    <option value="">Hội An</option>
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
                                                        onChange={handleSelectChange}
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

                                            {/* <h3 className="heading mb-4">{topics.length > 0 ? topics[0].title : ""}</h3> */}
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
                                                                onChange={handleSelectChangeBien}
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
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px" frameBorder="0"
                                            allowFullScreen=""
                                        //  style ={{border:0}}
                                        >
                                        </iframe>
                                    </div>
                                    {/* </div> */}

                                </div>
                                {/* </div> */}
                            </div>

                            <div className="row">
                                    {places.map((place, i) => (
                                        <div className="col-sm col-md-6 col-lg-4 ftco-animate" key={i}>

                                            <div className="destination" style={{
                                                boxShadow: '0px 2px 10px  #d9d9d9'

                                            }}>
                                                <div className="card" >
                                                    <Link to={`/places/${place.id}`}> <img src="./image1/home/hoChiMinh.jpg" className="card-img-top" alt="..." /></Link>
                                                    <div className="card-body">
                                                        <div className="d-flex">
                                                            <div className="one">
                                                                <Link to={`/detail?place_id=${place.id}`} >{place.id}</Link>

                                                                <h3><a href="">{place.name}</a></h3>
                                                                <p className="rate">
                                                                    <i className="icon-star"></i>
                                                                    <i className="icon-star"></i>
                                                                    <i className="icon-star"></i>
                                                                    <i className="icon-star"></i>
                                                                    <i className="icon-star-o"></i>
                                                                </p>
                                                            </div>
                                                            <div className="two">

                                                            </div>

                                                        </div>
                                                        <p>Sau lưng thành phố là một vùng đồng bằng rộng lớn trải dài về phía Tây qua Campuchia và với đồng bằng sông Cửu Long trù phú dưới chân, Thành phố Hồ Chí Minh tọa lạc trên một khúc cua khổng lồ của sông Sài Gòn.</p>
                                                        <hr />
                                                        <div className="bottom-area d-flex">

                                                            <a href="/Like" className="like" title="Like" data-toggle="tooltip">
                                                                <span className="s18_s" >  <i className="material-icons">  favorite_border</i></span>
                                                            </a>

                                                            <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Kế hoạch">
                                                                <Dropdown.Item href="#/action-1">Biển</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Hè</Dropdown.Item>
                                                            </DropdownButton>


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
                    </div>
                </div >
            </section >

        </div >
    )
}

export default Places;