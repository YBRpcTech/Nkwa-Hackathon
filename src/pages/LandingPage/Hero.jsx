import React from "react";
import { Link } from "react-router-dom";
import payImage from "../../assets/Pay.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-auto md:h-[550px] px-6 md:px-20 2xl:px-52 bg-white">
      {/* Write-up section */}
      <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8 max-w-xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Send Instant <br />
          payments with <br />
          <span className="text-primary">
            NchokoPay<span className="text-primary">.</span>
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-700">
          Pay with Bitcoin Lightning, MoMo, Orange Money, get paid your way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
          <Link to="/receive">
            <button className="py-4 px-8 bg-primary text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
              Receive Instantly
            </button>
          </Link>
          <Link to="/send">
            <button className="py-4 px-8 border-2 border-primary text-primary font-semibold rounded-full hover:scale-105 transition-all duration-300">
              Pay Instantly
            </button>
          </Link>
        </div>
      </div>

      {/* Illustration image section */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img
          src={payImage}
          alt="Payment Illustration"
          className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
