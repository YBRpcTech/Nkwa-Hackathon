import React from "react";
import QRCode from "react-qr-code";

const GenerateQRCode = () => {
  const data = {
    name: "Yabuin Brian",
    amount: 5000,
    description: "For School fees",
  };

  const payload = JSON.stringify(data);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg flex flex-col items-center space-y-6 w-full max-w-md sm:max-w-lg">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center">
          Scan to Request Payment
        </h3>

        <div className="bg-white p-4 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <QRCode value={payload} size={256} />
        </div>

        <div className="text-gray-600 text-sm sm:text-base text-center space-y-2">
          <p><span className="font-medium">Name:</span> {data.name}</p>
          <p><span className="font-medium">Amount:</span> {data.amount} FCFA</p>
          <p><span className="font-medium">Description:</span> {data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GenerateQRCode;
