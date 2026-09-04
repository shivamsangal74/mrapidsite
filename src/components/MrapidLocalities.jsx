import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

export default function ZomatoLocalities({ onNavigate }) {
  const localities = [
    { name: 'Connaught Place', places: '360 places' },
    { name: 'Sector 29, Gurgaon', places: '290 places' },
    { name: 'Hauz Khas Village', places: '210 places' },
    { name: 'Cyber Hub, Gurgaon', places: '190 places' },
    { name: 'Indiranagar, Bengaluru', places: '420 places' },
    { name: 'Koramangala, Bengaluru', places: '380 places' },
    { name: 'Bandra West, Mumbai', places: '310 places' },
    { name: 'Jubilee Hills, Hyderabad', places: '270 places' },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-8">
        Popular localities in and around <span className="font-extrabold text-[#e23744]">your city</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {localities.map((loc, idx) => (
          <div
            key={idx}
            onClick={() => onNavigate('marketplace')}
            className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center justify-between cursor-pointer group hover:border-[#e23744]"
          >
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#e23744] transition-colors">
                {loc.name}
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">{loc.places}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-[#e23744] transition-colors shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
