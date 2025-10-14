import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import notebookWhite from "@/assets/notebook-white.jpg";
import notebookBlack from "@/assets/notebook-black.jpg";
import notebookBrown from "@/assets/notebook-brown.jpg";
import notebookNavy from "@/assets/notebook-navy.jpg";

const notebooks = [
  {
    id: 1,
    name: "Premium Notebook - White",
    price: "$35.00",
    image: notebookWhite,
    inStock: true,
  },
  {
    id: 2,
    name: "Premium Notebook - Black",
    price: "$35.00",
    image: notebookBlack,
    inStock: true,
  },
  {
    id: 3,
    name: "Premium Notebook - Brown",
    price: "$35.00",
    image: notebookBrown,
    inStock: true,
  },
  {
    id: 4,
    name: "Premium Notebook - Navy",
    price: "$35.00",
    image: notebookNavy,
    inStock: true,
  },
];

const StationeryProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryBar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Premium Notebooks</h1>
          <p className="text-muted-foreground">
            Elegant customizable notebooks for your corporate needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {notebooks.map((notebook, index) => (
            <div
              key={notebook.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
                <div className="aspect-square bg-secondary p-8 overflow-hidden">
                  <img
                    src={notebook.image}
                    alt={notebook.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{notebook.name}</h3>
                    <p className="text-2xl font-bold text-primary">{notebook.price}</p>
                  </div>
                  {notebook.inStock && (
                    <p className="text-sm text-muted-foreground">In Stock</p>
                  )}
                  <Button asChild className="w-full">
                    <Link to={`/customize/stationery/${notebook.id}`}>Customize</Link>
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

export default StationeryProducts;
