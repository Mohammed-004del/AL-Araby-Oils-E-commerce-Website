import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Droplet, Heart, Shield } from "lucide-react";

const LearnMore = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Natural Ingredients",
      description:
        "Every product is made from pure, organic ingredients carefully sourced from sustainable farms.",
    },
    {
      icon: Droplet,
      title: "Therapeutic Grade",
      description:
        "Our essential oils meet the highest purity standards for maximum therapeutic benefits.",
    },
    {
      icon: Heart,
      title: "Cruelty-Free",
      description:
        "We never test on animals and ensure all our products are ethically produced.",
    },
    {
      icon: Shield,
      title: "Quality Tested",
      description:
        "Rigorous testing and quality control ensure safe, effective products you can trust.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Why Choose Natural Products?</h1>
          <p className="text-lg text-muted-foreground">
            Discover the transformative power of nature for your health and beauty
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-muted-foreground">
            For thousands of years, humans have turned to nature for healing and wellness. Today,
            modern science confirms what traditional wisdom has always known: natural ingredients
            offer powerful benefits for our health, skin, and hair without the harsh chemicals found
            in many commercial products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-success text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Natural Wellness Journey Today</h2>
          <p className="mb-6 opacity-90">
            Browse our carefully curated collection of premium natural products
          </p>
          <Link to="/shop">
            <Button size="lg" variant="secondary">
              Explore Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
