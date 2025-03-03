import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedGradient from '@/components/ui/AnimatedGradient';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Footer from '@/components/layout/Footer';
import ChatInterface from '@/components/lira/ChatInterface';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedGradient />
      <Header />
      
      <main className="flex-1">
        <Hero />
        <Features />
        
        {/* Admin Link - In a real app, this would be hidden or access-controlled */}
        <div className="container mx-auto px-4 pb-12 text-center">
          <Link 
            to="/admin" 
            className="inline-flex items-center text-sm text-primary hover:text-primary/90 underline"
          >
            Access Admin Panel
          </Link>
        </div>
      </main>
      
      <Footer />
      <ChatInterface />
    </div>
  );
};

export default Index;
