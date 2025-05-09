import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GenerateQRCode from "./components/QR Code/GenerateQRCode";
import ScanQRCode from "./components/QR Code/ScanQRCode";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import RequestMoney from "./pages/RequestMoney/RequestMoney";
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-28">
      <RequestMoney />
      </div>
      
     
    </Router>
  );
};

export default App;
