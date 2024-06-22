import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { contactsCreate } from "../../services/contactsServices";

const Contact = (props) => {
  const [name, namechange] = useState("");
  const [mess, messchange] = useState("");
  const [subject, subjectchange] = useState("");
  const [email, emailchange] = useState("");
  useEffect(() => {



  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();



    if (!isInputValid()) {
      return;
    }


    try {
      const response = await contactsCreate(email, name, mess, subject);
      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        if (data.status == 1) {
          toast.success(data.message);
          return;
        }

        else {
          toast.error(data.message);
        }
      } else if (response.status == 400) {
        // Xử lý khi có lỗi 400 (Bad Request)
      } else if (response.status == 401) {
        // Xử lý khi có lỗi 401 (Unauthorized)
      } else {
        // Xử lý khi có lỗi khác
      }
    } catch (err) {
      toast.error('Failed: ' + err.message); // Hiển thị thông báo lỗi trong giao diện
    }
  };


  const isInputValid = () => {
    if (!name) {
      toast.warning('Please enter Họ và Tên');
      return false;
    } else if (!subject) {
      toast.warning('Please enter Chủ đề');
      return false;
    } else if (!mess) {
      toast.warning('Please enter Nội dung');
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
    <div>
      <div className="hero-wrap js-fullheight" style={{ height: '300px', backgroundImage: `url('./images/bg_1.jpg')` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
            style={{ height: '465px' }}
          >
            <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
              {/* <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Contact</span></p> */}
              <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Liên hệ</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section contact-section ftco-degree-bg">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Thông tin liên hệ</h2>
            </div>
            <div className="w-100"></div>
            <div className="col-md-3">
              <p><span>Địa chỉ:</span>VQCR+GP6, Khu Phố 6, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam</p>
            </div>
            <div className="col-md-3">
              <p><span>Số điện thoại:</span> <a href="tel://1234567920">0788013946</a></p>
            </div>
            <div className="col-md-3">
              <p><span>Email:</span> <a href="20130321@st.hcmuaf.edu.vn">20130321@st.hcmuaf.edu.vn</a></p>
            </div>
            <div className="col-md-3">
              <p><span>Website</span> <a href="#">travels.com</a></p>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 order-md-last pr-md-5">
              <form id="contact-form" action="#" method="post">
                <div class="form-group">
                  <label for="name">Họ và tên</label>
                  <input value={name} onChange={e => namechange(e.target.value)} type="text" class="form-control" id="name" name="name" placeholder="Họ và tên" required />

                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input value={email} onChange={e => emailchange(e.target.value)} type="email" class="form-control" id="email" name="email" placeholder="Email" required />

                </div>
                <div class="form-group">
                  <label for="subject">Chủ đề</label>
                  <input value={subject} onChange={e => subjectchange(e.target.value)} type="text" class="form-control" id="subject" name="subject" placeholder="Chủ đề" required />
                </div>
                <div class="form-group">
                  <label for="message">Tin nhắn</label>
                  <textarea value={mess} onChange={e => messchange(e.target.value)} class="form-control" id="message" name="message" rows="7" placeholder="Tin nhắn" required></textarea>
                </div>
                <button type="submit" onClick={(e) => { handleCreate(e); }} class="btn btn-primary py-3 px-5">Gửi</button>
              </form>

            </div>

            <div className="col-md-6">
              {/* <!-- Map --> */}
              <div class="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2156930380256!2d106.78957711425707!3d10.871192760411297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRwLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1636529721564!5m2!1svi!2s"
                  width="100%" height="500px" frameborder="0"
                  //  style="border:0" 
                  allowfullscreen=""></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact;