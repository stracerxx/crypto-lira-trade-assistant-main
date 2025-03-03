import React from 'react';
import { 
  ArrowDownLeft, 
  ArrowUpRight, 
  RefreshCcw 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Define a default export for the Wallet component
export default function Wallet() {
  // Mock wallet information (replace with actual data fetching logic)
  const walletInfo = {
    balance: 5000,
    currency: 'USDT',
    transactions: [
      { 
        id: '1', 
        type: 'deposit', 
        amount: 1000, 
        date: new Date().toLocaleDateString() 
      },
      { 
        id: '2', 
        type: 'withdrawal', 
        amount: 500, 
        date: new Date().toLocaleDateString() 
      }
    ]
  };

  // Transaction type definitions
  const transactionTypes = {
    deposit: { 
      icon: ArrowDownLeft, 
      color: 'text-green-500',
      description: 'Funds added to trading wallet'
    },
    withdrawal: { 
      icon: ArrowUpRight, 
      color: 'text-red-500',
      description: 'Funds withdrawn from trading wallet'
    },
    transfer: { 
      icon: RefreshCcw, 
      color: 'text-blue-500',
      description: 'Internal wallet transfer'
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Wallet Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h2 className="text-2xl font-bold">
              {walletInfo.balance} {walletInfo.currency}
            </h2>
            <Button variant="outline" className="mt-2">
              Deposit
            </Button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Transaction</th>
                  <th className="text-left py-2">Amount</th>
                  <th className="text-left py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {walletInfo.transactions.map((tx) => (
                  <tr key={tx.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        {React.createElement(transactionTypes[tx.type].icon, {
                          className: `h-4 w-4 ${transactionTypes[tx.type].color}`
                        })}
                        <div>
                          <div className="capitalize font-medium">{tx.type}</div>
                          <div className="text-xs text-muted-foreground">
                            {transactionTypes[tx.type].description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      {tx.amount} {walletInfo.currency}
                    </td>
                    <td className="py-4">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
