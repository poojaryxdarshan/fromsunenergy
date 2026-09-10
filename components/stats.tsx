"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Zap, Users, MapPin, Award } from "lucide-react"

// Centralized statistics configuration array
const stats = [
  { icon: Zap, value: 15000, suffix: "+", label: "KW Installed" },
  { icon: Users, value: 2500, suffix: "+", label: "Happy Customers" },
  { icon: MapPin, value: 120, suffix: "+", label: "Cities Covered" },
  { icon: Award, value: 12, suffix: "+", label: "Years Experience" },
]

/**
 * AnimatedCounter
 * Uses Framer Motion's `useSpring` and direct DOM mutation for silky 60+ FPS performance
 * without causing repeated React component re-renders.
 */
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  
  // Detects when the counter enters the browser viewport
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  // MotionValue stores raw numeric state without re-rendering the component
  const count = useMotionValue(0)
  
  // Spring physics interpolates raw `count` smoothly to `target`
  const springCount = useSpring(count, {
    duration: 2000,
    bounce: 0,
  })

  // Trigger counting animation when component enters viewport
  useEffect(() => {
    if (isInView) {
      count.set(target)
    }
  }, [isInView, count, target])

  // Mutate DOM textContent directly on every animated frame for zero React render overhead
  useEffect(() => {
    return springCount.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest).toLocaleString()}${suffix}`
      }
    })
  }, [springCount, suffix])

  // Fallback initial SSR output (prevents hydration mismatch errors)
  return <span ref={ref}>0{suffix}</span>
}

export function Stats() {
  return (
    // Floating overlapping container created with negative margin (-mt-16)
    <section className="relative z-10 -mt-16 px-4 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Parent container triggering entrance fade and slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4 rounded-2xl bg-solar-navy p-6 shadow-2xl md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10 md:p-0"
        >
          {stats.map((stat, i) => (
            // Individual stat card with staggered entrance delay
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 py-6 md:py-8"
            >
              {/* Feature Icon */}
              <stat.icon className="h-7 w-7 text-solar-amber" />

              {/* Counter Display */}
              <span className="text-3xl font-bold text-white md:text-4xl">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>

              {/* Descriptive Label */}
              <span className="text-sm font-medium text-white/60">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}