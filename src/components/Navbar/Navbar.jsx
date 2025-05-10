import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-sm">
          <li>
            <Link to="/generate-qr" className="hover:text-primary-2 transition">Convert Currencies</Link>
          </li>
          <li>
            <Link to="/wallet" className="hover:text-primary-2 transition">Wallet</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary-2 transition">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary-2 transition">Contact Us</Link>
          </li>
        </ul>

        {/* Sign In Button */}
        <div className="hidden md:block">
          <Link to="/scan-invoice">
            <button className="bg-primary-3 text-white px-6 py-2 rounded-full hover:scale-105 hover:bg-primary-2 transition-all duration-300">
              Pay Instantly
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <ul className="space-y-4 text-gray-700 font-medium text-sm pt-4">
            <li>
              <Link to="/generate-qr" className="hover:text-primary-2" onClick={() => setMobileMenuOpen(false)}>Convert Currencies</Link>
            </li>
            <li>
              <Link to="/wallet" className="hover:text-primary-2" onClick={() => setMobileMenuOpen(false)}>Wallet</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary-2" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary-2" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </li>
            <li>
              <Link to="/scan-invoice" onClick={() => setMobileMenuOpen(false)}>
                <button className="mt-2 w-full bg-primary-3 text-white px-4 py-2 rounded-full hover:bg-primary-2 transition">
                  Pay Instantly
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
