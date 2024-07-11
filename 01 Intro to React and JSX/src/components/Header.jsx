import React from 'react';

export default function Header() {
  return (
    <section className="slider_section position-relative">
      <div className="side_heading">
        <h5>
          G
          o
          o
          d
          F
          o
          o
          d
        </h5>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 offset-md-1">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3">04</li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="img-box b-1">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="img-box b-2">
                    <img src="images/hot-1.png" alt="" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="img-box b-3">
                    <img src="images/hot-2.png" alt="" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="img-box b-4">
                    <img src="images/hot-3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="carousel_btn-box">
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="detail-box">
              <h1>Good <br /> Food</h1>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
              <div className="btn-box">
                <a href="" className="btn-1">Contact Us</a>
                <a href="" className="btn-2">Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
