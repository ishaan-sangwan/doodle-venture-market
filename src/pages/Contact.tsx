
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen doodle-pattern-bg">
      <div className="bg-white/90 backdrop-blur-sm min-h-screen">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-medium mb-8 text-center">Contact Us</h1>
          
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
        </main>
      </div>
    </div>
  );
};

export default Contact;
