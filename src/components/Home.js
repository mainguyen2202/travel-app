import { Margin } from "@mui/icons-material";
import { Dropdown, DropdownButton } from "react-bootstrap";


const Home = (props) => {
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
                    >Discover <br />A new Place</h1>
                            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Find great places to stay, eat, shop, or visit from local experts</p>
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
                        <div className="col-md-6  ftco-animate">
                            <a href="#" className="destination-entry img image" style={{ backgroundImage: `url('./image1/home/haNoi.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Hà Nội</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/hoChiMinh.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Hồ Chí Minh</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/hoiAn.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Hội An</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/haLongBay.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Hạ Long Bay</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/saPa.jpg')` }}>
                                <div className="text text-center">
                                    <h3>SaPa</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/phuQuoc.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Phú Quốc</h3>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/hue.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Huế</h3>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/nhaTrang.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Nha Trang</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/daNang.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Đà Nẵng</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/daLat.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Đà Lạt</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/phanThiet.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Phan Thiết</h3>
                                </div>
                            </a>
                        </div>

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
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate">

                            <div className="destination" style={{
                                boxShadow: '0px 2px 10px  #d9d9d9'

                            }}>
                                <div className="card "  >
                                    <img src="./image1/home/hoChiMinh.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="one">
                                                <h3><a href="/placesSingle">Hồ Chí Minh</a></h3>
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
                                                <span className="s18_s">  <i className="material-icons">  favorite_border</i></span>
                                            </a>

                                            <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Dropdown button">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
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
                        <div className="col-md-3  ftco-animate" style={{
                            // paddingBottom: 'auto'
                        }}>
                            <a href="#" className="destination-entry img images" style={{ backgroundImage: `url('./image1/home/haNoi.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Điểm tham quan </h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/hoChiMinh.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Văn hóa</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/hoiAn.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Thư giãn</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/haLongBay.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Mua sắmy</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/saPa.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Hoạt động & Phiêu lưu</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/phuQuoc.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Nghệ thuật & Thiết kế</h3>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/hue.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Lịch sử</h3>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/nhaTrang.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Thiên nhiên</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/daNang.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Bảo tàng Lễ hội</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/daNang.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Ẩm thực</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/daNang.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Tinh hoa</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: `url('./image1/home/daNang.jpg')` }}>
                                <div className="text text-center">
                                    <h3>Công viên</h3>
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </section>


            <section className="ftco-section testimony-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                            <h2 className="mb-4">Khách hàng hài lòng của chúng tôi nói</h2>
                            <p>Mở ra những trải nghiệm du lịch tuyệt vời và đáp ứng mọi mong muốn của khách hàng. Dịch vụ chất lượng, lựa chọn đa dạng và sự tận tâm đồng hành trong mỗi chuyến đi.</p>
                        </div>
                    </div>
                    <div className="row ftco-animate">
                        <div className="col-md-12">
                            <div className="carousel-testimony owl-carousel ftco-owl">
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5">
                                        <div className="user-img mb-5" style={{ backgroundImage: `url('./images/person_1.jpg')` }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Mark Web</p>
                                            <span className="position">Marketing Manager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5">
                                        <div className="user-img mb-5" style={{ backgroundImage: `url('./images/person_2.jpg')` }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Mark Web</p>
                                            <span className="position">Interface Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5">
                                        <div className="user-img mb-5" style={{ backgroundImage: `url('./images/person_3.jpg')` }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Mark Web</p>
                                            <span className="position">UI Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5">
                                        <div className="user-img mb-5" style={{ backgroundImage: `url('./images/person_1.jpg')` }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Mark Web</p>
                                            <span className="position">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5">
                                        <div className="user-img mb-5" style={{ backgroundImage: `url('./images/person_1.jpg')` }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Mark Web</p>
                                            <span className="position">System Analyst</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
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
            </section>

            <section className="ftco-section-parallax">
                <div className="parallax-img d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                                <h2>Subcribe to our Newsletter</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                                <div className="row d-flex justify-content-center mt-5">
                                    <div className="col-md-8">
                                        <form action="#" className="subscribe-form">
                                            <div className="form-group d-flex">
                                                <input type="text" className="form-control" placeholder="Enter email address" />
                                                <input type="submit" value="Subscribe" className="submit px-3" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home;