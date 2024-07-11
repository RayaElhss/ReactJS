import React from "react";

const Comments = () => {
  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <hr />
          <h2>what is says our clients</h2>
        </div>
        <div id="carouselExample2Indicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExample2Indicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExample2Indicators" data-slide-to="1"></li>
            <li data-target="#carouselExample2Indicators" data-slide-to="2"></li>
            <li data-target="#carouselExample2Indicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="box">
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/client.png" alt="" className="img-fluid" />
                  </div>
                  <h4>Jacksmith sand</h4>
                </div>
                <div className="detail-box">
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/client.png" alt="" className="img-fluid" />
                  </div>
                  <h4>Jacksmith sand</h4>
                </div>
                <div className="detail-box">
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/client.png" alt="" className="img-fluid" />
                  </div>
                  <h4>Jacksmith sand</h4>
                </div>
                <div className="detail-box">
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/client.png" alt="" className="img-fluid" />
                  </div>
                  <h4>Jacksmith sand</h4>
                </div>
                <div className="detail-box">
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
