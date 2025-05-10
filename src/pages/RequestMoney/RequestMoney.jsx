import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bitcoin, Phone, LogIn, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import img from '../../assets/RecieveMoney.png';
import { FcMoneyTransfer } from 'react-icons/fc';
import { createInvoice } from '../../redux/invoiceActions';
import { useNavigate } from 'react-router-dom';
import mtn from "../../assets/mtn.png";
import orange from "../../assets/om.jpg";

const fadeVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
};

const RequestMoney = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [payerMethod, setPayerMethod] = useState('');
  const [receiverMethod, setReceiverMethod] = useState('');
  const [formData, setFormData] = useState({
    senderNumber: '',
    receiverNumber: '',
    receiverName: '',
    amount: '',
    description: '',
  });

  const { invoiceId, loading, error } = useSelector((state) => state.invoice);

  useEffect(() => {
    if (invoiceId) {
      navigate(`/generate-invoice/${invoiceId}`);
    }
  }, [invoiceId, navigate]);

  const goNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      payerMethod,
      senderNumber: (payerMethod === 'MTN MoMo' || payerMethod === 'Orange Money') ? formData.senderNumber : null,
      receiverMethod,
      receiverNumber: formData.receiverNumber,
      amount: Number(formData.amount),
      description: formData.description || '',
    };
    dispatch(createInvoice(payload));
  };

  const renderIcon = (method) => {
    if (method === 'Bitcoin Lightning') {
      return <Bitcoin className="text-yellow-500 mb-2" size={28} />;
    }
    if (method === 'MTN MoMo') {
      return <img src={mtn} alt="MTN" className="w-10 h-10 rounded-full object-cover mb-2" />;
    }
    if (method === 'Orange Money') {
      return <img src={orange} alt="Orange" className="w-10 h-10 rounded-full object-cover mb-2" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row transition-all duration-500 ease-in-out px-4 sm:px-8 lg:px-46 xl:px-56 ">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
        <img src={img} alt="TchokoPay" className="w-full max-w-md lg:max-w-full object-contain" />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 px-2 sm:px-6 mt-[-40px]">
        <div className="text-sm text-gray-500">Step {step} of 4</div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" {...fadeVariant}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Welcome to TchokoPay</h2>
              <p className="text-gray-600 mt-2">
                Seamlessly send money through Bitcoin Lightning, MTN MoMo or Orange Money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={() => alert('Login not implemented')}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-full flex items-center justify-center gap-2"
                >
                  <LogIn size={18} /> Login
                </button>
                <button
                  onClick={goNext}
                  className="bg-primary-3 hover:bg-primary-2 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2"
                >
                  <FcMoneyTransfer size={18} /> Pay as Guest
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" {...fadeVariant}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">How would you like to pay?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Bitcoin Lightning', 'MTN MoMo', 'Orange Money'].map((method, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setPayerMethod(method);
                      goNext();
                    }}
                    className="cursor-pointer border rounded-xl p-4 hover:shadow-md transition  flex flex-col items-center text-center"
                  >
                    {renderIcon(method)}
                    <span className="font-medium text-gray-700">{method}</span>
                  </div>
                ))}
              </div>
              <button onClick={goBack} className="text-sm text-primary-3 mt-4 flex items-center gap-1">
                <ArrowLeft size={16} /> Back
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" {...fadeVariant}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                How should the receiver receive the money?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['MTN MoMo', 'Orange Money'].map((method, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setReceiverMethod(method);
                      goNext();
                    }}
                    className="cursor-pointer border rounded-xl p-4 hover:shadow-md transition  flex flex-col items-center text-center"
                  >
                    {renderIcon(method)}
                    <span className="font-medium text-gray-700">{method}</span>
                  </div>
                ))}
              </div>
              <button onClick={goBack} className="text-sm text-primary-3 mt-4 flex items-center gap-1">
                <ArrowLeft size={16} /> Back
              </button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.form
              key="step4"
              onSubmit={handleSubmit}
              className="space-y-4"
              {...fadeVariant}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Enter Receiver Details</h3>

              {(payerMethod === 'MTN MoMo' || payerMethod === 'Orange Money') && (
                <input
                  type="text"
                  name="senderNumber"
                  value={formData.senderNumber}
                  onChange={handleChange}
                  placeholder={`Sender's ${payerMethod} Number`}
                  className="w-full border rounded px-4 py-2 focus:outline-primary-3"
                  required
                />
              )}

              <input
                type="text"
                name="receiverName"
                value={formData.receiverName}
                onChange={handleChange}
                placeholder="Receiver's Name"
                className="w-full border rounded px-4 py-2 focus:outline-primary-3"
                required
              />
              <input
                type="text"
                name="receiverNumber"
                value={formData.receiverNumber}
                onChange={handleChange}
                placeholder={`Receiver's ${receiverMethod} Number`}
                className="w-full border rounded px-4 py-2 focus:outline-primary-3"
                required
              />
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount to Receive (FCFA)"
                className="w-full border rounded px-4 py-2 focus:outline-primary-3"
                required
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description (optional)"
                className="w-full border rounded px-4 py-2 focus:outline-primary-3"
                rows={3}
              ></textarea>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <button
                  type="button"
                  onClick={goBack}
                  className="text-sm text-primary-3 flex items-center gap-1"
                >
                  <ArrowLeft size={16} /> Back
                </button>

                <button
                  type="submit"
                  className="bg-primary-3 text-white px-6 py-2 rounded-full hover:bg-primary-2 transition flex items-center justify-center gap-2"
                >
                  Initiate Transaction <ArrowRight size={18} />
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RequestMoney;
