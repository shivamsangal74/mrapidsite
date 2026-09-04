import React, { useEffect, useState } from 'react';
import { Pizza, Utensils, Coffee, Apple, ShoppingBag, Pill, Stethoscope, Activity, Package, Carrot, Cross, Shirt } from 'lucide-react';

export default function BackgroundCanvas() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = [
    // Food & Dining
    { icon: Pizza, top: '12%', left: '7%', size: 44, rotate: '-12deg', delay: '0s', duration: '14s' },
    { icon: Utensils, top: '28%', left: '88%', size: 40, rotate: '15deg', delay: '2s', duration: '16s' },
    { icon: Coffee, top: '55%', left: '5%', size: 38, rotate: '-8deg', delay: '4s', duration: '12s' },
    
    // Grocery & Fresh Produce
    { icon: Apple, top: '18%', left: '83%', size: 46, rotate: '20deg', delay: '1s', duration: '15s' },
    { icon: ShoppingBag, top: '42%', left: '92%', size: 42, rotate: '-15deg', delay: '3s', duration: '13s' },
    { icon: Carrot, top: '68%', left: '86%', size: 40, rotate: '10deg', delay: '5s', duration: '17s' },

    // Medicine & Pharmacy
    { icon: Pill, top: '35%', left: '8%', size: 46, rotate: '30deg', delay: '1.5s', duration: '14s' },
    { icon: Stethoscope, top: '75%', left: '10%', size: 44, rotate: '-25deg', delay: '2.5s', duration: '18s' },
    { icon: Activity, top: '82%', left: '80%', size: 40, rotate: '12deg', delay: '4.5s', duration: '15s' },
    { icon: Cross, top: '48%', left: '14%', size: 34, rotate: '5deg', delay: '3.5s', duration: '16s' },

    // Tech & Retail
    { icon: Package, top: '62%', left: '90%', size: 42, rotate: '-20deg', delay: '2s', duration: '13s' },
    { icon: Shirt, top: '88%', left: '22%', size: 38, rotate: '18deg', delay: '1s', duration: '17s' },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#f8f8f8]">
      
      {/* Dynamic Mouse Cursor Ambient Light */}
      <div
        className="absolute h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[120px] transition-all duration-700 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
        }}
      />

      {/* Floating Zomato Red/Rose Light Aurora Glows */}
      <div className="absolute top-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-red-200/40 via-rose-100/30 to-transparent blur-[140px] animate-pulse duration-[8000ms]" />
      <div className="absolute top-[35%] -right-[10%] h-[700px] w-[700px] rounded-full bg-gradient-to-br from-rose-200/35 via-red-100/40 to-transparent blur-[150px] animate-float duration-[12000ms]" />
      <div className="absolute bottom-[10%] -left-[10%] h-[650px] w-[650px] rounded-full bg-gradient-to-tr from-red-100/50 via-rose-200/30 to-transparent blur-[130px] animate-pulse duration-[10000ms]" />

      {/* Subtle Light Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e23744_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06]" />

      {/* Floating Food, Grocery, Medicine & Retail Icons */}
      {floatingIcons.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <div
            key={idx}
            className="absolute text-[#e23744]/30 transition-all animate-float"
            style={{
              top: item.top,
              left: item.left,
              transform: `rotate(${item.rotate})`,
              animationDelay: item.delay,
              animationDuration: item.duration,
              filter: 'drop-shadow(0 4px 12px rgba(226, 55, 68, 0.12))',
            }}
          >
            <div className="p-3.5 rounded-2xl bg-white/80 border border-red-100 backdrop-blur-md shadow-sm">
              <IconComponent size={item.size} strokeWidth={1.75} />
            </div>
          </div>
        );
      })}

    </div>
  );
}
