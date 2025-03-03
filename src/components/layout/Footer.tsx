import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tighter text-primary">LIRA Trade</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              A sophisticated cryptocurrency trading platform with AI-powered assistance to help you trade smarter.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-foreground text-sm">Dashboard</Link></li>
              <li><Link to="/trading" className="text-muted-foreground hover:text-foreground text-sm">Trading</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-foreground text-sm">Portfolio</Link></li>
              <li><Link to="/markets" className="text-muted-foreground hover:text-foreground text-sm">Markets</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground text-sm">Careers</Link></li>
              <li><Link to="/press" className="text-muted-foreground hover:text-foreground text-sm">Press</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground text-sm">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-foreground text-sm">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} LIRA Trade. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-muted-foreground hover:text-foreground text-sm">Twitter</Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground text-sm">LinkedIn</Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground text-sm">GitHub</Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground text-sm">Discord</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
