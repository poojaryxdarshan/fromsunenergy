"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Phone } from "lucide-react"

// Navigation links configured for smooth anchor scrolling
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  // State for scroll threshold (changes navbar background styling)
  const [isScrolled, setIsScrolled] = useState(false)
  // State for toggling mobile menu drawer
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    // Check if user has scrolled down past 20px
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Attach passive scroll listener for better performance on mobile devices
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    // Cleanup scroll listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // Header entry animation using Framer Motion
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-solar-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-solar-amber">
            <Sun className="h-6 w-6 text-solar-navy" />
          </div>
          <span className="text-xl font-bold text-white">
            FromSun<span className="text-solar-amber">Energy</span>
          </span>
        </a>

        {/* Desktop Navigation Links (Hidden on mobile screens) */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-solar-amber"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Call to Action & Phone Number */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+917760949093"
            className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-solar-amber"
          >
            <Phone className="h-4 w-4" />
            <span>+91 7760949093</span>
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-solar-amber px-5 py-2.5 text-sm font-semibold text-solar-navy transition-all hover:bg-solar-amber-light hover:shadow-lg hover:shadow-solar-amber/25"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle Button (Visible only on mobile) */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-white lg:hidden"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-solar-navy/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-4 px-4 pb-6 pt-2">
              {/* Staggered slide-in animation for each link */}
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block text-lg font-medium text-white/90 transition-colors hover:text-solar-amber"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              
              {/* Mobile CTA Button */}
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 rounded-lg bg-solar-amber px-5 py-3 text-center text-sm font-semibold text-solar-navy"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}