import React, { useEffect, useRef } from 'react';
import QRCodeLib from 'qrcode';

interface QRCodeProps {
  value: string;
  size?: number;
  level?: 'L' | 'M' | 'Q' | 'H';
  includeMargin?: boolean;
  color?: {
    dark?: string;
    light?: string;
  };
}

const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 128,
  level = 'L',
  includeMargin = false,
  color = {
    dark: '#000000',
    light: '#ffffff',
  },
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCodeLib.toCanvas(
        canvasRef.current,
        value,
        {
          width: size,
          margin: includeMargin ? 4 : 0,
          errorCorrectionLevel: level,
          color: {
            dark: color.dark || '#000000',
            light: color.light || '#ffffff',
          },
        },
        (error) => {
          if (error) console.error('Error generating QR code:', error);
        }
      );
    }
  }, [value, size, level, includeMargin, color]);

  return (
    <div className="qr-code-container">
      <canvas ref={canvasRef} width={size} height={size} />
    </div>
  );
};

export default QRCode;
