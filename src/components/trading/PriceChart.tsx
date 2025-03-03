import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { LineChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

// Sample chart data
const priceData = [
  { time: '00:00', price: 36200 },
  { time: '01:00', price: 36400 },
  { time: '02:00', price: 36350 },
  { time: '03:00', price: 36500 },
  { time: '04:00', price: 36450 },
  { time: '05:00', price: 36600 },
  { time: '06:00', price: 36800 },
  { time: '07:00', price: 36700 },
  { time: '08:00', price: 36900 },
  { time: '09:00', price: 37100 },
  { time: '10:00', price: 37000 },
  { time: '11:00', price: 37200 },
  { time: '12:00', price: 37400 },
];

interface PriceChartProps {
  selectedPair: string;
}

const PriceChart = ({ selectedPair }: PriceChartProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>{selectedPair}</CardTitle>
          <div className="text-sm text-muted-foreground">
            Last Price: <span className="text-green-500 font-medium">$37,245.80</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
              <XAxis dataKey="time" />
              <YAxis domain={['dataMin - 200', 'dataMax + 200']} />
              <Tooltip />
              <ReferenceLine y={36700} stroke="#888" strokeDasharray="3 3" />
              <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" fillOpacity={0.1} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceChart;
export { priceData };
