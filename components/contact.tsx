"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"

interface ContactItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  detail: string
  sub: string
  href?: string
}

const contactInfo: ContactItem[] = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 7760949093",
    sub: "Mon - Sat, 9am - 6pm",
    href: "tel:+917760949093",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    detail: "+91 7760949093",
    sub: "Available 24/7 for quick chats",
    href: "https://wa.me/917760949093",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@fromsunenergy.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@fromsunenergy.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Bhuvaneshwari Nagar, T.Dasarahalli",
    sub: "Bangalore, Karnataka, IN 560057",
    href: "https://maps.google.com/?q=Bhuvaneshwari+Nagar+TDasarahalli+Bangalore",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Saturday",
    sub: "9:00 AM - 6:00 PM",
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoUrl = `mailto:info@fromsunenergy.com?subject=${encodeURIComponent(
      `New Contact Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`

    window.location.href = mailtoUrl

    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="bg-muted py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-amber">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl">
            Get in Touch With Our Solar Experts
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you need technical advice or want to discuss a custom project,
            send us a message and we will reply within 24 hours.
          </p>
        </motion.div>

        {/* Grid Container with Equal Height Alignment */}
        <div className="mt-16 grid items-stretch gap-12 lg:grid-cols-5">
          {/* Left Column - Contact Details List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            {contactInfo.map((info, i) => {
              const Wrapper = info.href ? "a" : "div"
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Wrapper
                    href={info.href}
                    target={info.href?.startsWith("http") ? "_blank" : undefined}
                    rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 rounded-xl bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-solar-amber/10">
                      <info.icon className="h-5 w-5 text-solar-amber" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{info.title}</p>
                      <p className="text-sm text-foreground/80">{info.detail}</p>
                      <p className="text-xs text-muted-foreground">{info.sub}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-full lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col justify-between rounded-2xl bg-card p-6 shadow-sm md:p-8"
            >
              {/* Top/Middle Wrapper: Uses `flex-1` to occupy full height between top & bottom button */}
              <div className="flex flex-1 flex-col">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-solar-amber focus:ring-1 focus:ring-solar-amber"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="abc@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-solar-amber focus:ring-1 focus:ring-solar-amber"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 1234567890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-solar-amber focus:ring-1 focus:ring-solar-amber"
                    />
                  </div>
                </div>

                {/* Message Field Container: `flex-1` stretches it to fill remaining space */}
                <div className="mt-5 flex flex-1 flex-col">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  {/* Textarea `h-full min-h-[140px]` ensures it stretches seamlessly to the button */}
                  <textarea
                    id="message"
                    required
                    placeholder="Tell us about your project or question..."
                    value={formData.message}
                    onChange={handleChange}
                    className="h-full min-h-[140px] w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-solar-amber focus:ring-1 focus:ring-solar-amber"
                  />
                </div>
              </div>

              {/* Submit Button locked at the bottom */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-solar-amber px-8 py-4 text-base font-semibold text-solar-navy transition-colors hover:bg-solar-amber-light disabled:opacity-60"
                disabled={submitted}
              >
                {submitted ? (
                  "Thank you! Opening your email app..."
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}