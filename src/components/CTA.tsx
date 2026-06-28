import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary to-navy-900 dark:to-navy-950 z-0"></div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            About Us
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            At Sharp Vision, we're committed to helping you see clearly and look your best. We offer stylish eyewear, premium lenses, trusted brands, and expert eye testing—all backed by friendly service and personalized care. Your vision is our priority.
          </p>
      
        </motion.div>
      </div>
    </section>
  );
}
