import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          {product.discount && (
            <Badge className="absolute top-4 right-4 bg-badge text-badge-foreground">
              {product.discount}% OFF
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-warning text-warning"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold text-success">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <p className="text-muted-foreground mb-8">{product.description}</p>

          <div className="flex gap-4 mb-8">
            <Button
              size="lg"
              onClick={() => addToCart(product)}
              className="flex-1 bg-success hover:bg-success/90"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" onClick={() => toast.success("Added to wishlist")}>
              <Heart className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => toast.success("Link copied!")}>
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Product Details</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 100% Natural & Organic</li>
              <li>• Cruelty-Free & Vegan</li>
              <li>• No Artificial Additives</li>
              <li>• Sustainably Sourced</li>
              <li>• Dermatologically Tested</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group"
              >
                <div className="aspect-square bg-secondary rounded-lg overflow-hidden mb-3">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {relatedProduct.name}
                </h3>
                <p className="text-success font-bold">${relatedProduct.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
