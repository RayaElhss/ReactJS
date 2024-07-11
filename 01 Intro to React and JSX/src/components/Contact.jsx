import React from "react";

const Contact = () => {
  return (
    <section className="contact_section layout_padding-bottom">
      <div className="container">
        <h2>Get In touch</h2>
        <div className="row">
          <div className="col-md-7">
            <div className="form_container">
              <form action="">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone number" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Message" className="message_input" />
                <button>Send</button>
              </form>
            </div>
          </div>
          <div className="col-md-5">
            <div className="contact_box">
              <a href="">
                <div className="img-box">
                  <img src="images/location.png" alt="" />
                </div>
                <h6>Gb road 123 london Uk</h6>
              </a>
              <a href="">
                <div className="img-box">
                  <img src="images/call.png" alt="" />
                </div>
                <h6>(+01) 123456789012</h6>
              </a>
              <a href="">
                <div className="img-box">
                  <img src="images/envelope.png" alt="" />
                </div>
                <h6>demo@gmail.com</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
