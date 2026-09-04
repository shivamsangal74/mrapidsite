import React, { useState } from 'react';
import { Store, Truck, TrendingUp, DollarSign, BarChart3, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function MarketingPartnerSection() {
  const [partnerType, setPartnerType] = useState('vendor');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    category: 'Restaurant / Dining',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="marketing" className="py-20 bg-gradient-to-b from-[#f8f8f8] via-red-50/40 to-[#f8f8f8] relative overflow-hidden border-t border-gray-200">

      {/* Background Glows */}
      <div className="pointer-events-none absolute left-0 top-1/3 w-80 h-80 bg-red-200/30 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute right-0 bottom-10 w-80 h-80 bg-rose-200/30 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#e23744] text-xs font-bold">
            <TrendingUp className="h-4 w-4" />
            <span>mRapid® Partner Network & Marketing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Grow Your Business With <span className="gradient-text">mRapid</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg">
            Join thousands of restaurants, supermarkets, and local merchants boosting their daily sales with our multi-vendor ordering engine.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl glass-card text-left space-y-3">
            <div className="p-3 rounded-2xl bg-red-100 text-[#e23744] w-fit border border-red-200">
              <DollarSign className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">0% Commission Promo</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Enjoy 0% commission fees on all online orders for your first 30 days. Retain 100% of your earnings while scaling your customer reach.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-card text-left space-y-3">
            <div className="p-3 rounded-2xl bg-rose-100 text-[#e23744] w-fit border border-rose-200">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Real-time Merchant Dashboard</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Track live orders, revenue analytics, inventory levels, and multi-choice item variations from any web or mobile device.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-card text-left space-y-3">
            <div className="p-3 rounded-2xl bg-red-100 text-[#e23744] w-fit border border-red-200">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Dedicated Express Logistics</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our automated fleet handles express pickups and door-to-door multi-vendor deliveries so you can focus entirely on craft & quality.
            </p>
          </div>
        </div>

        {/* Partner Sign-up Form & URL Section */}
        <div className="mt-16 rounded-3xl border border-gray-200 bg-white p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Info & URL Marketing Details */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#e23744] uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>Partner Portal & Marketing URL</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-snug">
                Ready to become an official mRapid Vendor or Delivery Fleet Partner?
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Fill out our quick partner application. Our merchant team will review your business details and get your online storefront active within 24 hours.
              </p>

              {/* Toggle Partner Type */}
              <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200">
                <button
                  onClick={() => setPartnerType('vendor')}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${partnerType === 'vendor'
                    ? 'bg-[#e23744] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  <Store className="h-4 w-4" />
                  <span>Register Store / Vendor</span>
                </button>

                <button
                  onClick={() => setPartnerType('driver')}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${partnerType === 'driver'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  <Truck className="h-4 w-4" />
                  <span>Join Delivery Fleet</span>
                </button>
              </div>

              <div className="space-y-3 pt-2 text-xs text-gray-600 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-[#e23744] shrink-0" />
                  <span>Instant POS & Tablet integration available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-[#e23744] shrink-0" />
                  <span>Automated weekly direct deposit payouts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-[#e23744] shrink-0" />
                  <span>Custom marketing campaigns & banner placement</span>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-gray-200 text-left shadow-xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-[#e23744] border border-red-300">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Application Received!</h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto">
                    Thank you for applying to join the mRapid Multi-Vendor network. Our partner onboarding specialist will reach out to <strong className="text-gray-900">{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white text-xs font-bold text-gray-700 hover:text-gray-900 border border-gray-300 shadow-sm"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3 flex items-center justify-between">
                    <span>{partnerType === 'vendor' ? 'Merchant Onboarding Form' : 'Rider / Driver Sign-Up'}</span>
                    <span className="text-[10px] text-[#e23744] uppercase font-extrabold">Fast Approval</span>
                  </h4>

                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1 block">
                      {partnerType === 'vendor' ? 'Business / Store Name' : 'Full Legal Name'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={partnerType === 'vendor' ? 'e.g. Bella Italia Bistro' : 'e.g. John Doe'}
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full rounded-xl bg-white border border-gray-300 p-3 text-xs text-gray-900 placeholder-gray-400 focus:border-[#e23744] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 mb-1 block">Contact Person</label>
                      <input
                        type="text"
                        required
                        placeholder="Owner or Manager"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full rounded-xl bg-white border border-gray-300 p-3 text-xs text-gray-900 placeholder-gray-400 focus:border-[#e23744] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 mb-1 block">Business Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full rounded-xl bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:border-[#e23744] focus:outline-none"
                      >
                        <option>Restaurant / Dining</option>
                        <option>Grocery & Supermarket</option>
                        <option>Pharmacy & Health</option>
                        <option>Electronics & Retail</option>
                        <option>Express Delivery Rider</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 mb-1 block">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="partner@business.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-white border border-gray-300 p-3 text-xs text-gray-900 placeholder-gray-400 focus:border-[#e23744] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 mb-1 block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl bg-white border border-gray-300 p-3 text-xs text-gray-900 placeholder-gray-400 focus:border-[#e23744] focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-button py-3.5 rounded-xl font-bold text-xs text-white shadow-xl flex items-center justify-center space-x-2 mt-4"
                  >
                    <span>Submit Partner Application</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
