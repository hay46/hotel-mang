import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./component/header/Header";
import Home from "./component/header/home/Home";
import Rooms from "./component/header/rooms/Rooms";
import Footer from "./component/header/footer/Footer";

function App(){
  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        {/* <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
