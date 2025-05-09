import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu toggle
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-sm">
          <li className="hover:text-primary-2 cursor-pointer transition">Convert Currencies</li>
          <li className="hover:text-primary-2 cursor-pointer transition">Wallet</li>
          <li className="hover:text-primary-2 cursor-pointer transition">About Us</li>
          <li className="hover:text-primary-2 cursor-pointer transition">Contact Us</li>
        </ul>

        {/* Sign In Button */}
        <div className="hidden md:block">
          <button className="bg-primary-3 text-white px-6 py-2 rounded-full hover:bg-primary-2 transition">
            Sign In
          </button>
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
            <li className="hover:text-primary-2 cursor-pointer">Convert Currencies</li>
            <li className="hover:text-primary-2 cursor-pointer">Wallet</li>
            <li className="hover:text-primary-2 cursor-pointer">About Us</li>
            <li className="hover:text-primary-2 cursor-pointer">Contact Us</li>
            <li>
              <button className="mt-2 w-full bg-primary-3 text-white px-4 py-2 rounded-full hover:bg-primary-2 transition">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
