

const Registration = (props) => {
    return (
        <div >
            <div className="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>BLOG</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Tips & Itinerarie</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="vh-100"
            >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-8">
                            <div className="card shadow-2-strong"
                                style={{ borderRadius: '1rem' }}
                            >
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Đăng ký</h3>
                                    {/* <div className="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Name" />
                                    </div> */}



                                    <form className="frm_register" novalidate>



                                        <div className="form-outline mb-4">
                                            <input type="text" className="form-control" id="lastName" placeholder="Họ và tên" value="" required />
                                            <div className="invalid-feedback">
                                                Họ hợp lệ là bắt buộc.
                                            </div>
                                        </div>
                                       

                                  

                                        <div className="form-outline mb-4">
                                            <input type="text" className="form-control" name="ip_username" id="ip_username" placeholder="Tên đăng nhập" value=""
                                                required />
                                            <div className="invalid-feedback">
                                                Tên hợp lệ là bắt buộc.
                                            </div>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                                            <div className="invalid-feedback">
                                                Vui lòng nhập một địa chỉ email hợp lệ để cập nhật thông tin vận chuyển.
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" className="form-control" name="ip_password" id="ip_password" placeholder="Mật khẩu"
                                                required />
                                            <div className="invalid-feedback">
                                                Mật khẩu hợp lệ là bắt buộc.
                                            </div>
                                        </div>



                                        <div className="form-outline mb-4">
                                            <input type="password" className="form-control" name="ip_repassword" id="ip_repassword" placeholder="Nhập lại mật khẩu"
                                            required />
                                            <div className="invalid-feedback">
                                                Nhập lại mật khẩu hợp lệ là bắt buộc.
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="tel" className="form-control" id="phone" placeholder="Số điện thoại" required />
                                            <div className="invalid-feedback">
                                                Vui lòng nhập số điện thoại hợp lệ để cập nhật thông tin vận chuyển.
                                            </div>
                                        </div>








                                        <hr />

                                    
                                    <button id="regis_btn"  className="btn btn-primary btn-lg btn-block" type="submit">Đăng ký</button>
                                    </form>

                                    <hr />
                                    <p className="d-flex my-3 justify-content-center-login">
                                        Bạn đã có sẵn một tài khoản?
                                        <a href="/login"> Đăng nhập </a>
                                    </p>








                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Registration;