/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crown, Heart, ShieldCheck, Mail, Phone, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-slate-400 text-sm font-sans relative overflow-hidden" id="footer">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full border border-gold-400/40 bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center text-gold-400 font-display font-black text-sm shadow-inner">
                P
              </div>
              <span className="font-display text-base font-bold text-white tracking-tight">
                Pride In Plastering
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Professional domestic and commercial plasterers based in Doncaster. Specialized in dry-lining, modern weatherproofing silicone rendering, skimming, and high-impact patch restoration.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
              <ShieldCheck className="h-4 w-4 text-gold-400" /> Fully Insured Public Liability Contractor
            </div>
          </div>

          {/* Column 2: Structural Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-display font-semibold text-xs uppercase tracking-wider">Quick Sections</h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'About Craft', href: '#about' },
                { name: 'Services Scope', href: '#services' },
                { name: 'Project Gallery', href: '#gallery' },
                { name: 'Client Reviews', href: '#reviews' },
                { name: 'Consultation & FAQs', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-gold-400 flex items-center gap-1 transition-colors group">
                    <ChevronRight className="h-3 w-3 text-gold-400 group-hover:translate-x-0.5 transition-transform" /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Info direct */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-display font-semibold text-xs uppercase tracking-wider">Direct Correspondence</h4>
            <ul className="space-y-3 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-400" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-gold-400 transition-colors">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-400" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-gold-400 transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="text-slate-400 font-sans leading-relaxed">
                {BUSINESS_INFO.location}
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} <strong className="text-slate-400 font-medium">Pride In Plastering</strong>. All Rights Reserved. 
          </div>
          <div className="flex items-center gap-1">
            Plastering Contractor based in Doncaster, UK. Made with pride.
          </div>
        </div>
      </div>
    </footer>
  );
}
