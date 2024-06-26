import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiForgotPassword } from "../../services/userServices";

const ResetPassword = (props) => {

    const [email, setEmail] = useState('');

     // Login bình thường
     const ProceedReset = async (e) => {
        e.preventDefault();
      
        const loginDTO = {
            email: email
        };
        try {
            const response = await apiForgotPassword(loginDTO);
            if (response.status === 200) {
                const data =  response.data;
                console.log(data);
                    if (data.status === 1) {
                        toast.success(data.message);
                    } else {
                        toast.error(data.message);
                    }
                }
        } catch (err) {
            toast.error('Failed: ' + err.message); // Hiển thị thông báo lỗi trong giao diện
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
                                        <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} id="val-username" name="val-username" placeholder="Email" />
                                                                     
                                            <div className="invalid-feedback">
                                                Mật khẩu hợp lệ là bắt buộc.
                                            </div>
                                        </div>

                                        <button onClick={(e) => { ProceedReset(e); }}   className="btn btn-primary btn-lg btn-block" type="submit"> Gửi</button>


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

export default ResetPassword;