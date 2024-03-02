import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
	  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="index.html">Adventure</a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
	          <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
	          <li className="nav-item"><a href="places.html" className="nav-link">Places</a></li>
	          <li className="nav-item"><a href="hotel.html" className="nav-link">Hotels</a></li>
	          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
	          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    
    <div className="hero-wrap js-fullheight" style={{backgroundImage: `url('./images/bg_1.jpg')` }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
          <div className="col-md-9 ftco-animate mb-5 pb-5 text-center text-md-left" data-scrollax=" properties: { translateY: '70%' }">
            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Discover <br/>A new Place</h1>
            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Find great places to stay, eat, shop, or visit from local experts</p>
          </div>
        </div>
      </div>
    </div>

    <section className="ftco-section justify-content-end ftco-search">
    	<div className="container-wrap ml-auto">
    		<div className="row no-gutters">
          <div className="col-md-12 nav-link-wrap">
            <div className="nav nav-pills justify-content-center text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Flight</a>

              <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Hotel</a>

              <a className="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Car Rent</a>
            </div>
          </div>
          <div className="col-md-12 tab-wrap">
            
            <div className="tab-content p-4 px-5" id="v-pills-tabContent">

              <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
              	<form action="#" className="search-destination">
              		<div className="row">
              			<div className="col-md align-items-end">
              				<div className="form-group">
              					<label for="#">From</label>
	              				<div className="form-field">
	              					<div className="icon"><span className="icon-my_location"></span></div>
					                <input type="text" className="form-control" placeholder="From"/>
					              </div>
				              </div>
              			</div>
              			<div className="col-md align-items-end">
              				<div className="form-group">
              					<label for="#">Where</label>
              					<div className="form-field">
	              					<div className="icon"><span className="icon-map-marker"></span></div>
					                <input type="text" className="form-control" placeholder="Where"/>
					              </div>
				              </div>
              			</div>
              			<div className="col-md align-items-end">
              				<div className="form-group">
              					<label for="#">Check In</label>
              					<div className="form-field">
	              					<div className="icon"><span className="icon-map-marker"></span></div>
					                <input type="text" className="form-control checkin_date" placeholder="Check In"/>
					              </div>
				              </div>
              			</div>
              			<div className="col-md align-items-end">
              				<div className="form-group">
              					<label for="#">Check Out</label>
              					<div className="form-field">
	              					<div className="icon"><span className="icon-map-marker"></span></div>
					                <input type="text" className="form-control checkout_date" placeholder="From"/>
					              </div>
				              </div>
              			</div>
              			<div className="col-md align-items-end">
              				<div className="form-group">
              					<label for="#">Travelers</label>
              					<div className="form-field">
	              					<div className="select-wrap">
			                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
			                      <select name="" id="" className="form-control">
			                      	<option value="">1</option>
			                        <option value="">2</option>
			                        <option value="">3</option>
			                        <option value="">4</option>
			                        <option value="">5</option>
			                      </select>
			                    </div>
					              </div>
				              </div>
              			</div>
              			<div className="col-md align-self-end">
              				<div className="form-group">
              					<div className="form-field">
					                <input type="submit" value="Search" className="form-control btn btn-primary"/>
					              </div>
				              </div>
              			</div>
              		</div>
              	</form>
              </div>

              <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
              	<form action="#" className="search-destination">
              		<div className="row">
              			<div className="col-md align-items-end">
              				<div className="form-group">
              					<label for="#">Check In</label>
              					<div className="form-field">
	              					<div className="icon"><span className="icon-map-marker"></span></div>
					                <input type="text" className="form-control checkin_date" placeholder="Check In"/>
					              </div>
				              </div>
              			</div>
              			<div className="col-md align-items-end">
              				<div className="form-group">
              					<label for="#">Check Out</label>
              					<div className="form-field">
	              					<div className="icon"><span className="icon-map-marker"></span></div>
					                <input type="text" className="form-control checkout_date" placeholder="From"/>
					              </div>
				              </div>
              			</div>
              			<div className="col-md align-items-end">
              				<div className="form-group">
              					<label for="#">Guest</label>
              					<div className="form-field">
	              					<div className="select-wrap">
			                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
			                      <select name="" id="" className="form-control">
			                      	<option value="">1</option>
			                        <option value="">2</option>
			                        <option value="">3</option>
			                        <option value="">4</option>
			                        <option value="">5</option>
			                      </select>
			                    </div>
					              </div>
				              </div>
              			</div>
              			<div className="col-md align-self-end">
              				<div className="form-group">
              					<div className="form-field">
					                <input type="submit" value="Search" className="form-control btn btn-primary"/>
					              </div>
				              </div>
              			</div>
              		</div>
              	</form>
              </div>

              <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-effect-tab">
              	<form action="#" className="search-destination">
              		<div className="row">
              			<div className="col-md align-items-end">
              				<div className="form-group">
              					<label for="#">Where</label>
              					<div className="form-field">
	              					<div className="icon"><span className="icon-map-marker"></span></div>
					                <input type="text" className="form-control" placeholder="Where"/>
					              </div>
				              </div>
              			</div>
              			<div className="col-md align-items-end">
              				<div className="form-group">
              					<label for="#">Check In</label>
              					<div className="form-field">
	              					<div className="icon"><span className="icon-map-marker"></span></div>
					                <input type="text" className="form-control checkin_date" placeholder="Check In"/>
					              </div>
				              </div>
              			</div>
              			<div className="col-md align-items-end">
              				<div className="form-group">
              					<label for="#">Check Out</label>
              					<div className="form-field">
	              					<div className="icon"><span className="icon-map-marker"></span></div>
					                <input type="text" className="form-control checkout_date" placeholder="From"/>
					              </div>
				              </div>
              			</div>
              			<div className="col-md align-self-end">
              				<div className="form-group">
              					<div className="form-field">
					                <input type="submit" value="Search" className="form-control btn btn-primary"/>
					              </div>
				              </div>
              			</div>
              		</div>
              	</form>
              </div>
            </div>
          </div>
        </div>
    	</div>
    </section>

    <section className="ftco-section bg-light">
    	<div className="container">
    		<div className="row">
    			<div className="col-md-4">
    				<div className="intro ftco-animate">
    					<h3><span>01</span> Travel</h3>
    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="intro ftco-animate">
    					<h3><span>02</span> Experience</h3>
    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="intro ftco-animate">
    					<h3><span>03</span> Relax</h3>
    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>

    <section className="ftco-section">
    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4">See our latest vacation ideas</h2>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-4 ftco-animate">
        		<a href="#" className="destination-entry img" style={{backgroundImage: `url('./images/destination-1.jpg')` }}>
        			<div className="text text-center">
        				<h3>Beachfront Scape</h3>
        			</div>
        		</a>
        	</div>
        	<div className="col-md-4 ftco-animate">
        		<a href="#" className="destination-entry img" style={{backgroundImage: `url('./images/destination-2-1.jpg')` }}>
        			<div className="text text-center">
        				<h3>Group Holidays</h3>
        			</div>
        		</a>
        	</div>
        	<div className="col-md-4 ftco-animate">
        		<a href="#" className="destination-entry img" style={{backgroundImage: `url('./images/destination-3.jpg')` }}>
        			<div className="text text-center">
        				<h3>City Breaks</h3>
        			</div>
        		</a>
        	</div>
        </div>
    	</div>
    </section>
		
		<section className="ftco-about d-md-flex">
    	<div className="one-half img" style={{backgroundImage: `url('./images/about.jpg')` }}></div>
    	<div className="one-half ftco-animate">
        <div className="heading-section ftco-animate ">
          <h2 className="mb-4">The Best Travel Agency</h2>
        </div>
        <div>
  				<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
  			</div>
    	</div>
    </section>

    <section className="ftco-section services-section bg-light">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-yatch"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Special Activities</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-around"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Travel Arrangements</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>    
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-compass"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Private Guide</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-map-of-roads"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Location Manager</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>
    
    <section className="ftco-section">
    	<div className="container">
				<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4">Most Popular Destination</h2>
          </div>
        </div>    		
    	</div>
    	<div className="container-fluid">
    		<div className="row">
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="destination">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/destination-1.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="#">Paris, Italy</a></h3>
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
	    							<span className="price">$200</span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<p className="days"><span>2 days 3 nights</span></p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> San Franciso, CA</span> 
    							<span className="ml-auto"><a href="#">Discover</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="destination d-md-flex flex-column-reverse">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/destination-2.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="#">Paris, Italy</a></h3>
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
	    							<span className="price">$200</span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<p className="days"><span>2 days 3 nights</span></p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> San Franciso, CA</span> 
    							<span className="ml-auto"><a href="#">Discover</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="destination">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/destination-3.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="#">Paris, Italy</a></h3>
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
	    							<span className="price">$200</span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<p className="days"><span>2 days 3 nights</span></p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> San Franciso, CA</span> 
    							<span className="ml-auto"><a href="#">Discover</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="destination d-md-flex flex-column-reverse">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/destination-4.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="#">Paris, Italy</a></h3>
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
	    							<span className="price">$200</span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<p className="days"><span>2 days 3 nights</span></p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> San Franciso, CA</span> 
    							<span className="ml-auto"><a href="#">Discover</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>

    <section className="ftco-section ftco-counter img" id="section-counter" style={{backgroundImage: `url('./images/bg_1.jpg')` }} data-stellar-background-ratio="0.5">
    	<div className="container">
    		<div className="row justify-content-center">
    			<div className="col-md-10">
		    		<div className="row">
		          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18 text-center">
		              <div className="text">
		                <strong className="number" data-number="100000">0</strong>
		                <span>Happy Customers</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18 text-center">
		              <div className="text">
		                <strong className="number" data-number="40000">0</strong>
		                <span>Destination Places</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18 text-center">
		              <div className="text">
		                <strong className="number" data-number="87000">0</strong>
		                <span>Hotels</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18 text-center">
		              <div className="text">
		                <strong className="number" data-number="56400">0</strong>
		                <span>Restaurant</span>
		              </div>
		            </div>
		          </div>
		        </div>
	        </div>
        </div>
    	</div>
    </section>


    <section className="ftco-section">
    	<div className="container">
				<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4"><strong>Popular</strong> Hotels</h2>
          </div>
        </div>    		
    	</div>
    	<div className="container-fluid">
    		<div className="row">
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="destination">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/hotel-1.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="#">New Orleans, Hotel</a></h3>
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
	    							<span className="price per-price">$40<br/><small>/night</small></span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> Miami, Fl</span> 
    							<span className="ml-auto"><a href="#">Book Now</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="destination d-md-flex flex-column-reverse">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/hotel-2.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="#">New Orleans, Hotel</a></h3>
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
	    							<span className="price per-price">$40<br/><small>/night</small></span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> Miami, Fl</span> 
    							<span className="ml-auto"><a href="#">Book Now</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="destination">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/hotel-3.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="#">New Orleans, Hotel</a></h3>
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
	    							<span className="price per-price">$40<br/><small>/night</small></span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> Miami, Fl</span> 
    							<span className="ml-auto"><a href="#">Book Now</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="destination d-md-flex flex-column-reverse">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/hotel-4.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="#">New Orleans, Hotel</a></h3>
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
	    							<span className="price per-price">$40<br/><small>/night</small></span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> Miami, Fl</span> 
    							<span className="ml-auto"><a href="#">Book Now</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="destination">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/hotel-5.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<div className="d-flex">
    							<div className="one">
		    						<h3><a href="#">New Orleans, Hotel</a></h3>
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
	    							<span className="price per-price">$40<br/><small>/night</small></span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> Miami, Fl</span> 
    							<span className="ml-auto"><a href="#">Book Now</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>

    <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
            <h2 className="mb-4">Our satisfied customer says</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="user-img mb-5" style={{backgroundImage: `url('./images/person_1.jpg')` }}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Mark Web</p>
                    <span className="position">Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="user-img mb-5" style={{backgroundImage: `url('./images/person_2.jpg')` }}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Mark Web</p>
                    <span className="position">Interface Designer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="user-img mb-5" style={{backgroundImage: `url('./images/person_3.jpg')` }}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Mark Web</p>
                    <span className="position">UI Designer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="user-img mb-5" style={{backgroundImage: `url('./images/person_1.jpg')` }}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Mark Web</p>
                    <span className="position">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="user-img mb-5" style={{backgroundImage: `url('./images/person_1.jpg')` }}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Mark Web</p>
                    <span className="position">System Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section">
    	<div className="container">
				<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4">Recommended Restaurants</h2>
          </div>
        </div>    		
    		<div className="row">
    			<div className="col-md-6 col-lg-3 ftco-animate">
    				<div className="destination">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/restaurant-1.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<h3><a href="#">Luxury Restaurant</a></h3>
    						<p className="rate">
    							<i className="icon-star"></i>
    							<i className="icon-star"></i>
    							<i className="icon-star"></i>
    							<i className="icon-star"></i>
    							<i className="icon-star-o"></i>
    							<span>8 Rating</span>
    						</p>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> San Franciso, CA</span> 
    							<span className="ml-auto"><a href="#">Discover</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-3 ftco-animate">
    				<div className="destination d-md-flex flex-column-reverse">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/restaurant-2.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<h3><a href="#">Luxury Restaurant</a></h3>
    						<p className="rate">
    							<i className="icon-star"></i>
    							<i className="icon-star"></i>
    							<i className="icon-star"></i>
    							<i className="icon-star"></i>
    							<i className="icon-star-o"></i>
    							<span>8 Rating</span>
    						</p>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> San Franciso, CA</span> 
    							<span className="ml-auto"><a href="#">Book Now</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-3 ftco-animate">
    				<div className="destination">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/restaurant-3.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<h3><a href="#">Luxury Restaurant</a></h3>
    						<p className="rate">
    							<i className="icon-star"></i>
    							<i className="icon-star"></i>
    							<i className="icon-star"></i>
    							<i className="icon-star"></i>
    							<i className="icon-star-o"></i>
    							<span>8 Rating</span>
    						</p>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> San Franciso, CA</span> 
    							<span className="ml-auto"><a href="#">Book Now</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-3 ftco-animate">
    				<div className="destination d-md-flex flex-column-reverse">
    					<a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url('./images/restaurant-4.jpg')` }}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-link"></span>
    						</div>
    					</a>
    					<div className="text p-3">
    						<h3><a href="#">Luxury Restaurant</a></h3>
    						<p className="rate">
    							<i className="icon-star"></i>
    							<i className="icon-star"></i>
    							<i className="icon-star"></i>
    							<i className="icon-star"></i>
    							<i className="icon-star-o"></i>
    							<span>8 Rating</span>
    						</p>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="icon-map-o"></i> San Franciso, CA</span> 
    							<span className="ml-auto"><a href="#">Book Now</a></span>
    						</p>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>

    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2><strong>Tips</strong> &amp; Itinerarie</h2>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: `url('./images/image_1.jpg')` }}>
              </a>
              <div className="text">
              	<span className="tag">Tips, Travel</span>
                <h3 className="heading mt-3"><a href="#">8 Best homestay in Philippines that you don't miss out</a></h3>
                <div className="meta mb-3">
                  <div><a href="#">October 3, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: `url('./images/image_2.jpg')` }}>
              </a>
              <div className="text">
              	<span className="tag">Culture</span>
                <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                <div className="meta mb-3">
                  <div><a href="#">October 3, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: `url('./images/image_3.jpg')` }}>
              </a>
              <div className="text">
              	<span className="tag">Tips, Travel</span>
                <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                <div className="meta mb-3">
                  <div><a href="#">October 3, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
		
		<section className="ftco-section-parallax">
      <div className="parallax-img d-flex align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <h2>Subcribe to our Newsletter</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
              <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-8">
                  <form action="#" className="subscribe-form">
                    <div className="form-group d-flex">
                      <input type="text" className="form-control" placeholder="Enter email address"/>
                      <input type="submit" value="Subscribe" className="submit px-3"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Adventure</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">About Us</a></li>
                <li><a href="#" className="py-2 d-block">Online enquiry</a></li>
                <li><a href="#" className="py-2 d-block">Call Us</a></li>
                <li><a href="#" className="py-2 d-block">General enquiries</a></li>
                <li><a href="#" className="py-2 d-block">Booking Conditions</a></li>
                <li><a href="#" className="py-2 d-block">Privacy and Policy</a></li>
                <li><a href="#" className="py-2 d-block">Refund policy</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Experience</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Beach</a></li>
                <li><a href="#" className="py-2 d-block">Adventure</a></li>
                <li><a href="#" className="py-2 d-block">Wildlife</a></li>
                <li><a href="#" className="py-2 d-block">Honeymoon</a></li>
                <li><a href="#" className="py-2 d-block">Nature</a></li>
                <li><a href="#" className="py-2 d-block">Party</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
	                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>

    </div>
  );
}

export default App;
