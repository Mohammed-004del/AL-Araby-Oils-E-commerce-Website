import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Alaraby Oils</h3>
            <p className="text-sm opacity-90 mb-4">
              Your destination for premium herbal products, natural oils, and organic beauty
              remedies.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/20">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:underline opacity-90">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:underline opacity-90">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline opacity-90">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline opacity-90">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline opacity-90">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop?category=Herbs" className="hover:underline opacity-90">
                  Premium Herbs
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Oils" className="hover:underline opacity-90">
                  Essential Oils
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Skin Care" className="hover:underline opacity-90">
                  Skin Care
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Hair Care" className="hover:underline opacity-90">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Supplements" className="hover:underline opacity-90">
                  Supplements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>123 Herbal Street, Natural City, NC 12345</li>
              <li>+1 (234) 567-890</li>
              <li>info@alarabyoils.com</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-sm opacity-90 mb-4">
              Get exclusive offers and natural health tips delivered to your inbox
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-90">
          <p>© 2025 Alaraby Zisoot. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
