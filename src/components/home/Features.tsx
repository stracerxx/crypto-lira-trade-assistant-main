import { 
  LineChart, 
  LayoutDashboard, 
  Bot, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  PieChart, 
  Bell 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: any;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const Feature = ({ icon: Icon, title, description, color, delay }: FeatureProps) => (
  <div className={cn(
    "animate-fade-in p-6 rounded-xl transition-all duration-300 hover:bg-muted/50",
    `animate-delay-${delay}`
  )}>
    <div className={cn(
      "mb-4 p-2.5 rounded-xl inline-flex",
      `bg-${color}/10 text-${color}`
    )}>
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: LineChart,
      title: "Trade with Precision",
      description: "Execute trades across multiple exchanges with advanced order types and real-time market data.",
      color: "crypto-blue",
      delay: 100,
    },
    {
      icon: LayoutDashboard,
      title: "Customizable Dashboard",
      description: "Personalize your trading dashboard with the widgets and data that matter most to you.",
      color: "crypto-blue",
      delay: 200,
    },
    {
      icon: Bot,
      title: "AI Trading Assistant",
      description: "Get insights and assistance from LIRA, our AI concierge, available 24/7 to help with your queries.",
      color: "primary",
      delay: 300,
    },
    {
      icon: ShieldCheck,
      title: "Bank-Grade Security",
      description: "Rest easy with our state-of-the-art security measures protecting your assets and information.",
      color: "crypto-green",
      delay: 100,
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Trade on the go with our responsive platform that works seamlessly across all your devices.",
      color: "crypto-blue",
      delay: 200,
    },
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description: "Experience minimal latency with our optimized trading infrastructure for rapid order execution.",
      color: "crypto-blue",
      delay: 300,
    },
    {
      icon: PieChart,
      title: "Portfolio Analytics",
      description: "Track performance with detailed analytics and reports to optimize your trading strategy.",
      color: "crypto-green",
      delay: 100,
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay informed with customizable alerts for price movements, market events, and account activity.",
      color: "crypto-blue",
      delay: 200,
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span>Features</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animate-delay-100">
            Everything You Need for <span className="text-primary">Successful Trading</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in animate-delay-200">
            Our platform combines powerful trading tools with intuitive design to provide you with the ultimate trading experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
