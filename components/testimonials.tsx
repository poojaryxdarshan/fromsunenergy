"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"

// Testimonials data array containing customer quotes, credentials, and ratings
const testimonials = [
  {
    name: "Rohan Shetty",
    role: "Property Developer, Bengaluru",
    text: "We have partnered with FromSun Energy for multiple residential projects, and they consistently deliver exceptional quality. Their attention to detail and commitment to customer satisfaction have earned the trust of both our team and our clients.",
    rating: 5,
  },
  {
    name: "Suresh Reddy",
    role: "Farm Owner, Hyderabad",
    text: "Choosing solar for our farm was one of the best decisions we've made. The ground-mounted solar system powers our irrigation pumps efficiently, and the monitoring app keeps us updated in real time. The support team has been excellent.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Homeowner, Bengaluru",
    text: "FromSun Energy transformed our monthly electricity bills. We went from paying high power charges to generating significant savings every month. The installation process was smooth, and the team was professional from start to finish.",
    rating: 5,
  },
  {
    name: "Rajesh Sharma",
    role: "Managing Director, Sharma Industries, Pune",
    text: "We installed a 120 kW solar system at our manufacturing unit, and the results have exceeded our expectations. The reduction in electricity costs has helped us invest more in expanding our business. We highly recommend FromSun Energy for commercial solar projects.",
    rating: 5,
  },
]

export function Testimonials() {
  // Carousel active index state management
  const [current, setCurrent] = useState(0)

  // Carousel navigation handlers
  const next = () => setCurrent((p) => (p + 1) % testimonials.length)
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)

  return (
    // Relative outer container for full-bleed background positioning
    <section id="testimonials" className="relative py-20 lg:py-32">
      {/* Background Image Layer with Dark Tint Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/testimonial-bg.jpg"
          alt="Solar panels at sunset"
          fill
          // `sizes` prop optimizes responsive asset delivery for background images
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-solar-navy/85" />
      </div>

      {/* Main Content Container Layered Above Background */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Eyebrow Tagline */}
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-amber">
            Testimonials
          </span>

          {/* Main Title */}
          <h2 className="mt-3 text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Testimonial Slider Wrapper */}
        <div className="mt-16 flex flex-col items-center">
          <div className="relative w-full max-w-3xl">
            
            {/* Smooth Animated Slide Transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12"
              >
                {/* Decorative Quote Mark */}
                <Quote className="h-10 w-10 text-solar-amber/40" />

                {/* Testimonial Quote Text */}
                <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
                  {`"${testimonials[current].text}"`}
                </p>

                {/* Author Info & Star Rating Footer */}
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-white/60">
                      {testimonials[current].role}
                    </p>
                  </div>

                  {/* Rating Stars Output */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map(
                      (_, j) => (
                        <Star
                          key={`star-${current}-${j}`}
                          className="h-5 w-5 fill-solar-amber text-solar-amber"
                        />
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls (Previous, Indicator Dots, Next) */}
          <div className="mt-8 flex items-center gap-4">
            {/* Previous Slide Button */}
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-solar-amber hover:bg-solar-amber hover:text-solar-navy"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Pagination Indicator Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-solar-amber"
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Next Slide Button */}
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-solar-amber hover:bg-solar-amber hover:text-solar-navy"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}