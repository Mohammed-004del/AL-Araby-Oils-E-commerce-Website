import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            Alaraby Oils
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for herbs, oils, beauty products..."
              className="pl-10 bg-secondary"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-badge text-badge-foreground">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 mt-4">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors">
            All Products
          </Link>
          <Link to="/shop?category=Herbs" className="text-sm font-medium hover:text-primary transition-colors">
            Herbs
          </Link>
          <Link to="/shop?category=Oils" className="text-sm font-medium hover:text-primary transition-colors">
            Oils
          </Link>
          <Link to="/shop?category=Skin Care" className="text-sm font-medium hover:text-primary transition-colors">
            Skin Care
          </Link>
          <Link to="/shop?category=Hair Care" className="text-sm font-medium hover:text-primary transition-colors">
            Hair Care
          </Link>
          <Link to="/shop?category=Supplements" className="text-sm font-medium hover:text-primary transition-colors">
            Supplements
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-2 pb-4">
            <Link
              to="/"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              All Products
            </Link>
            <Link
              to="/shop?category=Herbs"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Herbs
            </Link>
            <Link
              to="/shop?category=Oils"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Oils
            </Link>
            <Link
              to="/shop?category=Skin Care"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Skin Care
            </Link>
            <Link
              to="/shop?category=Hair Care"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Hair Care
            </Link>
            <Link
              to="/shop?category=Supplements"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Supplements
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;