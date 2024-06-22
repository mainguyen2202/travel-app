import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SERVER_URL } from "../../constants/constants";
import { register } from "../../services/authServices";


const Registration = (props) => {
    const navigate = useNavigate();
    const [username, usernamechange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, emailchange] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!isPasswordMatch()) {
            toast.warning('Password and Confirm Password do not match');
            return;
        }

        if (!isInputValid()) {
            return;
        }

        const regObj = {
            username,
            name,
            password,
            email
        };

        try {
            // const response = await fetch(`${SERVER_URL}/auth/register`, {
            //     method: "POST",
            //     headers: { 'content-type': 'application/json' },
            //     body: JSON.stringify(regObj)
            // });

            const response = await register(username,
                name,
                email,
                password);
            console.log(response);
            if (response.ok) {// có dữ liệu trả về
                if (response.status == 400) {
                    //
                } else if (response.status == 401) {
                    //
                } else if (response.status == 200) {
                    //
                    const data = await response.json();
                    if (data !== null) {
                        navigate('/login');
                        toast.success(data.message);
                    } else {
                        toast.error(data.message); // Hiển thị thông báo lỗi từ API trong giao diện
                    }
                }
            }
        } catch (err) {
            toast.error('Failed: ' + err.message); // Hiển thị thông báo lỗi trong giao diện
        }
    };

    const isPasswordMatch = () => {
        return password == confirmPassword;
    };

    const isInputValid = () => {
        if (!username) {
            toast.warning('Please enter Username');
            return false;
        } else if (!name) {
            toast.warning('Please enter Fullname');
            return false;
        } else if (!password) {
            toast.warning('Please enter Password');
            return false;
        } else if (!email) {
            toast.warning('Please enter Email');
            return false;
        } else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))) {
            toast.warning('Please enter a valid email');
            return false;
        }

        return true;
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
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Đăng ký</h1>
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
                                    <form className="container" onSubmit={handleRegister}>
                                        <div className="row">
                                            <div className="col-lg-12 mb-4">
                                                <div className="form-group">
                                                    <label htmlFor="username" className="form-label">Tên đăng nhập</label>
                                                    <input id="username" value={username} onChange={e => usernamechange(e.target.value)} className="form-control" placeholder="Tên đăng nhập" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-4">
                                                <div className="form-group">
                                                    <label htmlFor="name" className="form-label">Họ và tên</label>
                                                    <input id="name" value={name} onChange={e => namechange(e.target.value)} className="form-control" placeholder="Họ và tên" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="form-group">
                                                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                                                    <input id="password" value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control" placeholder="Mật khẩu" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="form-group">
                                                    <label htmlFor="confirmPassword" className="form-label">Nhập lại mật khẩu</label>
                                                    <input id="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="form-control" placeholder="Nhập lại mật khẩu" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-4">
                                                <div className="form-group">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input id="email" value={email} onChange={e => emailchange(e.target.value)} className="form-control" placeholder="Email" />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg btn-block">Đăng ký</button>
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