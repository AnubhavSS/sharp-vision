import { Link } from "wouter";
import { Instagram, Facebook, Send, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background dark:bg-card dark:border-t dark:border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="font-serif text-3xl font-bold tracking-tight text-background">
              Sharp <span className="text-primary">Vision</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Premium optical store in Kanpur offering luxury eyewear, high-quality lenses, and expert optometry services .
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/sharp__vision/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#brands" className="hover:text-primary transition-colors">Our Brands</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Store Locations</a></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Collections</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#collections" className="hover:text-primary transition-colors">Eyeglasses</a></li>
              <li><a href="#collections" className="hover:text-primary transition-colors">Sunglasses</a></li>
              <li><a href="#collections" className="hover:text-primary transition-colors">Computer Glasses</a></li>
              <li><a href="#collections" className="hover:text-primary transition-colors">Blue Cut Lenses</a></li>
              <li><a href="#collections" className="hover:text-primary transition-colors">Kids Collection</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Contact Us</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span>Shop no. G-2, Royal Homes, 117/H-2/7, Model Town, Pandu Nagar, Kanpur, Uttar Pradesh 208005</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>+91 9151802025</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>sharpvision.sv.25@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-background/20 dark:border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>&copy; {currentYear} Sharp Vision. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
