import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants/constants";
import { login } from "../../services/authServices";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
                if (response.status === 400) {
                    //
                } else if (response.status === 401) {
                    //
                } else if (response.status === 200) {
                    //
                    const resq = await response.json();// dữ liệu json
                    if (resq.access_token !== '' && resq.access_token !== undefined) {
                        // Store the tokens in localStorage or secure cookie for later use
                        localStorage.setItem(ACCESS_TOKEN, resq.access_token);
                        localStorage.setItem(REFRESH_TOKEN, resq.refresh_token);

                        // toast.success(resq.message);
                        navigate('/');
                        window.location.reload();
                        
                    } else {
                        // toast.error(resq.message); // Hiển thị thông báo lỗi từ API trong giao diện
                    }
                }
            }
        } catch (err) {
            toast.error('Failed: ' + err.message); // Hiển thị thông báo lỗi trong giao diện
        }
    };




    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    };

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
                                    <form className="container" onSubmit={ProceedLogin}>
                                        <div className="row">
                                            <div className="col-lg-12 mb-4">
                                                <div className="form-group">
                                                    <label htmlFor="username" className="form-label">Tên đăng nhập</label>
                                                    <input
                                                        id="username"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        className="form-control"
                                                        placeholder="Tên đăng nhập"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-4">
                                                <div className="form-group">
                                                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                                                    <div className="input-group">
                                                        <input
                                                            id="password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            type={showPassword ? 'text' : 'password'}
                                                            className="form-control"
                                                            placeholder="Mật khẩu"
                                                        />
                                                        {/* <div className="input-group-append">
                                                            <button
                                                                className="btn btn-outline-secondary"
                                                                type="button"
                                                                onClick={togglePasswordVisibility}
                                                            >
                                                                {showPassword ? 'Ẩn' : 'Hiện'}
                                                            </button>
                                                        </div> */}
                                                        {/* <div className="input-group-append">
                                                            <button
                                                                className="btn btn-outline-secondary"
                                                                type="button"
                                                                onClick={togglePasswordVisibility}
                                                            >
                                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                            </button>
                                                        </div> */}

                                                        <div class="input-group-append show-pass">
                                                                        <span class="input-group-text" onClick={() => togglePasswordVisibility('new-password')}> 
                                                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                                         </span>
                                                                    </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg btn-block">
                                            Đăng nhập
                                        </button>
                                    </form>
                                    <hr />
                                    <p className="d-flex my-3 justify-content-center-login">

                                        <a href="/resetPassword"> Quên mật khẩu? </a>
                                    </p>
                                    <p className="d-flex my-3 justify-content-center-login">
                                        Bạn chưa có tài khoản?
                                        <a href="/registration"> Đăng ký </a>
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

export default Login;