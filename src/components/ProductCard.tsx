import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Star, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [showQuickView, setShowQuickView] = useState(false);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  const [isLongPress, setIsLongPress] = useState(false);

  // Quantity Selector State (للكارت العادي)
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  // Quantity Selector State (للـ pop-up)
  const [showPopupQuantitySelector, setShowPopupQuantitySelector] = useState(false);
  const [popupSelectedQuantity, setPopupSelectedQuantity] = useState(1);

  // Touch Events (للموبايل)
  const handleTouchStart = () => {
    setIsLongPress(false);
    longPressTimer.current = setTimeout(() => {
      setIsLongPress(true);
      setShowQuickView(true);
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    }, 500);
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  const handleTouchMove = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  // Mouse Events (للكمبيوتر)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 2) {
      e.preventDefault();
      return;
    }

    if (e.button === 0) {
      setIsLongPress(false);
      longPressTimer.current = setTimeout(() => {
        setIsLongPress(true);
        setShowQuickView(true);
      }, 500);
    }
  };

  const handleMouseUp = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  const handleMouseLeave = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowQuickView(true);
  };

  const handleQuickViewClick = () => {
    setShowQuickView(false);
    navigate(`/product/${product.id}`);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (isLongPress) {
      e.preventDefault();
      setIsLongPress(false);
    }
  };

  // Quantity Selector Handlers (للكارت العادي)
  const handleFirstAddToCart = () => {
    setShowQuantitySelector(true);
    setSelectedQuantity(1);
  };

  const handleConfirmAddToCart = () => {
    addToCart(product, selectedQuantity);
    setShowQuantitySelector(false);
    setSelectedQuantity(1);
  };

  const incrementQuantity = () => {
    setSelectedQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(prev => prev - 1);
    }
  };

  // Quantity Selector Handlers (للـ pop-up)
  const handlePopupFirstAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopupQuantitySelector(true);
    setPopupSelectedQuantity(1);
  };

  const handlePopupConfirmAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, popupSelectedQuantity);
    setShowPopupQuantitySelector(false);
    setPopupSelectedQuantity(1);
    setShowQuickView(false);
  };

  const incrementPopupQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPopupSelectedQuantity(prev => prev + 1);
  };

  const decrementPopupQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (popupSelectedQuantity > 1) {
      setPopupSelectedQuantity(prev => prev - 1);
    }
  };

  return (
    <>
      <Card
        className="group hover:shadow-lg transition-shadow overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onContextMenu={handleContextMenu}
      >
        <Link to={`/product/${product.id}`} onClick={handleCardClick}>
          <div className="relative aspect-square overflow-hidden bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            {product.discount && (
              <Badge className="absolute top-2 right-2 bg-badge text-badge-foreground">
                {product.discount}% OFF
              </Badge>
            )}
          </div>
        </Link>

        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <Link to={`/product/${product.id}`} onClick={handleCardClick}>
            <h3 className="font-semibold text-foreground hover:text-primary transition-colors mb-2">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-success">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          {!showQuantitySelector ? (
            <Button
              onClick={handleFirstAddToCart}
              className="w-full bg-success hover:bg-success/90"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          ) : (
            <div className="w-full flex gap-2">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10"
                  onClick={decrementQuantity}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{selectedQuantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10"
                  onClick={incrementQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button
                onClick={handleConfirmAddToCart}
                className="flex-1 bg-success hover:bg-success/90"
              >
                Add
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>

      {/* Quick View Dialog */}
      <Dialog open={showQuickView} onOpenChange={setShowQuickView}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-left">{product.name}</DialogTitle>
          </DialogHeader>

          <div
            className="space-y-4 cursor-pointer"
            onClick={handleQuickViewClick}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
              {product.discount && (
                <Badge className="absolute top-2 right-2 bg-badge text-badge-foreground">
                  {product.discount}% OFF
                </Badge>
              )}
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>

              <div className="flex items-center gap-1 mb-3">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-success">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {product.description || "Premium quality natural product for your health and beauty needs."}
              </p>

              <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                {!showPopupQuantitySelector ? (
                  <Button
                    onClick={handlePopupFirstAddToCart}
                    className="flex-1 bg-success hover:bg-success/90"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                ) : (
                  <div className="flex-1 flex gap-2">
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10"
                        onClick={decrementPopupQuantity}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{popupSelectedQuantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10"
                        onClick={incrementPopupQuantity}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      onClick={handlePopupConfirmAddToCart}
                      className="flex-1 bg-success hover:bg-success/90"
                    >
                      Add
                    </Button>
                  </div>
                )}
                <Button
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuickViewClick();
                  }}
                  className={showPopupQuantitySelector ? "w-auto" : "flex-1"}
                >
                  View Details
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-3">
                💡 Mobile: Long press | Desktop: Hold click or Right click
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
