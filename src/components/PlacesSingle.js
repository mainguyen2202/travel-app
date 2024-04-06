


import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'


const PlacesSingle = (props) => {
    // const {placeId } = useParams();// route param /:id
    const [searchParams, setSearchParams] = useSearchParams();
    // Get a specific query parameter
    const articleId = searchParams.get('article_id');

    const [data, setData] = useState([]);




    useEffect(() => {
        const fetchData = async () => {

            console.log(articleId)
            const response = await fetch(`http://127.0.0.1:8080/articles/detail/${articleId}`); // Thay thế "your_api_url" bằng URL của API thực tế của bạn
            if (response.ok) {
                const resp = await response.json();

                setData(resp);

            }

        };

        fetchData();
    }, [articleId]);

    return (
        <div>

            <div className="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                        style={{ height: '465px' }}
                    >
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Places</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Destinations</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section ftco-degree-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 sidebar">
                            <div className="sidebar-wrap ftco-animate">
                                <h3 className="heading mb-4">Kế hoạch</h3>
                                <div>
                                    <h1>{data.name}</h1>
                                </div>
                             
                                <form action="#">
                                    <div className="fields">

                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control" placeholder="Keyword search">
                                                    <option value="">Select Location</option>
                                                    <option value="">San Francisco USA</option>
                                                    <option value="">Berlin Germany</option>
                                                    <option value="">Lodon United Kingdom</option>
                                                    <option value="">Paris Italy</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-md-12 ftco-animate">
                                    <div className="single-slider owl-carousel">
                                        <div className="item">
                                            <div className="hotel-img" style={{ backgroundImage: `url('./images/hotel-2.jpg')` }}></div>
                                        </div>
                                        <div className="item">
                                            <div className="hotel-img" style={{ backgroundImage: `url('./images/hotel-3.jpg')` }}></div>
                                        </div>
                                        <div className="item">
                                            <div className="hotel-img" style={{ backgroundImage: `url('./images/hotel-4.jpg')` }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 hotel-single mt-4 mb-5 ftco-animate">
                                    {/* <div className="reservation-form" > */}
                                    <div className="row">

                                        <div id="map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px" frameBorder="0"
                                                allowFullScreen=""
                                            >
                                            </iframe>
                                        </div>

                                    </div>
                                    {/* </div> */}
                                </div>

                                <div className="col-md-12 hotel-single mt-4 mb-5 ftco-animate">
                                    <span>Our Best hotels &amp; Rooms</span>
                                    <h2>Luxury Hotel in Paris</h2>
                                    <p className="rate mb-5">
                                        <span className="loc"><a href="#"><i className="icon-map"></i> 291 South 21th Street, Suite 721 New York NY 10016</a></span>
                                        <span className="star">
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star-o"></i>
                                            8 Rating</span>
                                    </p>
                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                    <div className="d-md-flex mt-5 mb-5">
                                        <ul>
                                            <li>The Big Oxmox advised her not to do so</li>
                                            <li>When she reached the first hills of the Italic Mountains</li>
                                            <li>She had a last view back on the skyline of her hometown </li>
                                            <li>Bookmarksgrove, the headline of Alphabet </li>
                                        </ul>
                                        <ul className="ml-md-5">
                                            <li>Question ran over her cheek, then she continued</li>
                                            <li>Pityful a rethoric question ran</li>
                                            <li>Mountains, she had a last view back on the skyline</li>
                                            <li>Headline of Alphabet Village and the subline</li>
                                        </ul>
                                    </div>
                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                </div>
                                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                                    <h4 className="mb-4">Take A Tour</h4>
                                    <div className="block-16">
                                        <figure>
                                            <img src="images/hotel-6.jpg" alt="Image placeholder" className="img-fluid" />
                                            <a href="https://vimeo.com/45830194" className="play-button popup-vimeo"><span className="icon-play"></span></a>
                                        </figure>
                                    </div>
                                </div>


                                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                                    <h4 className="mb-4">Review &amp; Ratings</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <form method="post" className="star-rating">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i> 100 Ratings</span></p>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i> 30 Ratings</span></p>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 5 Ratings</span></p>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 0 Ratings</span></p>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 0 Ratings</span></p>
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">



                                    <div className="row">
                                        <div className="col-md-12 ftco-animate">
                                            <div className="tag-widget post-tag-container mb-5 mt-5">
                                                <div className="tagcloud">
                                                    <a href="#" className="tag-cloud-link">Life</a>
                                                    <a href="#" className="tag-cloud-link">Sport</a>
                                                    <a href="#" className="tag-cloud-link">Tech</a>
                                                    <a href="#" className="tag-cloud-link">Travel</a>
                                                </div>
                                            </div>

                                            <div className="about-author d-flex p-4 bg-light">
                                                <div className="bio mr-5">
                                                    <img src="images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4" />
                                                </div>
                                                <div className="desc">
                                                    <h3>George Washington</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                                </div>
                                            </div>


                                            <div className="pt-5 mt-5">
                                                <h3 className="mb-5">6 Comments</h3>
                                                <ul className="comment-list">
                                                    <li className="comment">
                                                        <div className="vcard bio">
                                                            <img src="images/person_1.jpg" alt="Image placeholder" />
                                                        </div>
                                                        <div className="comment-body">
                                                            <h3>John Doe</h3>
                                                            <div className="meta">October 03, 2018 at 2:21pm</div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                            <p><a href="#" className="reply">Reply</a></p>
                                                        </div>
                                                    </li>

                                                    <li className="comment">
                                                        <div className="vcard bio">
                                                            <img src="images/person_1.jpg" alt="Image placeholder" />
                                                        </div>
                                                        <div className="comment-body">
                                                            <h3>John Doe</h3>
                                                            <div className="meta">October 03, 2018 at 2:21pm</div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                            <p><a href="#" className="reply">Reply</a></p>
                                                        </div>

                                                        <ul className="children">
                                                            <li className="comment">
                                                                <div className="vcard bio">
                                                                    <img src="images / person_1.jpg" alt="Image placeholder" />
                                                                </div>
                                                                <div className="comment-body">
                                                                    <h3>John Doe</h3>
                                                                    <div className="meta">October 03, 2018 at 2:21pm</div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                    <p><a href="#" className="reply">Reply</a></p>
                                                                </div>


                                                                <ul className="children">
                                                                    <li className="comment">
                                                                        <div className="vcard bio">
                                                                            <img src="images / person_1.jpg" alt="Image placeholder" />
                                                                        </div>
                                                                        <div className="comment-body">
                                                                            <h3>John Doe</h3>
                                                                            <div className="meta">October 03, 2018 at 2:21pm</div>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                            <p><a href="#" className="reply">Reply</a></p>
                                                                        </div>

                                                                        <ul className="children">
                                                                            <li className="comment">
                                                                                <div className="vcard bio">
                                                                                    <img src="images / person_1.jpg" alt="Image placeholder" />
                                                                                </div>
                                                                                <div className="comment-body">
                                                                                    <h3>John Doe</h3>
                                                                                    <div className="meta">October 03, 2018 at 2:21pm</div>
                                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                                    <p><a href="#" className="reply">Reply</a></p>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="comment">
                                                        <div className="vcard bio">
                                                            <img src="images / person_1.jpg" alt="Image placeholder" />
                                                        </div>
                                                        <div className="comment-body">
                                                            <h3>John Doe</h3>
                                                            <div className="meta">October 03, 2018 at 2:21pm</div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                            <p><a href="#" className="reply">Reply</a></p>
                                                        </div>
                                                    </li>
                                                </ul>


                                                <div className="comment-form-wrap pt-5">
                                                    <h3 className="mb-5">Leave a comment</h3>
                                                    <form action="#" className="p-5 bg-light">
                                                        <div className="form-group">
                                                            <label htmlFor="name">Name *</label>
                                                            <input type="text" className="form-control" id="name" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="email">Email *</label>
                                                            <input type="email" className="form-control" id="email" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="website">Website</label>
                                                            <input type="url" className="form-control" id="website" />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="message">Message</label>
                                                            <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>

                                        </div>


                                    </div>



                                </div>
                                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-5">
                                    <h4 className="mb-4">Related Hotels</h4>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="destination">
                                                <a href="hotel-single.html" className="img img-2" style={{ backgroundImage: `url('./images/hotel-1.jpg')` }}></a>
                                                <div className="text p-3">
                                                    <div className="d-flex">
                                                        <div className="one">
                                                            <h3><a href="hotel-single.html">Hotel, Italy</a></h3>
                                                            <p className="rate">
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star-o"></i>
                                                                <span>8 Rating</span>
                                                            </p>
                                                        </div>
                                                        <div className="two">
                                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                                        </div>
                                                    </div>
                                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                                    <hr />
                                                    <p className="bottom-area d-flex">
                                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="destination">
                                                <a href="hotel-single.html" className="img img-2" style={{ backgroundImage: `url('./images/hotel-2.jpg')` }}></a>
                                                <div className="text p-3">
                                                    <div className="d-flex">
                                                        <div className="one">
                                                            <h3><a href="hotel-single.html">Hotel, Italy</a></h3>
                                                            <p className="rate">
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star-o"></i>
                                                                <span>8 Rating</span>
                                                            </p>
                                                        </div>
                                                        <div className="two">
                                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                                        </div>
                                                    </div>
                                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                                    <hr />
                                                    <p className="bottom-area d-flex">
                                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="destination">
                                                <a href="hotel-single.html" className="img img-2" style={{ backgroundImage: `url('./images/hotel-3.jpg')` }}></a>
                                                <div className="text p-3">
                                                    <div className="d-flex">
                                                        <div className="one">
                                                            <h3><a href="hotel-single.html">Hotel, Italy</a></h3>
                                                            <p className="rate">
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star-o"></i>
                                                                <span>8 Rating</span>
                                                            </p>
                                                        </div>
                                                        <div className="two">
                                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                                        </div>
                                                    </div>
                                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                                    <hr />
                                                    <p className="bottom-area d-flex">
                                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default PlacesSingle;