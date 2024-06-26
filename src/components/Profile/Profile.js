import React, { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ACCESS_TOKEN } from "../../constants/constants";
import { getCurrentUser } from "../../services/authServices";
import { showUser, userEdit, userEditPassWord } from "../../services/userServices";
// import bcrypt from 'bcrypt';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Profile = (props) => {

    const [searchParams, setSearchParams] = useSearchParams();
    // const usersIdDetail = searchParams.get('users_id');
    const [dataDetail, setdataDetail] = useState([]);
    const [name, setName] = useState('');
    const [createAt, setCreateAt] = useState('');
    const [roleDetail, setRoleDetail] = useState('');
    const [status, setStatus] = useState(0);
    const [image, setImage] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userId, setUserId] = useState(0);

    const [PassWord, setPassWord] = useState("");

    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        const userInfo = getCurrentUser();
        if (userInfo && userInfo.USER_ID !== userId) {
            setUserId(userInfo.USER_ID);
            console.log("userId", userInfo.USER_ID);
        }
    }

    useEffect(() => {
        fetchdataDetailId();

    }, [userId]);

    const fetchdataDetailId = async () => {
        try {
            const response = await showUser(userId);
            if (response.status === 200) {
                const { name, createAt, status, image, role, username, email } = response.data;
                setdataDetail(response.data);
                setName(name);
                setCreateAt(createAt);
                setStatus(status);
                setImage(image);
                setRoleDetail(role);
                setUserName(username);
                setEmail(email);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();

        try {
            const response = await userEdit(name, userName, email, userId);

            if (response.status === 200) {
                const { status, message } = response.data;

                if (status === 1) {
                    toast.success(message);
                    return;
                } else {
                    toast.error(message);
                }
            } else {
                toast.error('Update failed');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while updating the user.');
        }
    };

    const ProceedThayDoiMatKhau = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        try {
            const response = await userEditPassWord(newPassword, userId);

            if (response.status === 200) {
                const { status, message } = response.data;

                if (status === 1) {
                    toast.success(message);
                } else {
                    toast.error(message);
                }
            } else {
                toast.error('Update failed');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while updating the password.');
        }
    };



    const validate = () => {
        let result = true;

        // Kiểm tra mật khẩu cũ
        // if (!bcrypt.compareSync(oldPassword, dataDetail.password)) {
        //   toast.warning('Old password is not valid');
        //   return false;
        // }

        if (!newPassword) {
            toast.warning('Please enter a new password');
            return false;
        }

        if (!confirmPassword) {
            toast.warning('Please confirm the new password');
            return false;
        }

        if (newPassword !== confirmPassword) {
            toast.warning('New password and confirm password do not match');
            return false;
        }

        return result;
    };


    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);

    };
    const togglePasswordVisibilityNew = () => {
        setShowNewPassword(!showNewPassword);
    };
    const togglePasswordVisibilityConf = () => {
        setShowConfirmPassword(!showConfirmPassword);
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
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Tài khoản</h1>
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
                                                    <h4 class="card-title">Tài khoản</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="form-validation">
                                                        <form className="form-valide" action="#" method="post">
                                                            <div className="row">
                                                                <div className="col-xl-12">
                                                                    <div className="form-group row">
                                                                        <label className="col-lg-4 col-form-label" for="val-username">Tên đăng nhập
                                                                            <span className="text-danger">*</span>
                                                                        </label>
                                                                        <div className="col-lg-12">
                                                                            <input type="text" className="form-control" value={userName} onChange={e => setUserName(e.target.value)} id="val-username" name="val-username" placeholder="Tên đăng nhập" disabled />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-lg-4 col-form-label" for="val-username">Email
                                                                            <span className="text-danger">*</span>
                                                                        </label>
                                                                        <div className="col-lg-12">
                                                                            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} id="val-username" name="val-username" placeholder="Email" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-lg-4 col-form-label" for="val-username">Tên
                                                                            <span className="text-danger">*</span>
                                                                        </label>
                                                                        <div className="col-lg-12">
                                                                            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} id="val-username" name="val-username" placeholder="Tên " />
                                                                        </div>
                                                                    </div>

                                                                    <div className="form-group row">
                                                                        <div className="col-lg-12 ml-auto">
                                                                            <button type="submit" className="btn btn-primary" onClick={(e) => { handleEdit(e); }}>Cập nhật</button>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h4 class="card-title">Thay đổi mật khẩu</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="basic-form">
                                                        <form class="form-valide-with-icon" action="#" method="post">
                                                            <div class="form-group">
                                                                <label class="text-label">Mật khẩu cũ *</label>
                                                                <div class="input-group transparent-append">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                                                                    </div>
                                                                    <input type={showPassword ? 'text' : 'password'} value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} class="form-control" id="old-password" name="old-password" placeholder="Mật khẩu cũ .." />
                                                                    <div class="input-group-append show-pass">
                                                                        <span class="input-group-text" onClick={() => togglePasswordVisibility('old-password')}>
                                                                            <i id="old-password-icon" class="fa fa-eye-slash"></i>

                                                                            {showPassword ? <FaEyeSlash /> : <FaEye />}</span>


                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="form-group">
                                                                <label class="text-label">Mật khẩu mới *</label>
                                                                <div class="input-group transparent-append">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                                                                    </div>
                                                                    <input type={showNewPassword ? 'text' : 'password'} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} class="form-control" id="new-password" name="new-password" placeholder="Mật khẩu mới.." />
                                                                    <div class="input-group-append show-pass">
                                                                        <span class="input-group-text" onClick={() => togglePasswordVisibilityNew('new-password')}>
                                                                            {showNewPassword ? <FaEyeSlash /> : <FaEye />}</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="form-group">
                                                                <label class="text-label">Nhập lại mật khẩu mới *</label>
                                                                <div class="input-group transparent-append">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                                                                    </div>
                                                                    <input type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} class="form-control" id="confirm-password" name="confirm-password" placeholder="Nhập lại mật khẩu mới" />
                                                                    <div class="input-group-append show-pass">
                                                                        <span class="input-group-text" onClick={() => togglePasswordVisibilityConf('confirm-password')}>
                                                                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
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

export default Profile;