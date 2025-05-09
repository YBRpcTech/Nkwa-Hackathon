import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoIosArrowDown } from 'react-icons/io';
import { TbRefresh } from 'react-icons/tb';

const SAT_TO_XAF_RATE = 0.52; // 1 SAT = 278 XAF

const ConverterPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [isSatToXaf, setIsSatToXaf] = useState(true); // true = SAT -> XAF, false = XAF -> SAT

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(value);

    if (value) {
      if (isSatToXaf) {
        const xaf = parseInt(value) * SAT_TO_XAF_RATE;
        setOutputValue(xaf.toLocaleString());
      } else {
        const sat = parseInt(value) / SAT_TO_XAF_RATE;
        setOutputValue(sat.toFixed(2));
      }
    } else {
      setOutputValue('');
    }
  };

  const handleRefresh = () => {
    setIsSatToXaf(!isSatToXaf);
    setInputValue('');
    setOutputValue('');
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-3xl font-bold text-primary">
          Do Instant Payments<br />Just By Scanning!
        </h1>
        <p className="text-gray-700 mt-4 font-semibold">
          Fast, affordable online money transfers <br /> from Anywhere In Cameroon
        </p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl w-[350px]">
        <div className="text-xs bg-blue-100 text-primary-3 rounded-full px-4 py-1 inline-block mb-6 font-semibold">
          1 SAT = 0.52 XAF
        </div>

        <div className="space-y-4">
          {/* Input Field */}
          <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-1 bg-bg mb-[-8px]">
            <div>
              <p className="text-xs text-gray-500">You send</p>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={isSatToXaf ? "Enter SAT" : "Enter XAF"}
                className="bg-transparent font-semibold text-sm outline-none w-24"
              />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium">{isSatToXaf ? 'SAT' : 'XAF'}</span>
              <IoIosArrowDown />
            </div>
          </div>

          {/* Refresh / Swap Button */}
          <div className="flex justify-center">
            <button 
              onClick={handleRefresh} 
              className="bg-primary-3 text-white p-2 rounded-full hover:scale-110 transition-all duration-300"
            >
              <TbRefresh className="text-xl" />
            </button>
          </div>

          {/* Output Field */}
          <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-1 bg-bg mt-[-22px]">
            <div>
              <p className="text-xs text-gray-500">Recipient gets</p>
              <div className="font-semibold">{outputValue || '0'}</div>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium">{isSatToXaf ? 'XAF' : 'SAT'}</span>
              <IoIosArrowDown />
            </div>
          </div>

          {/* Destination */}
          <div className="border border-gray-300 rounded-xl px-4 py-1 bg-bg">
            <p className="text-xs text-gray-500 mb-1">Destination</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Cameroon</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-4">
            <button className="text-xs flex-1 bg-primary-3 text-white font-semibold py-3 rounded-full hover:scale-105 transition-all duration-300">
              Receive cash
            </button>
            <button className="text-xs flex-1 bg-primary-3 text-white font-semibold py-3 rounded-full hover:scale-105 transition-all duration-300">
              Pay cash
            </button>
          </div>
        </div>
      </div>

      {/* App Store and Playstore Buttons */}
      <div className="flex space-x-4 mt-8">
        <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm transition-all duration-300">
          <FaApple className="text-lg" />
          <span>App Store</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm transition-all duration-300">
          <FcGoogle className="text-lg" />
          <span>Playstore</span>
        </button>
      </div>
    </div>
  );
};

export default ConverterPage;
