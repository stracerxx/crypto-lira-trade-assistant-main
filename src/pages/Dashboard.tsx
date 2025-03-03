import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedGradient from '@/components/ui/AnimatedGradient';
import ChatInterface from '@/components/lira/ChatInterface';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, TrendingUp, Wallet, LineChart, PieChart, BarChart3, Settings } from "lucide-react";

// Sample data for charts
const priceData = [
  { time: '00:00', BTC: 36200, ETH: 2420, SOL: 142 },
  { time: '04:00', BTC: 36500, ETH: 2450, SOL: 144 },
  { time: '08:00', BTC: 36100, ETH: 2410, SOL: 140 },
  { time: '12:00', BTC: 36800, ETH: 2480, SOL: 146 },
  { time: '16:00', BTC: 37200, ETH: 2510, SOL: 148 },
  { time: '20:00', BTC: 36900, ETH: 2490, SOL: 147 },
  { time: '24:00', BTC: 37100, ETH: 2505, SOL: 149 },
];

const portfolioData = [
  { name: 'BTC', value: 42 },
  { name: 'ETH', value: 28 },
  { name: 'SOL', value: 15 },
  { name: 'USDT', value: 10 },
  { name: 'Other', value: 5 },
];

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedGradient />
      <Header />
      
      <main className="flex-1 pt-20 pb-16">
        <div className="container-custom max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Trader</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-2">
              <button className="btn-outline-sm flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </button>
            </div>
          </div>
          
          {/* Portfolio Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Balance</CardDescription>
                <CardTitle className="text-2xl">$128,430.45</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>+2.5% (24h)</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Today's PnL</CardDescription>
                <CardTitle className="text-2xl">+$3,204.12</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>+2.8%</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Open Positions</CardDescription>
                <CardTitle className="text-2xl">8</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-blue-500">
                  <Wallet className="h-4 w-4 mr-1" />
                  <span>5 profitable</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Market Trend</CardDescription>
                <CardTitle className="text-2xl">Bullish</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>Strong momentum</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Market Overview</CardTitle>
                  <CardDescription>Real-time price data for major cryptocurrencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={priceData}>
                        <defs>
                          <linearGradient id="colorBTC" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F7931A" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#F7931A" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorETH" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#627EEA" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#627EEA" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorSOL" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00FFA3" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#00FFA3" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="time" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                        <Tooltip />
                        <Area type="monotone" dataKey="BTC" stroke="#F7931A" fillOpacity={1} fill="url(#colorBTC)" />
                        <Area type="monotone" dataKey="ETH" stroke="#627EEA" fillOpacity={1} fill="url(#colorETH)" />
                        <Area type="monotone" dataKey="SOL" stroke="#00FFA3" fillOpacity={1} fill="url(#colorSOL)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Portfolio Allocation</CardTitle>
                  <CardDescription>Current asset distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={portfolioData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest transactions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-40">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <ArrowUp className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Bought BTC</p>
                            <p className="text-sm text-muted-foreground">0.25 BTC at $36,420</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$9,105.00</p>
                          <p className="text-sm text-muted-foreground">Today, 10:45 AM</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                            <ArrowDown className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium">Sold ETH</p>
                            <p className="text-sm text-muted-foreground">5.5 ETH at $2,405</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$13,227.50</p>
                          <p className="text-sm text-muted-foreground">Yesterday, 3:30 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <ArrowUp className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Bought SOL</p>
                            <p className="text-sm text-muted-foreground">25 SOL at $138.50</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$3,462.50</p>
                          <p className="text-sm text-muted-foreground">Yesterday, 1:15 PM</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatInterface />
    </div>
  );
};

export default Dashboard;
