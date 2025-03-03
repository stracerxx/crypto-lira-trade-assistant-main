import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Save, Key, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedGradient from '@/components/ui/AnimatedGradient';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface ApiKeyEntry {
  id: string;
  name: string;
  key: string;
  isActive: boolean;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [apiKeys, setApiKeys] = useState<ApiKeyEntry[]>([]);
  const [newApiName, setNewApiName] = useState('');
  const [newApiKey, setNewApiKey] = useState('');
  const [liraPrompt, setLiraPrompt] = useState(
    "You are LIRA, an AI trading assistant. You help users understand cryptocurrency markets, provide trading advice, and assist with using the platform. You're knowledgeable, professional, but also friendly and approachable. Always clarify when providing opinions versus factual information about trading."
  );
  const [expandedSections, setExpandedSections] = useState({
    apiKeys: true,
    liraConfig: true
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  // Simulate authentication (in a real app, this would verify against a backend)
  const handleAuthentication = (e: React.FormEvent) => {
    e.preventDefault();
    // Very basic authentication for demo purposes
    // In a real application, this would be handled securely
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast({
        title: "Authentication successful",
        description: "Welcome to the admin panel",
      });
      
      // Load demo API keys
      setApiKeys([
        { id: '1', name: 'Binance API', key: 'bnc_37f9e8d2c5a41b68e3f9d2c5a41b68e3', isActive: true },
        { id: '2', name: 'Coinbase API', key: 'cb_5a41b68e3f9d2c5a41b68e3f9d2c5a41', isActive: true },
      ]);
    } else {
      toast({
        title: "Authentication failed",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  const toggleSection = (section: 'apiKeys' | 'liraConfig') => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const addNewApiKey = () => {
    if (!newApiName || !newApiKey) {
      toast({
        title: "Validation Error",
        description: "API name and key are required",
        variant: "destructive",
      });
      return;
    }

    const newEntry: ApiKeyEntry = {
      id: Date.now().toString(),
      name: newApiName,
      key: newApiKey,
      isActive: true
    };

    setApiKeys([...apiKeys, newEntry]);
    setNewApiName('');
    setNewApiKey('');
    
    toast({
      title: "API Key Added",
      description: `${newApiName} has been added successfully`,
    });
  };

  const toggleApiKeyStatus = (id: string) => {
    setApiKeys(
      apiKeys.map(key => 
        key.id === id ? { ...key, isActive: !key.isActive } : key
      )
    );
  };

  const deleteApiKey = (id: string) => {
    setApiKeys(apiKeys.filter(key => key.id !== id));
    toast({
      title: "API Key Removed",
      description: "The API key has been removed",
    });
  };

  const saveLiraPrompt = () => {
    // In a real app, this would save to a database
    localStorage.setItem('liraSystemPrompt', liraPrompt);
    toast({
      title: "LIRA Configuration Saved",
      description: "System prompt has been updated",
    });
  };

  // Effect to load saved LIRA prompt from localStorage
  useEffect(() => {
    const savedPrompt = localStorage.getItem('liraSystemPrompt');
    if (savedPrompt) {
      setLiraPrompt(savedPrompt);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedGradient />
      
      {!isAuthenticated ? (
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white bg-opacity-95 p-8 rounded-xl shadow-xl max-w-md w-full">
            <div className="flex justify-center mb-6">
              <Lock className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-6">Admin Authentication</h1>
            <form onSubmit={handleAuthentication}>
              <div className="mb-4">
                <Label htmlFor="password">Admin Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  For demo purposes, use: admin123
                </p>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Login
              </button>
            </form>
            <button 
              onClick={() => navigate('/')}
              className="w-full mt-4 bg-muted text-muted-foreground py-2 rounded-lg hover:bg-muted/90 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 container max-w-5xl mx-auto p-4 pt-24 pb-16">
          <div className="bg-white bg-opacity-95 rounded-xl shadow-xl p-6 mb-8">
            <h1 className="text-2xl font-bold mb-2">Admin Back Office</h1>
            <p className="text-muted-foreground mb-6">
              Manage API integrations and configure the LIRA AI assistant.
            </p>
            
            {/* API Keys Section */}
            <div className="border rounded-lg overflow-hidden mb-6">
              <div 
                className="bg-muted p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('apiKeys')}
              >
                <div className="flex items-center">
                  <Key className="h-5 w-5 mr-2 text-primary" />
                  <h2 className="text-lg font-medium">API Keys Management</h2>
                </div>
                {expandedSections.apiKeys ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
              
              <div className={cn(
                "transition-all duration-300 overflow-hidden",
                expandedSections.apiKeys ? "max-h-[1000px]" : "max-h-0"
              )}>
                <div className="p-4">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Add API keys that will power your trading platform's functionality.
                    </p>
                    
                    {/* Add new API key form */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <Label htmlFor="api-name">API Name</Label>
                        <Input 
                          id="api-name" 
                          value={newApiName}
                          onChange={(e) => setNewApiName(e.target.value)}
                          placeholder="e.g., Binance API"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="api-key">API Key</Label>
                        <div className="flex space-x-2">
                          <Input 
                            id="api-key" 
                            value={newApiKey}
                            onChange={(e) => setNewApiKey(e.target.value)}
                            placeholder="Enter API key"
                            className="flex-1"
                          />
                          <button 
                            onClick={addNewApiKey}
                            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                          >
                            Add Key
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* API Keys List */}
                    {apiKeys.length > 0 ? (
                      <div className="border rounded-lg overflow-hidden">
                        <div className="grid grid-cols-12 gap-2 bg-muted p-3 text-sm font-medium">
                          <div className="col-span-3">Name</div>
                          <div className="col-span-6">API Key</div>
                          <div className="col-span-3">Actions</div>
                        </div>
                        {apiKeys.map((api) => (
                          <div key={api.id} className="grid grid-cols-12 gap-2 p-3 border-t text-sm">
                            <div className="col-span-3 flex items-center">
                              {api.name}
                            </div>
                            <div className="col-span-6 flex items-center">
                              <code className="bg-muted px-2 py-1 rounded text-xs truncate w-full">
                                {api.key}
                              </code>
                            </div>
                            <div className="col-span-3 flex items-center space-x-2">
                              <button 
                                onClick={() => toggleApiKeyStatus(api.id)}
                                className={cn(
                                  "px-2 py-1 rounded text-xs",
                                  api.isActive 
                                    ? "bg-green-100 text-green-700" 
                                    : "bg-red-100 text-red-700"
                                )}
                              >
                                {api.isActive ? "Active" : "Inactive"}
                              </button>
                              <button 
                                onClick={() => deleteApiKey(api.id)}
                                className="px-2 py-1 rounded text-xs bg-red-100 text-red-700"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center p-4 border rounded-lg bg-muted/30">
                        No API keys added yet. Add your first API key above.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* LIRA Configuration Section */}
            <div className="border rounded-lg overflow-hidden">
              <div 
                className="bg-muted p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('liraConfig')}
              >
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  <h2 className="text-lg font-medium">LIRA AI Configuration</h2>
                </div>
                {expandedSections.liraConfig ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
              
              <div className={cn(
                "transition-all duration-300 overflow-hidden",
                expandedSections.liraConfig ? "max-h-[1000px]" : "max-h-0"
              )}>
                <div className="p-4">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Configure LIRA's system prompt to define her persona and capabilities.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="system-prompt">System Prompt</Label>
                        <Textarea 
                          id="system-prompt"
                          value={liraPrompt}
                          onChange={(e) => setLiraPrompt(e.target.value)}
                          placeholder="Define LIRA's personality and behavior..."
                          className="min-h-[200px]"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          This prompt defines how LIRA responds to users and what knowledge she has.
                        </p>
                      </div>
                      
                      <div className="flex justify-end">
                        <button 
                          onClick={saveLiraPrompt}
                          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center"
                        >
                          <Save className="h-4 w-4 mr-2" />
                          Save Configuration
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between">
              <button 
                onClick={() => navigate('/')}
                className="bg-muted text-muted-foreground px-4 py-2 rounded-lg hover:bg-muted/90 transition-colors"
              >
                Return to Home
              </button>
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
