import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

interface QRScannerProps {
  onScan: (data: string) => void;
  width?: number;
  height?: number;
  fps?: number;
}

const QRScanner: React.FC<QRScannerProps> = ({
  onScan,
  width = 250,
  height = 250,
  fps = 10,
}) => {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const scannerContainerId = 'qr-scanner-container';
  const [isScanning, setIsScanning] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  useEffect(() => {
    scannerRef.current = new Html5Qrcode(scannerContainerId);
    
    const startScanner = async () => {
      try {
        setIsScanning(true);
        
        await scannerRef.current?.start(
          { facingMode: "environment" },
          {
            fps,
            qrbox: { width: width * 0.7, height: height * 0.7 },
            aspectRatio: 1,
          },
          (decodedText) => {
            onScan(decodedText);
            stopScanner();
          },
          () => {}
        );
      } catch (error) {
        console.error('Error starting QR scanner:', error);
        setCameraError('Could not access camera. Please ensure you have granted camera permissions.');
      }
    };
    
    startScanner();
    
    return () => {
      stopScanner();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const stopScanner = () => {
    if (scannerRef.current && isScanning) {
      scannerRef.current
        .stop()
        .then(() => {
          setIsScanning(false);
        })
        .catch((error) => {
          console.error('Error stopping QR scanner:', error);
        });
    }
  };
  
  return (
    <div>
      {cameraError ? (
        <div className="flex flex-col items-center justify-center h-[250px] w-[250px] bg-muted rounded-lg">
          <p className="text-center text-red-500 p-4">{cameraError}</p>
        </div>
      ) : (
        <div id={scannerContainerId} style={{ width, height }}></div>
      )}
    </div>
  );
};

export default QRScanner;
