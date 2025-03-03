import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedGradient from '@/components/ui/AnimatedGradient';
import ChatInterface from '@/components/lira/ChatInterface';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedGradient />
      <Header />
      
      <main className="flex-1 pt-20 pb-16">
        <div className="container-custom max-w-5xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About LIRA Trade</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering the future of cryptocurrency trading with advanced AI assistance
            </p>
          </div>
          
          {/* Mission and Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To democratize cryptocurrency trading by providing an intuitive platform powered by 
                  cutting-edge technology and AI assistance that empowers traders of all experience levels 
                  to make informed decisions in the volatile crypto markets.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To become the world's leading cryptocurrency trading platform, known for our 
                  innovative AI-assisted approach, exceptional user experience, and commitment 
                  to security, transparency, and continuous innovation in the evolving blockchain space.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Our Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8">
              <p className="text-muted-foreground mb-4">
                LIRA Trade was founded in 2023 by a team of blockchain enthusiasts, financial experts, and AI 
                specialists who recognized a gap in the cryptocurrency trading ecosystem. The founders saw that 
                while crypto markets offered tremendous opportunities, many traders struggled with the complexity, 
                volatility, and information overload inherent in these markets.
              </p>
              <p className="text-muted-foreground mb-4">
                The breakthrough came when our team developed LIRA (Live Intelligent Response Assistant), an AI 
                trading assistant capable of analyzing market trends, providing contextual information, and helping 
                users navigate the platform with natural language interactions.
              </p>
              <p className="text-muted-foreground">
                Today, LIRA Trade has grown into a comprehensive trading platform that combines powerful trading 
                tools with intuitive AI assistance. We continue to innovate at the intersection of blockchain, 
                artificial intelligence, and user experience design, empowering traders around the world to 
                participate confidently in the cryptocurrency revolution.
              </p>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">Sarah Chen</h3>
                <p className="text-primary text-sm mb-2">CEO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  Former fintech executive with 15+ years of experience in digital trading platforms
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">Marcus Johnson</h3>
                <p className="text-primary text-sm mb-2">CTO & Co-Founder</p>
                <p className="text-muted-foreground text-sm">
                  AI researcher and blockchain developer with expertise in machine learning systems
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">Aisha Patel</h3>
                <p className="text-primary text-sm mb-2">Chief AI Officer</p>
                <p className="text-muted-foreground text-sm">
                  Led AI development at major tech companies before joining to create LIRA
                </p>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="trading">Trading</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="mt-6 space-y-4">
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold mb-2">What is LIRA Trade?</h3>
                  <p className="text-muted-foreground">
                    LIRA Trade is an advanced cryptocurrency trading platform that integrates AI assistance 
                    to help users make informed trading decisions and navigate the platform efficiently.
                  </p>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold mb-2">Who can use LIRA Trade?</h3>
                  <p className="text-muted-foreground">
                    LIRA Trade is designed for both beginner and experienced cryptocurrency traders. Our 
                    platform offers intuitive interfaces for newcomers while providing advanced tools and 
                    features for seasoned traders.
                  </p>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold mb-2">What cryptocurrencies can I trade?</h3>
                  <p className="text-muted-foreground">
                    LIRA Trade supports trading for all major cryptocurrencies including Bitcoin, Ethereum, 
                    Solana, and many more altcoins. We regularly add support for new tokens based on market 
                    demand and thorough security evaluations.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="trading" className="mt-6 space-y-4">
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold mb-2">What trading features does LIRA Trade offer?</h3>
                  <p className="text-muted-foreground">
                    LIRA Trade offers a comprehensive set of trading tools including limit orders, market orders, 
                    stop-loss orders, OCO (One Cancels Other) orders, real-time charts with technical indicators, 
                    and detailed order books.
                  </p>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold mb-2">How does LIRA AI assistant help with trading?</h3>
                  <p className="text-muted-foreground">
                    LIRA can provide market insights, explain trading concepts, assist with navigating the platform, 
                    alert you to significant market movements, and help interpret technical indicators to inform your 
                    trading decisions.
                  </p>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold mb-2">What are the trading fees?</h3>
                  <p className="text-muted-foreground">
                    LIRA Trade offers competitive trading fees starting at 0.1% per transaction, with discounts 
                    available for high-volume traders and those who hold our platform token. Detailed fee schedules 
                    are available in your account settings.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="security" className="mt-6 space-y-4">
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold mb-2">How does LIRA Trade ensure security?</h3>
                  <p className="text-muted-foreground">
                    We implement industry-leading security measures including cold storage for the majority of assets, 
                    two-factor authentication, sophisticated encryption techniques, regular security audits, and 
                    insurance coverage for digital assets held on our platform.
                  </p>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold mb-2">Is my personal information secure?</h3>
                  <p className="text-muted-foreground">
                    Yes, LIRA Trade employs strict data protection protocols and complies with global data privacy 
                    regulations. We use advanced encryption for all personal data and never share your information 
                    with third parties without your explicit consent.
                  </p>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold mb-2">What should I do if I notice suspicious activity?</h3>
                  <p className="text-muted-foreground">
                    If you suspect any unauthorized access or activity on your account, immediately contact our 
                    24/7 security team through the Help Center. We recommend changing your password immediately 
                    and enabling additional security features like IP restrictions.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Contact Section */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions or want to learn more about LIRA Trade? Our team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold mb-2">Support</h3>
                <p className="text-muted-foreground">
                  support@liratrade.com
                </p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold mb-2">Partnerships</h3>
                <p className="text-muted-foreground">
                  partners@liratrade.com
                </p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold mb-2">Press</h3>
                <p className="text-muted-foreground">
                  media@liratrade.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ChatInterface />
    </div>
  );
};

export default About;
