/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA, FAQS_DATA } from '../data';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: 'skimming',
    message: '',
    urgency: 'next_30_days',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission and console log per requirements
    console.log('--- Pride In Plastering: Contact Form Submitted ---', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <section className="relative bg-slate-950 py-24 md:py-32 overflow-hidden" id="contact">
      {/* Background radial gold glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info, FAQ & Map */}
          <div className="lg:col-span-5 space-y-10" id="contact-info-panel">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
                Doncaster Head Office
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Get In Touch With <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                  Daniel Belton
                </span>
              </h2>
              <p className="mt-3 text-slate-400 text-sm font-light leading-relaxed">
                Contact Pride In Plastering today for your completely free, no-obligation estimate or professional advice. We serve both domestic and commercial clients.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-4 bg-slate-900/50 border border-slate-900 hover:border-gold-400/20 p-4 rounded-xl hover:bg-slate-900 transition-all group"
                id="contact-phone-card"
              >
                <div className="h-10 w-10 bg-gold-400/10 border border-gold-400/20 rounded-lg flex items-center justify-center text-gold-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Call Direct 24/7</span>
                  <span className="text-white text-base font-semibold font-mono group-hover:text-gold-400 transition-colors">
                    {BUSINESS_INFO.phoneFormatted}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-4 bg-slate-900/50 border border-slate-900 hover:border-gold-400/20 p-4 rounded-xl hover:bg-slate-900 transition-all group"
                id="contact-email-card"
              >
                <div className="h-10 w-10 bg-gold-400/10 border border-gold-400/20 rounded-lg flex items-center justify-center text-gold-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Email Proposal</span>
                  <span className="text-white text-base font-semibold group-hover:text-gold-400 transition-colors">
                    {BUSINESS_INFO.email}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 bg-slate-900/50 border border-slate-900 p-4 rounded-xl">
                <div className="h-10 w-10 bg-gold-400/10 border border-gold-400/20 rounded-lg flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Area Served</span>
                  <span className="text-white text-sm font-semibold">
                    {BUSINESS_INFO.location}
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 bg-slate-900/50 border border-slate-900 p-4 rounded-xl">
                <div className="h-10 w-10 bg-gold-400/10 border border-gold-400/20 rounded-lg flex items-center justify-center text-gold-400 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Business Hours</span>
                  <span className="text-white text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Always Open / 24-7 Response
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form & FAQs */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Interactive Contact Form */}
            <div className="rounded-3xl border border-gold-400/10 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-sm relative" id="contact-form-panel">
              {/* Glowing light ornament */}
              <div className="absolute top-0 right-10 w-24 h-24 bg-gold-400/5 rounded-full blur-xl pointer-events-none" />
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <div className="mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">Direct Callback</span>
                    <h3 className="text-xl font-display font-bold text-white">Send A Quick Message</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Daniel will response to your message personally within an hour.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Daniel Belton"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 07428 085182"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.co.uk"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-medium text-slate-300 mb-1">
                        Primary Service Needed
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-3.5 py-2.5 text-sm text-white outline-none transition-all focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.id} className="bg-slate-900 text-white">
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1">
                      Describe Your Project / Repairs Needed
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know how we can help. For example, ceiling needs skimming, patch repairs from water leakage, or house exterior render details..."
                      className="w-full rounded-lg border border-slate-800 bg-slate-950/40 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-gold-400 focus:ring-1 focus:ring-gold-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 p-3 text-center text-sm font-semibold text-slate-950 shadow-md transition-all hover:brightness-110 active:scale-[0.98]"
                    id="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-1.5">
                        Submit Message <Send className="h-4.5 w-4.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center" id="contact-success-state">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/15 text-gold-400 border border-gold-400/20 mb-6">
                    <CheckCircle2 className="h-10 w-10 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-slate-300 text-sm max-w-sm">
                    Thank you for reaching out to <strong className="text-white">Pride In Plastering</strong>. Daniel Belton has received your information and will call you at <strong className="text-gold-400 font-mono">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'skimming',
                        message: '',
                        urgency: 'next_30_days',
                      });
                    }}
                    className="mt-8 px-5 py-2.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-750 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Accordion FAQs Section */}
            <div className="space-y-4" id="faqs">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="h-5 w-5 text-gold-400" />
                <h3 className="text-xl font-display font-bold text-white">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-3">
                {FAQS_DATA.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-900 bg-slate-950 overflow-hidden transition-all duration-300"
                    id={`faq-item-${idx}`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-display text-sm font-semibold text-white hover:text-gold-400 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronRight className={`h-4.5 w-4.5 text-gold-400 shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-90' : ''}`} />
                    </button>
                    {activeFaq === idx && (
                      <div className="px-4 pb-4 text-slate-400 text-xs sm:text-sm font-light leading-relaxed border-t border-slate-900/80 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
