import React, { useState } from 'react';
import { X, Smartphone, QrCode, CheckCircle2, Apple, Play } from 'lucide-react';

export default function AppDownloadModal({ isOpen, onClose, initialPlatform = 'all' }) {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(initialPlatform);
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.mrapido.user&hl=en_IN";

  if (!isOpen) return null;

  const handleDownload = (platform) => {
    setSelectedPlatform(platform);
    setDownloadStarted(true);
    if (platform === 'android') {
      window.open(PLAY_STORE_URL, '_blank', 'noopener,noreferrer');
    }
    setTimeout(() => {
      setDownloadStarted(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md transition-all animate-fadeIn">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl md:p-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#e23744] to-[#cb202d] shadow-lg shadow-red-500/30">
            <Smartphone className="h-7 w-7 text-white" />
          </div>

          <h3 className="text-2xl font-black text-gray-900">Get the mRapid App</h3>
          <p className="mt-1 text-sm text-gray-600">
            Multi-Vendor, Multi-Choice – Your Perfect Ordering at your fingertips!
          </p>

          {downloadStarted && (
            <div className="my-4 rounded-2xl bg-red-50 border border-red-200 p-4 text-left flex items-start space-x-3 animate-pulse">
              <CheckCircle2 className="h-6 w-6 text-[#e23744] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Opening mRapid for {selectedPlatform === 'ios' ? 'iOS (App Store)' : 'Android (Play Store)'}...
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  If your download doesn't start automatically, scan the QR code below or check your mobile app store.
                </p>
              </div>
            </div>
          )}

          {/* QR Code Section */}
          <div className="my-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 flex flex-col items-center">
            <div className="relative p-3 bg-white rounded-xl shadow-inner border border-gray-200">
              <QrCode className="h-32 w-32 text-gray-900" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <span className="font-extrabold text-gray-900 text-lg">mRapid®</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-600 font-medium flex items-center">
              <span className="inline-block h-2 w-2 rounded-full bg-[#e23744] animate-ping mr-2" />
              Scan with your phone camera to download instantly
            </p>
          </div>

          {/* Download Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => handleDownload('ios')}
              className="flex items-center justify-center space-x-3 rounded-xl bg-gray-900 px-4 py-3 text-white hover:bg-gray-800 transition-all shadow-md group"
            >
              <Apple className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Download on the</div>
                <div className="text-sm font-extrabold leading-tight">App Store</div>
              </div>
            </button>

            <button
              onClick={() => handleDownload('android')}
              className="flex items-center justify-center space-x-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 hover:bg-red-50 transition-all shadow-md group"
            >
              <Play className="h-6 w-6 fill-current text-[#e23744] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">GET IT ON</div>
                <div className="text-sm font-extrabold leading-tight">Google Play</div>
              </div>
            </button>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4 text-xs text-gray-500">
            Supports iOS 14.0+ & Android 8.0+ • Free Download
          </div>
        </div>
      </div>
    </div>
  );
}
