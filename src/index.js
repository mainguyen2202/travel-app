import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Places from './components/Places';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Itinerarie from './components/Itinerarie';
import Like from './components/Like';

import PlacesSingle from './components/PlacesSingle';
import BlogSingle from './components/BlogSingle';
import ItinerarieView from './components/ItinerarieView';
import ItinerarieEdit from './components/ItinerarieEdit';
import PhanTrang from './PhanTrang/PhanTrang';
import Login from './components/Login';
import Registration from './components/Registration';
import Password from './components/Password';
import Profile from './components/Profile';
import ChangePassword from './components/ChangePassword';
import MyMapComponent from './components/MyMap';

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
          <Route path="itinerarieEdit" element={<ItinerarieEdit />} />
          <Route path="like" element={<Like />} />

          <Route path="blog" element={<Blog />} />
          <Route path="blogSingle" element={<BlogSingle />} />


          <Route path="contact" element={<Contact />} />

          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="password" element={<Password />} />
          <Route path="profile" element={<Profile />} />
          <Route path="changePassword" element={<ChangePassword />} />


          <Route path="Map" element={<MyMapComponent />} />

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
