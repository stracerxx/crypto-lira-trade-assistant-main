import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

interface OrderFormProps {
  selectedPair: string;
  price: string;
  setPrice: (price: string) => void;
}

const OrderForm = ({ selectedPair, price, setPrice }: OrderFormProps) => {
  const [orderType, setOrderType] = useState('limit');
  const [side, setSide] = useState('buy');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState('0.00');
  const [advancedOrder, setAdvancedOrder] = useState(false);
  const { toast } = useToast();
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    
    if (newAmount && price) {
      const calculatedTotal = (parseFloat(newAmount) * parseFloat(price)).toFixed(2);
      setTotal(calculatedTotal);
    } else {
      setTotal('0.00');
    }
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    
    if (amount && newPrice) {
      const calculatedTotal = (parseFloat(amount) * parseFloat(newPrice)).toFixed(2);
      setTotal(calculatedTotal);
    } else {
      setTotal('0.00');
    }
  };
  
  const handlePlaceOrder = () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }
    
    if (orderType === 'limit' && (!price || parseFloat(price) <= 0)) {
      toast({
        title: "Invalid price",
        description: "Please enter a valid price",
        variant: "destructive",
      });
      return;
    }
    
    const orderDetails = {
      type: orderType,
      side: side,
      pair: selectedPair,
      amount: amount,
      price: orderType === 'market' ? 'Market Price' : price,
      total: total
    };
    
    console.log('Order placed:', orderDetails);
    
    toast({
      title: `${side.toUpperCase()} order placed successfully`,
      description: `${amount} ${selectedPair.split('/')[0]} at ${orderType === 'market' ? 'market price' : `$${price}`}`,
    });
    
    // Reset form
    setAmount('');
    setTotal('0.00');
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle>Place Order</CardTitle>
        <CardDescription>Trading {selectedPair}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="buy" className="mb-6">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger 
              value="buy" 
              onClick={() => setSide('buy')}
              className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700"
            >
              Buy
            </TabsTrigger>
            <TabsTrigger 
              value="sell" 
              onClick={() => setSide('sell')}
              className="data-[state=active]:bg-red-100 data-[state=active]:text-red-700"
            >
              Sell
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="buy" className="pt-4">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="order-type">Order Type</Label>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="advanced-order" className="text-xs">Advanced</Label>
                    <Switch 
                      id="advanced-order" 
                      checked={advancedOrder}
                      onCheckedChange={setAdvancedOrder}
                    />
                  </div>
                </div>
                <Select 
                  value={orderType} 
                  onValueChange={setOrderType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select order type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="limit">Limit Order</SelectItem>
                    <SelectItem value="market">Market Order</SelectItem>
                    {advancedOrder && (
                      <>
                        <SelectItem value="stop">Stop Order</SelectItem>
                        <SelectItem value="oco">OCO (One Cancels Other)</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>
              
              {orderType !== 'market' && (
                <div>
                  <Label htmlFor="price">Price (USDT)</Label>
                  <Input 
                    id="price" 
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="0.00"
                  />
                </div>
              )}
              
              <div>
                <Label htmlFor="amount">Amount (BTC)</Label>
                <Input 
                  id="amount" 
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="0.00"
                />
              </div>
              
              {advancedOrder && orderType === 'stop' && (
                <div>
                  <Label htmlFor="trigger">Trigger Price (USDT)</Label>
                  <Input id="trigger" placeholder="0.00" />
                </div>
              )}
              
              <div>
                <Label htmlFor="total">Total (USDT)</Label>
                <Input 
                  id="total" 
                  value={total}
                  readOnly
                  className="bg-muted"
                />
              </div>
              
              <div className="pt-2">
                <button 
                  className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                  onClick={handlePlaceOrder}
                >
                  Buy BTC
                </button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sell" className="pt-4">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="order-type-sell">Order Type</Label>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="advanced-order-sell" className="text-xs">Advanced</Label>
                    <Switch 
                      id="advanced-order-sell" 
                      checked={advancedOrder}
                      onCheckedChange={setAdvancedOrder}
                    />
                  </div>
                </div>
                <Select 
                  value={orderType} 
                  onValueChange={setOrderType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select order type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="limit">Limit Order</SelectItem>
                    <SelectItem value="market">Market Order</SelectItem>
                    {advancedOrder && (
                      <>
                        <SelectItem value="stop">Stop Order</SelectItem>
                        <SelectItem value="oco">OCO (One Cancels Other)</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>
              
              {orderType !== 'market' && (
                <div>
                  <Label htmlFor="price-sell">Price (USDT)</Label>
                  <Input 
                    id="price-sell" 
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="0.00"
                  />
                </div>
              )}
              
              <div>
                <Label htmlFor="amount-sell">Amount (BTC)</Label>
                <Input 
                  id="amount-sell" 
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="0.00"
                />
              </div>
              
              {advancedOrder && orderType === 'stop' && (
                <div>
                  <Label htmlFor="trigger-sell">Trigger Price (USDT)</Label>
                  <Input id="trigger-sell" placeholder="0.00" />
                </div>
              )}
              
              <div>
                <Label htmlFor="total-sell">Total (USDT)</Label>
                <Input 
                  id="total-sell" 
                  value={total}
                  readOnly
                  className="bg-muted"
                />
              </div>
              
              <div className="pt-2">
                <button 
                  className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
                  onClick={handlePlaceOrder}
                >
                  Sell BTC
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default OrderForm;
