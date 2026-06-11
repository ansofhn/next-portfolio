"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/lib/data";
import { FiSend, FiCheckCircle } from "react-icons/fi";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactContent() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace with your preferred form service (e.g. Formspree, Resend, custom API)
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="px-5 sm:px-10 max-w-7xl mx-auto pt-36 pb-20">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-16"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1c1b18]/40 mb-3 flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-[#c8a96e]" />
          Get in touch
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight leading-tight text-[#1c1b18]">
          Love to hear from you.
          <br />
          <span className="text-[#c8a96e]">Let's talk.</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="lg:col-span-3"
        >
          {submitted ? (
            <div className="flex flex-col items-start gap-4 p-10 bg-[#1c1b18] rounded-sm text-white">
              <FiCheckCircle className="w-10 h-10 text-[#c8a96e]" />
              <h2 className="text-2xl font-bold">Message sent!</h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Thanks for reaching out. I'll get back to you as soon as
                possible — usually within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                className="mt-2 text-sm text-[#c8a96e] underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1c1b18]/70" htmlFor="name">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Budi Santoso"
                    className="w-full px-4 py-3 text-sm bg-[#1c1b18]/5 border border-[#1c1b18]/10 rounded-sm focus:outline-none focus:border-[#c8a96e] transition-colors placeholder:text-[#1c1b18]/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1c1b18]/70" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="budi@example.com"
                    className="w-full px-4 py-3 text-sm bg-[#1c1b18]/5 border border-[#1c1b18]/10 rounded-sm focus:outline-none focus:border-[#c8a96e] transition-colors placeholder:text-[#1c1b18]/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1c1b18]/70" htmlFor="phone">
                  Phone number{" "}
                  <span className="text-[#1c1b18]/30 font-normal">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+62 8xx xxxx xxxx"
                  className="w-full px-4 py-3 text-sm bg-[#1c1b18]/5 border border-[#1c1b18]/10 rounded-sm focus:outline-none focus:border-[#c8a96e] transition-colors placeholder:text-[#1c1b18]/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1c1b18]/70" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Ansof, I'd love to work with you on..."
                  className="w-full px-4 py-3 text-sm bg-[#1c1b18]/5 border border-[#1c1b18]/10 rounded-sm focus:outline-none focus:border-[#c8a96e] transition-colors resize-none placeholder:text-[#1c1b18]/20"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1c1b18] text-[#f7f6f2] text-sm font-semibold rounded-full hover:bg-[#c8a96e] hover:text-[#1c1b18] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>Sending…</>
                ) : (
                  <>
                    Send message
                    <FiSend className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
          className="lg:col-span-2 space-y-10"
        >
          {/* Info cards */}
          <div className="space-y-4">
            <div className="p-6 border border-[#1c1b18]/8 rounded-sm space-y-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#c8a96e]">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-medium text-[#1c1b18] hover:text-[#c8a96e] transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="p-6 border border-[#1c1b18]/8 rounded-sm space-y-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#c8a96e]">
                Phone
              </p>
              <p className="text-sm font-medium text-[#1c1b18]">
                {siteConfig.phone}
              </p>
            </div>
            <div className="p-6 border border-[#1c1b18]/8 rounded-sm space-y-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#c8a96e]">
                Location
              </p>
              <p className="text-sm font-medium text-[#1c1b18]">
                {siteConfig.location}
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-sm border border-[#1c1b18]/8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2742676735984!2d106.79038577428638!3d-6.48691116342124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c31fd83153f9%3A0x325a1662bf4bed19!2sMajelis%20Ta&#39;lim%20Bani%20Abdullah!5e0!3m2!1sid!2sid!4v1682675702143!5m2!1sid!2sid"
              title="Location map"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            />
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
