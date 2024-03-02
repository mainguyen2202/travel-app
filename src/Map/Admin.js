
import { Outlet } from "react-router-dom";
import { useState } from 'react';

import SearchLocationInput from "./GooglePlcasesApi";

import Map from "./Map";

const Admin = (props) => {

    const [selectedLocation, setSelectedLocation] = useState({
        lat: 28.7041,
        lng: 77.1025,
    });
    return (
        <div>
              <div class="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div class="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><a href="index.html">Home</a></span> <span>Places</span></p>
                            <h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Destinations</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
            <div style={{ height: "100vh", width: "100%" }}>
                <SearchLocationInput setSelectedLocation={setSelectedLocation} />
                <Map selectedLocation={selectedLocation} />
            </div>
            </div>
        </div>
    )
}

export default Admin;