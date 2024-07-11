import React from "react";

export default function WhatsHot(){
    return (
        <section className="hot_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>What's Hot</h2>
            <hr />
          </div>
          <p> Raya There are many variations of passages of Lorem Ipsum available, but the majority</p>
        </div>
        <div className="carousel_container">
          <div className="container">
            <div className="carousel-wrap ">
              <div className="owl-carousel">
                <div className="item">
                  <div className="box">
                    <div className="img-box">
                      <img src="images/hot-1.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h4>$30</h4>
                      <p>There are many variations of passages of Lorem Ipsum available,</p>
                      <a href="">Order Now</a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="img-box">
                      <img src="images/hot-2.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h4>$30</h4>
                      <p>There are many variations of passages of Lorem Ipsum available,</p>
                      <a href="">Order Now</a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="img-box">
                      <img src="images/hot-3.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h4>$30</h4>
                      <p> There are many variations of passages of Lorem Ipsum available,</p>
                      <a href="">Order Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
};