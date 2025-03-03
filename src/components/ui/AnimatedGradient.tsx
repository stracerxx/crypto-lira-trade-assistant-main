import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
}

const AnimatedGradient = ({ className }: AnimatedGradientProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const circles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }[] = [];
    
    const colors = [
      'rgba(59, 130, 246, 0.3)', // Blue
      'rgba(16, 185, 129, 0.25)', // Green
      'rgba(99, 102, 241, 0.2)', // Indigo
    ];
    
    // Create initial circles
    for (let i = 0; i < 5; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 200 + 100,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    const animate = () => {
      // Clear canvas with a slight fade effect
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw circles
      for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        
        // Move circle
        circle.x += circle.vx;
        circle.y += circle.vy;
        
        // Bounce off edges
        if (circle.x < -circle.radius) circle.x = width + circle.radius;
        if (circle.y < -circle.radius) circle.y = height + circle.radius;
        if (circle.x > width + circle.radius) circle.x = -circle.radius;
        if (circle.y > height + circle.radius) circle.y = -circle.radius;
        
        // Draw circle
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          circle.x, circle.y, 0,
          circle.x, circle.y, circle.radius
        );
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={cn("fixed top-0 left-0 w-full h-full -z-10", className)}
    />
  );
};

export default AnimatedGradient;
