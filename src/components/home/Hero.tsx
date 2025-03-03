import { ArrowRight, LineChart, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  className?: string; 
}) => (
  <div className={cn(
    "glass rounded-2xl p-6 flex flex-col items-start transition-all duration-300 hover:translate-y-[-4px]",
    className
  )}>
    <div className="bg-primary/10 p-3 rounded-xl mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span>Revolutionizing Crypto Trading</span>
          </div>
          
          <h1 className="heading-xl mb-6 animate-fade-in animate-delay-100">
            Smart Crypto Trading with <span className="text-primary">AI Assistance</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-200">
            LIRA Trade combines cutting-edge technology with intuitive design to provide a seamless cryptocurrency trading experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-300">
            <Link to="/signup" className="btn-primary inline-flex items-center gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/learn-more" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Mock UI Preview */}
        <div className="relative mx-auto max-w-4xl mt-16 animate-fade-in animate-delay-400">
          <div className="glass rounded-2xl shadow-xl aspect-[16/9] overflow-hidden">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 h-full w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex space-x-4">
                  <div className="h-4 w-24 bg-white/20 rounded-full"></div>
                  <div className="h-4 w-24 bg-white/20 rounded-full"></div>
                  <div className="h-4 w-24 bg-white/20 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 h-[calc(100%-2rem)]">
                <div className="col-span-2 bg-white/10 rounded-xl p-4">
                  <div className="h-8 w-48 bg-white/20 rounded-lg mb-4"></div>
                  <div className="h-[calc(100%-3rem)] bg-white/5 rounded-lg"></div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-white/10 rounded-xl p-4 flex-1">
                    <div className="h-6 w-24 bg-white/20 rounded-lg mb-4"></div>
                    <div className="h-24 bg-white/5 rounded-lg"></div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 flex-1">
                    <div className="h-6 w-32 bg-white/20 rounded-lg mb-4"></div>
                    <div className="h-24 bg-white/5 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in animate-delay-500">
          <FeatureCard 
            icon={LineChart}
            title="Advanced Trading"
            description="Access powerful tools and real-time market data to make informed trading decisions."
          />
          <FeatureCard 
            icon={Zap}
            title="AI-Powered Assistance"
            description="Get help from LIRA, our AI assistant that provides guidance and answers your questions."
            className="md:translate-y-4"
          />
          <FeatureCard 
            icon={Shield}
            title="Secure Platform"
            description="Trade with confidence on our secure platform with encrypted API connections."
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
