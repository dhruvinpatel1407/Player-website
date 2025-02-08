import React from "react";
import Navbar from "./navbar";
import Home from "./../../pages/home-landingpage";
import About from "./../../pages/about";
import Contact from "./../../pages/contact";
import PopularPlayer from "./../../pages/popular player";
import PlayerScore from "./../../pages/view-score";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../footer";
import ErrorBoundry from "../error boundry";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/popular-player" element={
            <ErrorBoundry><PopularPlayer /></ErrorBoundry>
            } />
          <Route path="/view-Scores" element={<PlayerScore />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Router;
