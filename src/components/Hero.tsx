import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroOils from "@/assets/hero-skincare.jpg";
import heroBeauty from "@/assets/hero-beauty.jpg";
import heroHerbs from "@/assets/hero-herbs.jpg";

const slides = [
  {
    image: heroOils,
  },
  {
    image: heroBeauty,
  },
  {
    image: heroHerbs,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] lg:h-[700px] xl:h-[850px] overflow-hidden bg-secondary">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-lg text-white">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Natural Beauty
                <br />
                <span className="text-primary">& Wellness</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
                Discover the power of pure herbal ingredients for your health and beauty care
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Buttons - Outside slides for consistent hover */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-lg">
            <div className="flex gap-4 pointer-events-auto" style={{ marginTop: "280px" }}>
              <Link to="/shop">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg transition-smooth"
                >
                  Shop Now
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-primary hover:bg-white hover:text-foreground px-8 py-6 text-lg rounded-full transition-smooth"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;