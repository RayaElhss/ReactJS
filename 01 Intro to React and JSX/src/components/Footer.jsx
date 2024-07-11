import React from "react";

const Footer = () => {
    return (
        <section className="container-fluid footer_section">
            <div className="social_container">
                <h4>Follow on</h4>
                <div className="social-box">
                    <a href="">
                        <img src="images/fb.png" alt="" />
                    </a>
                    <a href="">
                        <img src="images/twitter.png" alt="" />
                    </a>
                    <a href="">
                        <img src="images/linkedin.png" alt="" />
                    </a>
                    <a href="">
                        <img src="images/youtube.png" alt="" />
                    </a>
                </div>
            </div>
            <p>&copy; 2019 All Rights Reserved. Design by <a href="https://html.design/">Free Html Templates</a></p>
        </section>
    )
};

export default Footer;