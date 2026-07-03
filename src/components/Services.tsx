/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Home, Grid, Shield, Layers, FileText, Eraser, Wrench, Flame, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Sparkles,
  Home,
  Grid,
  Shield,
  Layers,
  FileText,
  Eraser,
  Wrench,
  Flame,
};

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden" id="services">
      {/* Background visual details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            Professional Contracting Scope
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Our Elite Plastering & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">
              Rendering Services
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            From modern interior skimming to full weatherproof rendering, we deliver consistent world-class standard on every property.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="services-grid">
          {SERVICES_DATA.map((srv: Service, idx: number) => {
            const IconComp = iconMap[srv.iconName] || Sparkles;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8 hover:border-gold-400/20 hover:bg-slate-950/95 transition-all shadow-md shadow-slate-950/50 hover:shadow-xl hover:shadow-gold-500/5"
                id={`service-card-${srv.id}`}
              >
                {/* Accent Corner Line */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:w-8 group-hover:h-8 group-hover:border-gold-400/30 transition-all duration-300 rounded-tr-2xl" />

                <div>
                  {/* Icon Frame */}
                  <div className="h-12 w-12 rounded-xl bg-gold-400/10 border border-gold-400/20 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-400 transition-colors">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm mt-3 font-light leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="mt-6 space-y-2 border-t border-slate-900 pt-5">
                    {srv.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-400/60" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-Action Link */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onSelectService(srv.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    Request Free Quote
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Prompt Section Card */}
        <div className="mt-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-gold-400/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden" id="services-cta-banner">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />
          <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase block mb-2">Have a custom requirement?</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white max-w-2xl mx-auto">
            Need insurance work, major patch repairs, or complex commercial development plastering?
          </h3>
          <p className="mt-4 text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-light">
            We handle projects of all scales with the same high level of premium precision. Contact Daniel directly to plan your project.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onSelectService('skimming')}
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-slate-950 font-bold text-sm px-6 py-3 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              Get Custom Assessment
            </button>
            <a
              href="tel:+447428085182"
              className="w-full sm:w-auto rounded-xl border border-slate-800 hover:border-gold-400/40 bg-slate-950 text-white font-semibold text-sm px-6 py-3 transition-colors"
            >
              Call Specialist Direct
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
