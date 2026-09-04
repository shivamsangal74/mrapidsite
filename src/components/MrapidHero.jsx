import React, { useState } from 'react';
import { MapPin, Search, ChevronDown, Smartphone, Apple, Play, Compass } from 'lucide-react';

export default function ZomatoHero({ onNavigate, onOpenDownloadModal }) {
  const [location, setLocation] = useState('Budhana');
  const [searchQuery, setSearchQuery] = useState('');
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.mrapido.user&hl=en_IN";

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onNavigate('marketplace');
  };

  return (
    <div className="relative w-full min-h-[580px] sm:min-h-[640px] flex flex-col items-center justify-center text-white overflow-hidden bg-gray-900">

      {/* Background High-Res Food & Grocery Banner Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&auto=format&fit=crop&q=80')`,
        }}
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-[2px]" />



      {/* Central Zomato-Style Branding Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6 mt-16 sm:mt-12">

        {/* Brand Logo & Name */}
        <div className="flex flex-col items-center space-y-3">
          <div className="p-3 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <img src="/mrapid_Logo.png" alt="mRapid Logo" className="h-16 sm:h-20 w-auto object-contain" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white italic drop-shadow-md">
            mRapid
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 max-w-2xl mx-auto leading-snug drop-shadow-sm">
          Multi-Vendor, Multi-Choice – <span className="text-red-500">Your Perfect Ordering</span>
        </p>

        {/* Dual Search Bar Container (Zomato Iconic Search Box) */}
        <form
          onSubmit={handleSearchSubmit}
          className="mt-8 bg-white rounded-2xl p-2 sm:p-2.5 shadow-2xl flex flex-col md:flex-row items-center max-w-3xl mx-auto border border-gray-100 text-gray-800"
        >
          {/* Location Dropdown */}
          <div className="flex items-center space-x-2.5 px-3 py-3 w-full md:w-5/12 border-b md:border-b-0 md:border-r border-gray-200">
            <MapPin className="h-5 w-5 text-[#e23744] shrink-0" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full text-sm font-semibold text-gray-800 bg-transparent focus:outline-none placeholder-gray-400"
              placeholder="Detecting location..."
            />
            <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
          </div>

          {/* Search Input */}
          <div className="flex items-center space-x-2.5 px-3 py-3 w-full md:w-7/12">
            <Search className="h-5 w-5 text-gray-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-sm text-gray-800 bg-transparent focus:outline-none placeholder-gray-400"
              placeholder="Search for restaurant, grocery item, or medicine..."
            />
          </div>

          {/* Search Submit CTA */}
          <button
            type="submit"
            className="w-full md:w-auto px-7 py-3.5 rounded-xl bg-[#e23744] hover:bg-red-600 text-white font-extrabold text-sm shrink-0 transition-colors shadow-md"
          >
            Search
          </button>
        </form>

      </div>

    </div>
  );
}
