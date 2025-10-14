import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import StationeryCustomizer3D from "@/components/StationeryCustomizer3D";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import notebookWhite from "@/assets/notebook-white.jpg";
import notebookBlack from "@/assets/notebook-black.jpg";
import notebookBrown from "@/assets/notebook-brown.jpg";
import notebookNavy from "@/assets/notebook-navy.jpg";

const notebookImages: Record<string, string> = {
  "1": notebookWhite,
  "2": notebookBlack,
  "3": notebookBrown,
  "4": notebookNavy,
};

const colors = [
  { name: "White", value: "white", image: notebookWhite },
  { name: "Black", value: "black", image: notebookBlack },
  { name: "Brown", value: "brown", image: notebookBrown },
  { name: "Navy", value: "navy", image: notebookNavy },
];

const colorMap: Record<string, string> = {
  [notebookWhite]: "white",
  [notebookBlack]: "black",
  [notebookBrown]: "brown",
  [notebookNavy]: "navy",
};

const StationeryCustomize = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(notebookImages[id || "1"]);
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState("");

  const handleAddToCart = () => {
    toast.success("Added to cart successfully");
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryBar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 3D Product Preview */}
          <div className="animate-scale-in">
            <StationeryCustomizer3D selectedColor={colorMap[selectedColor]} />
          </div>

          {/* Customization Options */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-2">Premium Notebook</h1>
              <p className="text-3xl font-bold text-primary">$35.00</p>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">Select Color</Label>
              <div className="grid grid-cols-4 gap-4">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.image)}
                    className={`p-2 rounded-lg border-2 transition-all duration-200 ${
                      selectedColor === color.image
                        ? "border-primary shadow-elegant"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={color.image}
                      alt={color.name}
                      className="w-full aspect-square object-contain"
                    />
                    <p className="text-xs mt-2 text-center font-medium">{color.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="custom-text" className="text-lg font-semibold">
                Custom Text (Optional)
              </Label>
              <Input
                id="custom-text"
                placeholder="Enter text for embossing"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                maxLength={25}
              />
              <p className="text-sm text-muted-foreground">
                Maximum 25 characters
              </p>
            </div>

            <div className="space-y-4">
              <Label htmlFor="quantity" className="text-lg font-semibold">
                Quantity
              </Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-32"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1" onClick={handleAddToCart}>
                Buy Now
              </Button>
            </div>

            <div className="bg-secondary p-6 rounded-lg space-y-2">
              <p className="text-sm">
                <span className="font-semibold">Lead Time:</span> 4-6 business days
              </p>
              <p className="text-sm">
                <span className="font-semibold">Minimum Order:</span> 25 units
              </p>
              <p className="text-sm">
                <span className="font-semibold">Material:</span> Premium leather cover
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default StationeryCustomize;
