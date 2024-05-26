import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = (props) => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState("");

	useEffect(() => {
		console.log("header");
		let temp = sessionStorage.getItem('username');
		if (temp && temp !== userName) {
			setUserName(temp);
		}
	}, [userName]);

	function logout() {
		sessionStorage.clear();
		navigate('/login')
	}



	const [record, setRecord] = useState('');

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
			searchRecords();
		}
	};

	const searchRecords = () => {
		console.log("Search Keyword ", record);
		navigate(`/places?keyword=${record}`);//API GET có param
	}


	return (
		<div>
			<header className="header">


				<div className="top_bar">
					<div className="container">
						<div className="row">
							<div className="col d-flex flex-row">
								<div className="phone">+45 345 3324 56789</div>
								<div className="social">
									<ul className="social_list">
									</ul>
								</div>
								<div className="user_box ml-auto">
							

									{/* <div className="user_box_register user_box_link dropdown" data-toggle="dropdown">
										<a href="/registration"><i className="bi bi-person-circle"></i></a></div> */}

									{sessionStorage.getItem('username') ? (
										<div>
											<div className="user_box_login user_box_link">
												<a href="/profile">{userName}</a>
											</div>

											<div className="user_box_logout user_box_link" style={{ color: 'white' }} onClick={logout}>
												Đăng xuất
											</div>
										</div>
									) : (
										<div>
											<div className="user_box_login user_box_link">
												<a href="/login">Đăng nhập</a>
											</div>
											<div className="user_box_register user_box_link">
												<a href="/registration">Đăng ký</a>
											</div>
										</div>
									)}

								</div>
							</div>
						</div>
					</div>
				</div>


				<nav className="main_nav">
					<div className="container">
						<div className="row">
							<div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
								<div className="logo_container">
									<div className="logo"><a href="/"><img src="images/logo.png" alt="" />travelix</a></div>
								</div>
								<div className="main_nav_container ml-auto">
									<ul className="main_nav_list">
										<li className="main_nav_item"><a href="/about">Giới thiệu</a></li>

										<li className="main_nav_item"><a href="/places">Địa điểm</a></li>
										<li className="main_nav_item"><a href="/itinerarie">Kế Hoạch</a></li>
										<li className="main_nav_item"><a href="/like">Yêu Thích</a></li>
										<li className="main_nav_item"><a href="/contact">Liên Hệ</a></li>

										{/* <li className="main_nav_item"><a href="/map">Map</a></li> */}
									</ul>


								</div>
						


								<form id="search_form" className="search_form bez_1">
									<input id="searchInput"
										type="text"
										placeholder="Tìm kiếm ..."
										className="search_content_input bez_1"
										value={record}
										onChange={(event) => setRecord(event.target.value)}
										onKeyDown={handleKeyDown}
									/>
								</form>
								
							



								<div className="hamburger">
									<i className="fa fa-bars trans_200"></i>
								</div>
							</div>
						</div>
					</div>
				</nav>

			</header >
			<div className="menu trans_500">
				<div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
					<div className="menu_close_container"><div className="menu_close"></div></div>
					<div className="logo menu_logo"><a href="/"><img src="images/logo.png" alt="" /></a></div>
					<ul>
						<li className="menu_item"><a href="/">home</a></li>
						<li className="menu_item"><a href="about.html">about us</a></li>
						<li className="menu_item"><a href="offers.html">offers</a></li>
						<li className="menu_item"><a href="blog.html">news</a></li>
						<li className="menu_item"><a href="contact.html">contact</a></li>
					</ul>
				</div>
			</div>
		</div >





	);

}

export default Header;