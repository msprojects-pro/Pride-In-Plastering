/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data';
import { QuoteRequestData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export default function QuoteModal({ isOpen, onClose, selectedService = '' }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteRequestData>({
    name: '',
    email: '',
    phone: '',
    service: selectedService || 'skimming',
    location: '',
    preferredContact: 'phone',
    message: '',
    urgency: 'next_30_days',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call and log form data per technical requirements
    console.log('--- Pride In Plastering: Quote Request Form Submitted ---', formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'skimming',
      location: '',
      preferredContact: 'phone',
      message: '',
      urgency: 'next_30_days',
    });
    setIsSuccess(false);
  };

  const handleClose = () => {
    onClose();
    // Reset after transition finishes
    setTimeout(resetForm, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gold-400/20 bg-slate-900/95 shadow-2xl shadow-gold-500/10 backdrop-blur-lg"
            id="modal-content"
          >
            {/* Top gold accent line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-gold-400 transition-colors p-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-gold-400/50"
              aria-label="Close quote modal"
              id="close-modal-btn"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content Wrapper */}
            <div className="p-6 md:p-8">
              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                      Pride in Craftsmanship
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white">
                      Request Your Free Quote
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">
                      No obligation, premium consultation for property owners in {BUSINESS_INFO.location.split(',')[0]}.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" id="quote-request-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="quote-name" className="block text-xs font-medium text-slate-300 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="quote-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Daniel Belton"
                          className="w-full rounded-lg border border-slate-700 bg-slate-950/50 px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="quote-phone" className="block text-xs font-medium text-slate-300 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="quote-phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 07428 085182"
                          className="w-full rounded-lg border border-slate-700 bg-slate-950/50 px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label htmlFor="quote-email" className="block text-xs font-medium text-slate-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="quote-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.co.uk"
                          className="w-full rounded-lg border border-slate-700 bg-slate-950/50 px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                        />
                      </div>

                      {/* Location */}
                      <div>
                        <label htmlFor="quote-location" className="block text-xs font-medium text-slate-300 mb-1">
                          Project Location *
                        </label>
                        <input
                          type="text"
                          id="quote-location"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Bessacarr, Doncaster"
                          className="w-full rounded-lg border border-slate-700 bg-slate-950/50 px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="quote-service" className="block text-xs font-medium text-slate-300 mb-1">
                        Select Required Service
                      </label>
                      <select
                        id="quote-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-slate-700 bg-slate-950/50 px-3.5 py-2 text-sm text-white outline-none transition-all focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.id} className="bg-slate-900 text-white">
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Urgency */}
                      <div>
                        <label htmlFor="quote-urgency" className="block text-xs font-medium text-slate-300 mb-1">
                          Timeline / Urgency
                        </label>
                        <select
                          id="quote-urgency"
                          value={formData.urgency}
                          onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950/50 px-3.5 py-2 text-sm text-white outline-none transition-all focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                        >
                          <option value="routine" className="bg-slate-900">Routine (Planning ahead)</option>
                          <option value="next_30_days" className="bg-slate-900">Next 30 Days</option>
                          <option value="urgent" className="bg-slate-900">Urgent (As soon as possible)</option>
                        </select>
                      </div>

                      {/* Preferred contact */}
                      <div>
                        <label htmlFor="quote-contact" className="block text-xs font-medium text-slate-300 mb-1">
                          Preferred Contact Method
                        </label>
                        <div className="flex space-x-2 mt-1">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContact: 'phone' })}
                            className={`flex-1 py-1.5 px-3 rounded text-xs font-medium border flex items-center justify-center gap-1.5 transition-all ${
                              formData.preferredContact === 'phone'
                                ? 'bg-gold-400/20 text-gold-400 border-gold-400'
                                : 'bg-slate-950/50 text-slate-400 border-slate-700 hover:text-white'
                            }`}
                          >
                            <Phone className="h-3 w-3" /> Phone
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContact: 'email' })}
                            className={`flex-1 py-1.5 px-3 rounded text-xs font-medium border flex items-center justify-center gap-1.5 transition-all ${
                              formData.preferredContact === 'email'
                                ? 'bg-gold-400/20 text-gold-400 border-gold-400'
                                : 'bg-slate-950/50 text-slate-400 border-slate-700 hover:text-white'
                            }`}
                          >
                            <Mail className="h-3 w-3" /> Email
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="quote-message" className="block text-xs font-medium text-slate-300 mb-1">
                        Project Details & Measurements (Optional)
                      </label>
                      <textarea
                        id="quote-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe the size of the room, number of walls, ceiling repair needed, or rendering dimensions..."
                        className="w-full rounded-lg border border-slate-700 bg-slate-950/50 px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-gold-400 focus:ring-1 focus:ring-gold-400 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 p-2.5 text-center text-sm font-semibold text-slate-950 shadow-md transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
                      id="quote-submit-btn"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                          Processing Craft Proposal...
                        </span>
                      ) : (
                        'Submit Free Quote Request'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                  id="quote-success-panel"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/20 mb-6">
                    <CheckCircle2 className="h-10 w-10 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Request Received, Partner
                  </h3>
                  <p className="text-slate-300 text-sm max-w-sm mb-6">
                    Thank you, <strong className="text-gold-400">{formData.name}</strong>. Daniel Belton will review your project details and contact you via <strong className="text-gold-400">{formData.preferredContact}</strong> shortly to discuss your free quotation.
                  </p>
                  <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 mb-8 text-left text-xs max-w-sm w-full space-y-2">
                    <div className="flex justify-between"><span className="text-slate-500 font-mono">Service:</span> <span className="text-slate-300 font-medium">{SERVICES_DATA.find(s => s.id === formData.service)?.title || formData.service}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500 font-mono">Location:</span> <span className="text-slate-300 font-medium">{formData.location}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500 font-mono">Timeline:</span> <span className="text-gold-300 font-medium font-mono uppercase text-[10px]">{formData.urgency.replace('_', ' ')}</span></div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 border border-slate-700 transition-colors text-sm"
                  >
                    Return to Showcase
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
