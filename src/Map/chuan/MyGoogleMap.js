import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

const markers = [
  {
    id: 1,
    name: "Nhà Thuốc FPT Long Châu",
    position: { lat: 10.74513, lng: 106.7268553 }
    //data : description, image, link, v.v
  },
  {
    id: 2,
    name: "Nhà Thuốc Pharmacity",
    position: { lat: 10.743521834774956, lng: 106.73158021882372 }
  },
  {
    id: 3,
    name: "Nhà Hàng 39 | Nhà Hàng Đặc Sản Quận 7",
    position: { lat: 10.7439342, lng: 106.708106 }
  }
];

// const myLocaction = { 
//   lat: 10.744890604860146, 
//   lng: 106.72973747516444
// };


const MyGoogleMap = (props) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
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

  const [userLocation, setUserLocation] = useState(null);

  // define the function that finds the users geolocation
  const getUserLocation = () => {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          // update the value of userlocation variable
          setUserLocation({ lat: latitude, lng: longitude });
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

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center">Vite + React | Google Map Markers</h1>
        <div style={{ height: "90vh", width: "100%" }}>
          {isLoaded ? (
            <GoogleMap
              center={userLocation}
              zoom={15}
              onClick={() => setIdActiveMarker(null)}
              mapContainerStyle={{ width: "100%", height: "90vh" }}
            >
              {
                userLocation !== null ? (
                  <MarkerF
                    key={0}
                    position={userLocation}
                    icon={{
                      url:"https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
                      scaledSize: { width: 50, height: 50 }
                    }}
                    >
                  </MarkerF>
                ) : null
              }
              
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
  );
};

export default MyGoogleMap;