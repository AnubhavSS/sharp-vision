import { galleryImages } from "@/data/content";

import { motion } from "framer-motion";

/**
 * Gallery component that displays a responsive masonry grid of eyewear images.
 * Features hover effects and smooth animations.
 */
export default function Gallery() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Lookbook</h2>
          <h3 className="text-4xl font-serif font-bold text-foreground mb-4">The Sharp Vision Style</h3>
          <p className="text-muted-foreground">Find inspiration in our curated collection of luxury eyewear styles.</p>
        </motion.div>

        {/* Gallery grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="relative group rounded-2xl overflow-hidden break-inside-avoid"
            >
              {/* Gallery image */}
              <img
                src={src}
                alt={`Eyewear gallery image ${index + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
