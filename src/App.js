// import './App.css';
import React, { useEffect } from "react";
import Footer from './components/headerFooter/Footer';
import Header from './components/headerFooter/Header';

import { ToastContainer, Zoom } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/homes/Home';
import About from './components/homes/About';
import Places from './components/place/Places';
import Contact from './components/homes/Contact';
import Like from './components/homes/Like';
import PlacesSingle from './components/place/PlacesSingle';
import Itinerarie from './components/Itinerarie/Itinerarie';
import ItinerarieView from './components/Itinerarie/ItinerarieView';
import Login from './components/Profile/Login';
import Registration from './components/Profile/Registration';
import ForgotPassword from './components/Profile/ForgotPassword';
import Profile from './components/Profile/Profile';
// import ChangePassword from './components/Profile/ChangePassword';
import ResetPassword from './components/Profile/ResetPassword';

function App() {
	useEffect(() => {
		console.log("app");
		console.log("key", process.env.REACT_APP_GOOGLE_MAPS_KEY);
	}, []);

	return (

		<div className="App">
			<div className='app-header'>
				<Header />
			</div>
			<div className='app-content'>
				{/* để phần con của nó */}
				{/* <Outlet /> */}
				{/* <BrowserRouter> */}
					<Routes>


						{/* index route để nó mặc định trang đầu */}
						{/* <Route index element={<Home />} /> */}
						<Route path="/" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="places" element={<Places />} />

						{/*  path - endpoint có tham số route param */}
						{/* <Route path="detail/:placeId" element={<PlacesSingle/>} />   */}
						<Route path="detail" element={<PlacesSingle />} />

						{/* // route param */}

						<Route path="itinerarie" element={<Itinerarie />} />
						<Route path="itinerarieView" element={<ItinerarieView />} />
						<Route path="like" element={<Like />} />

						<Route path="contact" element={<Contact />} />




						<Route path="login" element={<Login />} />
						<Route path="registration" element={<Registration />} />

						<Route path="profile" element={<Profile />} />
						{/* <Route path="changePassword/:userId" element={<ChangePassword />} /> */}
						<Route path="forgotPassword" element={<ForgotPassword />} />
						<Route path="resetPassword" element={<ResetPassword />} />
					</Routes>
				{/* </BrowserRouter> */}
				{/* app content */}
			</div>
			<div className='app-header'>
				<Footer />
			</div>

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

		</div>


	);
}

export default App;
