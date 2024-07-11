import React from "react";

export default function Dishes() {
    return (
        <section className="dish_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="dish_container">
                            <div className="box">
                                <img src="images/dish.jpg" alt="" />
                            </div>
                            <div className="box">
                                <img src="images/dish.jpg" alt="" />
                            </div>
                            <div className="box">
                                <img src="images/dish.jpg" alt="" />
                            </div>
                            <div className="box">
                                <img src="images/dish.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <hr />
                                <h2>Our <br /> Food <br /> dishes</h2>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}