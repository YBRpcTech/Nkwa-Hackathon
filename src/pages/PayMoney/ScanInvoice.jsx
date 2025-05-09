import React, { useEffect, useRef, useState } from 'react';
import { Camera, QrCode, Info, Phone, DollarSign, ClipboardCheck } from 'lucide-react';
import { Html5Qrcode } from "html5-qrcode";
import { motion } from "framer-motion";
import img from "../../assets/scanning.jpg";

const ScanInvoice = () => {
  const [invoiceCode, setInvoiceCode] = useState('');
  const [scanned, setScanned] = useState(false);
  const qrRef = useRef(null);
  const html5QrCodeRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const qrRegionId = "qr-scanner-region";

    const startScanner = async () => {
      if (!qrRef.current) return;

      html5QrCodeRef.current = new Html5Qrcode(qrRegionId);

      try {
        const devices = await Html5Qrcode.getCameras();
        if (devices && devices.length) {
          const cameraId = devices[0].id;

          await html5QrCodeRef.current.start(
            cameraId,
            { fps: 10, qrbox: 200 },
            (decodedText) => {
              if (decodedText !== invoiceCode) {
                setInvoiceCode(decodedText);
                setScanned(true);

                if (isScanning) {
                  html5QrCodeRef.current.stop().then(() => {
                    setIsScanning(false);
                  }).catch((err) => {
                    console.error("Stop error:", err);
                  });
                }
              }
            }
          );
          setIsScanning(true);
        }
      } catch (err) {
        console.error("Camera start error", err);
      }
    };

    // Delay scanner start to ensure DOM is rendered
    const delayInit = setTimeout(startScanner, 500);

    return () => {
      clearTimeout(delayInit);
      if (html5QrCodeRef.current && isScanning) {
        html5QrCodeRef.current.stop().then(() => {
          html5QrCodeRef.current.clear();
        }).catch((err) => {
          console.error("Stop cleanup error:", err);
        });
      }
    };
  }, []);

  // Placeholder data
  const amountToPay = '₿ 0.00015 (~$10)';
  const receiver = 'MTN Mobile Money - 675 123 456';
  const description = 'Payment for freelance web development service';

  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 lg:px-32 xl:px-56">
      {/* Intro */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Scan to Pay Instantly</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Use your camera or wallet app to scan the QR code. If you're unable to scan, paste the invoice code manually.
        </p>
      </motion.div>

      {/* Split Screen */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={img} alt="Scan Illustration" className="w-full h-auto" />
        </motion.div>

        {/* QR Scanner Section */}
        <motion.div
          className="w-full lg:w-1/2 bg-white p-6 space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
            <QrCode className="text-green-500" /> QR Scanner
          </div>

          {/* Actual QR Scanner */}
          <div className="border-4 border-dashed border-green-500 rounded-lg h-56 bg-gray-50 relative overflow-hidden">
            <div id="qr-scanner-region" ref={qrRef} className="w-full h-full"></div>
          </div>

          {/* Invoice Code Manual Entry */}
          <div>
            <label htmlFor="invoice" className="text-sm font-medium text-gray-700 mb-1 block">
              Paste Invoice Code (if not scanned)
            </label>
            <input
              type="text"
              id="invoice"
              value={invoiceCode}
              onChange={(e) => {
                setInvoiceCode(e.target.value);
                setScanned(true);
              }}
              placeholder="lnbc1exampleinvoicecode..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
            />
            {scanned && (
              <p className="text-xs text-green-600 mt-2 flex items-center">
                <ClipboardCheck className="w-4 h-4 mr-1" /> Invoice code ready
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Payment Info Cards */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
          <DollarSign className="text-green-500 w-8 h-8" />
          <div>
            <p className="text-sm text-gray-500">Amount to Pay</p>
            <h4 className="text-lg font-semibold text-gray-800">{amountToPay}</h4>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
          <Phone className="text-yellow-500 w-8 h-8" />
          <div>
            <p className="text-sm text-gray-500">Receiver Info</p>
            <h4 className="text-lg font-semibold text-gray-800">{receiver}</h4>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
          <Info className="text-blue-500 w-8 h-8" />
          <div>
            <p className="text-sm text-gray-500">Transaction Description</p>
            <h4 className="text-lg font-semibold text-gray-800">{description}</h4>
          </div>
        </div>
      </motion.div>

      {/* Pay Button */}
      <motion.div
        className="mt-10 flex justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <button className="bg-green-600 text-white text-lg px-12 py-4 rounded-full hover:bg-green-700 transition shadow-md">
          Pay Now
        </button>
      </motion.div>
    </div>
  );
};

export default ScanInvoice;
