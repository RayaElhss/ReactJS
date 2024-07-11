import React from 'react';

export default function Navigation() {
  const openNav = () => {
    console.log('Nav button clicked');
    const nav = document.getElementById('myNav');
    if (nav) {
      nav.style.width = "100%";
    }
  };

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="" />
            <span>Goid</span>
          </a>
          <div className="navbar-collapse">
            <div className="custom_menu-btn">
              <button onClick={openNav}>
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
              </button>
            </div>
            <div id="myNav" className="overlay">
              <div className="overlay-content">
                <a href="index.html">HOME</a>
                <a href="about.html">ABOUT</a>
                <a href="food.html">Food</a>
                <a href="contact.html">Contact Us</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
