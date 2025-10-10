import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">B2B Commerce</h3>
            <p className="text-sm text-primary-foreground/80">
              Professional e-commerce solutions for corporate clients.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/helmets" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Safety Helmets
                </Link>
              </li>
              <li>
                <Link to="/category/stationery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Stationery
                </Link>
              </li>
              <li>
                <Link to="/category/fashion" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Fashion
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>support@b2bcommerce.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Mon-Fri: 9AM-6PM EST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          © 2025 B2B Commerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
