import React from "react";
import { Routes,Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/header/home/Home";
import Rooms from "./component/header/rooms/Rooms";
import About from "./component/header/about/About";
import Gallary from "./component/Gallary/Gallary"
import Contact from "./component/header/contact/Contact";
import Footer from "./component/header/footer/Footer"
function App() {
  return (
    <div className="app-container">
      <Header/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="about" element={<About />} />
          <Route path="gallary" element={<Gallary />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
