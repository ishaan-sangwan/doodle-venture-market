
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";

interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductSlideshowProps {
  products: Product[];
}

const ProductSlideshow = ({ products }: ProductSlideshowProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/80 hover:bg-white"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 py-8 px-4 no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div 
            key={product.name} 
            className="flex-none w-[300px]"
          >
            <div className="bg-white p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-doodle-pink transition-colors duration-300">
              <div className="relative aspect-square mb-3 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-lg mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-lg">${product.price.toFixed(2)}</span>
                <Button variant="outline" size="sm" className="hover:bg-doodle-pink hover:text-black">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/80 hover:bg-white"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ProductSlideshow;
