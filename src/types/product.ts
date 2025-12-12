export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  discount?: number;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
