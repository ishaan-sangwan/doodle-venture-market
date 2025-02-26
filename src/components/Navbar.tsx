
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-dashed border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/ff88dda9-efd0-472e-9245-bebf4cda6a94.png" 
                alt="Doodle Store Logo" 
                className="h-20" // Increased logo size
              />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-gray-600 hover:text-black hover:underline">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-black hover:underline">
              Contact Us
            </Link>
            <Button variant="outline" size="sm" className="hover:bg-doodle-pink hover:text-black">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Cart (0)
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
