

const Footer = (props) => {
    return (
        <footer className="ftco-footer ftco-bg-dark ftco-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Công ty Du lịch Tốt Nhất</h2>
                            <p>Web du lịch Việt Nam mang đến cho du khách trải nghiệm du lịch tuyệt vời với dịch vụ chuyên nghiệp, lựa chọn đa dạng về điểm đến và hướng dẫn riêng biệt, đồng hành cùng họ khám phá những vẻ đẹp độc đáo của Việt Nam. Với sự chăm sóc và quan tâm tận tâm, chúng tôi cam kết đem đến cho du khách những kỷ niệm vô giá trị và trọn vẹn trong mỗi chuyến đi.</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                                <div className="row">
                                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                                <li ></li>
                                </div>
                            
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Thông tin</h2>
                            <ul className="list-unstyled">
										<li className="py-2 d-block"><a href="/about">Giới thiệu</a></li>

										<li className="py-2 d-block"><a href="/places">Địa điểm</a></li>
										<li className="py-2 d-block"><a href="/itinerarie">Kế Hoạch</a></li>
										<li className="py-2 d-block"><a href="/like">Yêu Thích</a></li>
										<li className="py-2 d-block"><a href="/blog">Tin tức</a></li>
										<li className="py-2 d-block"><a href="/contact">Liên Hệ</a></li>

										<li className="py-2 d-block"><a href="/map">Map</a></li>
									</ul>
                        </div>
                    </div>
             
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text">VQCR+GP6, Khu Phố 6, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam</span></li>
                                    <li><a href="#"><span className="icon icon-phone"></span><span className="text">0788012345</span></a></li>
                                    <li><a href="#"><span className="icon icon-envelope"></span><span className="text">trucmainguyen02@gmail.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">

                        <p>
                            {/* Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> */}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default Footer;