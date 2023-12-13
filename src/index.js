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
import IndexEspanol from "views/IndexEspanol";
import IndexEnglish from "views/IndexEnglish";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/truck" exact element={<Truck/>} />
      <Route path="/plane" exact element={<Plane/>} />
      <Route path="/ship" exact element={<Ship/>} />
      <Route path='/contact' exact element={<Contact/>} />
      <Route path="/esp" exact element={<IndexEspanol />} />
      <Route path="/eng" exact element={<IndexEnglish />} />
      <Route path="/landing-page" exact element={<Landing />} />
      <Route path="/login-page" exact element={<Login />} />
      <Route path="/profile-page" exact element={<Profile />} />
      <Route path="/register-page" exact element={<Register />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    
  </BrowserRouter>
);
