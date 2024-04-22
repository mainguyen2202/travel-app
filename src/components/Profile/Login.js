import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {


    }, []);

    // Login bình thường
    const ProceedLogin = async (e) => {
        e.preventDefault();
        if (!validate()) {
            return;

        }
        const loginDTO = {
            username: username,
            password: password
        };
        try {
            const response = await fetch("http://127.0.0.1:8080/users/login", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(loginDTO)
            });

            console.log(response);
            if (response.ok) {// có dữ liệu trả về
                if (response.status == 400) {
                    //
                } else if (response.status == 401) {
                    //
                } else if (response.status == 200) {
                    //
                    const resq = await response.json();
                    if (resq.status == 1) {
                        sessionStorage.setItem('username', resq.data.username);// Lưu giá trị từ biến state `username`
                        
                        // Store JSON Data
                        let dataConvertString = JSON.stringify(resq.data);// convert string to object 
                        sessionStorage.setItem('userInfo', dataConvertString);

                        let name = sessionStorage.getItem('username');
                        console.log(name); // In ra giá trị username đã lưu trữ trong phiên làm việc
                        // sessionStorage.setItem('jwttoken', resp.jwtToken);
                        // sessionStorage.setItem('userrole', resp.data.role);
                        navigate('/');
                    } else {
                        toast.error(resq.message); // Hiển thị thông báo lỗi từ API trong giao diện
                    }
                }
            }
        } catch (err) {
            toast.error('Failed: ' + err.message); // Hiển thị thông báo lỗi trong giao diện
        }
    };




    const validate = () => {
        let result = true;
        if (username == '' || username == null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password == '' || password == null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    };
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







                                    <form onSubmit={ProceedLogin} className="container">
                                        <div className="card-body">
                                            <div className="form-group">
                                                <p className="textlabel3">Tên đăng nhập</p>
                                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <p className="textlabel">Mật khẩu</p>
                                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row remember-row">
                                            {/* <div className="col-xs-6 col-sm-6">
            <label className="checkbox text-left">
              <input type="checkbox" value="remember-me" />
              <span className="label-text">Nhớ mật khẩu</span>
            </label>
          </div> */}
                                            <div className="col-xs-6 col-sm-6">
                                                <p className="forgotPwd">
                                                    <a className="lnk-toggler" data-panel=".panel-forgot" href="/quenMatKhau">Quên mật khẩu?</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary btn-lg btn-block">Đăng nhập</button>
                                        </div>
                                    </form>
                                    <ToastContainer
                                        className="toast-container"
                                        toastClassName="toast"
                                        bodyClassName="toast-body"
                                        progressClassName="toast-progress"
                                        theme='colored'
                                        transition={Zoom}
                                        autoClose={5}
                                        hideProgressBar={true}
                                    ></ToastContainer>

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
                                        <input type="password" placeholder="Nhập Mật Khẩu" required />
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