/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Testimonial, GalleryItem } from './types';

export const BUSINESS_INFO = {
  name: 'Pride In Plastering',
  tagline: 'Craftsmanship, Integrity & Premium Quality Walls',
  owner: 'Daniel Belton',
  location: 'Doncaster, South Yorkshire, United Kingdom',
  areaServed: 'Doncaster & surrounding Yorkshire regions',
  phone: '+44 7428 085182',
  phoneFormatted: '07428 085182',
  email: 'danielbelton@live.co.uk',
  hours: 'Always Open / 24/7 Support',
  logoUrl: '',
  heroBgUrl: '/plaster_hero.jpg',
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'skimming',
    title: 'Skimming & Re-Skimming',
    description: 'Flawless glass-smooth finishes for walls and ceilings. Perfect for preparing surfaces for painting or wallpapering over old artex or damaged surfaces.',
    iconName: 'Sparkles',
    features: ['Ultra-smooth glass finish', 'Perfect paint preparation', 'Wallpaper-ready', 'Artex covering specialist']
  },
  {
    id: 'rendering',
    title: 'Traditional & Modern Rendering',
    description: 'Premium exterior plastering protecting your home from harsh weather elements while providing striking modern curb appeal.',
    iconName: 'Home',
    features: ['High-durability silicone render', 'Traditional sand & cement', 'Weatherproofing barrier', 'Multiple color finish options']
  },
  {
    id: 'float-set',
    title: 'Float & Set Plastering',
    description: 'Traditional heavy-gauge plastering technique applying wet undercoat backing plaster directly to brickwork followed by a finish skim coat.',
    iconName: 'Grid',
    features: ['Solid solid-wall backing', 'Superior acoustic insulation', 'Perfect flat leveling', 'Excellent thermal mass retention']
  },
  {
    id: 'hard-wall',
    title: 'Hard Wall Plastering',
    description: 'High-strength backing plaster for inner walls of masonry work, offering excellent impact resistance and faster drying times.',
    iconName: 'Shield',
    features: ['Impact resistance backing', 'Fast-drying formulas', 'Incredibly tough finish', 'Ideal for busy family homes']
  },
  {
    id: 'dot-dab',
    title: 'Dot & Dab (Drywall Adhesive)',
    description: 'Technique to secure plasterboard to solid masonry walls using structural adhesive dabs, ensuring quick, solid, and straight wall lining.',
    iconName: 'Layers',
    features: ['Fast and efficient', 'Creates straight vertical walls', 'Combines with insulation', 'Bypasses wet backing dry times']
  },
  {
    id: 'dry-lining',
    title: 'Plasterboarding & Dry Lining',
    description: 'Professional stud wall boarding, ceiling boarding, and dry lining. Creating clean, flat, and structurally sound modern interior layouts.',
    iconName: 'FileText',
    features: ['Precision boarding', 'Stud wall partition framing', 'Ceiling replacement', 'Moisture & fire resistant options']
  },
  {
    id: 'artex-covering',
    title: 'Artex Covering & Over-skimming',
    description: 'Say goodbye to dated textured ceilings. Safely prep, scrape, seal, and skim artex to create modern, flat, light-reflective ceilings.',
    iconName: 'Eraser',
    features: ['Eliminates dated patterns', 'Safe sealant prep work', 'Brightens up living space', 'Full ceiling restoration']
  },
  {
    id: 'patch-repairs',
    title: 'Patch Repairs & Damp Proofing',
    description: 'Repairing water damage, physical holes, cracks, and blown plaster. Specialist damp proofing treatments to keep moisture out permanently.',
    iconName: 'Wrench',
    features: ['Seamless repairs', 'Damp barrier treatments', 'Crack stabilization', 'Stain-block sealing']
  },
  {
    id: 'insulation',
    title: 'Plasterboard Insulation (Thermal)',
    description: 'High-performance insulated plasterboard installations that keep heat inside your home, substantially lowering energy bills.',
    iconName: 'Flame',
    features: ['Thermal barrier backing', 'Significant heating bill savings', 'Condensation prevention', 'Space-saving slim insulation']
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Pristine Modern Render',
    category: 'rendering',
    imageUrl: '/rendered_house.jpg',
    description: 'Complete modern silicone exterior render finish on a contemporary home.'
  },
  {
    id: 'gal-2',
    title: 'Expert Skimming Craftsmanship',
    category: 'skimming',
    imageUrl: '/plaster_work_shot.jpg',
    description: 'Close-up detail of applying smooth, reflective finish coat with professional precision.'
  },
  {
    id: 'gal-3',
    title: 'Luxury Living Room Plastering',
    category: 'skimming',
    imageUrl: '/plaster_hero.jpg',
    description: 'Seamlessly skimmed lounge walls and flat ceiling, ready for high-gloss paint.'
  },
  {
    id: 'gal-4',
    title: 'Full Ceiling Replacement',
    category: 'boarding',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    description: 'Clean high-precision plasterboard installation on a custom modern ceiling.'
  },
  {
    id: 'gal-5',
    title: 'Exterior Traditional Plaster',
    category: 'rendering',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    description: 'Beautiful cream rendering finish on a multi-tier residential property.'
  },
  {
    id: 'gal-6',
    title: 'Flawless Wall Patching & Repair',
    category: 'repair',
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800',
    description: 'Seamless recovery of electric chasing and plumbing channels.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mark Henderson',
    location: 'Bessacarr, Doncaster',
    rating: 5,
    text: 'Daniel skimmed our entire open-plan kitchen and living area. The walls are like glass. He was professional, tidy, and incredibly fast. I wouldn’t use any other plasterer in Doncaster!',
    service: 'Skimming & Re-Skimming',
    date: 'June 2026'
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    location: 'Wheatley, Doncaster',
    rating: 5,
    text: 'Highly recommend Pride In Plastering. They boarded and skimmed two bedrooms. The finish is fantastic, absolutely flat with zero blemishes. They left the house cleaner than they found it!',
    service: 'Plaster Boarding & Dry Lining',
    date: 'May 2026'
  },
  {
    id: 'test-3',
    name: 'Robert Collins',
    location: 'Sprotbrough, Doncaster',
    rating: 5,
    text: 'We had an old artex ceiling covered and some damp patching treated on the ground floor. The results are flawless, and you cannot tell where the old artex used to be. Unmatched pride in their craft.',
    service: 'Artex Covering & damp proofing',
    date: 'April 2026'
  },
  {
    id: 'test-4',
    name: 'Emma Watson',
    location: 'Bawtry, Doncaster',
    rating: 5,
    text: 'Absolute professionals. Completed a silicone render on our home exterior. The house looks brand new and modern. Honest quote, on time every day, and magnificent craftsmanship.',
    service: 'Silicone Rendering',
    date: 'March 2026'
  }
];

export const FAQS_DATA = [
  {
    question: 'How long does a freshly plastered wall take to dry before painting?',
    answer: 'Usually, skimming takes between 3 to 5 days to dry completely, depending on temperature and ventilation. Undercoat plastering like float and set can take up to 2-3 weeks. It will turn from a dark, wet pink to a light, uniform pale pink when ready for paint.'
  },
  {
    question: 'Can you plaster over textured Artex ceilings?',
    answer: 'Yes, absolutely. This is one of our most popular services. As long as the Artex is secure and free of asbestos, we can scrape back the high spots, apply a specialised adhesive bonding agent, and over-skim it to a modern, completely flat glass finish.'
  },
  {
    question: 'Do you provide free quotes, and is there a callout charge?',
    answer: 'We provide 100% free, no-obligation detailed quotes. There are absolutely no callout charges or hidden fees. We can visit your property in Doncaster or surrounding areas to evaluate and give you an exact price.'
  },
  {
    question: 'Are you fully insured for residential and commercial jobs?',
    answer: 'Yes, Pride In Plastering is fully insured with comprehensive public liability insurance, ensuring complete peace of mind while we are working on your property.'
  }
];
