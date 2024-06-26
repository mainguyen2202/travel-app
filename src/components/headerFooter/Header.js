import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from '../../constants/constants';
import { getCurrentUser } from '../../services/authServices';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import { apiLogout } from '../../services/userServices';

const Header = (props) => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState("");
	const token = localStorage.getItem(ACCESS_TOKEN);

	useEffect(() => {

		console.log("header");
		const userInfo = getCurrentUser();
		if (userInfo && userInfo.sub !== userName) {
			setUserName(userInfo.sub);
			console.log("userName", userInfo.sub);
		}
	}, [userName]);




	function logout() {
		try {
			apiLogout();
			localStorage.removeItem(ACCESS_TOKEN);
			navigate('/login');
			// Thực hiện các bước logout ở phía client (xóa token, chuyển hướng, v.v.)
		} catch (error) {
			console.error('Error logging out:', error);
		}
	}


	// Thêm logic JavaScript
	const [showSearchInput, setShowSearchInput] = useState(false);

	const [record, setRecord] = useState('');
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
			handleSearch(event);
			window.location.reload();
		}
	};

	const handleSearch = (event) => {
		event.preventDefault(); // Ngăn chặn hành vi mặc định của form
		searchRecords();

		console.log('Tìm kiếm:', record);
		setShowSearchInput(false); // Ẩn thanh input sau khi tìm kiếm
	};

	const searchRecords = () => {
		console.log("Search Keyword ", record);
		navigate(`/places?keyword=${record}`); // API GET có param
	};








	// const handleKeyDown = (event) => {
	// 	if (event.key === 'Enter') {
	// 		event.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
	// 		searchRecords();
	// 	}
	// };

	// const searchRecords = () => {
	// 	console.log("Search Keyword ", record);
	// 	navigate(`/places?keyword=${record}`);//API GET có param
	// }
	// const [searchKeyword, setSearchKeyword] = useState('');
	const [activePage, setActivePage] = useState('home');
	const NavigationLink = ({
		href,
		label,
		activePage,
		setActivePage,
		pageKey,
	}) => (
		<Nav.Link
			href={href}
			className={`nav-link-custom ${activePage === pageKey ? 'active' : ''}`}
			onClick={() => setActivePage(pageKey)}
		>
			{label}
		</Nav.Link>
	);



	return (
		<div>
			<header className="header">
				<div className="top_bar">
					<div className="container">
						<div className="row">
							<div className="col d-flex flex-row">
								<div className="phone">+78 801 3946</div>
								<div className="social">
									<ul className="social_list">
										{/* Các mạng xã hội */}
									</ul>
								</div>
								<div className="user_box ml-auto">
									{(token) ? (
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
				<div className="container">
					<Navbar expand="lg" className="main_nav bg-body-tertiary">
						<Container fluid>
							<Navbar.Brand href="/">
								<div className="logo">
									<a href="/">
										<img src="images/logo.png" alt="" />Travelix
									</a>
								</div>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="navbarScroll" />
							<div className="main_nav_container ml-auto">
								<Navbar.Collapse id="navbarScroll">
									<Nav
										className="me-auto my-2 my-lg-0"
										style={{ maxHeight: '100px' }}
										navbarScroll
									>
										<NavigationLink
											href="/about"
											label="Giới Thiệu"
											activePage={activePage}
											setActivePage={setActivePage}
											pageKey="about"
										/>
										<NavigationLink
											href="/places"
											label="Địa Điểm"
											activePage={activePage}
											setActivePage={setActivePage}
											pageKey="places"
										/>
										<NavigationLink
											href="/itinerarie"
											label="Kế Hoạch"
											activePage={activePage}
											setActivePage={setActivePage}
											pageKey="itinerarie"
										/>
										<NavigationLink
											href="/like"
											label="Yêu Thích"
											activePage={activePage}
											setActivePage={setActivePage}
											pageKey="like"
										/>
										<NavigationLink
											href="/contact"
											label="Liên Hệ"
											activePage={activePage}
											setActivePage={setActivePage}
											pageKey="contact"
										/>
									</Nav>

									<div className="search_box">
										{showSearchInput ? (
											<Form className="d-flex" onSubmit={handleSearch}>
												<FormControl
													id="searchInput"
													type="text"
													placeholder="Tìm kiếm ..."
													className="search_content_input bez_1"
													value={record}
													onChange={(event) => setRecord(event.target.value)}
													onKeyDown={handleKeyDown}
												/>
											</Form>
										) : (
											// <div className="search_icon" onClick={() => setShowSearchInput(true)}>
											// 	<i className="fas fa-search" style={ {color: 'white'}}></i>
											// 	<SearchIcon />
											// 	{/* <FaSearch /> */}
											// 	{/* <SearchIcon /> */}

											// </div>

											<div className="search_icon" onClick={() => setShowSearchInput(true)}>
												<i className="fas fa-search" style={{ color: 'white' }}></i>
												<SearchIcon style={{ color: 'white', height: '50%', marginTop: '5px' }} />
											</div>
										)}
									</div>

								</Navbar.Collapse>
							</div>
						</Container>
					</Navbar>
				</div>
			</header>




		</div>


	);

}


export default Header;