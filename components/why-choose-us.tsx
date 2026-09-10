"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  Leaf,
  BadgeDollarSign,
  HeadphonesIcon,
  Settings,
  TrendingUp,
} from "lucide-react"

// Array defining key feature items and visual identifiers
const reasons = [
  {
    icon: ShieldCheck,
    title: "25-Year Warranty",
    description:
      "Our premium panels come with a 25-year performance warranty, ensuring long-term energy production and peace of mind.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Reduce your carbon footprint significantly. An average installation offsets 100+ tons of CO2 over its lifetime.",
  },
  {
    icon: BadgeDollarSign,
    title: "Save Up To 70%",
    description:
      "Cut your electricity bills by up to 70%. Many customers see returns on their investment within 3-5 years.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to monitor your system and address any concerns.",
  },
  {
    icon: Settings,
    title: "Smart Monitoring",
    description:
      "Track your energy production in real-time with our advanced monitoring app. Stay informed from anywhere.",
  },
  {
    icon: TrendingUp,
    title: "Increase Property Value",
    description:
      "Solar installations can increase your property value by 4-6%, making it a smart long-term investment.",
  },
]

export function WhyChooseUs() {
  return (
    // Outer section container with brand background styling and padding
    <section className="bg-solar-warm py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Section Header with Fade & Slide Up Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Tagline Badge */}
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-amber">
            Why Choose Us
          </span>

          {/* Section Main Title */}
          <h2 className="mt-3 text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl">
            The SolarVolt Advantage
          </h2>

          {/* Section Description */}
          <p className="mt-4 text-lg text-muted-foreground">
            We go beyond just installing panels. Here is why thousands of
            customers trust SolarVolt for their energy needs.
          </p>
        </motion.div>

        {/* Feature Cards Grid Layout */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            // Animated Feature Card with Staggered Entrance & Hover Lift Effect
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl"
            >
              {/* Feature Icon Wrapper */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-solar-amber/10">
                <reason.icon className="h-7 w-7 text-solar-amber" />
              </div>

              {/* Feature Title */}
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {reason.title}
              </h3>

              {/* Feature Description */}
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}