import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Contact from "views/Contact";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import DemoNavbar from "components/Navbars/DemoNavbar";
import CardsFooter from "components/Footers/CardsFooter";
import Hero from "views/IndexSections/Hero";

import Index from "views/Index.js";
import Truck from "views/Transportes/Truck";
import Plane from "views/Transportes/Plane";
import Ship from "views/Transportes/Ship";
import Thanks from "views/Thanks";

import IndexEnglish from "views/IndexEnglish";
import PlaneEng from "views//Transportes/PlaneEng.js";
import ShipEng from "views/Transportes/ShipEng.js";
import TruckEng from "views/Transportes/TruckEng.js";
import ContactEng from "views/ContactEng";

import IndexEspanol from "views/IndexEspanol";
import PlaneEsp from "views/Transportes/PlaneEsp";
import ShipEsp from "views/Transportes/ShipEsp";
import TruckEsp from "views/Transportes/TruckEsp";
import ContactEsp from "views/ContactEsp";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/truck" element={<Truck/>} />
      <Route path="/plane" element={<Plane/>} />
      <Route path="/ship" element={<Ship/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path="/contact/thanks" element={<Thanks/>} />
      
      <Route path="/eng"  element={<IndexEnglish />} />
      <Route path="/eng/truck" element={<TruckEng />} />
      <Route path="/eng/plane" element={<PlaneEng/>} />
      <Route path="/eng/ship" element={<ShipEng />} />
      <Route path="/eng/contact" element={<ContactEng />} />

      <Route path="/esp"  element={<IndexEspanol />} />
      <Route path="/esp/plane" element={<PlaneEsp/>} />
      <Route path="/esp/ship" element={<ShipEsp/>} />
      <Route path="/esp/truck" element={<TruckEsp />} />
      <Route path="/esp/contact" element={<ContactEsp />} />
      
    </Routes>
    
  </BrowserRouter>
);
