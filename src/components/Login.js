import { Button, Form } from "react-bootstrap";


const Login = (props) => {
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

                                    <h3 class="mb-5">Đăng nhập</h3>








                                    <form class="frm_login" novalidate>


                                        <div class="form-outline mb-4">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Email/ Tên đăng nhập" required />
                                            <div class="invalid-feedback">
                                                Vui lòng nhập một địa chỉ email hợp lệ để đăng nhập.
                                            </div>
                                        </div>


                                        <div class="form-outline mb-4">
                                            <input type="password" class="form-control" name="ip_password" id="ip_password" placeholder="Mật khẩu" required />

                                            <div class="invalid-feedback">
                                                Mật khẩu hợp lệ là bắt buộc.
                                            </div>
                                        </div>


                                        <div class="form-check d-flex justify-content-start mb-4 ">
                                            {/* <div class="col-5 ">

                                                <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                                                <label class="form-check-label" for="form1Example3"> Nhớ mật khẩu </label>
                                            </div> */}
                                            {/* <div class="col-10"> */}

                                            <a href="/password" id="forget_pass">Quên mật khẩu?</a>
                                            {/* </div> */}
                                        </div>




                                        <button id="login_btn" class="btn btn-primary btn-lg btn-block" type="submit">  Đăng nhập</button>


                                    </form>

                                    <div class="container">
                                        <h3 class="mt-5 mb-5 text-center">Toggle password visibility</h3>
                                        <div class="form-group">
                                            <label for="ipnPassword">Password</label>
                                            <div class="input-group mb-3">
                                                <input type="password" class="form-control" id="ipnPassword" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-outline-secondary" type="button" id="btnPassword">
                                                        hhh
                                                    </button>
                                                </div>
                                            </div>
                                            <p class="text-muted">(Nhập pass vào ô input ở trên và click vào icon con mắt để hiển thị)</p>
                                        </div>
                                    </div>


                                    <div class="container">
                                        <input type="password" placeholder="Nhập Mật Khẩu" required/>
                                            <span class="show-btn"><i class="bi bi-eye-fill"></i></span>
                                    </div>

                                    <p class="d-flex text-center justify-content-center-login">Chưa có tài khoản tại? <a
                                        href="/registration">Đăng
                                        ký</a></p>









                                    <hr class="my-4" />

                                    <button class="btn  btn-lg btn-block  btn-danger "
                                        type="submit"><i class="fab fa-google me-2"></i> Đăng nhập google</button>


                                    <button class="btn btn-lg btn-block btn-info mb-2"
                                        type="submit"><i class="fab fa-facebook-f me-2"></i>Đăng nhập facebook</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;