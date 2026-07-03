/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function MobileFloatCall() {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-[280px] px-4 animate-bounce">
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 px-5 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-gold-500/30 border border-gold-300"
        id="mobile-floating-call-cta"
      >
        <Phone className="h-4.5 w-4.5 fill-slate-950 text-slate-950" />
        Call Daniel Now
      </a>
    </div>
  );
}
