// Removed "use client" so this renders as a Next.js Server Component (improves page performance)

import { Sun } from "lucide-react"
import Link from "next/link"
// Importing actual brand icons from react-icons
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6"

// Structured Navigation Links Mapping
const footerLinks = {
  Services: [
    { label: "Residential Solar", href: "#services" },
    { label: "Commercial Solar", href: "#services" },
    { label: "Industrial Solar", href: "#services" },
    { label: "Solar Maintenance", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Careers", href: "#" },
  ],
  Support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQs", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}

// Social Media Channels Array with Icon Components
const socialLinks = [
  { name: "Facebook", href: "#", icon: FaFacebookF },
  { name: "Twitter", href: "#", icon: FaXTwitter },
  { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { name: "Instagram", href: "#", icon: FaInstagram },
]

export function Footer() {
  // Dynamically calculate current year for copyright notice
  const currentYear = new Date().getFullYear()

  return (
    // Main Footer Element with Dark Theme Background
    <footer className="bg-solar-navy pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Main 5-Column Responsive Layout Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand Column (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2">
            
            {/* Logo & Brand Title */}
            <Link href="#home" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-solar-amber">
                <Sun className="h-6 w-6 text-solar-navy" />
              </div>
              <span className="text-xl font-bold text-white">
                FromSun<span className="text-solar-amber">Energy</span>
              </span>
            </Link>

            {/* Brand Description */}
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              FromSun Energy is your trusted partner in renewable energy
              solutions. We deliver premium solar installations that save you
              money and protect the planet.
            </p>

            {/* Social Media Link Buttons with Proper SVG Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-colors hover:bg-solar-amber hover:text-solar-navy"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Dynamically Rendered Link Columns (Services, Company, Support) */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-solar-amber"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            &copy; {currentYear} FromSun Energy. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Powering a sustainable future, one panel at a time.
          </p>
        </div>

      </div>
    </footer>
  )
}