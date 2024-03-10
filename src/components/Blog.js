import { NavLink } from "react-bootstrap";


const Blog = (props) => {
  return (
    <div>

      <div class="hero-wrap js-fullheight" style={{ height: '465px', backgroundImage: `url('./images/bg_1.jpg')` }}>
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
            style={{ height: '465px' }}
          >
            <div class="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
              <p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="mr-2"><a href="index.html">Home</a></span> <span>BLOG</span></p>
              <h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Tips & Itinerarie</h1>
            </div>
          </div>
        </div>
      </div>

      <section class="ftco-section bg-light">
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-4 d-flex ftco-animate">
              <div class="blog-entry align-self-stretch">
           
                <a href="/blogSingle" class="block-20" style={{ backgroundImage: `url('./images/image_1.jpg')` }}>
                </a>
                <div class="text">
                  <span class="tag">Tips, Travel</span>
                  <h3 class="heading mt-3"><a href="#">8 Best homestay in Philippines that you don't miss out</a></h3>
                  <div class="meta mb-3">
                    <div><a href="#">October 3, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
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
      </section>


    </div>
  )
}

export default Blog;