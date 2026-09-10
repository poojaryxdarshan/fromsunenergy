"use client"

import { motion } from "framer-motion"
import { MapPin, Zap } from "lucide-react"
import Image from "next/image"

// Data array containing Indian project portfolio metadata
const projects = [
  {
    image: "/images/project-1.jpg",
    title: "Luxury Villa Installation",
    location: "Bengaluru, Karnataka",
    capacity: "15 KW",
    type: "Residential",
  },
  {
    image: "/images/project-2.jpg",
    title: "Estate Farm Solar Setup",
    location: "Kochi, Kerala",
    capacity: "120 KW",
    type: "Agricultural",
  },
  {
    image: "/images/project-3.jpg",
    title: "IT Park Rooftop Array",
    location: "Hyderabad, Telangana",
    capacity: "150 KW",
    type: "Commercial",
  },
  {
    image: "/images/commercial-solar.jpg",
    title: "Logistics Hub Power Grid",
    location: "Bhiwandi, Mumbai",
    capacity: "250 KW",
    type: "Industrial",
  },
  {
    image: "/images/residential-solar.jpg",
    title: "Suburban Villa Microgrid",
    location: "New Town, Kolkata",
    capacity: "10 KW",
    type: "Residential",
  },
  {
    image: "/images/industrial-solar.jpg",
    title: "Mega Solar Park Project",
    location: "Pavagada, Karnataka",
    capacity: "500 KW",
    type: "Utility",
  },
]

export function Projects() {
  return (
    // Outer section container styled with brand theme background and padding
    <section id="projects" className="bg-solar-navy py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Section Header with Framer Motion Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Eyebrow Tagline */}
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-amber">
            Our Projects
          </span>

          {/* Headline */}
          <h2 className="mt-3 text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
            Recent Installations Across India
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-lg text-white/60">
            Browse through our portfolio of successful solar installations
            powering homes, businesses, and industries nationwide.
          </p>
        </motion.div>

        {/* Portfolio Grid Layout */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            // Animated Project Card Wrapper
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-solar-navy/30 border border-white/10"
            >
              {/* Media Wrapper */}
              <div className="relative h-72 overflow-hidden">
                {/* Next.js Optimized Background Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  // `sizes` informs Next.js of layout width to deliver optimal image dimensions per device
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Permanent Gradient Overlay for readable text on mobile + enhanced hover intensity for desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-solar-navy/90 via-solar-navy/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                {/* Category / Type Badge */}
                <div className="absolute right-4 top-4 z-10 rounded-full bg-solar-amber px-3 py-1 text-xs font-bold text-solar-navy shadow-md">
                  {project.type}
                </div>

                {/* Card Information Overlay (Always visible on mobile, smooth shift up on hover) */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>

                  {/* Metadata Row: Location & Energy Output */}
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-white/80">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-solar-amber" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="h-3.5 w-3.5 text-solar-amber" />
                      {project.capacity}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}