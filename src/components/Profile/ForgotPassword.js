import React, { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { apiResetPassWord } from "../../services/userServices";

const ForgotPassword = (props) => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const encodedUserId = searchParams.get('token').slice('unique_token'.length);
    const token = searchParams.get('token');

    let userId;
    try {
        const decodedUserId = atob(encodedUserId);
        userId = parseInt(decodedUserId.slice(8), 10); // Bỏ "userId=" ở đầu và chuyển đổi sang số nguyên
    } catch (error) {
        userId = null; // Nếu giải mã hoặc chuyển đổi thất bại
    }

    useEffect(() => {
    }, []);


    const ProceedThayDoiMatKhau = async (e) => {        
        e.preventDefault();
        if (validate()) {
            try {
                const response = await apiResetPassWord(token, newPassword);
                if (response.status === 200) {
                    const data = await response.data;
                    console.log(data);
                    if (data.status === 1) {
                        toast.success(data.message);
                        navigate('/login');
                    } else {
                        toast.error(data.message);
                    }
                } else {
                    console.log('Update failed');
                }
            } catch (error) {
                console.log('Error:', error);
            }
        }
    };

    const validate = () => {
        let result = true;
       
        if (newPassword === '' || newPassword === null) {
            result = false;
            toast.warning('Please enter a new password');
        }
        if (confirmPassword === '' || confirmPassword === null) {
            result = false;
            toast.warning('Please confirm the new password');
        }
        if (newPassword !== confirmPassword) {
            result = false;
            toast.warning('New password and confirm password do not match');
        }
        return result;
    };

    const [passwordVisibility, setPasswordVisibility] = useState({
            'new-password': false,
            'confirm-password': false,
    });

    const togglePasswordVisibility = (inputId) => {
        setPasswordVisibility((prevState) => ({
            ...prevState,
            [inputId]: !prevState[inputId],
        }));

        const passwordInput = document.getElementById(inputId);
        const passwordIcon = document.getElementById(`${inputId}-icon`);

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
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12">



                            <div class="content-body">
                                <div class="container-fluid">


                                    <div class="row">
                                      
                                        <div class="col-lg-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">Thay đổi mật khẩu</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="basic-form">
                                                        <form class="form-valide-with-icon" action="#" method="post">
                                                       

                                                            <div class="form-group">
                                                                <label class="text-label">Mật khẩu mới *</label>
                                                                <div class="input-group transparent-append">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                                                                    </div>
                                                                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} class="form-control" id="new-password" name="new-password" placeholder="Mật khẩu mới.." />
                                                                    <div class="input-group-append show-pass">
                                                                        <span class="input-group-text" onClick={() => togglePasswordVisibility('new-password')}> <i id="new-password-icon" class="fa fa-eye-slash"></i> Mở</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="form-group">
                                                                <label class="text-label">Nhập lại mật khẩu mới *</label>
                                                                <div class="input-group transparent-append">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                                                                    </div>
                                                                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} class="form-control" id="confirm-password" name="confirm-password" placeholder="Nhập lại mật khẩu mới" />
                                                                    <div class="input-group-append show-pass">
                                                                        <span class="input-group-text" onClick={() => togglePasswordVisibility('confirm-password')}> <i id="confirm-password-icon" class="fa fa-eye-slash"></i> Mở</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <button type="submit" onClick={(e) => { ProceedThayDoiMatKhau(e); }} class="btn btn-primary">Thay đổi mật khẩu</button>
                                                            <button type="submit" class="btn btn-light">Hủy</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForgotPassword;