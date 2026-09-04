import React, { useState } from 'react';
import { Apple, Play, Smartphone, QrCode, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AppDownloadSection({ onOpenDownloadModal }) {
  const [contactType, setContactType] = useState('email'); // 'email' or 'phone'
  const [inputValue, setInputValue] = useState('');
  const [sentLink, setSentLink] = useState(false);
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.mrapido.user&hl=en_IN";

  const handleShareLink = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setSentLink(true);
    setTimeout(() => setSentLink(false), 3500);
  };

  return (
    <section className="py-16 bg-[#fffbfb] border-t border-b border-red-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Phone Screen Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 aspect-[9/18] rounded-[40px] border-8 border-gray-900 bg-slate-950 shadow-2xl p-3 overflow-hidden animate-float">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-28 bg-gray-900 rounded-b-xl z-20" />
              
              <div className="relative h-full w-full rounded-[28px] bg-white text-gray-900 p-4 space-y-4 text-left overflow-hidden">
                <div className="pt-4 flex items-center justify-between">
                  <img src="/mrapid_Logo.png" alt="Logo" className="h-6 w-auto" />
                  <span className="text-[10px] font-bold text-[#e23744] bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                    APP PREVIEW
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-red-50 border border-red-100 space-y-2">
                  <div className="text-xs font-black text-gray-900">Multi-Vendor Checkout</div>
                  <div className="text-[10px] text-gray-600">Order Pizza + Groceries + Medicine in 1 tap!</div>
                </div>

                <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
                  <div className="text-[11px] font-bold text-gray-800">Live Rider GPS</div>
                  <div className="text-[10px] text-[#e23744] font-semibold">20 Mins Delivery Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Zomato-Style App Link Form */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Get the <span className="text-[#e23744]">mRapid App</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
              We will send you a link, open it on your phone to download the app
            </p>

            {/* Radio Options: Email vs Phone */}
            <div className="flex items-center space-x-6 text-xs font-bold text-gray-800">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactType"
                  checked={contactType === 'email'}
                  onChange={() => setContactType('email')}
                  className="accent-[#e23744] h-4 w-4"
                />
                <span>Email</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactType"
                  checked={contactType === 'phone'}
                  onChange={() => setContactType('phone')}
                  className="accent-[#e23744] h-4 w-4"
                />
                <span>Phone</span>
              </label>
            </div>

            {/* Input & Share App Link Button */}
            {sentLink ? (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs font-bold text-[#e23744] flex items-center space-x-2 animate-fadeIn">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>App download link sent to {inputValue}! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleShareLink} className="flex flex-col sm:flex-row items-center gap-3 max-w-md">
                <input
                  type={contactType === 'email' ? 'email' : 'tel'}
                  required
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={contactType === 'email' ? 'Enter your email' : 'Enter mobile phone number'}
                  className="w-full rounded-xl bg-white border border-gray-300 p-3 text-xs text-gray-900 placeholder-gray-400 focus:border-[#e23744] focus:outline-none shadow-sm"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#e23744] hover:bg-red-600 text-white font-extrabold text-xs shrink-0 transition-colors shadow-md"
                >
                  Share App Link
                </button>
              </form>
            )}

            {/* Store Buttons */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Download app from</div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenDownloadModal('ios')}
                  className="flex items-center space-x-3 px-5 py-3 rounded-2xl bg-gray-900 text-white hover:bg-gray-800 transition-all shadow-md"
                >
                  <Apple className="h-6 w-6 text-white" />
                  <div className="text-left">
                    <div className="text-[9px] uppercase text-gray-400 font-bold">Download on</div>
                    <div className="text-xs font-extrabold text-white leading-none mt-0.5">App Store</div>
                  </div>
                </button>

                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-5 py-3 rounded-2xl bg-white border border-gray-300 text-gray-900 hover:bg-red-50 transition-all shadow-md cursor-pointer"
                >
                  <Play className="h-5 w-5 text-[#e23744] fill-current" />
                  <div className="text-left">
                    <div className="text-[9px] uppercase text-gray-500 font-bold">GET IT ON</div>
                    <div className="text-xs font-extrabold text-gray-900 leading-none mt-0.5">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
