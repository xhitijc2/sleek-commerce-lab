import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";
import { toast } from "sonner";

interface TShirtMesh3DProps {
  color: string;
  logoTexture?: string;
}

const TShirtMesh3D = ({ color, logoTexture }: TShirtMesh3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  // Load texture when logoTexture changes
  if (logoTexture && !texture) {
    const loader = new THREE.TextureLoader();
    loader.load(logoTexture, (loadedTexture) => {
      setTexture(loadedTexture);
    });
  }

  const tshirtColor = {
    white: "#ffffff",
    black: "#1a1a1a",
    navy: "#1e3a8a",
    red: "#dc2626",
  }[color] || "#ffffff";

  return (
    <group>
      {/* T-shirt body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2.5, 0.3]} />
        <meshStandardMaterial 
          color={tshirtColor} 
          metalness={0.1} 
          roughness={0.7}
        />
      </mesh>

      {/* Left sleeve */}
      <mesh position={[-1.3, 0.5, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.8, 1.2, 0.3]} />
        <meshStandardMaterial color={tshirtColor} metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Right sleeve */}
      <mesh position={[1.3, 0.5, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.8, 1.2, 0.3]} />
        <meshStandardMaterial color={tshirtColor} metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Collar */}
      <mesh position={[0, 1.3, 0]}>
        <cylinderGeometry args={[0.3, 0.35, 0.2, 32]} />
        <meshStandardMaterial color={tshirtColor} metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Logo/texture decal on front */}
      {texture && (
        <mesh position={[0, 0.3, 0.16]} rotation={[0, 0, 0]}>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial 
            map={texture} 
            transparent 
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
      )}
    </group>
  );
};

interface TShirtCustomizer3DProps {
  selectedColor: string;
}

const TShirtCustomizer3D = ({ selectedColor }: TShirtCustomizer3DProps) => {
  const [uploadedImage, setUploadedImage] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        toast.success("Image uploaded successfully");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative h-[500px] bg-secondary rounded-lg overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} />
          <TShirtMesh3D color={selectedColor} logoTexture={uploadedImage} />
          <OrbitControls 
            enableZoom={true} 
            enablePan={false}
            minDistance={3}
            maxDistance={8}
          />
          <Environment preset="studio" />
        </Canvas>
        
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg text-xs">
          <p className="font-medium">💡 Drag to rotate • Scroll to zoom</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => document.getElementById("tshirt-logo-upload")?.click()}
        >
          <Upload className="w-4 h-4 mr-2" />
          Upload Logo/Image
        </Button>
        
        {uploadedImage && (
          <Button
            variant="outline"
            onClick={() => {
              setUploadedImage("");
              toast.info("Image removed");
            }}
          >
            Remove Image
          </Button>
        )}
      </div>

      <input
        id="tshirt-logo-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {uploadedImage && (
        <div className="bg-secondary p-4 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Uploaded Image Preview:</p>
          <img 
            src={uploadedImage} 
            alt="Uploaded logo" 
            className="w-24 h-24 object-contain rounded border border-border"
          />
        </div>
      )}
    </div>
  );
};

export default TShirtCustomizer3D;
