/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldAlert, Check, Star, Award, ShieldCheck, HardHat, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Flawless Finish Guarantee',
      desc: 'Our work is not finished until the plaster is pristine, flat, and glass-smooth. No bumps, no ripples, no exceptions.'
    },
    {
      icon: ShieldCheck,
      title: 'Fully Licensed & Insured',
      desc: 'Your property is safe with us. We carry robust public liability insurance and strictly adhere to premium UK contracting standards.'
    },
    {
      icon: HardHat,
      title: 'Tidy, Reliable Craftspeople',
      desc: 'We clean up thoroughly at the end of every day. We protect your carpets, furniture, and fittings with dust sheets and clean water washdowns.'
    }
  ];

  return (
    <section className="relative bg-slate-950 py-24 md:py-32 overflow-hidden" id="about">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Element: Left Side */}
          <div className="lg:col-span-5 relative" id="about-image-wrapper">
            {/* Elegant Golden Picture Frame */}
            <div className="absolute inset-0 border border-gold-400/20 translate-x-3 translate-y-3 rounded-2xl pointer-events-none z-0" />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
                alt="Daniel Belton Plastering Craftsmanship"
                referrerPolicy="no-referrer"
                className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-gold-400/30 bg-slate-950/90 backdrop-blur-sm flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gold-400 flex items-center justify-center text-slate-950 font-display font-bold text-xl">
                  10+
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Years in Business</h4>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gold-400 mt-0.5">Doncaster & Yorkshire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Element: Right Side */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="about-text-wrapper">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
              Our Legacy of Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-6">
              Founded on Pride, Finished with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                Pure Precision
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              <p>
                At <strong className="text-white font-medium">Pride In Plastering</strong>, we believe that walls and ceilings are the core foundations of a property’s interior elegance. Led by master craftsman <strong className="text-gold-400 font-medium">Daniel Belton</strong>, our Doncaster-based team treats every home and business project like a high-end masterpiece.
              </p>
              <p>
                Whether covering outdated, bumpy Artex ceilings, boarding new extensions, or finishing exterior silicone render, we operate under a simple ethos: <strong className="text-white font-medium">No shortcuts, absolute transparency, and clean, impeccable execution.</strong>
              </p>
            </div>

            {/* Checkmark List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
              {[
                'Flawless glass-smooth skimming',
                'Weatherproof silicone rendering',
                'Mess-free and fully protected sites',
                'Direct, honest quotes with zero fees',
                'Artex and damage restoration expert',
                'Insulation upgrade integrations'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Corporate Values Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-slate-900" id="about-values">
          {values.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/40 border border-slate-900 hover:border-gold-400/10 p-6 sm:p-8 rounded-2xl transition-all hover:bg-slate-900/60 flex flex-col gap-4"
              >
                <div className="h-12 w-12 rounded-xl bg-gold-400/10 border border-gold-400/20 text-gold-400 flex items-center justify-center">
                  <IconComponent className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-white">{val.title}</h3>
                  <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
