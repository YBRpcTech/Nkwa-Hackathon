import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GenerateQRCode from "./components/QR Code/GenerateQRCode";
import ScanQRCode from "./components/QR Code/ScanQRCode";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import RequestMoney from "./pages/RequestMoney/RequestMoney";
import InvoiceGen from "./pages/InvoicePage/InvoiceGen";
import ScanInvoice from "./pages/PayMoney/ScanInvoice";
import PaidSuccess from "./pages/PayMoney/PaidSuccess";
import TransactionComplete from "./pages/RequestMoney/TransactionComplete";

const App = () => {
  return (
    <Router>
      {/* Static Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Page Content with top padding to avoid overlap */}
      <div className="pt-28 px-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generate-qr" element={<GenerateQRCode />} />
          <Route path="/scan-qr" element={<ScanQRCode />} />
          <Route path="/request-money" element={<RequestMoney />} />
          <Route path="/generate-invoice" element={<InvoiceGen />} />
          <Route path="/scan-invoice" element={<ScanInvoice />} />
          <Route path="/payment-success" element={<PaidSuccess />} />
          <Route path="/transaction-complete" element={<TransactionComplete />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
