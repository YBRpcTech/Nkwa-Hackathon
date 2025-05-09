import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import { Copy } from 'lucide-react';
import Logo from "../../assets/favicon.png";
import img from "../../assets/qr scanner.jpeg";

const invoiceCode = 'lnbc1p0exampleinvoicetext';

const InvoiceGen = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(invoiceCode);
    alert('Invoice copied to clipboard!');
  };

  // Stop any active camera/video streams on unmount
  useEffect(() => {
    return () => {
      // Find all video elements and stop their streams
      const videos = document.querySelectorAll('video');
      videos.forEach((video) => {
        const stream = video.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
          video.srcObject = null;
        }
      });
    };
  }, []);

  return (
    <>
      {/* Heading Write-up */}
      <div className="text-center mt-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Scan the QR Code Below to Make Your Payment
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Use your Bitcoin Lightning wallet or TchokoPay to scan and complete the transaction instantly.
        </p>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 md:px-20 lg:px-56 py-10 gap-10">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={img}
            alt="Payment Illustration"
            className="max-w-full h-auto "
          />
        </motion.div>

        {/* QR & Invoice Section */}
        <motion.div
          className="w-full md:w-1/2 bg-white flex flex-col items-center space-y-12 sm:space-y-16"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* QR Code with Logo */}
          <div className="relative w-[200px] h-[200px]">
            <QRCode
              value={invoiceCode}
              size={200}
              bgColor="#ffffff"
              fgColor="#000000"
              className="rounded"
            />
            <img
              src={Logo}
              alt="Logo"
              className="absolute top-1/2 left-1/2 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-1 shadow"
            />
          </div>

          {/* Invoice Code */}
          <div className="w-full max-w-md flex flex-col items-center px-4">
            <p className="text-gray-700 font-semibold mb-2 text-center">Invoice Code</p>
            <div className="flex items-center justify-between w-full bg-gray-100 px-4 py-3 rounded-lg shadow-sm">
              <span className="text-sm text-gray-800 truncate">{invoiceCode}</span>
              <button
                onClick={copyToClipboard}
                className="ml-3 text-primary-3 hover:text-primary-2 transition"
                title="Copy"
              >
                <Copy size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pending Animation & Waiting Text */}
      <div className="flex flex-col items-center justify-center mt-4 mb-16 space-y-2">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
          className="text-green-600"
        >
          <div className="w-10 h-10 rounded-full bg-green-600"></div>
        </motion.div>
        <p className="text-gray-700 text-lg font-medium">Waiting for Payment...</p>
      </div>
    </>
  );
};

export default InvoiceGen;
