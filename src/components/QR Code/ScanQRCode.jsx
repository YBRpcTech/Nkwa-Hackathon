import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode, Html5QrcodeScannerState } from "html5-qrcode";

const ScanQRCode = () => {
  const [scannedData, setScannedData] = useState(null);
  const [error, setError] = useState(null);
  const qrCodeRegionId = "qr-reader";
  const html5QrCodeRef = useRef(null);

  useEffect(() => {
    const startScanner = async () => {
      try {
        html5QrCodeRef.current = new Html5Qrcode(qrCodeRegionId);
        await html5QrCodeRef.current.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          (decodedText) => {
            try {
              const parsed = JSON.parse(decodedText);
              setScannedData(parsed);
              stopScanner();
            } catch (e) {
              setError("Invalid QR code format.");
            }
          },
          (err) => {
            // scan failure callback (optional)
          }
        );
      } catch (err) {
        setError("Camera initialization failed.");
      }
    };

    const stopScanner = async () => {
      if (
        html5QrCodeRef.current &&
        html5QrCodeRef.current.getState() === Html5QrcodeScannerState.SCANNING
      ) {
        await html5QrCodeRef.current.stop();
      }
    };

    startScanner();

    return () => {
      stopScanner().catch(() => {});
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md w-full max-w-md sm:max-w-lg text-center space-y-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Scan a QR Code</h2>

        <div id={qrCodeRegionId} className="w-full aspect-square max-w-[300px] mx-auto" />

        {scannedData ? (
          <div className="text-gray-700 text-sm sm:text-base space-y-1">
            <p><span className="font-medium">Name:</span> {scannedData.name}</p>
            <p><span className="font-medium">Amount:</span> {scannedData.amount} FCFA</p>
            <p><span className="font-medium">Description:</span> {scannedData.description}</p>
          </div>
        ) : (
          <p className="text-gray-500 text-sm sm:text-base">Awaiting QR code scan...</p>
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default ScanQRCode;
