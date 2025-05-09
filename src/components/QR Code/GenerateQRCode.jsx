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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Scan to Request Payment
        </h3>

        <div className="bg-white p-4 rounded-lg">
          <QRCode value={payload} size={256} />
        </div>

        <div className="text-gray-600 text-sm text-center">
          <p><span className="font-medium">Name:</span> {data.name}</p>
          <p><span className="font-medium">Amount:</span> {data.amount} FCFA</p>
          <p><span className="font-medium">Description:</span> {data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GenerateQRCode;
