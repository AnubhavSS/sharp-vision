import { motion } from "framer-motion";
import { brands } from "@/data/content";
import { Marquee } from "./ui/marquee";

export default function Brands() {
  return (
 <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Premium Quality</h2>
          <h3 className="text-4xl font-serif font-bold text-foreground">Popular Brands</h3>
        </motion.div>

        {/* Auto-scrolling carousel for brands */}
          <Marquee pauseOnHover={true} repeat={100} className="[--duration:40s]"  >
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="inline-flex flex-col items-center justify-center mx-8 w-48 h-32 bg-background border border-border rounded-2xl shadow-sm hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
              
                <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain p-4" />
              </div>
            ))}
          </Marquee>
      </div>

    </div>
  );
}
