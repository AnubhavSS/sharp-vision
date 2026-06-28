import { motion } from "framer-motion";
import { Gift, Zap, Sparkles, Calendar } from "lucide-react";

export default function Offers() {
  const offers = [
    {
      title: "BUY 1 GET 1 FREE",
      desc: "On selected premium sunglasses.",
      icon: Gift,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "2 Eyeglasses @ ₹999",
      desc: "Complete pair with standard lenses.",
      icon: Tag,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Free Computer Lens",
      desc: "Upgrade on frames above ₹2000.",
      icon: Sparkles,
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "Free Eye Test",
      desc: "Book your appointment today.",
      icon: Calendar,
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Fix icon import
  function Tag(props: any) {
    return <Zap {...props} />;
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Special Deals</h2>
          <h3 className="text-4xl font-serif font-bold text-foreground">Current Offers</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-3xl group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-10 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-card/80 backdrop-blur-sm group-hover:bg-transparent transition-colors duration-500 z-10 border border-border group-hover:border-transparent rounded-3xl"></div>
                
                <div className="relative z-20 p-8 flex flex-col items-center text-center h-full">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${offer.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-500 mb-2">
                    {offer.title}
                  </h4>
                  <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-500 text-sm">
                    {offer.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
