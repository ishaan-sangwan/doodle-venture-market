
import { Construction } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const UnderDevelopment = () => {
  return (
    <div className="min-h-screen bg-doodle-gray flex items-center justify-center">
      <div className="text-center">
        <Construction className="h-24 w-24 mx-auto mb-6 text-doodle-pink" />
        <h1 className="text-4xl font-bold mb-4">Under Development</h1>
        <p className="text-gray-600 mb-8">This page is currently being crafted with love ♥</p>
        <Link to="/">
          <Button variant="outline" className="hover:bg-doodle-pink">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UnderDevelopment;
