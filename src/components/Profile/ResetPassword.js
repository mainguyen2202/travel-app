

const ChangePassword = (props) => {
    return (
        <div >
            <div className="hero-wrap js-fullheight" style={{ height: '300px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            {/* <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>BLOG</span></p> */}
                            {/* <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Tips & Itinerarie</h1> */}
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

                                    <h3 className="mb-5">Quên mật khẩu</h3>








                                    <form className="frm_password" novalidate>
                                        <div className="form-outline mb-4">
                                            <input type="password" className="form-control" name="ip_password" id="ip_password" placeholder="Mật khẩu cũ"
                                             required />
                                            <div className="invalid-feedback">
                                                Mật khẩu hợp lệ là bắt buộc.
                                            </div>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input type="password" className="form-control" name="ip_password" id="ip_password" placeholder="Mật khẩu mới"
                                             required />
                                            <div className="invalid-feedback">
                                                Mật khẩu hợp lệ là bắt buộc.
                                            </div>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input type="password" className="form-control" name="ip_password" id="ip_password" placeholder="Nhập lại mật khẩu"
                                               required />
                                            <div className="invalid-feedback">
                                                Mật khẩu hợp lệ là bắt buộc.
                                            </div>
                                        </div>







                                        <button id="changePassword_btn" className="btn btn-primary btn-lg btn-block" type="submit"> Thay đổi mật khẩu</button>


                                    </form>














                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ChangePassword;