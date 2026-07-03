/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Background Image with Gold-Black Radial and Linear Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={BUSINESS_INFO.heroBgUrl}
          alt="Luxury Pristine Smooth Plaster Work"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover scale-105"
        />
        {/* Luxury Overlays */}
        <div className="absolute inset-0 bg-slate-950/85 md:bg-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
        <div className="absolute inset-0 bg-radial-at-c from-gold-900/10 via-transparent to-transparent opacity-80" />
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Crown Accent badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/30 bg-gold-500/10 text-gold-400 mb-6 text-xs font-mono uppercase tracking-widest"
          id="hero-badge"
        >
          <Award className="h-4 w-4 text-gold-400 animate-pulse" />
          Master Plastering & Rendering
        </motion.div>

        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-none"
          id="hero-title"
        >
          Unrivalled Pride In <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">
            Every Plastered Line
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
          id="hero-subtitle"
        >
          Premium skimming, dry lining, and weather-resistant rendering services. Elevating properties across Doncaster, UK with a flawless glass-smooth finish.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          id="hero-ctas"
        >
          <button
            onClick={onOpenQuote}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 px-8 py-4 text-sm font-bold text-slate-950 shadow-xl hover:shadow-gold-500/20 active:scale-[0.98] transition-all cursor-pointer"
            id="hero-quote-btn"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-700 hover:border-gold-400 bg-slate-900/50 backdrop-blur-sm px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-900/80"
            id="hero-call-btn"
          >
            <Phone className="h-4 w-4 text-gold-400" />
            <span className="font-mono">{BUSINESS_INFO.phoneFormatted}</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 border-t border-slate-800/60 pt-10 w-full max-w-3xl text-center"
          id="hero-trust-indicators"
        >
          <div className="flex flex-col items-center gap-1">
            <ShieldCheck className="h-6 w-6 text-gold-400" />
            <span className="text-white text-sm font-semibold mt-1">Fully Insured</span>
            <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">Public Liability</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Award className="h-6 w-6 text-gold-400" />
            <span className="text-white text-sm font-semibold mt-1">Doncaster Local</span>
            <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">Serving Since 2012</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-1">
            <ThumbsUp className="h-6 w-6 text-gold-400" />
            <span className="text-white text-sm font-semibold mt-1">Always Open</span>
            <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">24/7 Consultation</span>
          </div>
        </motion.div>
      </div>

      {/* Elegant bottom section curve/divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
