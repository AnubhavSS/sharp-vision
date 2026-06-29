import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/**
 * WhyChooseUs component that highlights key features and benefits.
 * Features a two-column layout with animated content and an image.
 */
export default function WhyChooseUs() {
  // Features data
  const features = [
    "Free Eye Testing by Experts",
    "Expert Style Guidance",
    "Latest Fashion Frames",
    "Affordable Pricing",
    "Premium Branded Lenses",
    "Fast Service",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-5xl overflow-hidden aspect-4/5 lg:aspect-3/4">
              <img
                src="/boy-girl (1).webp"
                alt="Boy-girl wearing glasses"
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-900/60 to-transparent mix-blend-multiply"></div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              A Vision of Perfection. Designed for You.
            </h3>
            <p className="text-lg text-muted-foreground mb-10">
              At Sharp Vision, we believe that your eyewear should be a perfect blend of crystal-clear vision and exceptional style. We bring the luxury boutique experience to local optical care.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
