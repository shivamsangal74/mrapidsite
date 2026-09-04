import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Download, Menu, X, HelpCircle, Store, Layers, Sparkles, Smartphone } from 'lucide-react';

export default function Navbar({ onOpenDownloadModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isSupport = location.pathname === '/support';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'marketplace', label: 'Multi-Vendor Hub', icon: Store },
    { id: 'marketing', label: 'Partner & Marketing', icon: Layers },
    { id: 'support', label: 'Support & Help', icon: HelpCircle, route: '/support' },
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (item.route) {
      navigate(item.route);
      return;
    }
    // If on support page, go home first then scroll
    if (isSupport) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
      return;
    }
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-md py-3'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo & Brand */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="relative flex items-center justify-center p-1.5 rounded-2xl bg-white border border-gray-200 shadow-sm group-hover:border-[#e23744] transition-colors">
              <img
                src="/mrapid_Logo.png"
                alt="mRapid Logo"
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center space-x-1.5">
                <span className={`text-xl font-black tracking-tight ${scrolled ? 'text-gray-900' : 'text-white drop-shadow-md'}`}>
                  mRapid
                </span>
                <span className="h-2 w-2 rounded-full bg-[#e23744] animate-pulse" />
              </div>
              <span className={`text-[10px] tracking-wider font-extrabold uppercase ${scrolled ? 'text-[#e23744]' : 'text-red-400 drop-shadow-sm'}`}>
                Multi-Vendor Ordering
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-1 p-1.5 rounded-full border shadow-sm backdrop-blur-md transition-all ${scrolled
            ? 'bg-white/90 border-gray-200'
            : 'bg-black/40 border-white/20 text-white'
            }`}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.route
                ? location.pathname === item.route
                : !isSupport && false; // non-route items highlight via scroll, not state
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${isActive
                    ? 'bg-gradient-to-r from-[#e23744] to-[#cb202d] text-white shadow-md shadow-red-500/30'
                    : scrolled
                      ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Download App & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenDownloadModal}
              className="gradient-button hidden sm:flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-extrabold text-white shadow-lg shadow-red-500/25"
            >
              <Smartphone className="h-4 w-4" />
              <span>Get App</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden rounded-xl p-2.5 focus:outline-none ${scrolled
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-black/50 text-white border border-white/20'
                }`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 rounded-2xl bg-white border border-gray-200 p-4 shadow-2xl backdrop-blur-2xl animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.route ? location.pathname === item.route : false;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-bold transition-all ${isActive
                      ? 'bg-[#e23744] text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <div className="pt-2 border-t border-gray-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDownloadModal();
                  }}
                  className="w-full gradient-button flex items-center justify-center space-x-2 py-3 rounded-xl text-base font-bold text-white shadow-lg"
                >
                  <Download className="h-5 w-5" />
                  <span>Download mRapid App</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
