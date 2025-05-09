import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaidSuccess = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className=" p-8 max-w-md w-full text-center space-y-6"
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          className="flex justify-center"
        >
          <CheckCircle2 className="text-green-500 w-20 h-20" />
        </motion.div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Payment Successful!
        </h2>

        <p className="text-gray-600 text-sm">
          Your payment has been processed successfully. The money is being sent to the receiver and will arrive shortly.
        </p>

        <Link
          to="/"
          className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition text-sm"
        >
          Return to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default PaidSuccess;
