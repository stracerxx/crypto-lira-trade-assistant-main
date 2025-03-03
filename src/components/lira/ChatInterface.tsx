import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Minimize, Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'lira';
  timestamp: Date;
}

const ChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [systemPrompt, setSystemPrompt] = useState(
    "You are LIRA, an AI trading assistant. You help users understand cryptocurrency markets, provide trading advice, and assist with using the platform."
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Load system prompt from localStorage (set in admin panel)
    const savedPrompt = localStorage.getItem('liraSystemPrompt');
    if (savedPrompt) {
      setSystemPrompt(savedPrompt);
    }
    
    // Initialize welcome message
    setMessages([
      {
        id: '1',
        content: "Hello! I'm LIRA, your AI trading assistant. How can I help you today?",
        sender: 'lira',
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Simulate LIRA response based on system prompt
    // In a real app, this would call an AI service with the system prompt
    setTimeout(() => {
      let responses: string[] = [];
      
      // Customize responses based on if the prompt contains certain keywords
      if (systemPrompt.toLowerCase().includes('trading')) {
        responses = [
          "I'm analyzing the current market trends for you.",
          "Based on recent data, BTC shows a strong bullish pattern.",
          "Would you like me to explain more about the current market conditions?",
          "I can help you set up price alerts for specific cryptocurrencies.",
          "Let me know if you need help with placing an order or understanding trading terms.",
        ];
      } else {
        // Generic responses if system prompt doesn't include trading focus
        responses = [
          "I'm here to assist you with whatever you need.",
          "How can I be of further help today?",
          "Is there anything specific you'd like to know?",
          "I'm designed to provide information and assistance based on my programming.",
          "Let me know if you have any other questions!",
        ];
      }
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const liraMessage: Message = {
        id: (Date.now() + 100).toString(),
        content: randomResponse,
        sender: 'lira',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, liraMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button 
        onClick={toggleChat}
        className={cn(
          "fixed z-40 bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300",
          isOpen 
            ? "bg-white text-primary translate-y-24 opacity-0 pointer-events-none" 
            : "bg-primary text-white translate-y-0 opacity-100 hover:bg-primary/90"
        )}
        aria-label="Open chat with LIRA"
      >
        <Bot className="h-6 w-6" />
      </button>

      {/* Chat interface */}
      <div 
        className={cn(
          "fixed z-40 bottom-6 right-6 w-80 sm:w-96 rounded-2xl shadow-xl transition-all duration-300 flex flex-col overflow-hidden",
          isOpen 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "translate-y-24 opacity-0 pointer-events-none",
          isMinimized
            ? "h-16" 
            : "h-[500px] max-h-[80vh]",
          "bg-white border border-border"
        )}
      >
        {/* Header */}
        <div className="bg-primary text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <h3 className="font-medium">LIRA Assistant</h3>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={toggleMinimize}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
            >
              {isMinimized ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
            </button>
            <button 
              onClick={toggleChat}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div 
          className={cn(
            "flex-1 overflow-y-auto p-4 flex flex-col space-y-4",
            isMinimized ? "hidden" : "block"
          )}
        >
          {messages.map((message) => (
            <div 
              key={message.id}
              className={cn(
                "max-w-[80%] rounded-xl p-3 animate-scale-in",
                message.sender === 'user' 
                  ? "bg-primary/10 text-foreground ml-auto rounded-tr-none" 
                  : "bg-muted text-foreground mr-auto rounded-tl-none"
              )}
            >
              <p className="text-sm">{message.content}</p>
              <span className="text-xs text-muted-foreground mt-1 block">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message input */}
        <form 
          onSubmit={handleSubmit}
          className={cn(
            "border-t border-border p-4",
            isMinimized ? "hidden" : "block"
          )}
        >
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-muted rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button 
              type="submit"
              className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors"
              disabled={!newMessage.trim()}
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatInterface;
