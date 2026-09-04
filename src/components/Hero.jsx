import React, { useState } from 'react';
import { Search, MapPin, Apple, Play, ArrowRight, ShieldCheck, Zap, Star, ShoppingBag, Store, ChevronRight, Check } from 'lucide-react';

export default function Hero({ onOpenDownloadModal, onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Downtown Tech District, City');

  const popularSearches = ['Artisan Pizza', 'Organic Groceries', 'Pharmacy Express', 'Bubble Tea', 'Electronics'];
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.mrapido.user&hl=en_IN";

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Soft Red/Rose Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-red-100/70 via-rose-50/40 to-transparent blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Tagline */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-red-200 bg-white text-[#e23744] text-xs font-bold tracking-wide backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#e23744] animate-ping" />
              <span>Next-Gen Multi-Vendor Ordering Platform</span>
              <ChevronRight className="h-3.5 w-3.5 opacity-70" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Multi-Vendor, Multi-Choice – <br className="hidden sm:inline" />
              <span className="gradient-text">Your Perfect Ordering</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Order gourmet meals, fresh groceries, pharmaceuticals, and daily retail items from multiple top vendors in a single, seamless checkout experience.
            </p>

            {/* Interactive Location & Search Bar */}
            <div className="p-2 sm:p-2.5 rounded-2xl bg-white border border-gray-200 shadow-xl backdrop-blur-xl max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="flex items-center space-x-2 px-3 py-2 text-gray-500 w-full sm:w-auto border-b sm:border-b-0 sm:border-r border-gray-200">
                  <MapPin className="h-5 w-5 text-[#e23744] shrink-0" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none w-full font-medium"
                    placeholder="Enter delivery address"
                  />
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 w-full flex-1">
                  <Search className="h-5 w-5 text-[#e23744] shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none w-full"
                    placeholder="Search vendors, dishes, products..."
                  />
                </div>
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="w-full sm:w-auto gradient-button px-6 py-3 rounded-xl text-sm font-bold text-white flex items-center justify-center space-x-2 shrink-0 shadow-md"
                >
                  <span>Search</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Popular tags */}
              <div className="mt-3 px-3 pb-1 flex items-center space-x-2 overflow-x-auto text-xs text-gray-500">
                <span className="font-semibold text-gray-700 shrink-0">Popular:</span>
                {popularSearches.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSearchQuery(tag);
                      onNavigate('marketplace');
                    }}
                    className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-red-50 hover:text-[#e23744] transition-colors shrink-0 border border-gray-200/60 font-medium"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* App Store & Play Store Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenDownloadModal('ios')}
                className="flex items-center space-x-3 px-5 py-3 rounded-2xl bg-gray-900 text-white hover:bg-gray-800 transition-all shadow-lg group"
              >
                <Apple className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Download on</div>
                  <div className="text-sm font-extrabold text-white leading-none mt-0.5">App Store</div>
                </div>
              </button>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-5 py-3 rounded-2xl bg-white border border-gray-200 hover:border-[#e23744] hover:bg-red-50/50 transition-all shadow-lg group cursor-pointer"
              >
                <Play className="h-6 w-6 text-[#e23744] fill-current group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Get it on</div>
                  <div className="text-sm font-extrabold text-gray-900 leading-none mt-0.5">Google Play</div>
                </div>
              </a>
            </div>

            {/* Platform Highlights / Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-600 border-t border-gray-200 font-medium">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-4 w-4 text-[#e23744]" />
                <span>100% Verified Multi-Vendors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-[#e23744]" />
                <span>Express 20-Min Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-amber-500 fill-current" />
                <span>4.9/5 Rating (50k+ Reviews)</span>
              </div>
            </div>

          </div>

          {/* Right Hero Mobile App Mockup Preview */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Phone Outer Frame */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/18] rounded-[45px] border-8 border-gray-900 bg-gray-900 shadow-2xl p-4 overflow-hidden animate-float">
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-36 bg-gray-900 rounded-b-xl z-20" />

              {/* App Screen Content */}
              <div className="relative h-full w-full rounded-[32px] bg-slate-950 overflow-y-auto p-4 space-y-4 text-left scrollbar-none text-slate-100">
                
                {/* Header App Bar */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src="/mrapid_Logo.png" alt="Logo" className="h-6 w-auto" />
                    <span className="font-bold text-white text-sm">mRapid</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#e23744]/30 text-red-300 text-[10px] font-bold border border-[#e23744]/40">
                    LIVE ORDER
                  </span>
                </div>

                {/* Multi-Vendor Bundle Card */}
                <div className="rounded-2xl bg-gradient-to-br from-red-950 to-rose-950 p-3 border border-[#e23744]/40 shadow-inner">
                  <div className="flex items-center justify-between text-xs text-red-200 mb-2">
                    <span className="font-semibold flex items-center gap-1">
                      <Store className="h-3.5 w-3.5 text-red-400" /> Multi-Vendor Order #8942
                    </span>
                    <span className="text-[10px] text-red-200 bg-slate-900/80 px-2 py-0.5 rounded-md border border-red-500/30">2 Vendors</span>
                  </div>

                  {/* Vendor 1 */}
                  <div className="bg-slate-900/90 p-2.5 rounded-xl mb-2 flex items-center justify-between text-xs border border-slate-800">
                    <div>
                      <div className="font-bold text-white">Bella Napoli Pizza</div>
                      <div className="text-[10px] text-slate-400">1x Large Truffle Pizza + Extra Cheese</div>
                    </div>
                    <span className="text-red-400 font-bold">₹18.50</span>
                  </div>

                  {/* Vendor 2 */}
                  <div className="bg-slate-900/90 p-2.5 rounded-xl flex items-center justify-between text-xs border border-slate-800">
                    <div>
                      <div className="font-bold text-white">Green Leaf Organic Market</div>
                      <div className="text-[10px] text-slate-400">2x Fresh Avocado, 1x Kombucha</div>
                    </div>
                    <span className="text-red-400 font-bold">₹9.20</span>
                  </div>
                </div>

                {/* Delivery Tracker */}
                <div className="rounded-2xl bg-slate-900 p-3 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Estimated Arrival</span>
                    <span className="text-red-400 font-bold">14 Mins</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#e23744] to-rose-400 h-full w-3/4 animate-pulse" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Picked Up</span>
                    <span>In Transit</span>
                    <span>Delivered</span>
                  </div>
                </div>

                {/* Multi-Choice Option Preview */}
                <div className="rounded-2xl bg-slate-900/60 p-3 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-slate-200">Custom Multi-Choice Add-ons</div>
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-1"><Check className="h-3 w-3 text-red-400" /> Spice Level: Medium</span>
                      <span className="text-slate-400">Free</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-1"><Check className="h-3 w-3 text-red-400" /> Packaging: Eco-Friendly</span>
                      <span className="text-slate-400">Free</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Info Badges */}
            <div className="absolute -left-6 top-1/4 rounded-2xl bg-white p-3 shadow-2xl hidden sm:flex items-center space-x-3 border border-gray-200">
              <div className="p-2 rounded-xl bg-red-100 text-[#e23744]">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div className="text-left text-xs">
                <div className="font-bold text-gray-900">Single Checkout</div>
                <div className="text-gray-500">Order from 3 Stores at once</div>
              </div>
            </div>

            <div className="absolute -right-6 bottom-1/4 rounded-2xl bg-white p-3 shadow-2xl hidden sm:flex items-center space-x-3 border border-gray-200">
              <div className="p-2 rounded-xl bg-rose-100 text-[#e23744]">
                <Zap className="h-5 w-5" />
              </div>
              <div className="text-left text-xs">
                <div className="font-bold text-gray-900">Real-time GPS</div>
                <div className="text-gray-500">Track multi-vendor riders</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
