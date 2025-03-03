import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from 'lucide-react';

// Sample market pairs
const marketPairs = [
  { pair: 'BTC/USDT', price: 37245.80, change: '+2.5%', volume: '1.2B', status: 'up' },
  { pair: 'ETH/USDT', price: 2481.65, change: '+1.8%', volume: '850M', status: 'up' },
  { pair: 'SOL/USDT', price: 143.20, change: '+4.2%', volume: '480M', status: 'up' },
  { pair: 'ADA/USDT', price: 0.4580, change: '-0.5%', volume: '120M', status: 'down' },
  { pair: 'XRP/USDT', price: 0.5978, change: '+0.3%', volume: '210M', status: 'up' },
  { pair: 'DOT/USDT', price: 6.8420, change: '-1.2%', volume: '90M', status: 'down' },
  { pair: 'AVAX/USDT', price: 32.4500, change: '+3.1%', volume: '150M', status: 'up' },
  { pair: 'DOGE/USDT', price: 0.1295, change: '+0.8%', volume: '180M', status: 'up' },
];

interface MarketPairsProps {
  selectedPair: string;
  setSelectedPair: (pair: string) => void;
  setPrice: (price: string) => void;
}

const MarketPairs = ({ selectedPair, setSelectedPair, setPrice }: MarketPairsProps) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle>Market Pairs</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="px-4 py-2 bg-muted text-sm grid grid-cols-4">
          <div>Pair</div>
          <div className="text-right">Price</div>
          <div className="text-right">Change</div>
          <div className="text-right">Volume</div>
        </div>
        <div className="max-h-[calc(100vh-360px)] overflow-y-auto">
          {marketPairs.map((pair, index) => (
            <div 
              key={index} 
              className="px-4 py-3 text-sm grid grid-cols-4 hover:bg-muted/50 cursor-pointer border-t"
              onClick={() => {
                setSelectedPair(pair.pair);
                setPrice(pair.price.toString());
              }}
            >
              <div className="font-medium">{pair.pair}</div>
              <div className="text-right">{pair.price}</div>
              <div className={`text-right ${pair.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                <span className="flex items-center justify-end">
                  {pair.status === 'up' ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                  {pair.change}
                </span>
              </div>
              <div className="text-right">{pair.volume}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketPairs;
export { marketPairs };
