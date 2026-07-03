/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, MessageSquare, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA, BUSINESS_INFO } from '../data';

export default function Testimonials() {
  return (
    <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden" id="reviews">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            Verifiable Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            What Our Clients Say <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">
              In Doncaster & Yorkshire
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm font-light leading-relaxed">
            We are proud of our pristine customer feedback. Our reputation for clean, premium quality plastering speaks for itself.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" id="testimonials-grid">
          {TESTIMONIALS_DATA.map((review) => (
            <div
              key={review.id}
              className="relative rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 hover:border-gold-400/20 hover:bg-slate-950 transition-all shadow-lg flex flex-col justify-between"
              id={`review-card-${review.id}`}
            >
              {/* Quote icon background decoration */}
              <div className="absolute top-6 right-6 text-slate-900 pointer-events-none">
                <Quote className="h-16 w-16 opacity-30 text-gold-400/10" />
              </div>

              <div>
                {/* Stars Indicator */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="h-4.5 w-4.5 fill-gold-400 text-gold-400 shrink-0" />
                  ))}
                  <span className="text-[10px] font-mono font-bold text-gold-400 ml-1 bg-gold-400/10 px-2 py-0.5 rounded border border-gold-400/20">5.0</span>
                </div>

                {/* Review Message Text */}
                <p className="text-slate-300 text-sm sm:text-base italic font-light leading-relaxed relative z-10">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details Footer */}
              <div className="mt-8 pt-6 border-t border-slate-900/80 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-display font-bold text-sm sm:text-base leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-slate-400 text-xs font-sans mt-0.5">{review.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block font-medium">
                    {review.service}
                  </span>
                  <div className="flex items-center gap-1 justify-end text-[10px] text-slate-500 mt-1 font-mono">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold-400/80" /> Verified Project
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action Box */}
        <div className="mt-16 text-center bg-slate-950/40 border border-slate-900 rounded-2xl p-6 max-w-xl mx-auto flex items-center justify-center gap-3" id="reviews-summary-badge">
          <MessageSquare className="h-5 w-5 text-gold-400 shrink-0" />
          <span className="text-xs sm:text-sm text-slate-400 font-light">
            Have we completed work on your home or business? We would love to hear your feedback. Send us an email at <strong className="text-gold-400 font-mono font-medium">{BUSINESS_INFO.email}</strong>.
          </span>
        </div>

      </div>
    </section>
  );
}
