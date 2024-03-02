import { useEffect, useState } from "react";
import { Dropdown, DropdownButton, NavLink } from "react-bootstrap";




const Admin = (props) => {


    // const [data, setData] = useState([])

    // useEffect(() => {


    //     // Mockup API
    //     let MockupAPI = {
    //         "status": 1,
    //         "message": "",
    //         "Item": [
    //             {
    //                 "id": 1,
    //                 "name": "mai"
    //             },
    //             {
    //                 "id": 2,
    //                 "name": "my"
    //             }
    //         ]
    //     };

    //     setData(MockupAPI.Item); //lấy dữ liệu mockup


    // }, [])



    return (
        <div>
            <div class="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div class="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><a href="index.html">Home</a></span> <span>Places</span></p>
                            <h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Destinations</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section class="ftco-section">
                <div class="container">
                    <div class="row">


                        <div class="col-lg-3 sidebar order-md-first ftco-animate ">
                            <div class="sidebar-wrap ftco-animate">
                                <h3 class="heading mb-4">Điểm đến</h3>
                                <form action="#" className="card1">
                                    <div class="fields">
                                        {/* <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Destination, City" />
                                        </div> */}
                                        <div class="form-group">
                                            <div class="select-wrap one-third">
                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" class="form-control" placeholder="Keyword search">
                                                    <option value="">Hồ Chí Minh</option>
                                                    <option value="">Hà Nội</option>
                                                    <option value="">Hội An</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div class="form-group">
                                            <input type="text" id="checkin_date" class="form-control checkin_date" placeholder="Date from" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" id="checkout_date" class="form-control checkout_date" placeholder="Date to" />
                                        </div>
                                        <div class="form-group">
                                            <div class="range-slider">
                                                <span>
                                                    <input type="number" value="25000" min="0" max="120000" />	-
                                                    <input type="number" value="50000" min="0" max="120000" />
                                                </span>
                                                <input value="1000" min="0" max="120000" step="500" type="range" />
                                                <input value="50000" min="0" max="120000" step="500" type="range" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" value="Search" class="btn btn-primary py-3 px-5" />
                                        </div> */}
                                    </div>
                                </form>

                                <h3 class="heading mb-4">Trải nghiệm</h3>
                                <form action="#" className="card1">
                                    <div class="fields">

                                        <div class="form-group">
                                            <div class="select-wrap one-third">
                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                <select name="Thiên nhiên" id="" class="form-control" placeholder="Keyword search">
                                                    <option value="">Thiên nhiên</option>
                                                    <option value="">Truyền thống</option>
                                                    <option value="">Nghệ thuật & văn hóa</option>
                                                    <option value="">Đồ ăn & thức uống </option>
                                                    <option value="">Thư giãn</option>
                                                    <option value="">Mua sắm</option>
                                                    <option value="">Khu vui chơi</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                                <div >
                                    <h3 class="heading mb-4">Thiên nhiên</h3>
                                    <form action="#" className="card1">
                                        <div class="fields">

                                            <div class="form-group">
                                                <div class="select-wrap one-third">
                                                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" class="form-control" placeholder="Keyword search">
                                                        <option value="">Biển</option>
                                                        <option value="">Núi</option>
                                                        <option value="">Đảo</option>
                                                        <option value="">Suối</option>
                                                        <option value="">Hô</option>
                                                        <option value="">Hang động</option>
                                                        <option value="">Đồng cỏ </option>
                                                        <option value="">Rừng nhiệt đới</option>
                                                        <option value="">Công viên</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                    <h3 class="heading mb-4">Truyền thống</h3>
                                    <form action="#" className="card1">
                                        <div class="fields">

                                            <div class="form-group">
                                                <div class="select-wrap one-third">
                                                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" class="form-control" placeholder="Keyword search">
                                                        <option value="">Làng cổ</option>
                                                        <option value="">Làng nghề truyền thống</option>
                                                        <option value="">Di tích lịch sử</option>
                                                        <option value="">Lễ hội truyền thống</option>
                                                        <option value="">Nghệ thuật dân gian</option>
                                                        <option value="">Nghệ thuật địa phương</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                    <h3 class="heading mb-4">Nghệ thuật & văn hóa</h3>
                                    <form action="#" className="card1">
                                        <div class="fields">

                                            <div class="form-group">
                                                <div class="select-wrap one-third">
                                                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" class="form-control" placeholder="Keyword search">
                                                        <option value="">Nhà hát</option>
                                                        <option value="">Bảo tàng</option>
                                                        <option value="">Thủ công & mỹ nghệ</option>
                                                        <option value="">Nghệ thuật biểu diễn</option>
                                                        <option value="">Triển lãm nghệ thuật</option>
                                                        <option value="">Di tích văn hóa</option>
                                                        <option value="">Lễ hội truyền thống</option>
                                                        <option value="">Nghệ nhân địa phương</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                    <h3 class="heading mb-4">Đồ ăn thức uống</h3>
                                    <form action="#" className="card1">
                                        <div class="fields">

                                            <div class="form-group">
                                                <div class="select-wrap one-third">
                                                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" class="form-control" placeholder="Keyword search">
                                                        <option value="">Nghệ thuật ăn uống</option>
                                                        <option value="">Ẩm thực địa phương</option>
                                                        <option value="">Ẩm thực đường phố</option>
                                                        <option value="">Món ăn đặc sản</option>
                                                        <option value="">Nhà hàng truyền thống</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                    <h3 class="heading mb-4">Thư giãn</h3>
                                    <form action="#" className="card1">
                                        <div class="fields">

                                            <div class="form-group">
                                                <div class="select-wrap one-third">
                                                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" class="form-control" placeholder="Keyword search">
                                                        <option value="">Khu nghỉ dưỡng</option>
                                                        <option value="">Spa và xông hơi</option>
                                                        <option value="">Yoga và thiền</option>
                                                        <option value="">Khu vườn hoa</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                    <h3 class="heading mb-4">Mua sắm</h3>
                                    <form action="#" className="card1">
                                        <div class="fields">

                                            <div class="form-group">
                                                <div class="select-wrap one-third">
                                                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" class="form-control" placeholder="Keyword search">
                                                        <option value="">Chợ truyền thống</option>
                                                        <option value="">Trung tâm thương mại</option>
                                                        <option value="">Cửa hàng đặc sản</option>
                                                        <option value="">Khu phố mua sắm</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                    <h3 class="heading mb-4">Khu vui chơi</h3>
                                    <form action="#" className="card1">
                                        <div class="fields">

                                            <div class="form-group">
                                                <div class="select-wrap one-third">
                                                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" class="form-control" placeholder="Keyword search">
                                                        <option value="">Công viên giải trí</option>
                                                        <option value="">Khu vui chơi gia đình</option>
                                                        <option value="">Công viên nước </option>
                                                        <option value="">Khu trò chơi trong nhà,</option>
                                                        <option value="">Khu vui chơi ngoài trời</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>


                                <h3 class="heading mb-4">Lựa chọn</h3>
                                <form action="#" className="card1">
                                    <div class="fields">

                                        <div class="form-group">
                                            <div class="select-wrap one-third">
                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" class="form-control" placeholder="Keyword search">
                                                    <option value="">Nổi bật</option>
                                                    <option value="">Yêu thích</option>
                                                    <option value="">Mới nhất đến cũ nhất</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </form>

                            </div>
                            <div class="sidebar-wrap ftco-animate">
                                <h3 class="heading mb-4">Gợi ý</h3>
                                <form method="post" class="star-rating">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">
                                            <p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></span></p>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">
                                            <p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i></span></p>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">
                                            <p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i></span></p>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">
                                            <p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i></span></p>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">
                                            <p class="rate"><span><i class="icon-star"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i></span></p>
                                        </label>
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div class="col-lg-9" >

                            <div class="reservation-form" >
                                {/* <div class="container"> */}
                                <div class="row">
                                    {/* <div class="col-lg-12"> */}

                                    <div id="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px" frameborder="0"
                                            allowfullscreen=""
                                        //  style ={{border:0}}
                                        >
                                        </iframe>
                                    </div>
                                    {/* </div> */}

                                </div>
                                {/* </div> */}
                            </div>






                            <div class="row ">
                                {/* lặp */}
                                <div class="col-sm col-md-6 col-lg-4 ftco-animate">



                                    {/* <div class="destination" style={{ border: '5px solid #EDF2F7', borderRadius: '15px' }}>
                                        <div>

                                            <a href="PlacesSingle" class="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url('./image1/home/hoChiMinh.jpg')` }}>
                                                <div class="icon d-flex justify-content-center align-items-center">
                                                    <span class="icon-link"></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="text p-3">
                                            <div class="d-flex">
                                                <div class="one">
                                                    <h3><a href="/placesSingle">Hồ Chí Minh</a></h3>

                                                </div>
                                                <div class="two">
                                                    <p class="rate">
                                                        <i class="icon-star"></i>
                                                        <i class="icon-star"></i>
                                                        <i class="icon-star"></i>
                                                        <i class="icon-star"></i>
                                                        <i class="icon-star-o"></i>
                                                    </p>
                                                </div>

                                            </div>
                                            <p>Sau lưng thành phố là một vùng đồng bằng rộng lớn trải dài về phía Tây qua Campuchia và với đồng bằng
                                                sông Cửu Long trù phú dưới chân, Thành phố Hồ Chí Minh tọa lạc trên một khúc cua khổng lồ của sông Sài Gòn.</p>
                                            <hr />
                                            <p class="bottom-area d-flex">

                                                <a href="" class="like" title="Like" data-toggle="tooltip">      <i class="bi bi-heart"></i></a>


                                                <a href="/ItinerarieEdit" class="like" title="Like" data-toggle="tooltip">
                                                    <span class="s18_s" onclick="saveMultiWishlist(175);return false;">  <i class="material-icons">  favorite_border</i></span>
                                                </a>
                                                <a href="/ItinerarieEdit" class="like" title="Like" data-toggle="tooltip"><i class="material-icons">  favorite</i></a>

                                                <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Dropdown button">
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </DropdownButton>


                                            </p>



                                        </div>

                                    </div> */}



                                    <div class="destination" style={{
                                        boxShadow: '0px 2px 10px  #d9d9d9'

                                    }}>
                                        <div class="card" >
                                            <img src="./image1/home/hoChiMinh.jpg" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <div class="d-flex">
                                                    <div class="one">
                                                        <h3><a href="/placesSingle">Hồ Chí Minh</a></h3>
                                                        <p class="rate">
                                                            <i class="icon-star"></i>
                                                            <i class="icon-star"></i>
                                                            <i class="icon-star"></i>
                                                            <i class="icon-star"></i>
                                                            <i class="icon-star-o"></i>
                                                        </p>
                                                    </div>
                                                    <div class="two">

                                                    </div>

                                                </div>
                                                <p>Sau lưng thành phố là một vùng đồng bằng rộng lớn trải dài về phía Tây qua Campuchia và với đồng bằng sông Cửu Long trù phú dưới chân, Thành phố Hồ Chí Minh tọa lạc trên một khúc cua khổng lồ của sông Sài Gòn.</p>
                                                <hr />
                                                <p class="bottom-area d-flex">



                                                    <a href="/Like" class="like" title="Like" data-toggle="tooltip">
                                                        <span class="s18_s" onclick="saveMultiWishlist(175);return false;">  <i class="material-icons">  favorite_border</i></span>
                                                    </a>

                                                    <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Dropdown button">
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </DropdownButton>


                                                </p>
                                            </div>
                                        </div>
                                    </div>




                                </div>




                            </div>


                            <div class="row mt-5">
                                <div class="col text-center">
                                    <div class="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li class="active"><span>1</span></li>
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

            <section class="ftco-section-parallax">
                <div class="parallax-img d-flex align-items-center">
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-7 text-center heading-section heading-section-white ftco-animate">
                                <h2>Subcribe to our Newsletter</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                                <div class="row d-flex justify-content-center mt-5">
                                    <div class="col-md-8">
                                        <form action="#" class="subscribe-form">
                                            <div class="form-group d-flex">
                                                <input type="text" class="form-control" placeholder="Enter email address" />
                                                <input type="submit" value="Subscribe" class="submit px-3" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Admin;