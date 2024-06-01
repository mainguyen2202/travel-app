import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants/constants";
import { login } from "../../services/authServices";

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
        try {
            const response = await login(username, password);
            if (response.ok) {// có dữ liệu trả về
                if (response.status == 400) {
                    //
                } else if (response.status == 401) {
                    //
                } else if (response.status == 200) {
                    //
                    const resq = await response.json();// dữ liệu json
                    if (resq.access_token !== '' && resq.access_token !== undefined) {
                        // Store the tokens in localStorage or secure cookie for later use
                        localStorage.setItem(ACCESS_TOKEN, resq.access_token);
                        localStorage.setItem(REFRESH_TOKEN, resq.refresh_token);

                        toast.success(resq.message);
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


    const [passwordVisibility, setPasswordVisibility] = useState({
        'password': false,
    });

    const passwordInputRef = useRef(null);
    const passwordIconRef = useRef(null);

    const togglePasswordVisibility = (inputId) => {
        setPasswordVisibility((prevState) => ({
            ...prevState,
            [inputId]: !prevState[inputId],
        }));

        const passwordInput = passwordInputRef.current;
        const passwordIcon = passwordIconRef.current;

        if (passwordVisibility[inputId]) {
            passwordInput.type = 'text';
            passwordIcon.classList.remove('fa-eye-slash');
            passwordIcon.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            passwordIcon.classList.remove('fa-eye');
            passwordIcon.classList.add('fa-eye-slash');
        }
    };
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
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Đăng nhập</h1>
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
                                                <input id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                                            </div>


                                            <div className="form-group">
                                                <p className="textlabel">Mật khẩu</p>
                                                <div className="input-group">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className="form-control"
                                                        ref={passwordInputRef}
                                                    />
                                                    <div className="input-group-append show-pass">
                                                        <span
                                                            className="input-group-text"
                                                            onClick={() => togglePasswordVisibility('password')}
                                                        >
                                                            <i id="old-password-icon" className="fa fa-eye-slash" ref={passwordIconRef}></i>
                                                            Mở
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row remember-row">

                                            <div className="col-xs-6 col-sm-6">
                                                <p className="forgotPwd">
                                                    <a className="lnk-toggler" data-panel=".panel-forgot" href="/resetPassword">Quên mật khẩu?</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary btn-lg btn-block">Đăng nhập</button>
                                        </div>
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

export default Login;