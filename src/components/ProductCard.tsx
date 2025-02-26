
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard = ({ name, price, image, description }: ProductCardProps) => {
  return (
    <div className="group bg-white p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-doodle-pink transition-colors duration-300">
      <div className="relative aspect-square mb-3 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="font-medium text-lg mb-1">{name}</h3>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <div className="flex items-center justify-between">
        <span className="font-medium text-lg">${price.toFixed(2)}</span>
        <Button variant="outline" size="sm" className="hover:bg-doodle-pink hover:text-black">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
