import React, { useState } from "react";
import QRCode from "react-qr-code";

const GenerateQRCode = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "amount") {
      setAmount(value);
    } else if (name === "description") {
      setDescription(value);
    }

    // Validate if all fields are filled
    setIsFormValid(name && amount && description);
  };

  // Prepare the payload for QR code
  const payload = JSON.stringify({ name, amount, description });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg flex flex-col items-center space-y-6 w-full max-w-md sm:max-w-lg">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center">
          Enter Details to Generate QR Code
        </h3>

        {/* Form to input values */}
        <div className="space-y-4 w-full">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="p-3 border rounded-lg"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="amount" className="text-sm text-gray-700">
              Amount (in FCFA)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={handleInputChange}
              className="p-3 border rounded-lg"
              placeholder="Enter amount"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="description" className="text-sm text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleInputChange}
              className="p-3 border rounded-lg"
              placeholder="Enter description"
            />
          </div>

          <button
            type="button"
            className={`mt-4 p-3 bg-blue-500 text-white rounded-lg w-full ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={!isFormValid}
          >
            Generate QR Code
          </button>
        </div>

        {/* Display QR Code */}
        {isFormValid && (
          <div className="bg-white p-4 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <QRCode value={payload} size={256} />
          </div>
        )}

        {/* Display input data */}
        {isFormValid && (
          <div className="text-gray-600 text-sm sm:text-base text-center space-y-2">
            <p><span className="font-medium">Name:</span> {name}</p>
            <p><span className="font-medium">Amount:</span> {amount} FCFA</p>
            <p><span className="font-medium">Description:</span> {description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateQRCode;
