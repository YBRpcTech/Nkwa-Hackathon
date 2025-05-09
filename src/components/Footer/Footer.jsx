import React from 'react';
import Logo from "../../assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-green-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Logo + Address */}
          <div className="md:col-span-2">
            <img src={Logo} alt="Logo" className="h-14 w-auto mb-4" />
            <p className="text-sm">
              77 King St W Suite 400, Buea, Cameroon.
            </p>
            <p className="text-sm text-gray-500 mt-1"> Buea, Cameroon.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-2">Product</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Pay-ins</a></li>
              <li><a href="#">Payment Links</a></li>
              <li><a href="#">Payouts</a></li>
              <li><a href="#">Settlements</a></li>
              <li><a href="#">Card Issuance</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Company</a></li>
              <li><a href="#">Why Kora</a></li>
              <li className="flex items-center gap-2">
                <a href="#">Careers</a>
                <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
                  We are hiring
                </span>
              </li>
              <li><a href="#">Quick Help</a></li>
              <li><a href="#">Start Up Kit</a></li>
            </ul>
          </div>

          {/* Privacy & Legal */}
          <div>
            <h4 className="font-semibold mb-2">Privacy</h4>
            <ul className="space-y-1 text-sm mb-4">
              <li><a href="#">Privacy Notice</a></li>
              <li><a href="#">Cookies Policy</a></li>
            </ul>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
