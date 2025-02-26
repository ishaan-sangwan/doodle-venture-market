
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "Doodle Notebook",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&auto=format",
    description: "Hand-drawn cover notebook, perfect for your creative thoughts",
  },
  {
    name: "Sketch Pencil Set",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1596854372407-baba7fef6e51?w=500&auto=format",
    description: "Set of 12 premium sketching pencils",
  },
  {
    name: "Doodle Stickers Pack",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=500&auto=format",
    description: "Pack of 50 hand-drawn style stickers",
  },
  {
    name: "Art Journal",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format",
    description: "Spiral-bound journal with premium paper for artwork",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-doodle-gray">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium mb-2 text-center">Doodle Store</h1>
        <p className="text-gray-600 text-center mb-8">Handmade with love ♥</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
