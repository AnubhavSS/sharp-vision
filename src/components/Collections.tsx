import { motion } from "framer-motion";
import { collections } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Collections() {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Our Offerings</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Featured Collections</h3>
          </motion.div>
          
       
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-muted aspect-4/5 block cursor-pointer"
            >
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute inset-0 border-2 border-transparent  rounded-3xl transition-colors duration-500 m-4 z-10 pointer-events-none"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-serif font-bold text-white mb-2">{collection.title}</h4>
                <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {collection.description}
                </p>
               
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
