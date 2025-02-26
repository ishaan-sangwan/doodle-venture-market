
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Mail, Phone, MapPin } from "lucide-react";

const products = [
  {
    name: "Rainbow Hearts Doodle Watch",
    price: 39.99,
    image: "/lovable-uploads/147cc1dc-c88a-4d7b-9331-3f38860d670a.png",
    description: "Playful watch featuring colorful hearts and doodle designs",
  },
  {
    name: "Space Explorer Watch",
    price: 44.99,
    image: "/lovable-uploads/91f1d82c-2be0-4709-b9f1-1aa294b38d5b.png",
    description: "cosmic-themed watch with planets and rockets",
  },
  {
    name: "Princess Pink Watch",
    price: 49.99,
    image: "/lovable-uploads/43d5cf00-80f7-42df-a03b-5c80e99bd87d.png",
    description: "Sparkly pink watch with cute character design",
  },
  {
    name: "Graffiti Art Watch",
    price: 42.99,
    image: "/lovable-uploads/4d777d6a-6bbb-4a4f-bb67-d6cd3f50bf11.png",
    description: "Vibrant watch with artistic graffiti patterns",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-doodle-gray">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <h1 className="text-3xl font-medium mb-2 text-center">Doodle Store</h1>
        <p className="text-gray-600 text-center mb-8">Handmade with love ♥</p>

        {/* About Section */}
        <section className="mb-16 bg-white p-8 rounded-xl border-2 border-dashed border-gray-300">
          <h2 className="text-2xl font-medium mb-4 text-center">About Doodle Tick</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-4">
              Welcome to Doodle Tick, where we transform ordinary watches into extraordinary pieces of wearable art! 
              Each watch in our collection is carefully designed to bring joy and creativity to your everyday timekeeping.
            </p>
            <p className="text-gray-600">
              Our unique watches feature hand-drawn designs, playful patterns, and vibrant colors that make telling time 
              an artistic experience. Perfect for those who love to express their personality through their accessories!
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-4 text-center">Our Watches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white p-8 rounded-xl border-2 border-dashed border-gray-300">
          <h2 className="text-2xl font-medium mb-6 text-center">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-doodle-pink rounded-lg">
                <Mail className="h-8 w-8 mb-2" />
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-sm text-center">hello@doodletick.com</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-doodle-yellow rounded-lg">
                <Phone className="h-8 w-8 mb-2" />
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-sm text-center">+1 (555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-doodle-blue rounded-lg">
                <MapPin className="h-8 w-8 mb-2" />
                <h3 className="font-medium mb-1">Address</h3>
                <p className="text-sm text-center">123 Doodle Street<br />Creativity City, DC 12345</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
