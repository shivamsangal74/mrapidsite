import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MrapidHero from './components/MrapidHero';
import MrapidOptionCards from './components/MrapidOptionCards';
import MrapidCollections from './components/MrapidCollections';
import AppDownloadSection from './components/AppDownloadSection';
import MultiVendorShowcase from './components/MultiVendorShowcase';
import MarketingPartnerSection from './components/MarketingPartnerSection';
import SupportPage from './components/SupportPage';
import Footer from './components/Footer';
import AppDownloadModal from './components/AppDownloadModal';
import BackgroundCanvas from './components/BackgroundCanvas';

// ─── Home Page ───────────────────────────────────────────────────────────────
function HomePage({ onOpenDownloadModal }) {
  const handleNavigate = (tabId) => {
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f8f8f8] text-gray-900 font-sans overflow-hidden">
      <BackgroundCanvas />

      <Navbar onOpenDownloadModal={() => onOpenDownloadModal('all')} />

      <main className="relative z-10">
        <MrapidHero
          onNavigate={handleNavigate}
          onOpenDownloadModal={onOpenDownloadModal}
        />
        <MrapidOptionCards onNavigate={handleNavigate} />
        <MrapidCollections onNavigate={handleNavigate} />
        <AppDownloadSection onOpenDownloadModal={onOpenDownloadModal} />
        <MultiVendorShowcase onOpenDownloadModal={onOpenDownloadModal} />
        <MarketingPartnerSection />
      </main>

      <Footer
        onOpenDownloadModal={onOpenDownloadModal}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

// ─── Support Page ─────────────────────────────────────────────────────────────
function SupportPageWrapper({ onOpenDownloadModal }) {
  return (
    <div className="relative min-h-screen bg-[#f8f8f8] text-gray-900 font-sans">
      <Navbar onOpenDownloadModal={() => onOpenDownloadModal('all')} />
      <main>
        <SupportPage />
      </main>
      <Footer
        onOpenDownloadModal={onOpenDownloadModal}
        onNavigate={() => {}}
      />
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [downloadPlatform, setDownloadPlatform] = useState('all');

  const handleOpenDownloadModal = (platform = 'all') => {
    setDownloadPlatform(platform);
    setIsDownloadModalOpen(true);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage onOpenDownloadModal={handleOpenDownloadModal} />}
        />
        <Route
          path="/support"
          element={<SupportPageWrapper onOpenDownloadModal={handleOpenDownloadModal} />}
        />
      </Routes>

      <AppDownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        initialPlatform={downloadPlatform}
      />
    </>
  );
}
