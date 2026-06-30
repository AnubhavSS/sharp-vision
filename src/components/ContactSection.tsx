import { motion } from "framer-motion";
import { branches, mapUrl } from "@/data/content";
import { MapPin, Phone, Mail, Clock, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * ContactSection component that displays store locations, contact info, and business hours.
 * Features an interactive map and branch selector.
 */
export default function ContactSection() {
  // State to track which branch is currently selected
  const [branch, setBranch] = useState(0);

  return (
    <section id="contact" className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Visit Us
          </h2>
          <h3 className="text-4xl font-serif font-bold text-foreground">
            Store Locations & Contact
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-sm border border-border h-100 lg:h-auto min-h-100 bg-card relative"
          >
            {/* Map iframe */}
            <div className="absolute inset-0 bg-blue-50/50 dark:bg-slate-900/50 flex flex-col items-center justify-center">
              <iframe
                src={mapUrl[branch]}
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact info container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {/* Branch selector */}
              <div>
                <h4 className="flex items-center text-lg font-bold text-foreground mb-4">
                  <MapPin className="w-5 h-5 mr-3 text-primary" /> Our Branches
                </h4>
                <div className="space-y-4 pl-8 border-l-2 border-muted ml-2.25">
                  {branches.map((branchItem, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer"
                      onClick={() => setBranch(index)}
                    >
                      <div className="absolute -left-7.5 top-1.5 w-3 h-3 bg-primary rounded-full ring-4 ring-background"></div>
                      <h5 className="font-semibold text-foreground">
                        {branchItem.name}
                      </h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        {branchItem.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business hours and contact info */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="flex items-center text-lg font-bold text-foreground mb-3">
                    <Clock className="w-5 h-5 mr-3 text-primary" /> Business
                    Hours
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Mon - Sun: 10:00 AM - 10:00 PM</li>
                   
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center text-lg font-bold text-foreground mb-3">
                    <Phone className="w-5 h-5 mr-3 text-primary" /> Contact Us
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <a
                        href="tel:+ +91 9151802025"
                        className="hover:text-primary transition-colors"
                      >
                        +91 9151802025
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:sharpvision.sv.25@gmail.com"
                        className="hover:text-primary transition-colors flex items-center"
                      >
                        <Mail className="w-3 h-3 mr-2" />
                        sharpvision.sv.25@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-6 border-t border-border flex flex-wrap gap-3">
                <Button className="bg-primary hover:bg-primary/90">
                  <Phone className="w-4 h-4 mr-2" /> Call Now
                </Button>

                {/* WhatsApp button */}
                <Button
                  asChild
                  variant="outline"
                  className="border-green-500/30 cursor-pointer text-green-600 hover:bg-green-50 hover:text-green-700 dark:text-green-500 dark:hover:bg-green-950/30"
                >
                  <a
                    href="https://wa.me/919151802025"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>

                {/* Instagram button */}
                <Button
                  asChild
                  variant="outline"
                  className="border-pink-500/30 cursor-pointer text-pink-600 hover:bg-pink-50 hover:text-pink-700 dark:text-pink-500 dark:hover:bg-pink-950/30"
                >
                  <a
                    href="https://www.instagram.com/sharp__vision/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
