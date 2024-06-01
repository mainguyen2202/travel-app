import React, { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SERVER_URL } from "../../constants/constants";

const Profile = (props) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const usersIdDetail = searchParams.get('users_id');
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

    const loggedInUser = sessionStorage.getItem("userInfo");
    const userInfoConvertObject = JSON.parse(loggedInUser);
    const role = userInfoConvertObject ? userInfoConvertObject.role : 0;
    const usersId = userInfoConvertObject.id;
    useEffect(() => {
        fetchdataDetailId();

    }, [usersId]);



    const fetchdataDetailId = async () => {

        console.log(usersId)
        const response = await fetch(`${SERVER_URL}/users/detail/${usersId}`); // Thay thế "your_api_url" bằng URL của API thực tế của bạn
        if (response.ok) {
            const resp = await response.json();
            setdataDetail(resp);

            setName(resp.name); // Assign the value to name state variable
            setCreateAt(resp.createAt); // Assign the value to name state variable
            setStatus(resp.status); // Assign the value to name state variable
            setImage(resp.image); // Assign the value to name state variable
            setRoleDetail(resp.role);
            setUserName(resp.username);
            setEmail(resp.email);


        }

    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const input = JSON.stringify({

                name: name,

                username: userName,
                email: email
            })
            console.log("usersId", usersId);
            const response = await fetch(`${SERVER_URL}/users/edit/${usersId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: input
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);

                if (data.status === 1) {
                    toast.success(data.message);

                    return;
                } else {
                    toast.error(data.message);
                }
            } else {
                console.log('Update failed');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };


    const ProceedThayDoiMatKhau = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const input = JSON.stringify({
                    password: newPassword,
                });
                const response = await fetch(`${SERVER_URL}/users/editPassword/${usersId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: input,
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data.status === 1) {
                        toast.success(data.message);
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
        if (oldPassword !== dataDetail.password) {
            result = false;
            toast.warning('Old password is not valid');
        }
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
        'old-password': false,
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
                                                                        <div className="col-lg-8">
                                                                            <input type="text" className="form-control" value={userName} onChange={e => setUserName(e.target.value)} id="val-username" name="val-username" placeholder="Tên đăng nhập" disabled />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-lg-4 col-form-label" for="val-username">Email
                                                                            <span className="text-danger">*</span>
                                                                        </label>
                                                                        <div className="col-lg-8">
                                                                            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} id="val-username" name="val-username" placeholder="Email" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-lg-4 col-form-label" for="val-username">Tên
                                                                            <span className="text-danger">*</span>
                                                                        </label>
                                                                        <div className="col-lg-8">
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
                                                                    <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} class="form-control" id="old-password" name="old-password" placeholder="Mật khẩu cũ .." />
                                                                    <div class="input-group-append show-pass">
                                                                        <span class="input-group-text" onClick={() => togglePasswordVisibility('old-password')}> <i id="old-password-icon" class="fa fa-eye-slash"></i>Mở </span>
                                                                    </div>
                                                                </div>
                                                            </div>

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

export default Profile;