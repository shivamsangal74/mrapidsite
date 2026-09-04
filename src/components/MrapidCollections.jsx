import React from 'react';
import { ChevronRight, Flame, Sparkles, Award, Zap } from 'lucide-react';

export default function ZomatoCollections({ onNavigate }) {
  const collections = [
    {
      title: 'Top Artisan Pizza Places',
      count: '18 Places',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: '24/7 Pharmacy & Medicine Express',
      count: '12 Places',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Organic Farm-Fresh Groceries',
      count: '24 Places',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Trending Multi-Vendor Combos',
      count: '15 Places',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 space-y-2 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Collections</h2>
          <p className="text-sm text-gray-500 mt-1">
            Explore curated lists of top restaurants, supermarkets, and stores, based on trends
          </p>
        </div>
        <button 
          onClick={() => onNavigate('marketplace')}
          className="text-xs font-bold text-[#e23744] hover:underline flex items-center space-x-1 shrink-0"
        >
          <span>All collections in city</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((col, idx) => (
          <div
            key={idx}
            onClick={() => onNavigate('marketplace')}
            className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
          >
            <img
              src={col.image}
              alt={col.title}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-base font-extrabold line-clamp-2 drop-shadow-md group-hover:text-red-400 transition-colors">
                {col.title}
              </h3>
              <div className="flex items-center space-x-1 text-xs text-white/80 mt-1 font-semibold">
                <span>{col.count}</span>
                <ChevronRight className="h-3.5 w-3.5 text-red-500" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
