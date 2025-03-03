import React, { useState } from 'react';
import MarketPairs from '@/components/trading/MarketPairs';
import PriceChart from '@/components/trading/PriceChart';
import OrderBook from '@/components/trading/OrderBook';
import OrderForm from '@/components/trading/OrderForm';

const TradingPage: React.FC = () => {
  const [selectedPair, setSelectedPair] = useState('BTC/USDT');
  const [currentPrice, setCurrentPrice] = useState('37245.80');

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-4">
        {/* Market Pairs Column */}
        <div className="col-span-3">
          <MarketPairs 
            selectedPair={selectedPair} 
            setSelectedPair={setSelectedPair}
            setPrice={setCurrentPrice}
          />
        </div>

        {/* Price Chart Column */}
        <div className="col-span-6">
          <div className="grid grid-rows-2 gap-4">
            <PriceChart selectedPair={selectedPair} />
            <OrderBook />
          </div>
        </div>

        {/* Order Form Column */}
        <div className="col-span-3">
          <OrderForm 
            selectedPair={selectedPair} 
            price={currentPrice}
            setPrice={setCurrentPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default TradingPage;
