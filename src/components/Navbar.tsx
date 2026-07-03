/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Crown, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 border-b border-gold-400/10 shadow-lg shadow-slate-950/20 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
      id="main-nav"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group" id="nav-brand-logo">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/40 bg-gradient-to-br from-slate-900 to-slate-950 text-gold-400 font-display font-black text-xl shadow-inner transition-transform group-hover:scale-105">
              P
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-gold-400 transition-colors block leading-tight">
                Pride In Plastering
              </span>
              <span className="text-[10px] font-mono tracking-widest text-gold-400 block uppercase">
                Premium Contractor
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors py-1.5 font-sans relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 hover:after:w-full after:transition-all"
                id={`nav-link-desktop-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call and CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-gold-400 transition-colors"
              id="nav-call-link"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-gold-400">
                <Phone className="h-4 w-4" />
              </div>
              <span className="font-mono">{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:brightness-110 active:scale-[0.98] transition-all"
              id="nav-quote-cta"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 px-3 py-1.5 text-xs font-bold text-slate-950 shadow-sm"
              id="nav-mobile-quote-cta"
            >
              Quote
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-gold-400 transition-colors p-1.5 border border-slate-800 rounded bg-slate-900/50"
              aria-label="Toggle navigation menu"
              id="nav-toggle-btn"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-slate-950 border-b border-gold-400/15 p-6 space-y-4 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
        id="mobile-nav-drawer"
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-gold-400 py-2 border-b border-slate-900 transition-colors"
              id={`nav-link-mobile-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="pt-2 flex flex-col gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-3 rounded-lg hover:border-gold-400/40 transition-all"
            id="nav-mobile-call"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/10 text-gold-400">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-mono">Tap to Call</span>
              <span className="text-sm font-semibold text-white font-mono">{BUSINESS_INFO.phoneFormatted}</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
