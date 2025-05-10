import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import { Copy } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from "../../assets/favicon.png";
import { useParams, useNavigate } from 'react-router-dom';
import img from "../../assets/qr scanner.jpeg";
import { fetchBitcoinTransaction } from '../../redux/bitcoinActions';
import { fetchMomoTransaction } from '../../redux/momoActions';

const InvoiceGen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: invoiceId } = useParams();

  const {
    transaction: bitcoinTransaction,
    loading: bitcoinLoading,
    error: bitcoinError
  } = useSelector(state => state.bitcoin);

  const {
    transaction: momoTransaction,
    loading: momoLoading,
    error: momoError
  } = useSelector(state => state.momo);

  const isBitcoin = invoiceId && invoiceId[0] === 'i';

  useEffect(() => {
    if (isBitcoin) {
      dispatch(fetchBitcoinTransaction(invoiceId));
    } else {
      dispatch(fetchMomoTransaction(invoiceId));
    }
  }, [dispatch, invoiceId, isBitcoin]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/transaction-complete');
    }, 1 * 30 * 1000); // 2 minutes

    return () => clearTimeout(timeout);
  }, [navigate]);

  useEffect(() => {
    return () => {
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(invoiceId);
    alert('Invoice copied to clipboard!');
  };

  const transaction = isBitcoin ? bitcoinTransaction : momoTransaction;
  const loading = isBitcoin ? bitcoinLoading : momoLoading;
  const error = isBitcoin ? bitcoinError : momoError;

  const qrValue = isBitcoin
    ? transaction?.invoiceHash
    : invoiceId;

  return (
    <>
      <div className="text-center mt-2 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Scan the QR Code Below to Make Your Payment
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Use your {isBitcoin ? 'Bitcoin Lightning' : 'TchokoPay'} wallet to scan and complete the transaction instantly.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 md:px-20 lg:px-56 py-10 gap-10">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={img}
            alt="Payment Illustration"
            className="max-w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 bg-white flex flex-col items-center space-y-12 sm:space-y-16"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {qrValue && (
            <div className="relative w-[200px] h-[200px]">
              <QRCode
                value={qrValue}
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
          )}

          <div className="w-full max-w-md flex flex-col items-center px-4">
            <p className="text-gray-700 font-semibold mb-2 text-center">Invoice Code</p>
            <div className="flex items-center justify-between w-full bg-gray-100 px-4 py-3 rounded-lg shadow-sm">
              <span className="text-sm text-gray-800 truncate">{qrValue || 'N/A'}</span>
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

      {!loading && (
        <div className="flex flex-col items-center justify-center mb-16 space-y-2">
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
          <p className="text-gray-700 text-sm font-medium">Waiting for Payment...</p>
        </div>
      )}

      {error && (
        <div className="text-center text-red-600 mt-4">{error}</div>
      )}
    </>
  );
};

export default InvoiceGen;
