import { Link } from "react-router-dom";
import { Leaf, Droplet, Sparkles, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

const CategoryCard = ({ id, name, description, color, icon }: CategoryCardProps) => {
  const icons = {
    leaf: Leaf,
    droplet: Droplet,
    sparkles: Sparkles,
    wind: Wind,
  };

  const Icon = icons[icon as keyof typeof icons] || Leaf;

  return (
    <Card className={`${color} border-0 hover:shadow-lg transition-shadow`}>
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background/50 flex items-center justify-center">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Link to={`/shop?category=${name.replace("Premium ", "").replace("Essential ", "")}`}>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
            Explore Now →
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
