import { Dropdown, DropdownButton } from "react-bootstrap";


const ItinerarieView = (props) => {
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




                                <form>
                                    <div className="modal-body">
                                        <div className="mb-3 mt-4">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Tên kế hoạch</label>

                                            <input type="text" name="Name" value="Nghỉ hè" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Number" className="form-label">Ngày bắt đầu</label>
                                            <input type="date" name="date" className="date" value="2023-07-01" required   disabled/>
                                        </div>
                                        <div className="mb-3 mt-4">
                                            <label htmlFor="Number" className="form-label">Ngày kết thúc</label>
                                            <input type="date" name="date" className="date" value="2023-07-01" required  disabled/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Số lượng người</label>
                                            <input type="text" name="Name" value="2" className="form-control" placeholder="Target" required autocomplete="on" disabled />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Ngân sách</label>
                                            <input type="text" name="Name" value="20000000" className="form-control" placeholder="Target" required autocomplete="on" disabled />

                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlTextarea1"className="form-label">Ghi chú</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value="dd"disabled></textarea>


                                        </div>
                                    </div>

                                </form>



                            </div>

                        </div>

                        <div className="col-lg-9" >

                            <div className="reservation-form" >
                                {/* <div className="container"> */}
                                <div className="row">
                                    {/* <div className="col-lg-12"> */}

                                    <div id="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px" frameBorder="0"
                                            allowFullScreen=""
                                        //  style ={{border:0}}
                                        >
                                        </iframe>
                                    </div>
                                    {/* </div> */}

                                </div>
                                {/* </div> */}
                            </div>






                            <div className="row">
                                {/* lặp */}
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">






                                    <div className="destination" style={{
                                        boxShadow: '0px 2px 10px  #d9d9d9'

                                    }}>
                                        <div className="card" >
                                            <img src="./image1/home/hoChiMinh.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="one">
                                                        <h3><a href="/placesSingle">Hồ Chí Minh</a></h3>
                                                        <p className="rate">
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star-o"></i>
                                                        </p>
                                                    </div>
                                                    <div className="two">

                                                    </div>

                                                </div>
                                                <p>Sau lưng thành phố là một vùng đồng bằng rộng lớn trải dài về phía Tây qua Campuchia và với đồng bằng sông Cửu Long trù phú dưới chân, Thành phố Hồ Chí Minh tọa lạc trên một khúc cua khổng lồ của sông Sài Gòn.</p>
                                                <hr />
                                                <p className="bottom-area d-flex">



                                                    <a href="/Like" className="like" title="Like" data-toggle="tooltip">
                                                        <span className="s18_s">  <i className="material-icons">  favorite_border</i></span>
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