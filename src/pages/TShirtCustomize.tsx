import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import TShirtCustomizer3D from "@/components/TShirtCustomizer3D";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import tshirtWhite from "@/assets/tshirt-white.jpg";
import tshirtBlack from "@/assets/tshirt-black.jpg";
import tshirtNavy from "@/assets/tshirt-navy.jpg";
import tshirtRed from "@/assets/tshirt-red.jpg";

const tshirtImages: Record<string, string> = {
  "1": tshirtWhite,
  "2": tshirtBlack,
  "3": tshirtNavy,
  "4": tshirtRed,
};

const colors = [
  { name: "White", value: "white", image: tshirtWhite },
  { name: "Black", value: "black", image: tshirtBlack },
  { name: "Navy", value: "navy", image: tshirtNavy },
  { name: "Red", value: "red", image: tshirtRed },
];

const colorMap: Record<string, string> = {
  [tshirtWhite]: "white",
  [tshirtBlack]: "black",
  [tshirtNavy]: "navy",
  [tshirtRed]: "red",
};

const TShirtCustomize = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(tshirtImages[id || "1"]);
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
            <TShirtCustomizer3D selectedColor={colorMap[selectedColor]} />
          </div>

          {/* Customization Options */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-2">Corporate T-Shirt</h1>
              <p className="text-3xl font-bold text-primary">$25.00</p>
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
                placeholder="Enter text for printing"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                maxLength={30}
              />
              <p className="text-sm text-muted-foreground">
                Maximum 30 characters
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
                <span className="font-semibold">Lead Time:</span> 3-5 business days
              </p>
              <p className="text-sm">
                <span className="font-semibold">Minimum Order:</span> 10 units
              </p>
              <p className="text-sm">
                <span className="font-semibold">Material:</span> 100% Premium Cotton
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TShirtCustomize;
