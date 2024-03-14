import { Button, Form } from "react-bootstrap";


const Login = (props) => {
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

                                    <h3 className="mb-5">Đăng nhập</h3>








                                    <form className="frm_login" novalidate>


                                        <div className="form-outline mb-4">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email/ Tên đăng nhập" required />
                                            <div className="invalid-feedback">
                                                Vui lòng nhập một địa chỉ email hợp lệ để đăng nhập.
                                            </div>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input type="password" className="form-control" name="ip_password" id="ip_password" placeholder="Mật khẩu" required />

                                            <div className="invalid-feedback">
                                                Mật khẩu hợp lệ là bắt buộc.
                                            </div>
                                        </div>


                                        <div className="form-check d-flex justify-content-start mb-4 ">
                                            {/* <div className="col-5 ">

                                                <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                                <label className="form-check-label" htmlFor="form1Example3"> Nhớ mật khẩu </label>
                                            </div> */}
                                            {/* <div className="col-10"> */}

                                            <a href="/password" id="forget_pass">Quên mật khẩu?</a>
                                            {/* </div> */}
                                        </div>




                                        <button id="login_btn" className="btn btn-primary btn-lg btn-block" type="submit">  Đăng nhập</button>


                                    </form>

                                    <div className="container">
                                        <h3 className="mt-5 mb-5 text-center">Toggle password visibility</h3>
                                        <div className="form-group">
                                            <label htmlFor="ipnPassword">Password</label>
                                            <div className="input-group mb-3">
                                                <input type="password" className="form-control" id="ipnPassword" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary" type="button" id="btnPassword">
                                                        hhh
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-muted">(Nhập pass vào ô input ở trên và click vào icon con mắt để hiển thị)</p>
                                        </div>
                                    </div>


                                    <div className="container">
                                        <input type="password" placeholder="Nhập Mật Khẩu" required/>
                                            <span className="show-btn"><i className="bi bi-eye-fill"></i></span>
                                    </div>

                                    <p className="d-flex text-center justify-content-center-login">Chưa có tài khoản tại? <a
                                        href="/registration">Đăng
                                        ký</a></p>









                                    <hr className="my-4" />

                                    <button className="btn  btn-lg btn-block  btn-danger "
                                        type="submit"><i className="fab fa-google me-2"></i> Đăng nhập google</button>


                                    <button className="btn btn-lg btn-block btn-info mb-2"
                                        type="submit"><i className="fab fa-facebook-f me-2"></i>Đăng nhập facebook</button>

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