import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Anthony Crumbs & Sons</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              67 years of generational private equity management and financial expertise.
            </p>
            <address className="text-primary-foreground/80 text-sm not-italic">
              123 Financial District<br />
              New York, NY 10005<br />
              (212) 555-0123
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Fund Management
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Advisory Services
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Investment Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Portfolio Management
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Legal & Compliance</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Disclosures
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Regulatory Information
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/70 text-xs text-center md:text-left">
              © 2024 Anthony Crumbs & Sons, LLC. All rights reserved. This website is for informational purposes only and does not constitute an offer of securities.
            </p>
            <p className="text-primary-foreground/70 text-xs">
              Member of FINRA & SIPC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
