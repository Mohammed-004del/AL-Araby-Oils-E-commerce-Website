import { Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "10 Benefits of Using Argan Oil for Hair and Skin",
      excerpt:
        "Discover the amazing properties of argan oil and how it can transform your beauty routine naturally.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2025",
      category: "Beauty Tips",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    },
    {
      id: 2,
      title: "Essential Oils Guide: How to Choose the Right One",
      excerpt:
        "Learn about different essential oils and their therapeutic benefits for various health concerns.",
      author: "Michael Chen",
      date: "March 10, 2025",
      category: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800",
    },
    {
      id: 3,
      title: "Natural Skincare Routine for Glowing Skin",
      excerpt:
        "Create a simple, effective skincare routine using natural ingredients for radiant, healthy skin.",
      author: "Emma Williams",
      date: "March 5, 2025",
      category: "Skincare",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800",
    },
    {
      id: 4,
      title: "The Power of Herbal Supplements for Daily Wellness",
      excerpt:
        "Explore how herbal supplements can support your overall health and boost your immune system.",
      author: "Dr. James Brown",
      date: "February 28, 2025",
      category: "Supplements",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Health & Wellness Blog</h1>
        <p className="text-lg text-muted-foreground">
          Expert tips, guides, and insights on natural health and beauty
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-secondary overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <Badge className="mb-3">{post.category}</Badge>
              <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
