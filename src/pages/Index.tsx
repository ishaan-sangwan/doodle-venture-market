import Navbar from "@/components/Navbar";
import ProductSlideshow from "@/components/ProductSlideshow";

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
  {
    name: "Sugar Skull Watch",
    price: 45.99,
    image: "/lovable-uploads/29ed6208-ac20-42a5-a9c2-19b084e71a92.png",
    description: "Bold red watch with festive sugar skull design",
  },
  {
    name: "Tattoo Love Watch",
    price: 43.99,
    image: "/lovable-uploads/56a6f16e-e1dd-430c-8641-66ffd53e43d8.png",
    description: "Classic tattoo art inspired watch with roses",
  },
  {
    name: "Day of the Dead Watch",
    price: 46.99,
    image: "/lovable-uploads/dd6af5e4-9694-439a-a39f-8ee2c0a02d6c.png",
    description: "Colorful floral and skull pattern watch",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen doodle-pattern-bg">
      <div className="bg-white/90 backdrop-blur-sm min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <h1 className="text-3xl font-medium mb-2 text-center">Doodle Store</h1>
          <p className="text-gray-600 text-center mb-8">Handmade with love ♥</p>

          {/* About Section */}
          <section className="mb-16 bg-white/95 p-8 rounded-xl border-2 border-dashed border-gray-300">
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
            <ProductSlideshow products={products} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
