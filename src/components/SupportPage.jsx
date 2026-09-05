import React, { useState } from 'react';
import { HelpCircle, MessageSquare, Phone, Mail, FileText, CheckCircle2, ChevronDown, ChevronUp, Copy, Check, Upload, Clock, ShieldCheck, Search } from 'lucide-react';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Order Issue / Delivery Delay',
    orderId: '',
    urgency: 'Medium',
    subject: '',
    message: '',
    attachment: null,
  });

  const [errors, setErrors] = useState({});
  const [ticketResult, setTicketResult] = useState(null);
  const [copiedTicket, setCopiedTicket] = useState(false);
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const inquiryCategories = [
    'Order Issue / Delivery Delay',
    'Item Quality or Missing Choice',
    'Refund & Payment Query',
    'Vendor Inquiry & Partnerships',
    'App Bug / Technical Support',
    'General Information',
  ];

  const faqs = [
    {
      q: 'How does mRapid Multi-Vendor & Multi-Choice ordering work?',
      a: 'mRapid allows you to place items from multiple restaurants, grocery stores, or pharmacies into a single unified shopping cart. You can customize multi-choice options for each item (such as crust type, toppings, or size preferences) and checkout in one seamless transaction.',
    },
    {
      q: 'How are delivery fees calculated when ordering from multiple stores?',
      a: 'We automatically optimize route dispatches across neighboring vendors. Bundled orders receive significant delivery discounts compared to placing separate individual orders.',
    },
    {
      q: 'What should I do if an item in my order is delayed or missing choices?',
      a: 'You can fill out the Support Form on this page or use the live in-app chat. Simply provide your Order ID (e.g., #MRP-12345), and our 24/7 dedicated resolution team will issue an instant replacement or refund.',
    },
    {
      q: 'How quickly does the customer support team respond to support tickets?',
      a: 'Our priority support desk responds to urgent order tickets within 10 to 15 minutes. General inquiries are resolved within 2 to 4 hours.',
    },
    {
      q: 'Where can I download the official mRapid mobile app for iOS and Android?',
      a: 'You can download mRapid directly from the Apple App Store or Google Play Store using the download buttons or by scanning the QR code in our header and download sections.',
    },
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.subject.trim()) errs.subject = 'Subject line is required';
    if (!formData.message.trim() || formData.message.length < 10) errs.message = 'Please provide details (at least 10 characters)';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const generatedTicketId = 'MRP-' + Math.floor(100000 + Math.random() * 900000);
    setTicketResult({
      ticketId: generatedTicketId,
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      ...formData,
    });
  };

  const handleCopyTicket = () => {
    if (!ticketResult) return;
    navigator.clipboard.writeText(ticketResult.ticketId);
    setCopiedTicket(true);
    setTimeout(() => setCopiedTicket(false), 2500);
  };

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <section id="support" className="pt-28 pb-20 bg-[#f8f8f8] relative overflow-hidden">
      {/* Background Lights */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-full max-w-7xl h-96 bg-red-100/50 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#e23744] text-xs font-bold">
            <HelpCircle className="h-4 w-4" />
            <span>24/7 Dedicated Customer Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            How Can We <span className="gradient-text">Help You Today?</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg">
            Have questions about your multi-vendor order, app features, or vendor partnerships? Submit a support request below or search our help center.
          </p>
        </div>

        {/* Top Quick Contact Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl glass-card text-left space-y-2 border border-gray-200">
            <div className="p-3 rounded-2xl bg-red-100 text-[#e23744] w-fit border border-red-200">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900">Live In-App Chat</h4>
            <p className="text-xs text-gray-500">Available 24/7 on iOS & Android apps with instant agent routing.</p>
            <span className="inline-block text-xs font-bold text-[#e23744] pt-1">Response time: &lt; 2 mins</span>
          </div>

          <div className="p-6 rounded-3xl glass-card text-left space-y-2 border border-gray-200">
            <div className="p-3 rounded-2xl bg-rose-100 text-[#e23744] w-fit border border-rose-200">
              <Mail className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900">Email Support Desk</h4>
            <p className="text-xs text-gray-500">Direct inquiries to support@mrapid.com or submit the form below.</p>
            <span className="inline-block text-xs font-bold text-[#e23744] pt-1">Response time: &lt; 15 mins</span>
          </div>

          <div className="p-6 rounded-3xl glass-card text-left space-y-2 border border-gray-200">
            <div className="p-3 rounded-2xl bg-red-100 text-[#e23744] w-fit border border-red-200">
              <Phone className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900">Toll-Free Helpline</h4>
            <p className="text-xs text-gray-500">Speak directly with an mRapid order specialist anytime.</p>
            <span className="inline-block text-xs font-bold text-[#e23744] pt-1">+91 96341 26086</span>
          </div>
        </div>

        {/* Main Grid: Form vs FAQ */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Support Ticket Submission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-gray-200 shadow-2xl text-left">
              
              <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-black text-gray-900">Submit a Support Request</h3>
                  <p className="text-xs text-gray-500 mt-1">Fill out the details below to generate a priority support ticket.</p>
                </div>
                <div className="p-3 rounded-2xl bg-red-100 text-[#e23744] border border-red-200 hidden sm:block">
                  <FileText className="h-6 w-6" />
                </div>
              </div>

              {ticketResult ? (
                <div className="py-8 space-y-6 animate-fadeIn">
                  <div className="p-6 rounded-3xl bg-red-50 border border-red-200 text-left space-y-4">
                    <div className="flex items-center space-x-3 text-[#e23744]">
                      <CheckCircle2 className="h-8 w-8" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Support Ticket Created Successfully!</h4>
                        <p className="text-xs text-gray-600">Submitted at {ticketResult.submittedAt}</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-gray-200 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Ticket Reference Number</div>
                        <div className="text-2xl font-black text-[#e23744] font-mono mt-0.5">{ticketResult.ticketId}</div>
                      </div>
                      <button
                        onClick={handleCopyTicket}
                        className="px-4 py-2 rounded-xl bg-gray-100 text-xs font-bold text-gray-700 hover:text-gray-900 flex items-center space-x-1 border border-gray-300"
                      >
                        {copiedTicket ? (
                          <>
                            <Check className="h-4 w-4 text-[#e23744]" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            <span>Copy Reference</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="space-y-2 text-xs text-gray-700 border-t border-red-200 pt-4 font-medium">
                      <div><strong className="text-gray-900">Name:</strong> {ticketResult.name} ({ticketResult.email})</div>
                      <div><strong className="text-gray-900">Category:</strong> {ticketResult.inquiryType}</div>
                      {ticketResult.orderId && <div><strong className="text-gray-900">Order Reference:</strong> {ticketResult.orderId}</div>}
                      <div><strong className="text-gray-900">Priority Level:</strong> <span className="px-2 py-0.5 rounded bg-red-200 text-[#e23744] font-bold">{ticketResult.urgency}</span></div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-red-200 text-xs text-red-900 flex items-center space-x-2 font-medium">
                      <Clock className="h-4 w-4 text-[#e23744] shrink-0" />
                      <span>An mRapid support agent has been assigned to your ticket. Expect an email update within 15 minutes.</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setTicketResult(null)}
                    className="w-full py-3.5 rounded-xl bg-white border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-sm"
                  >
                    Submit Another Ticket
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-800 mb-1 block">Your Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full rounded-xl bg-white border p-3 text-xs text-gray-900 placeholder-gray-400 focus:outline-none ${
                          errors.name ? 'border-rose-500' : 'border-gray-300 focus:border-[#e23744]'
                        }`}
                        placeholder="e.g. Alex Morgan"
                      />
                      {errors.name && <span className="text-[10px] text-rose-500 mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-800 mb-1 block">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full rounded-xl bg-white border p-3 text-xs text-gray-900 placeholder-gray-400 focus:outline-none ${
                          errors.email ? 'border-rose-500' : 'border-gray-300 focus:border-[#e23744]'
                        }`}
                        placeholder="alex@example.com"
                      />
                      {errors.email && <span className="text-[10px] text-rose-500 mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-800 mb-1 block">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl bg-white border border-gray-300 p-3 text-xs text-gray-900 placeholder-gray-400 focus:border-[#e23744] focus:outline-none"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-800 mb-1 block">Inquiry Type</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full rounded-xl bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:border-[#e23744] focus:outline-none"
                      >
                        {inquiryCategories.map((cat) => (
                          <option key={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-800 mb-1 block">Urgency Level</label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full rounded-xl bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:border-[#e23744] focus:outline-none"
                      >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High / Order in Transit</option>
                        <option>Urgent Resolution</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-800 mb-1 block">Order or Vendor ID (Optional)</label>
                      <input
                        type="text"
                        value={formData.orderId}
                        onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                        className="w-full rounded-xl bg-white border border-gray-300 p-3 text-xs text-gray-900 placeholder-gray-400 focus:border-[#e23744] focus:outline-none"
                        placeholder="e.g. #MRP-8942"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-800 mb-1 block">Subject Line *</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full rounded-xl bg-white border p-3 text-xs text-gray-900 placeholder-gray-400 focus:outline-none ${
                          errors.subject ? 'border-rose-500' : 'border-gray-300 focus:border-[#e23744]'
                        }`}
                        placeholder="Brief summary of your issue"
                      />
                      {errors.subject && <span className="text-[10px] text-rose-500 mt-1 block">{errors.subject}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-800 mb-1 block">Detailed Message *</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full rounded-xl bg-white border p-3 text-xs text-gray-900 placeholder-gray-400 focus:outline-none ${
                        errors.message ? 'border-rose-500' : 'border-gray-300 focus:border-[#e23744]'
                      }`}
                      placeholder="Please describe your issue, store details, or multi-choice items involved..."
                    />
                    {errors.message && <span className="text-[10px] text-rose-500 mt-1 block">{errors.message}</span>}
                  </div>

                  {/* Optional File Upload simulation */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-dashed border-gray-300 flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Upload className="h-4 w-4 text-[#e23744]" />
                      <span>Attach receipt or screenshot (PNG, JPG up to 5MB)</span>
                    </div>
                    <label className="px-3 py-1 rounded-lg bg-white text-[#e23744] hover:text-red-700 cursor-pointer font-bold text-[11px] border border-gray-300 shadow-sm">
                      Browse File
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => setFormData({ ...formData, attachment: e.target.files[0]?.name || null })}
                      />
                    </label>
                  </div>
                  {formData.attachment && (
                    <div className="text-[11px] text-[#e23744] font-bold">Attached: {formData.attachment}</div>
                  )}

                  <button
                    type="submit"
                    className="w-full gradient-button py-3.5 rounded-xl font-bold text-sm text-white shadow-xl flex items-center justify-center space-x-2"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Generate Support Ticket</span>
                  </button>

                </form>
              )}

            </div>
          </div>

          {/* Searchable FAQ Accordion */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-gray-200 shadow-2xl space-y-6">
              
              <div>
                <h3 className="text-xl font-extrabold text-gray-900">Frequently Asked Questions</h3>
                <p className="text-xs text-gray-500 mt-1">Quick solutions to common queries.</p>
              </div>

              {/* FAQ Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder="Search FAQ keywords..."
                  className="w-full rounded-xl bg-white border border-gray-300 pl-9 pr-3 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:border-[#e23744] focus:outline-none"
                />
              </div>

              {/* FAQ List */}
              <div className="space-y-3">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl bg-white border border-gray-200 overflow-hidden transition-all shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                        className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-gray-900 hover:text-[#e23744]"
                      >
                        <span className="pr-2">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4 text-[#e23744] shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-2">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}

                {filteredFaqs.length === 0 && (
                  <p className="text-xs text-gray-500 text-center py-4">No matching questions found.</p>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-2 text-xs">
                <div className="font-bold text-gray-900 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-[#e23744]" />
                  <span>Order Guarantee</span>
                </div>
                <p className="text-gray-600 leading-normal">
                  All multi-vendor purchases are covered by mRapid's 100% Quality & Timely Delivery Guarantee.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
