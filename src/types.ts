/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name to be dynamically rendered
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'skimming' | 'rendering' | 'boarding' | 'commercial' | 'repair';
  imageUrl: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  urgency: 'routine' | 'urgent' | 'next_30_days';
}

export interface QuoteRequestData extends ContactFormData {
  location: string;
  preferredContact: 'phone' | 'email';
}
