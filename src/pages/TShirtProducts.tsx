import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import tshirtWhite from "@/assets/tshirt-white.jpg";
import tshirtBlack from "@/assets/tshirt-black.jpg";
import tshirtNavy from "@/assets/tshirt-navy.jpg";
import tshirtRed from "@/assets/tshirt-red.jpg";

const tshirts = [
  {
    id: 1,
    name: "Corporate T-Shirt - White",
    price: "$25.00",
    image: tshirtWhite,
    inStock: true,
  },
  {
    id: 2,
    name: "Corporate T-Shirt - Black",
    price: "$25.00",
    image: tshirtBlack,
    inStock: true,
  },
  {
    id: 3,
    name: "Corporate T-Shirt - Navy",
    price: "$25.00",
    image: tshirtNavy,
    inStock: true,
  },
  {
    id: 4,
    name: "Corporate T-Shirt - Red",
    price: "$25.00",
    image: tshirtRed,
    inStock: true,
  },
];

const TShirtProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryBar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Corporate T-Shirts</h1>
          <p className="text-muted-foreground">
            Premium quality customizable t-shirts for your team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tshirts.map((tshirt, index) => (
            <div
              key={tshirt.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
                <div className="aspect-square bg-secondary p-8 overflow-hidden">
                  <img
                    src={tshirt.image}
                    alt={tshirt.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{tshirt.name}</h3>
                    <p className="text-2xl font-bold text-primary">{tshirt.price}</p>
                  </div>
                  {tshirt.inStock && (
                    <p className="text-sm text-muted-foreground">In Stock</p>
                  )}
                  <Button asChild className="w-full">
                    <Link to={`/customize/tshirt/${tshirt.id}`}>Customize</Link>
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

export default TShirtProducts;
