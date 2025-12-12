import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, categories } from "@/data/products";

const Home = () => {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Promo Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="bg-secondary/50 p-8 rounded-lg">
            <Badge className="bg-badge text-badge-foreground mb-4">Limited Time Offer</Badge>
            <h2 className="text-4xl font-bold mb-2">
              Up to <span className="text-accent">50% OFF</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Exclusive discounts on premium herbal products, natural oils, and organic beauty
              essentials
            </p>
            <Link to="/shop">
              <Button className="bg-accent hover:bg-accent/90">Shop Discounts</Button>
            </Link>
          </div>
          <div className="text-center">
            <div className="text-8xl font-bold text-accent/20">50%</div>
            <p className="text-xl font-semibold text-muted-foreground">Amazing Deals</p>
          </div>
        </div>
      </div>

      {/* Best Deals Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-2">
            Special Offers!
          </Badge>
          <h2 className="text-3xl font-bold mb-2">Best Deals This Week</h2>
          <p className="text-muted-foreground">
            Don't miss out on these amazing discounts on premium natural products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop">
            <Button variant="outline" size="lg">
              Discover All Offers
            </Button>
          </Link>
        </div>
      </div>

      {/* Shop By Category */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Shop By Category</h2>
          <p className="text-muted-foreground">
            Explore our carefully curated collection of natural products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
