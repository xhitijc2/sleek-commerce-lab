import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import helmetWhite from "@/assets/helmet-white.jpg";
import helmetYellow from "@/assets/helmet-yellow.jpg";
import helmetRed from "@/assets/helmet-red.jpg";
import helmetBlue from "@/assets/helmet-blue.jpg";

const helmets = [
  {
    id: 1,
    name: "Professional Safety Helmet - White",
    price: "$45.00",
    image: helmetWhite,
    inStock: true,
  },
  {
    id: 2,
    name: "Professional Safety Helmet - Yellow",
    price: "$45.00",
    image: helmetYellow,
    inStock: true,
  },
  {
    id: 3,
    name: "Professional Safety Helmet - Red",
    price: "$45.00",
    image: helmetRed,
    inStock: true,
  },
  {
    id: 4,
    name: "Professional Safety Helmet - Blue",
    price: "$45.00",
    image: helmetBlue,
    inStock: true,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryBar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Safety Helmets</h1>
          <p className="text-muted-foreground">
            Industry-leading protective equipment for professional use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {helmets.map((helmet, index) => (
            <div
              key={helmet.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
                <div className="aspect-square bg-secondary p-8 overflow-hidden">
                  <img
                    src={helmet.image}
                    alt={helmet.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{helmet.name}</h3>
                    <p className="text-2xl font-bold text-primary">{helmet.price}</p>
                  </div>
                  {helmet.inStock && (
                    <p className="text-sm text-muted-foreground">In Stock</p>
                  )}
                  <Button asChild className="w-full">
                    <Link to={`/customize/${helmet.id}`}>Customize</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
