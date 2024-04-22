

const Contact = (props) => {
    return (
        <div>
         <div className="hero-wrap js-fullheight"style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
         style={{ height: '465px' }}
        >
          <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Contact</span></p>
            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Contact</h1>
          </div>
        </div>
      </div>
    </div>

    <section className="ftco-section contact-section ftco-degree-bg">
      <div className="container">
        <div className="row d-flex mb-5 contact-info">
          <div className="col-md-12 mb-4">
            <h2 className="h4">Contact Information</h2>
          </div>
          <div className="w-100"></div>
          <div className="col-md-3">
            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
          <div className="col-md-3">
            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
          </div>
          <div className="col-md-3">
            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
          </div>
          <div className="col-md-3">
            <p><span>Website</span> <a href="#">yoursite.com</a></p>
          </div>
        </div>
        <div className="row block-9">
          <div className="col-md-6 order-md-last pr-md-5">
            <form action="#">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject"/>
              </div>
              <div className="form-group">
                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
              </div>
            </form>
          
          </div>

          <div className="col-md-6">
          	<div id="map"></div>
          </div>
        </div>
      </div>
    </section>

        </div>
    )
}

export default Contact;