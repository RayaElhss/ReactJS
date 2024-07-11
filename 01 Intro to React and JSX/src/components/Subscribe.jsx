import React from "react";

const Subscribe = () => {
    return (
        <section className="subscribe_section">
            <div className="container">
                <form action="">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <label htmlFor="subEmail">Our Newsletter</label>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="box">
                                <input type="email" placeholder="Enter your email" id="subEmail" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Subscribe;