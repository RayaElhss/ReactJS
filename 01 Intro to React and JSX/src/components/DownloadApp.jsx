import React from 'react';

export default function DownloadApp() {
    return (
        <section className="app_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="img-box">
                            <img src="images/man-with-phone.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-2">
                        <div className="detail-box">
                            <h2>
                                <span>50%</span> off On every food
                                download now our app
                            </h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by
                            </p>
                            <div className="btn-box">
                                <a href="">
                                    <img src="images/app-store.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/play-store.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}