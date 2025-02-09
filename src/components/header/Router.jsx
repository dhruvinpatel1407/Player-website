import React,{ useEffect } from "react";
import Navbar from "./navbar";
import Home from "./../../pages/home-landingpage";
import About from "./../../pages/about";
import ContactUs from "../../pages/contact";
import PopularPlayer from "./../../pages/popular player";
import PlayerScore from "./../../pages/view-score";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "../footer";


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 

  return null; 
};

function Router() {

  return (
    <>
      <BrowserRouter>
      
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/popular-player" element={<PopularPlayer />} />
          <Route path="/view-Scores" element={<PlayerScore />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Router;
