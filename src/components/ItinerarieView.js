import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';

import { Fragment } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

const ItinerarieView = (props) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const itinerarieId = searchParams.get('itinerarie_id');
  const [detailItinerarie, setDetailItinerarie] = useState([]);
  const [itineraryArticles, setItineraryArticles] = useState([]);


  // START: googlemap
  const [markers, setMarkers] = useState([]);// mảng dữ liệu
  const myLocaction = {
    lat: 10.744890604860146,
    lng: 106.72973747516444
  };
  const { isLoaded } = useJsApiLoader({
   googleMapsApiKey: 'mai_AIzaSyBteHKcrWBm8HhuQwy0wxYmFbKDJNcAYU8',
    libraries: ['places'],
  });
  const [idActiveMarker, setIdActiveMarker] = useState(null);// tham số lưu thông tin key của vị trí đang click chọn

  const handleActiveMarker = (idMarker) => {
    console.log("id", idMarker, idActiveMarker);
    if (idMarker === idActiveMarker) {
      return;
    }
    setIdActiveMarker(idMarker);
  };
  // END: googlemap

  useEffect(() => {

    fetchInitData();// sử dụng hàm lấy danh sách mới nhất

    getDetailByItineraryId();
  }, [itinerarieId]);


  const getDetailByItineraryId = async (e) => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/itineraries/detail/${itinerarieId}`);
      if (response.ok) {
        const itinerarieData = await response.json();
        setDetailItinerarie(itinerarieData);


        setName(itinerarieData.name); // Assign the value to name state variable
        setContent(itinerarieData.content); // Assign the value to content state variable
        setDateStart(itinerarieData.dateStart); // Assign the value to dateStart state variable
        setDateEnd(itinerarieData.dateEnd); // Assign the value to dateEnd state variable
      } else {
        console.log('Failed to fetch itinerary data');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };





  // tạo hàm xử lí lấy danh sách
  const fetchInitData = async () => {
    const itineraryArticlesResponse = await fetch(`http://127.0.0.1:8080/itineraryArticles/listBySearch/${itinerarieId}`);
    console.log(itineraryArticlesResponse);
    if (itineraryArticlesResponse.ok) {
      const itineraryArticlesData = await itineraryArticlesResponse.json();
      console.log(itineraryArticlesData);
      if (itineraryArticlesData.length > 0) {
        console.log(itineraryArticlesData);
        setItineraryArticles(itineraryArticlesData);

        // START: map
        let ltsMarkers = itineraryArticlesData.map(item => ({
          id: item.articles.id,
          name: item.articles.places.name,
          position: {
            lat: parseFloat(item.articles.places.coordinates.latitude),
            lng: parseFloat(item.articles.places.coordinates.longitude)
          }
        }));
        setMarkers(ltsMarkers);
        console.log("Markers", ltsMarkers, markers);
        // END: map

      }
    } else {
      console.error('Error:', itineraryArticlesResponse.status);
    }


  };
  


  return (
    <div>
      <div className="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
            style={{ height: '465px' }}
          >
            <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
              <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Itinerarie</span></p>
              <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Itinerarie</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <div className="row">


            <div className="col-lg-3 sidebar order-md-first ftco-animate ">
              <div className="sidebar-wrap ftco-animate">




                <form className="container">
                  <div className="mb-3 mt-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tên kế hoạch</label>
                    <input value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Tên kế hoạch" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dateStart" className="form-label">Ngày bắt đầu:</label>
                    <input type="date" id="dateStart" className="form-control" value={dateStart} onChange={e => setDateStart(e.target.value)} required />
                  </div>
                  <div className="mb-3 mt-4">
                    <label htmlFor="dateEnd" className="form-label">Ngày kết thúc:</label>
                    <input type="date" id="dateEnd" className="form-control" value={dateEnd} onChange={e => setDateEnd(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Ghi chú</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" placeholder="Ghi chú" />
                  </div>
                  {/* <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Cập nhật</button>
                                    </div> */}
                </form>



              </div>

            </div>

            <div className="col-lg-9" >
              <div className="reservation-form" >
                {/* <div className="container"> */}
                <div className="row">
                  {/* <div className="col-lg-12"> */}

                  <div id="map">


                  <Fragment>
                    <div className="container">
                        <div style={{ height: "90vh", width: "100%" }}>
                            {isLoaded ? (
                                <GoogleMap
                                    center={myLocaction}
                                    zoom={15}
                                    onClick={() => setIdActiveMarker(null)}
                                    mapContainerStyle={{ width: "100%", height: "90vh" }}
                                >
                                    {markers.map((item) => (
                                        <MarkerF
                                            key={item.id}
                                            position={item.position}
                                            onClick={() => handleActiveMarker(item.id)}
                                        // icon={{
                                        //   url:"https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
                                        //   scaledSize: { width: 50, height: 50 }
                                        // }}
                                        >
                                            {
                                                idActiveMarker === item.id ? (
                                                    <InfoWindowF
                                                        onCloseClick={() => setIdActiveMarker(null)}
                                                    >
                                                        <div>
                                                            <p>{item.name}</p>
                                                        </div>
                                                    </InfoWindowF>
                                                ) : null
                                            }

                                        </MarkerF>
                                    ))}
                                </GoogleMap>
                            ) : null}
                        </div>
                    </div>
                </Fragment>





                  </div>
                  {/* </div> */}

                </div>
                {/* </div> */}
              </div>


              <div className="row">
                {itineraryArticles.map((itineraryArticle, i) => (
                  <div className="col-sm col-md-6 col-lg-4 ftco-animate" key={i}>
                    <div className="destination" style={{ boxShadow: '0px 2px 10px #d9d9d9' }}>
                      <div className="card">
                        <Link to={`/detail?article_id=${itineraryArticle.articles.id}`}>
                          <img src="./image1/home/hoChiMinh.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="one">
                              <Link to={`/detail?article_id=${itineraryArticle.articles.id}`}>{itineraryArticle.articles.id}</Link>
                              <h3><a href="">{itineraryArticle.articles.name}</a></h3>
                              <p className="rate">
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star-o"></i>
                              </p>
                            </div>
                            <div className="two"></div>
                          </div>
                          <p>{itineraryArticle.articles.description}</p>
                          <hr />
                          <div>
                            <div className="bottom-area d-flex">
                              <a href="/Like" className="like" title="Thích" data-toggle="tooltip">
                                <span className="s18_s"><i className="material-icons">favorite_border</i></span>
                              </a>

                              <a href="/Like" className="like" title="Xóa" data-toggle="tooltip">
                                <span className="s18_s">  <i className="material-icons">&#xE872;</i></span>
                              </a>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>


              <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      <li><a href="#">&lt;</a></li>
                      <li className="active"><span>1</span></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&gt;</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
    </div >
  )
}

export default ItinerarieView;