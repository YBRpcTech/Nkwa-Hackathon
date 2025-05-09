import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GenerateQRCode from "./components/QR Code/GenerateQRCode";
import ScanQRCode from "./components/QR Code/ScanQRCode";
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow p-4 flex justify-center space-x-6">
          <Link to="/" className="text-blue-600 font-semibold hover:underline">Generate QR</Link>
          <Link to="/scan" className="text-blue-600 font-semibold hover:underline">Scan QR</Link>
        </nav>

        <Routes>
          <Route path="/" element={<GenerateQRCode />} />
          <Route path="/scan" element={<ScanQRCode />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
