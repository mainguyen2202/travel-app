import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer,  Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


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
            const response = await fetch("http://127.0.0.1:8080/users/registration", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regObj)
            });

            console.log(response);
            if (response.ok) {// có dữ liệu trả về
                if (response.status == 400) {
                    //
                } else if (response.status == 401) {
                    //
                } else if (response.status == 200) {
                    //
                    const data = await response.json();
                    if (data.status == 1) {
                        // toast.success(data.message);
                        navigate('/login');
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
            <div className="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
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
                                    {/* <div className="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Name" />
                                    </div> */}



                                    <form className="container" onSubmit={handleRegister}>
                                        {/* <div className="card"> */}

                                        {/* <div className="card-body"> */}



                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <p className="textlabel3" >    Tên đăng nhập</p>
                                                    <input value={username} onChange={e => usernamechange(e.target.value)} className="form-control" placeholder="Tên đăng nhập" ></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <p className="textlabel" >Họ và tên</p>

                                                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control" placeholder="Họ và tên" ></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">

                                                    <p className="textlabel" >Mật khẩu </p>
                                                    <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control" placeholder="Mật khẩu"></input>
                                                </div>
                                                <div className="form-group">
                                                    <p className="textlabel1" >Nhập lại mật khẩu</p>

                                                    <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="form-control" placeholder="Nhập lại mật khẩu"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <p className="textlabel2" >Email</p>

                                                    <input value={email} onChange={e => emailchange(e.target.value)} className="form-control" placeholder="Email"></input>
                                                </div>
                                            </div>




                                        </div>

                                        {/* </div> */}
                                        {/* <div className="card-footer"> */}
                                        <button type="submit" className="btn btn-primary btn-lg btn-block">Đăng ký</button> |
                                        {/* <Link to={'/login'} className="btn btn-danger btn-lg btn-block">Đóng</Link> */}
                                        {/* </div> */}
                                        {/* </div> */}
                                    </form>
                                    {/* <ToastContainer theme='colored' transition={Zoom} autoClose={5} hideProgressBar={true}></ToastContainer> */}
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