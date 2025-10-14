import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import stationeryImg from "@/assets/category-stationery.jpg";
import fashionImg from "@/assets/category-fashion.jpg";
import helmetsImg from "@/assets/category-helmets.jpg";

const categories = [
  {
    title: "Premium Stationery",
    description: "Professional writing instruments and supplies",
    image: stationeryImg,
    link: "/stationery",
  },
  {
    title: "Corporate Fashion",
    description: "Business attire for the modern professional",
    image: fashionImg,
    link: "/tshirts",
  },
  {
    title: "Safety Helmets",
    description: "Industry-leading protective equipment",
    image: helmetsImg,
    link: "/products",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryBar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src={heroBanner} 
          alt="Premium B2B Solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-primary-foreground animate-fade-in">
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Professional Solutions for Modern Business
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Streamlined procurement for corporate excellence
              </p>
              <Button size="lg" variant="accent" asChild>
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              to={category.link}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
