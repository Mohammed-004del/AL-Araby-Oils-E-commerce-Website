import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const category = searchParams.get("category");
    setSelectedCategory(category);

    let filtered = [...products];

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    // Sort
    if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "discount") {
      filtered = filtered.filter((p) => p.discount && p.discount > 0);
    }

    setFilteredProducts(filtered);
  }, [searchParams, sortBy]);

  const categories = ["All", "Herbs", "Oils", "Skin Care", "Hair Care", "Aromatherapy", "Supplements"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">
        {selectedCategory ? selectedCategory : "All Products"}
      </h1>
      <p className="text-muted-foreground mb-8">
        Browse our complete collection of natural and organic products
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat || (!selectedCategory && cat === "All") ? "default" : "outline"}
              onClick={() => {
                if (cat === "All") {
                  window.location.href = "/shop";
                } else {
                  window.location.href = `/shop?category=${cat}`;
                }
              }}
            >
              {cat}
            </Button>
          ))}
        </div>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="discount">Discounts</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;