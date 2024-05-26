import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

import { Fragment } from "react";
import {
  GoogleMap,
  InfoWindowF,
  DirectionsRenderer,
  MarkerF,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

const ItinerarieView = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const itinerarieId = searchParams.get('itinerarie_id');

  const [name, setName] = useState('');
  const [participantCount, setParticipantCount] = useState();
  const [content, setContent] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [detailItinerarie, setDetailItinerarie] = useState([]);
  const [itineraryArticles, setItineraryArticles] = useState([]);
  const [popupIsOpen, setPopupIsOpen] = useState(true);
  const [itineraryArticlesId, setItineraryArticlesId] = useState(-1);
  const [dateStartByItineraryArticles, setDateStartByItineraryArticles] = useState(null);
  const [dateStartItineraryArticles, setDateStartItineraryArticles] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceParticipantCount, setTotalPriceParticipantCount] = useState(0);

  useEffect(() => {
    console.log("key", process.env.REACT_APP_GOOGLE_MAPS_KEY);
    console.log("input", itinerarieId);
    fetchInitData(itinerarieId, dateStartItineraryArticles);// sử dụng hàm lấy danh sách mới nhất

    getDetailByItineraryId(itinerarieId);


  }, [itinerarieId]);

  const getDetailByItineraryId = async (e) => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/itineraries/detail/${itinerarieId}`);
      if (response.ok) {
        const itinerarieData = await response.json();
        setDetailItinerarie(itinerarieData);


        setName(itinerarieData.name); // Assign the value to name state variable
        setParticipantCount(itinerarieData.participantCount); // Assign the value to name state variable
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
  const fetchInitData = async (inItinerarieId, inputDateStart) => {
    console.log("list", inItinerarieId, inputDateStart);

    const itineraryArticlesResponse = await fetch(`http://127.0.0.1:8080/itineraryArticles/listBySearch?itineraries_id=${inItinerarieId}&date_start=${inputDateStart}`);
    console.log(itineraryArticlesResponse);
    if (itineraryArticlesResponse.ok) {
      const itineraryArticlesData = await itineraryArticlesResponse.json();
      console.log(itineraryArticlesData);
      if (itineraryArticlesData.length > 0) {
        console.log(itineraryArticlesData);
        setItineraryArticles(itineraryArticlesData);
        // START: map
        console.log("GPSlocaction", userLocation);

        let ltsMarkers = [];
        if (userLocation) {
          // Khi nhấn tìm kiếm thì cần xóa hết dữ liệu ở marker và khởi tạo lại điểm vị trí của tôi
          ltsMarkers.push({
            id: -1,
            name: "Vị trí của tôi",
            position: {
              lat: parseFloat(userLocation.lat),
              lng: parseFloat(userLocation.lng)
            }
          });
        } else {
          ltsMarkers = [];// Khi lần đầu thì sẽ có 1 giá trị (vị trí của tôi)
          markers.map(item => {
            if (item.id == -1) {
              ltsMarkers.push(item);
            }
          });
        }

        itineraryArticlesData.map(item => {
          ltsMarkers.push(
            {
              id: item.id,
              name: item.articles.name,
              position: {
                lat: parseFloat(item.articles.latitude),
                lng: parseFloat(item.articles.longitude)
              }
            }
          );
        }
        );
        setMarkers(ltsMarkers);
        console.log("GPSmarkers", ltsMarkers, markers);
        // END: map



        // Tính tổng giá (price) của các phần tử trong mảng itineraryArticlesData.articles.price
        // Sử dụng phương thức map để tạo mảng mới chỉ chứa giá (price)
        const prices = itineraryArticlesData.map(item => item.articles.price);

        console.log(prices); // In ra mảng giá

        // Tính tổng giá của các phần tử trong mảng prices
        const totalPrice = prices.reduce((accumulator, price) => accumulator + price, 0);

        console.log("Tổng giá trên 1 người:", totalPrice); // In ra tổng giá
        setTotalPrice(totalPrice);

        itineraryArticlesData.forEach(item => {
          const participantCount = item.itineraries.participantCount;
          console.log("participantCount: " + participantCount);
          const itemTotalPrice = totalPrice * participantCount;
          setTotalPriceParticipantCount(itemTotalPrice);
        });
        // END
      }
    } else {
      console.error('Error:', itineraryArticlesResponse.status);
    }
  };



  const findByDate = async (e, indateStart) => {
    e.preventDefault();
    console.log("click dateStart", indateStart);
    setDateStartItineraryArticles(indateStart);

    fetchInitData(itinerarieId, indateStart);
  }
  const findByAllDate = async (e) => {
    e.preventDefault();
    console.log("click itinerarieId", itinerarieId);
    setDateStartItineraryArticles(""); // Đặt giá trị rỗng cho trường input ngày

    fetchInitData(itinerarieId, "");
  }

  const getDetailById = async (e, itineraryArticlesId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/itineraryArticles/detail/${itineraryArticlesId}`);
      if (response.ok) {
        const itinerarieData = await response.json();

        setItineraryArticlesId(itinerarieData.id);
        setDateStartByItineraryArticles(itinerarieData.dateStart); // Assign the value to dateStart state variable
      } else {
        console.log('Failed to fetch itinerary data');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleEdit = async (e, itineraryArticlesId) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:8080/itineraryArticles/edit/${itineraryArticlesId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          dateStart: dateStartByItineraryArticles, // Ngày bắt đầu mới
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.status == 1) {
          toast.success(data.message);
          setItineraryArticles(prevData => prevData.filter(item => item.id !== itineraryArticlesId));
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

  const handleRemove = async (e, itineraryArticlesId) => {
    e.preventDefault();

    try {
      const result = await Swal.fire({
        title: 'Bạn có chắc không?',
        text: "Bạn sẽ không thể hoàn nguyên điều này!",
        icon: 'cảnh báo',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý'
      });

      if (result.isConfirmed) {
        const response = await fetch(`http://127.0.0.1:8080/itineraryArticles/remove/${itineraryArticlesId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);

          if (data.status === 1) {
            toast.success(data.message);
            // Xóa mục hàng khỏi state data
            setItineraryArticles(prevData => prevData.filter(item => item.id !== itineraryArticlesId));
          } else {
            toast.error(data.message);
          }
        } else {
          console.log('Deletion failed');
        }
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const handleFormSubmit = () => {
    // Sử dụng giá trị dateStartItineraryArticles ở đây
    console.log(dateStartItineraryArticles);
  };

  const closePopup = () => {
    setPopupIsOpen(false);
  };

  // START: googlemap
  const [markers, setMarkers] = useState([]);// mảng dữ liệu
  const [distanceValue, setDistanceValue] = useState(0);
  const [durationValue, setDurationValue] = useState(0);
  const [distanceText, setDistanceText] = useState(0);
  const [durationText, setDurationText] = useState(0);

  const [myDirections, setMyDirections] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBteHKcrWBm8HhuQwy0wxYmFbKDJNcAYU8-mai',
    // googleMapsApiKey: 'AIzaSyAbThV6ttKtmZfS0MzamJKiwo7d6JXrIu8-mai',
    // googleMapsApiKey:'AIzaSyD7bAY6_F5ZzXkGoCSybQXSwKF_SATQQlQ-mai',
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    libraries: ['places'],
  });
  const [idActiveMarker, setIdActiveMarker] = useState(null);// tham số lưu thông tin key của vị trí đang click chọn

  const handleActiveMarker = (inIdMarker, inPositionMarker) => {
    console.log("id", inIdMarker, idActiveMarker);
    if (inIdMarker == idActiveMarker) {
      return;
    }
    setIdActiveMarker(inIdMarker);
    fetchDirections(inPositionMarker);
  };

  // /*
  const [userLocation, setUserLocation] = useState(null);

  // define the function that finds the users geolocation
  const getUserLocation = () => {
    console.log("getUserLocation");
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          if (userLocation == null) {
            markers.push(
              {
                id: -1,
                name: "Vị trí của tôi",
                position: {
                  lat: parseFloat(latitude),
                  lng: parseFloat(longitude)
                }
              }
            );
            setMarkers(markers);
            console.log("GPSmarkers", markers);
          }
          // gán phần tử đầu tiên làm vị trí trung tâm của bản đồ
          // update the value of userlocation variable
          setUserLocation({ lat: latitude, lng: longitude });
          console.log("GPSlocaction", userLocation);
        },
        // if there was an error getting the users location
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  if (!isLoaded) {
    // tìm kiếm vị trí của tôi
    getUserLocation();
    return
  }
  // */
  // END: googlemap

  // START: direction map
  // /*
  const google = window.google;

  const commutesPerYear = 260 * 2;
  const litresPerKM = 10 / 100; //10 lít trên 100km
  const gasLitreCost = 1.5; // chi phí săn
  const litreCostKM = litresPerKM * gasLitreCost;
  const secondsPerDay = 60 * 60 * 24; // khoảng thời gian

  const fetchDirections = (destination) => {
    if (!userLocation) return;

    const directionsService = new google.maps.DirectionsService();

    // const origin = { lat: 40.756795, lng: -73.954298 };
    // const destination = { lat: 41.756795, lng: -78.954298 };

    // Gọi API của Google Map tìm đường đi
    directionsService.route(
      {
        origin: userLocation,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setMyDirections(result);
          console.log("fetchDirections", result);
          setDistanceValue(result.routes[0].legs[0].distance.value);
          setDurationValue(result.routes[0].legs[0].duration.value);

          const cost = Math.floor(
            (setDistanceValue / 1000) * litreCostKM * commutesPerYear
          );

          setDistanceText(result.routes[0].legs[0].distance.text);
          setDurationText(result.routes[0].legs[0].duration.text);

          // Tính tổng giá của các phần tử trong mảng prices

        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }
  // */
  // END: direction map

  return (
    <div>
      <div className="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
            style={{ height: '465px' }} >
            <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
              {/* <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Itinerarie</span></p> */}
              <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Kế hoạch</h1>
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
                    <input value={name} className="form-control" placeholder="Tên kế hoạch" disabled />
                  </div>

                  <div className="mb-3 mt-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Số lượng người tham gia</label>
                    <input

                      value={participantCount}
                      className="form-control"
                      placeholder="Số lượng người tham gia"
                      disabled />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="dateStart" className="form-label">Ngày bắt đầu:</label>
                    <input type="date" id="dateStart" className="form-control" value={dateStart} onChange={e => setDateStart(e.target.value)} required disabled />
                  </div>
                  <div className="mb-3 mt-4">
                    <label htmlFor="dateEnd" className="form-label">Ngày kết thúc:</label>
                    <input type="date" id="dateEnd" className="form-control" value={dateEnd} onChange={e => setDateEnd(e.target.value)} required disabled />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Ghi chú</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" placeholder="Ghi chú" disabled />
                  </div>
                </form>

                <form className="container">
                  <button type="button" className="btn btn-primary" onClick={findByAllDate}>Xem tất cả</button>
                  <div className="mb-3 mt-4">
                    <input
                      type="date"
                      id="dateStart"
                      className="form-control"
                      min={dateStart}
                      max={dateEnd}
                      value={dateStartItineraryArticles}
                      onChange={e => findByDate(e, e.target.value)}
                    />
                  </div>


                  <div className="mb-3 mt-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tổng tiền trên 1 người </label>
                    <input value={totalPrice + "đ"} className="form-control" placeholder="Tên kế hoạch" disabled />
                  </div>


                  <div className="mb-3 mt-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tổng tiền </label>
                    <input value={totalPriceParticipantCount + "đ"} className="form-control" placeholder="Tên kế hoạch" disabled />
                  </div>

                  {/* <hr /> */}
                  {/* <div className="mb-3 mt-4">
                    <h4>
                      <b>

                        {"Khoảng cách : " + totalPrice + "  km "}
                      </b>
                    </h4>

                  </div>
                  <div className="mb-3 mt-4">
                    <h4>
                      <b>

                        {"Thởi gian: " + totalPrice + "  h "}
                      </b>
                    </h4>

                  </div> */}


                </form>


              </div>
            </div>

            <div className="col-lg-9" >
              <div className="reservation-form mainguyen" >
                <div className="row">
                  <div id="map">
                    <Fragment>
                      <div className="container">
                        <div style={{ height: "90vh", width: "100%" }}>
                          {isLoaded ? (
                            <GoogleMap
                              center={userLocation}
                              zoom={12}
                              onClick={() => setIdActiveMarker(null)}
                              mapContainerStyle={{ width: "100%", height: "90vh" }}
                            // zoomControl={true}
                            // streetViewControl={false}
                            // mapTypeControl={false}
                            // fullscreenControl={true}
                            >
                              {markers.map((item) => (
                                <MarkerF
                                  key={item.id}
                                  position={item.position}
                                  onClick={() => handleActiveMarker(item.id, item.position)}
                                >
                                  {
                                    idActiveMarker == item.id ? (
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

                              <DirectionsRenderer
                                directions={myDirections}
                              />


                            </GoogleMap>
                          ) : null}
                        </div>
                      </div>
                    </Fragment>
                  </div>
                </div>
              </div>

              <div className="row">
                {itineraryArticles.map((itineraryArticle, i) => (
                  <div className="col-sm col-md-6 col-lg-4 ftco-animate" key={i}>
                    <div className="destination" style={{ boxShadow: '0px 2px 10px #d9d9d9' }}>
                      <div className="card">
                        <Link to={`/detail?article_id=${itineraryArticle.articles.id}`}>
                          <img src={itineraryArticle.articles.image} className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="one">
                              {/* <Link to={`/detail?article_id=${itineraryArticle.articles.id}`}>{itineraryArticle.articles.id}</Link> */}
                              <h3><a href="">{itineraryArticle.articles.name}</a></h3>
                              <h3><a href="">{itineraryArticle.articles.price+"VNĐ/ Khách"}</a></h3>
                              {
                                itineraryArticle.dateStart !== null ? (
                                  <b>{itineraryArticle.dateStart}</b>
                                ) : <b>-</b>
                              }
                              {/* <p className="rate">
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star-o"></i>
                              </p> */}
                            </div>
                            <div className="two"></div>
                          </div>
                          {/* <p>{itineraryArticle.articles.content}</p> */}
                          <hr />
                          <div>
                            <div className="bottom-area d-flex">
                              <a href="/Like" className="like" title="Thích" data-toggle="tooltip">
                                <span className="s18_s"><i className="material-icons">favorite_border</i></span>
                              </a>

                              <a
                                className="edit"
                                title="Edit"
                                data-toggle="modal"
                                data-target="#exampleModalEdit"
                                onClick={(e) => {

                                  getDetailById(e, itineraryArticle.id);
                                }}
                              >
                                <i className="material-icons">&#xE254;</i>
                              </a>
                              <div className="modal fade" id="exampleModalEdit" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title" id="exampleModalLongTitle">Cập nhật ngày</h5>
                                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closePopup}>
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className={`modal-body ${popupIsOpen ? 'active' : ''}`}>
                                      <form className="container">
                                        <div className="mb-3">
                                          <label htmlFor="dateStart" className="form-label">Ngày bắt đầu:</label>
                                          <input type="date" id="dateStart" className="form-control" min={dateStart} max={dateEnd} value={dateStartByItineraryArticles !== null ? dateStartByItineraryArticles : dateStart} onChange={e => setDateStartByItineraryArticles(e.target.value)} />
                                        </div>
                                        <div className="modal-footer">
                                          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closePopup}>Đóng</button>
                                          <button type="submit" className="btn btn-primary" onClick={(e) => { handleEdit(e, itineraryArticlesId); }}>Gửi</button>
                                        </div>
                                      </form>

                                    </div>
                                  </div>
                                </div>
                              </div>

                           

                              <a
                                className="Remove"
                                title="Remove"
                              
                                onClick={(e) => {

                                  handleRemove(e, itineraryArticle.id);
                                }}
                              >
                                <i className="material-icons">&#xE872;</i>
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