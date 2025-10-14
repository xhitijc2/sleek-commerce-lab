import { Link } from "react-router-dom";

const categories = [
  { name: "Stationery", path: "/stationery" },
  { name: "Fashion", path: "/tshirts" },
  { name: "Helmets", path: "/products" },
  { name: "Electronics", path: "/category/electronics" },
  { name: "Office Supplies", path: "/category/office" },
];

const CategoryBar = () => {
  return (
    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-8 h-12">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="text-sm text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
