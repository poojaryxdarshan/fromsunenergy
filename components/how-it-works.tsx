"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, PenTool, Wrench, Plug } from "lucide-react"

// Sequential list of process steps for solar adoption
const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Free Consultation",
    description:
      "We assess your energy needs, evaluate your property, and provide a detailed proposal with estimated savings and ROI.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Custom Design",
    description:
      "Our engineers design a system optimized for your roof orientation, shading conditions, and energy consumption patterns.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Professional Installation",
    description:
      "Our certified team installs your system with precision and care, typically completed within 2-3 days.",
  },
  {
    icon: Plug,
    step: "04",
    title: "Power On",
    description:
      "After inspection and grid connection, your system goes live. We provide monitoring tools and ongoing support.",
  },
]

export function HowItWorks() {
  return (
    // Outer section wrapper with padding
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Section Header with Fade & Slide Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Section Eyebrow */}
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-amber">
            How It Works
          </span>

          {/* Headline */}
          <h2 className="mt-3 text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl">
            Your Journey To Solar Energy
          </h2>

          {/* Header Subtitle */}
          <p className="mt-4 text-lg text-muted-foreground">
            Going solar is simple. We handle everything from consultation to
            installation so you can sit back and enjoy clean energy.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-16">
          
          {/* Vertical Connecting Axis Line (Centered on Desktop Viewports) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          {/* Process Items Stack */}
          <div className="flex flex-col gap-12 lg:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                // Alternate card row direction on desktop (Left/Right alternating layout)
                className={`relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } ${i > 0 ? "lg:mt-12" : ""}`}
              >
                {/* Content Card Side */}
                <div
                  className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                >
                  <div
                    className={`rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg ${
                      i % 2 === 0 ? "lg:ml-auto lg:mr-0" : "lg:ml-0 lg:mr-auto"
                    } lg:max-w-md`}
                  >
                    {/* Icon and Step Title Wrapper */}
                    <div className={`flex items-center gap-4 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-solar-amber/10">
                        <step.icon className="h-6 w-6 text-solar-amber" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-solar-amber">
                          Step {step.step}
                        </p>
                        <h3 className="text-lg font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Step Description */}
                    <p className={`mt-4 text-sm leading-relaxed text-muted-foreground ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Axis Node Dot (Positioned precisely along the center vertical line on desktop) */}
                <div className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-solar-amber bg-background z-10 lg:block" />

                {/* Empty Flex Spacer for Balanced Dual-Column Grid */}
                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}