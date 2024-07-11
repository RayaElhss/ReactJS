import React from 'react';
import Navigation from './components/Navigation'; // Import the Navigation component
import Header from './components/Header'; // Import the Header component
import About from './components/About';
import Dishes from './components/Dishes';
import WhatsHot from './components/WhatsHot';
import DownloadApp from './components/DownloadApp';
import Comments from './components/Comments';
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="hero_area">
        <Navigation />

        <Header />
      </div>

      <About />

      <Dishes />

      <WhatsHot />

      <DownloadApp />

      <Comments />

      <Contact />

      <Subscribe />

      <Footer />
    </>
  );
}

export default App;
