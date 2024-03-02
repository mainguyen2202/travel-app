

const Registration = (props) => {
    return (
        <div >
            <div class="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div class="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><a href="index.html">Home</a></span> <span>BLOG</span></p>
                            <h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Tips & Itinerarie</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section class="vh-100"
            >
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-8">
                            <div class="card shadow-2-strong"
                                style={{ borderRadius: '1rem' }}
                            >
                                <div class="card-body p-5 text-center">

                                    <h3 class="mb-5">Đăng ký</h3>
                                    {/* <div class="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Name" />
                                    </div> */}



                                    <form class="frm_register" novalidate>



                                        <div class="form-outline mb-4">
                                            <input type="text" class="form-control" id="lastName" placeholder="Họ và tên" value="" required />
                                            <div class="invalid-feedback">
                                                Họ hợp lệ là bắt buộc.
                                            </div>
                                        </div>
                                       

                                  

                                        <div class="form-outline mb-4">
                                            <input type="text" class="form-control" name="ip_username" id="ip_username" placeholder="Tên đăng nhập" value=""
                                                required />
                                            <div class="invalid-feedback">
                                                Tên hợp lệ là bắt buộc.
                                            </div>
                                        </div>


                                        <div class="form-outline mb-4">
                                            <input type="email" class="form-control" id="email" placeholder="you@example.com" required />
                                            <div class="invalid-feedback">
                                                Vui lòng nhập một địa chỉ email hợp lệ để cập nhật thông tin vận chuyển.
                                            </div>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" class="form-control" name="ip_password" id="ip_password" placeholder="Mật khẩu"
                                                required />
                                            <div class="invalid-feedback">
                                                Mật khẩu hợp lệ là bắt buộc.
                                            </div>
                                        </div>



                                        <div class="form-outline mb-4">
                                            <input type="password" class="form-control" name="ip_repassword" id="ip_repassword" placeholder="Nhập lại mật khẩu"
                                            required />
                                            <div class="invalid-feedback">
                                                Nhập lại mật khẩu hợp lệ là bắt buộc.
                                            </div>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="tel" class="form-control" id="phone" placeholder="Số điện thoại" required />
                                            <div class="invalid-feedback">
                                                Vui lòng nhập số điện thoại hợp lệ để cập nhật thông tin vận chuyển.
                                            </div>
                                        </div>








                                        <hr />

                                    
                                    <button id="regis_btn"  class="btn btn-primary btn-lg btn-block" type="submit">Đăng ký</button>
                                    </form>

                                    <hr />
                                    <p class="d-flex my-3 justify-content-center-login">
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