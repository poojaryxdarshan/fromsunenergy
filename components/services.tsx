"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

// Data array defining the primary service offerings
const services = [
  {
    title: "Residential Solar",
    description:
      "Power your home with clean energy. Our residential solutions are designed to maximize savings and minimize your carbon footprint with premium rooftop installations.",
    image: "/images/residential-solar.jpg",
    features: ["Rooftop Installation", "Battery Storage", "Net Metering"],
  },
  {
    title: "Commercial Solar",
    description:
      "Reduce operational costs and showcase your commitment to sustainability. Our commercial solutions deliver reliable energy for offices, retail spaces, and more.",
    image: "/images/commercial-solar.jpg",
    features: ["Flat Roof Systems", "Carport Solar", "Energy Management"],
  },
  {
    title: "Industrial Solar",
    description:
      "Large-scale solar installations for factories, warehouses, and industrial complexes. Engineered for maximum output and long-term performance.",
    image: "/images/industrial-solar.jpg",
    features: ["Ground Mount", "Utility Scale", "Hybrid Systems"],
  },
]

export function Services() {
  return (
    // Outer section wrapper with background color and vertical spacing
    <section id="services" className="bg-muted py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Section Header with Fade & Slide Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Eyebrow Tagline */}
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-amber">
            Our Services
          </span>

          {/* Section Main Title */}
          <h2 className="mt-3 text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl">
            Solar Solutions For Every Need
          </h2>

          {/* Section Description */}
          <p className="mt-4 text-lg text-muted-foreground">
            From homes to large industrial complexes, we deliver tailored solar
            energy systems that meet your specific requirements.
          </p>
        </motion.div>

        {/* Responsive Grid for Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            // Animated Card Container with Hover Elevation
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-xl"
            >
              {/* Media Container with Image Zoom on Card Hover */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  // `sizes` informs Next.js Image Optimization of layout width across viewports
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Visual Overlay Tint */}
                <div className="absolute inset-0 bg-solar-navy/20 transition-colors group-hover:bg-solar-navy/10" />
              </div>

              {/* Card Body Content */}
              <div className="p-6">
                {/* Service Title */}
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>

                {/* Service Overview */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Feature Pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="rounded-full bg-solar-amber/10 px-3 py-1 text-xs font-medium text-solar-amber"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Action Link (Standard <a> tag used for local in-page scroll targets) */}
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-solar-amber transition-colors hover:text-solar-amber-light"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}