import { Dropdown, DropdownButton } from "react-bootstrap";


const ItinerarieView = (props) => {
    return (
        <div>
            <div class="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div class="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><a href="index.html">Home</a></span> <span>Itinerarie</span></p>
                            <h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Itinerarie</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section class="ftco-section">
                <div class="container">
                    <div class="row">


                        <div class="col-lg-3 sidebar order-md-first ftco-animate ">
                            <div class="sidebar-wrap ftco-animate">




                                <form>
                                    <div class="modal-body">
                                        <div class="mb-3 mt-4">
                                            <label for="exampleInputEmail1" class="form-label">Tên kế hoạch</label>

                                            <input type="text" name="Name" value="Nghỉ hè" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
                                        </div>
                                        <div class="mb-3">
                                            <label for="Number" class="form-label">Ngày bắt đầu</label>
                                            <input type="date" name="date" class="date" value="2023-07-01" required   disabled/>
                                        </div>
                                        <div class="mb-3 mt-4">
                                            <label for="Number" class="form-label">Ngày kết thúc</label>
                                            <input type="date" name="date" class="date" value="2023-07-01" required  disabled/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Số lượng người</label>
                                            <input type="text" name="Name" value="2" class="form-control" placeholder="Target" required autocomplete="on" disabled />

                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Ngân sách</label>
                                            <input type="text" name="Name" value="20000000" class="form-control" placeholder="Target" required autocomplete="on" disabled />

                                        </div>

                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1"class="form-label">Ghi chú</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value="dd"disabled></textarea>


                                        </div>
                                    </div>

                                </form>



                            </div>

                        </div>

                        <div class="col-lg-9" >

                            <div class="reservation-form" >
                                {/* <div class="container"> */}
                                <div class="row">
                                    {/* <div class="col-lg-12"> */}

                                    <div id="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px" frameborder="0"
                                            allowfullscreen=""
                                        //  style ={{border:0}}
                                        >
                                        </iframe>
                                    </div>
                                    {/* </div> */}

                                </div>
                                {/* </div> */}
                            </div>






                            <div class="row ">
                                {/* lặp */}
                                <div class="col-sm col-md-6 col-lg-4 ftco-animate">






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
        </div >
    )
}

export default ItinerarieView;