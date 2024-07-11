import React from "react";

export default function About() {
  return (
    <section className="about_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 offset-md-1">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About <br /> Our <br /> Food</h2>
                <hr />
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words
              </p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div className="img-box">
              <img src="images/about-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}