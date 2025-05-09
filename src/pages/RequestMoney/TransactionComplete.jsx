import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const TransactionComplete = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="p-8 max-w-md w-full text-center space-y-6"
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          initial={{ rotate: -20, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
          className="flex justify-center"
        >
          <BadgeCheck className="text-primary w-20 h-20" />
        </motion.div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Transaction Complete
        </h2>

        <p className="text-gray-600 text-sm">
          The money has been successfully delivered to the receiver. Thank you for using our service.
        </p>

        <Link
          to="/"
          className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-primary-3 transition text-sm"
        >
          Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default TransactionComplete;
