import { useEffect, useState } from "react";
import { Dropdown, DropdownButton, NavLink } from "react-bootstrap";


const Like = (props) => {

    return (
        <div>
                    <div class="hero-wrap js-fullheight"style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
         style={{ height: '465px' }}
        >
          <div class="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><a href="index.html">Home</a></span> <span>Like</span></p>
            <h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Like</h1>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section">
                <div class="container">
                    <div class="row">


                        
                        <div class="col-lg-12">
                          
                            <div class="reservation-form" >
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">

                                            <div id="map">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px" frameborder="0"
                                                    allowfullscreen=""
                                                //  style ={{border:0}}
                                                >
                                                </iframe>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>





                        
                            <div class="row ">

                            <div class="col-sm col-md-6 col-lg-4 ftco-animate">



{/* <div class="destination" style={{ border: '5px solid #EDF2F7', borderRadius: '15px' }}>
    <div>

        <a href="PlacesSingle" class="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url('./image1/home/hoChiMinh.jpg')` }}>
            <div class="icon d-flex justify-content-center align-items-center">
                <span class="icon-link"></span>
            </div>
        </a>
    </div>
    <div class="text p-3">
        <div class="d-flex">
            <div class="one">
                <h3><a href="/placesSingle">Hồ Chí Minh</a></h3>

            </div>
            <div class="two">
                <p class="rate">
                    <i class="icon-star"></i>
                    <i class="icon-star"></i>
                    <i class="icon-star"></i>
                    <i class="icon-star"></i>
                    <i class="icon-star-o"></i>
                </p>
            </div>

        </div>
        <p>Sau lưng thành phố là một vùng đồng bằng rộng lớn trải dài về phía Tây qua Campuchia và với đồng bằng
            sông Cửu Long trù phú dưới chân, Thành phố Hồ Chí Minh tọa lạc trên một khúc cua khổng lồ của sông Sài Gòn.</p>
        <hr />
        <p class="bottom-area d-flex">

            <a href="" class="like" title="Like" data-toggle="tooltip">      <i class="bi bi-heart"></i></a>


            <a href="/ItinerarieEdit" class="like" title="Like" data-toggle="tooltip">
                <span class="s18_s" onclick="saveMultiWishlist(175);return false;">  <i class="material-icons">  favorite_border</i></span>
            </a>
            <a href="/ItinerarieEdit" class="like" title="Like" data-toggle="tooltip"><i class="material-icons">  favorite</i></a>

            <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>


        </p>



    </div>

</div> */}



<div class="destination" style={{
    boxShadow: '0px 2px 10px  #d9d9d9'

}}>
    <div class="card" >
        <img src="./image1/home/hoChiMinh.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
            <div class="d-flex">
                <div class="one">
                    <h3><a href="/placesSingle">Hồ Chí Minh</a></h3>
                    <p class="rate">
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <i class="icon-star-o"></i>
                    </p>
                </div>
                <div class="two">

                </div>

            </div>
            <p>Sau lưng thành phố là một vùng đồng bằng rộng lớn trải dài về phía Tây qua Campuchia và với đồng bằng sông Cửu Long trù phú dưới chân, Thành phố Hồ Chí Minh tọa lạc trên một khúc cua khổng lồ của sông Sài Gòn.</p>
            <hr />
            <p class="bottom-area d-flex">



                <a href="/Like" class="like" title="Like" data-toggle="tooltip">
                    <span class="s18_s" onclick="saveMultiWishlist(175);return false;">  <i class="material-icons">  favorite_border</i></span>
                </a>

                <DropdownButton id="dropdown-basic-button" className="ml-auto" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>


            </p>
        </div>
    </div>
</div>




</div>
                                

                            </div>


                            <div class="row mt-5">
                                <div class="col text-center">
                                    <div class="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li class="active"><span>1</span></li>
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
        </div>
    )
}

export default Like;