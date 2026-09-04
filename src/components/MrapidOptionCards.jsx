import React from 'react';
import { Utensils, ShoppingBag, Pill, Store, ArrowRight } from 'lucide-react';

export default function ZomatoOptionCards({ onNavigate }) {
  const options = [
    {
      id: 'dining',
      title: 'Order Online',
      subtitle: 'Stay home and order to your doorstep',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80',
      badge: 'Multi-Choice Meals',
    },
    {
      id: 'grocery',
      title: 'Groceries & Fresh',
      subtitle: 'Instant farm-fresh produce & daily essentials',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80',
      badge: 'Express Delivery',
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy & Wellness',
      subtitle: '24/7 OTC medicines & healthcare supplies',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
      badge: 'Verified Chemists',
    },
    {
      id: 'marketing',
      title: 'Partner With Us',
      subtitle: 'Grow your merchant business with mRapid',
      image: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?w=600&auto=format&fit=crop&q=80',
      badge: '0% Commission',
    },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {options.map((item) => (
          <div
            key={item.id}
            onClick={() => onNavigate(item.id === 'marketing' ? 'marketing' : 'marketplace')}
            className="group relative rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5"
          >
            {/* Card Image */}
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#e23744] text-white text-[11px] font-extrabold shadow-md">
                {item.badge}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 text-left flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-gray-900 group-hover:text-[#e23744] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-red-50 text-gray-400 group-hover:text-[#e23744] transition-colors">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
