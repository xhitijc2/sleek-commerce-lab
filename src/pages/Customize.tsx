import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import helmetWhite from "@/assets/helmet-white.jpg";
import helmetYellow from "@/assets/helmet-yellow.jpg";
import helmetRed from "@/assets/helmet-red.jpg";
import helmetBlue from "@/assets/helmet-blue.jpg";

const helmetImages: Record<string, string> = {
  "1": helmetWhite,
  "2": helmetYellow,
  "3": helmetRed,
  "4": helmetBlue,
};

const colors = [
  { name: "White", value: "white", image: helmetWhite },
  { name: "Yellow", value: "yellow", image: helmetYellow },
  { name: "Red", value: "red", image: helmetRed },
  { name: "Blue", value: "blue", image: helmetBlue },
];

const Customize = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(helmetImages[id || "1"]);
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
          {/* Product Preview */}
          <div className="animate-scale-in">
            <Card className="p-12 bg-secondary">
              <img
                src={selectedColor}
                alt="Selected helmet"
                className="w-full h-full object-contain"
              />
            </Card>
          </div>

          {/* Customization Options */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-2">Professional Safety Helmet</h1>
              <p className="text-3xl font-bold text-primary">$45.00</p>
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
                placeholder="Enter text for engraving"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                maxLength={20}
              />
              <p className="text-sm text-muted-foreground">
                Maximum 20 characters
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
                <span className="font-semibold">Lead Time:</span> 5-7 business days
              </p>
              <p className="text-sm">
                <span className="font-semibold">Minimum Order:</span> 1 unit
              </p>
              <p className="text-sm">
                <span className="font-semibold">Warranty:</span> 2 years manufacturer warranty
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
