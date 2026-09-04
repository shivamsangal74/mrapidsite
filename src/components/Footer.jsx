import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Apple, Play, Heart, ArrowUp, X } from 'lucide-react';

export default function Footer({ onOpenDownloadModal, onNavigate }) {
  const [legalModal, setLegalModal] = useState(null);
  const navigate = useNavigate();
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.mrapido.user&hl=en_IN";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-600 pt-16 pb-12 border-t border-gray-200 relative overflow-hidden">

      {/* Scroll to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 top-8 p-3 rounded-full bg-gray-100 border border-gray-200 text-gray-700 hover:text-gray-900 hover:border-[#e23744] transition-all shadow-md"
        title="Scroll to Top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-200 text-left">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
              <div className="p-1.5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <img src="/mrapid_Logo.png" alt="mRapid Logo" className="h-9 w-auto object-contain" />
              </div>
              <div>
                <div className="text-xl font-black text-gray-900">mRapid</div>
                <div className="text-[10px] text-[#e23744] font-bold tracking-wider uppercase">
                  Multi-Vendor Ordering
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
              Multi-Vendor, Multi-Choice – Your Perfect Ordering. Elevating daily food, grocery, and retail delivery with unified cart checkout and custom item choices.
            </p>

            {/* App Store Badges */}
            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => onOpenDownloadModal('ios')}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 text-xs font-bold shadow-sm"
              >
                <Apple className="h-4 w-4" />
                <span>App Store</span>
              </button>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-red-50 text-xs font-bold shadow-sm"
              >
                <Play className="h-4 w-4 text-[#e23744] fill-current" />
                <span>Google Play</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Explore Platform</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#e23744] transition-colors font-medium">
                  Home & Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('marketplace')} className="hover:text-[#e23744] transition-colors font-medium">
                  Multi-Vendor Hub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('marketing')} className="hover:text-[#e23744] transition-colors font-medium">
                  Partner Marketing & Sign-Up
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/support')} className="hover:text-[#e23744] transition-colors font-medium">
                  Customer Support Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Vendor & Partners */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Merchant & Fleet</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('marketing')} className="hover:text-[#e23744] transition-colors font-medium">
                  Become a Merchant Partner
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('marketing')} className="hover:text-[#e23744] transition-colors font-medium">
                  Join Delivery Fleet
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('marketing')} className="hover:text-[#e23744] transition-colors font-medium">
                  Merchant POS Integration
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('marketing')} className="hover:text-[#e23744] transition-colors font-medium">
                  0% Commission Program
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Help & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigate('/support')} className="hover:text-[#e23744] transition-colors font-medium">
                  Submit Support Ticket
                </button>
              </li>
              <li>
                <button onClick={() => setLegalModal('privacy')} className="hover:text-[#e23744] transition-colors font-medium">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setLegalModal('terms')} className="hover:text-[#e23744] transition-colors font-medium">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onOpenDownloadModal('all')} className="hover:text-[#e23744] transition-colors font-medium">
                  Scan QR App Download
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} mRapid® Inc. All rights reserved. "Multi-Vendor, Multi-Choice – Your Perfect Ordering"
          </div>
          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 text-[#e23744] fill-current" />
            <span>for seamless ordering everywhere</span>
          </div>
        </div>

      </div>

      {/* Legal Info Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl text-left space-y-4 max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-xl font-bold text-gray-900 capitalize">
              mRapid {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>

            <div className="text-xs text-gray-600 space-y-3 leading-relaxed">
              <p>
                At mRapid ("Multi-Vendor, Multi-Choice – Your Perfect Ordering"), we prioritize privacy, transparent ordering terms, and secure multi-merchant payment processing.
              </p>
              <p>
                <strong>1. Multi-Vendor Transactions:</strong> Orders containing products from separate merchants are fulfilled via optimized logistics routes. Each vendor prepares custom items according to your multi-choice selections.
              </p>
              <p>
                <strong>2. Data Protection:</strong> We encrypt user accounts, phone numbers, delivery coordinates, and transaction details. Information is never sold to third-party advertisers.
              </p>
              <p>
                <strong>3. Refund & Cancellation:</strong> Cancellations made before vendor preparation begin are eligible for instant refunds to your mRapid wallet or bank card.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setLegalModal(null)}
                className="w-full py-2.5 rounded-xl gradient-button font-bold text-xs text-white"
              >
                Close & Accept
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
