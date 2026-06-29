import { motion } from "framer-motion";

/**
 * Hero component that serves as the main introduction section of the page.
 * Features animated content, background effects, and a call-to-action banner.
 */
export default function Hero() {
  return (
    <section id="home" className="relative min-h-dvh flex items-center pt-20 overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-200 h-200 bg-primary/10 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-blue-900/5 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4 dark:bg-blue-400/5"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start max-w-2xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Premium Eyewear in Kanpur
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6">
              See Better.<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Live Clearer.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Premium Eyeglasses, Sunglasses & Blue Cut Lenses at Affordable Prices. Where fashion meets optical precision.
            </p>

            {/* CTA banner */}
            <div className="w-full flex justify-center md:justify-start px-4">
              <div className="w-full max-w-md sm:w-auto flex items-center justify-center flex-wrap gap-1 rounded-full bg-foreground text-background px-5 py-3 sm:px-8 sm:py-4 text-center">
                <span className="text-sm sm:text-base font-medium capitalize">
                  Free Eye Test by Expert
                </span>
                <span className="text-sm sm:text-base font-bold uppercase text-primary">
                  Optometrist
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Animated image container */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full aspect-square max-w-[600px] mx-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=700&q=80"
                alt="Stylish premium eyeglasses"
                className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-primary/10"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
