

const Password = (props) => {
    return (
        <div >
            <div class="hero-wrap js-fullheight" style={{ height: '300px', backgroundImage: `url('./images/bg_1.jpg')` }}>
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

                                    <h3 class="mb-5">Quên mật khẩu</h3>








                                    <form class="frm_password" novalidate>
                                        <div class="form-outline mb-4">
                                            <input type="email" class="form-control" id="email" placeholder="Email" required />
                                            <div class="invalid-feedback">
                                                Vui lòng nhập một địa chỉ email hợp lệ để cập nhật thông tin vận chuyển.
                                            </div>
                                        </div>






                                        <button id="login_btn" class="btn btn-primary btn-lg btn-block" type="submit">  Đăng nhập</button>


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

export default Password;