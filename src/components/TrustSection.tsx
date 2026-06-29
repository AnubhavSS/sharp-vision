import { motion } from "framer-motion";
import { Users, Eye, Award, Tag } from "lucide-react";

/**
 * TrustSection component that displays trust badges and key benefits.
 * Features staggered animations and hover effects.
 */
export default function TrustSection() {
  // Trust badges data
  const badges = [
    {
      icon: Users,
      title: "1000+ Happy Customers",
      desc: "Trusted by families across Kanpur",
    },
    {
      icon: Eye,
      title: "Free Eye Test",
      desc: "Comprehensive testing by experts",
    },
    {
      icon: Award,
      title: "Premium Brands",
      desc: "Authentic national & international eyewear",
    },
    {
      icon: Tag,
      title: "Affordable Prices",
      desc: "Luxury that fits your budget",
    },
  ];

  // Animation variants for container (stagger children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        {/* Badges grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background rounded-2xl p-6 shadow-sm border border-border hover:border-primary/50 transition-colors group flex items-start space-x-4"
              >
                {/* Icon container */}
                <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                {/* Badge content */}
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
