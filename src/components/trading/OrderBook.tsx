import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Sample order book data
const askOrders = [
  { price: 37450, amount: 1.5, total: 56175 },
  { price: 37400, amount: 0.8, total: 29920 },
  { price: 37350, amount: 2.1, total: 78435 },
  { price: 37300, amount: 1.2, total: 44760 },
  { price: 37250, amount: 3.5, total: 130375 },
];

const bidOrders = [
  { price: 37200, amount: 2.2, total: 81840 },
  { price: 37150, amount: 1.7, total: 63155 },
  { price: 37100, amount: 4.0, total: 148400 },
  { price: 37050, amount: 1.5, total: 55575 },
  { price: 37000, amount: 3.2, total: 118400 },
];

const OrderBook = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Order Book</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 text-sm font-medium pb-2 mb-2">
          <div>Price (USDT)</div>
          <div className="text-right">Amount (BTC)</div>
          <div className="text-right">Total (USDT)</div>
        </div>
        
        {/* Asks (Sell Orders) - Displayed in reverse order (highest to lowest) */}
        <div className="max-h-[150px] overflow-y-auto mb-4">
          {askOrders.map((order, index) => (
            <div key={index} className="grid grid-cols-3 text-sm py-1 hover:bg-muted/50">
              <div className="text-red-500">{order.price.toFixed(2)}</div>
              <div className="text-right">{order.amount.toFixed(2)}</div>
              <div className="text-right">{order.total.toFixed(2)}</div>
            </div>
          ))}
        </div>
        
        {/* Spread */}
        <div className="py-2 text-center text-sm text-muted-foreground bg-muted/30 mb-2">
          Spread: 50.00 (0.13%)
        </div>
        
        {/* Bids (Buy Orders) */}
        <div className="max-h-[150px] overflow-y-auto">
          {bidOrders.map((order, index) => (
            <div key={index} className="grid grid-cols-3 text-sm py-1 hover:bg-muted/50">
              <div className="text-green-500">{order.price.toFixed(2)}</div>
              <div className="text-right">{order.amount.toFixed(2)}</div>
              <div className="text-right">{order.total.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderBook;
