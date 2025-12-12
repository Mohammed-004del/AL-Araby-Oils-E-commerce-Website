import { Leaf, Heart, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "All our products are made from pure, organic ingredients sourced sustainably.",
    },
    {
      icon: Heart,
      title: "Health First",
      description: "Your wellness is our priority. We ensure every product meets the highest standards.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous testing and quality control for safe, effective products.",
    },
    {
      icon: Users,
      title: "Customer Care",
      description: "Dedicated support team ready to help you on your wellness journey.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Alaraby Oils</h1>
        <p className="text-lg text-muted-foreground">
          Your trusted partner in natural health and beauty since 2010
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground text-center mb-8">
            At Alaraby Oils, we believe in the power of nature to heal, nourish, and transform. Our
            journey began with a simple mission: to make premium natural products accessible to
            everyone seeking a healthier, more sustainable lifestyle.
          </p>
          <p className="text-muted-foreground text-center mb-8">
            For over a decade, we've been sourcing the finest organic ingredients from around the
            world, working directly with farmers and suppliers who share our commitment to quality
            and sustainability. Every product in our collection is carefully crafted to deliver the
            best that nature has to offer.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-secondary/50 rounded-lg p-8 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Join Our Wellness Community</h2>
        <p className="text-muted-foreground mb-6">
          Discover natural solutions for your health and beauty needs. From premium essential oils
          to organic herbs and skincare, we're here to support your journey to wellness.
        </p>
      </div>
    </div>
  );
};

export default About;
