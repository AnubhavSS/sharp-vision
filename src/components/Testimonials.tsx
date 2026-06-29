import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { reviews } from "@/data/content";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Testimonials component that displays customer reviews in a carousel.
 * Features smooth animations and interactive navigation controls.
 */
export default function Testimonials() {
  // Embla carousel ref and API
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  /**
   * Scroll to previous slide
   */
  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  /**
   * Scroll to next slide
   */
  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <section id="reviews" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">What Our Customers Say</h3>
          </motion.div>

          {/* Carousel navigation buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-3"
          >
            <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Carousel container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="embla"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            {/* Review slides */}
            {reviews.map((review, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-6"
              >
                <div className="bg-background rounded-3xl p-8 border border-border shadow-sm h-full flex flex-col relative group hover:border-primary/50 transition-colors">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

                  {/* Star rating */}
                  <div className="flex text-amber-500 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-muted-foreground text-lg mb-8 flex-grow leading-relaxed">
                    "{review.text}"
                  </p>

                  {/* Customer info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div>
                      <h4 className="font-bold text-foreground font-serif">{review.name}</h4>
                      <p className="text-sm text-primary">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
