import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/homes/Home';
import About from './components/homes/About';
import Places from './components/place/Places';
import Blog from './components/blog/Blog';
import Contact from './components/homes/Contact';

import Like from './components/homes/Like';

import PlacesSingle from './components/place/PlacesSingle';
import BlogSingle from './components/blog/BlogSingle';
import Itinerarie from './components/Itinerarie/Itinerarie';
import ItinerarieView from './components/Itinerarie/ItinerarieView';
import Login from './components/Profile/Login';
import Registration from './components/Profile/Registration';
import ForgotPassword from './components/Profile/ForgotPassword';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import ResetPassword from './components/Profile/ResetPassword';
import MyMapComponent from './Map/chuan/MyMap';
import MyGoogleMap from './Map/chuan/MyGoogleMap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} >
          {/* index route để nó mặc định trang đầu */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="places" element={<Places />} />
        
          {/*  path - endpoint có tham số route param */}
          {/* <Route path="detail/:placeId" element={<PlacesSingle/>} />   */}
          <Route path="detail" element={<PlacesSingle/>} />  

          {/* // route param */}

          <Route path="itinerarie" element={<Itinerarie />} />
          <Route path="itinerarieView" element={<ItinerarieView />} />
          <Route path="like" element={<Like />} />

          <Route path="blog" element={<Blog />} />
          <Route path="blogSingle" element={<BlogSingle />} />
          <Route path="contact" element={<Contact />} />




          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />

          <Route path="profile/:userId" element={<Profile />} />
          <Route path="changePassword/:userId" element={<ChangePassword />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="resetPassword/:userId/:token" element={<ResetPassword />} />
         



          {/* <Route path="Map" element={<MyMapComponent />} /> */}
          {/* <Route path="Map" element={<MyGoogleMap />} /> */}

          {/* <Route path="PhanTrang" element={<PhanTrang />} /> */}

        </Route>



      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
