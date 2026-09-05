import React, { useState } from 'react';
import { Shield, ChevronDown, ChevronUp, Lock, Eye, Database, Bell, Trash2, Globe, Mail, Phone } from 'lucide-react';

const sections = [
  {
    id: 'information-collected',
    icon: Database,
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Account & Identity Information',
        text: 'When you register for mRapid, we collect your full name, email address, phone number, profile photo (optional), and date of birth for age-verification on restricted items. This data is used exclusively to manage your account and personalize your ordering experience.',
      },
      {
        subtitle: 'Order & Transaction Data',
        text: 'Every order placed through mRapid — including the vendor selected, items chosen, multi-choice customizations, delivery address, order timestamps, and payment method (last 4 digits only) — is securely stored to facilitate order tracking, refunds, and support resolution.',
      },
      {
        subtitle: 'Location Data',
        text: 'With your permission, mRapid accesses your real-time GPS location to calculate delivery distances, match you with nearby vendor partners, and provide accurate ETAs. You may disable location access at any time via your device settings, though this may affect service availability.',
      },
      {
        subtitle: 'Device & Usage Data',
        text: 'We automatically collect device identifiers (device model, OS version, app version), IP address, browser type, and in-app behavior (screens visited, taps, session duration) to improve app performance and detect fraudulent activity.',
      },
    ],
  },
  {
    id: 'use-of-information',
    icon: Eye,
    title: '2. How We Use Your Information',
    content: [
      {
        subtitle: 'Order Fulfillment & Logistics',
        text: 'Your personal details, delivery address, and order contents are shared with the relevant merchant partner(s) and assigned delivery fleet agent exclusively to fulfill your order. Once delivery is confirmed, this sharing is automatically terminated.',
      },
      {
        subtitle: 'Customer Support',
        text: 'When you raise a support ticket, our agents access your order history and account details to diagnose and resolve your issue efficiently. All support sessions are logged and subject to our data retention policy.',
      },
      {
        subtitle: 'App Improvement & Analytics',
        text: 'Aggregated, anonymized usage data is analyzed to identify feature gaps, optimize delivery routing algorithms, and improve multi-vendor cart performance. This data cannot be traced back to any individual user.',
      },
      {
        subtitle: 'Promotional Communications',
        text: 'With your explicit consent, we may send you personalized offers, new vendor launches, and loyalty program updates via push notification, SMS, or email. You can opt out at any time through app settings or by clicking "Unsubscribe" in any email.',
      },
    ],
  },
  {
    id: 'data-sharing',
    icon: Globe,
    title: '3. Data Sharing & Third Parties',
    content: [
      {
        subtitle: 'Merchant Partners',
        text: 'Vendor partners receive only the information necessary to prepare your order: your first name, delivery address, item list, and customizations. Vendors are contractually prohibited from using this data for any purpose other than order fulfillment.',
      },
      {
        subtitle: 'Payment Processors',
        text: 'All payment transactions are processed by PCI-DSS Level 1 certified payment gateways (Stripe, Razorpay). mRapid never stores full card numbers. Payment processors receive only the minimum data required to complete transactions.',
      },
      {
        subtitle: 'No Third-Party Advertising Sales',
        text: 'mRapid strictly does not sell, rent, or trade your personal data to third-party advertisers, data brokers, or marketing agencies. Your data is your own, and we are committed to keeping it that way.',
      },
      {
        subtitle: 'Legal Compliance',
        text: 'We may disclose your information if legally required to do so by a valid court order, governmental authority, or to protect the rights, property, or safety of mRapid, its users, or the public.',
      },
    ],
  },
  {
    id: 'data-security',
    icon: Lock,
    title: '4. Data Security',
    content: [
      {
        subtitle: 'Encryption Standards',
        text: 'All data transmitted between the mRapid app, our servers, and third-party services is encrypted using industry-standard TLS 1.3 protocols. User passwords are hashed using bcrypt with per-user salts and are never stored in plain text.',
      },
      {
        subtitle: 'Access Controls',
        text: 'Access to user data within mRapid systems is strictly role-based. Only authorized personnel with a legitimate business need can access identifiable data, and all such access is logged and audited quarterly.',
      },
      {
        subtitle: 'Breach Response',
        text: 'In the unlikely event of a data breach affecting your personal information, mRapid will notify you within 72 hours via your registered email address with a detailed disclosure of what was affected and the steps we are taking to remediate.',
      },
    ],
  },
  {
    id: 'your-rights',
    icon: Shield,
    title: '5. Your Rights & Choices',
    content: [
      {
        subtitle: 'Right to Access',
        text: 'You have the right to request a complete export of all personal data mRapid holds about you. Submit a data access request via the mRapid app under Settings → Privacy → Request My Data. We will respond within 30 days.',
      },
      {
        subtitle: 'Right to Deletion',
        text: 'You may request permanent deletion of your account and all associated personal data. Note that some data may be retained for up to 90 days for fraud prevention and legal compliance. Deletion requests can be submitted at support@mrapid.com.',
      },
      {
        subtitle: 'Right to Correction',
        text: 'If any of your personal information is incorrect or out-of-date, you can update it directly within the mRapid app (Profile → Edit) or by contacting our support team.',
      },
      {
        subtitle: 'Communication Preferences',
        text: 'You retain full control over marketing communications. Opt out of promotional emails, push notifications, and SMS alerts independently via app settings or by emailing privacy@mrapid.com.',
      },
    ],
  },
  {
    id: 'data-retention',
    icon: Trash2,
    title: '6. Data Retention',
    content: [
      {
        subtitle: 'Active Account Data',
        text: 'Data associated with your active account is retained for the lifetime of your account plus 90 days after account deletion to handle any outstanding disputes or chargebacks.',
      },
      {
        subtitle: 'Transaction Records',
        text: 'Order and payment records are retained for 7 years in compliance with financial regulatory requirements under applicable tax and accounting laws.',
      },
      {
        subtitle: 'Support Ticket Logs',
        text: 'Support communications are retained for 2 years to improve service quality and to reference in the event of recurring issues.',
      },
    ],
  },
  {
    id: 'notifications',
    icon: Bell,
    title: '7. Cookies & Tracking Technologies',
    content: [
      {
        subtitle: 'Essential Cookies',
        text: 'We use strictly necessary cookies to maintain your login session, remember your cart contents, and protect against cross-site request forgery (CSRF). These cookies cannot be disabled without breaking core functionality.',
      },
      {
        subtitle: 'Analytics Cookies',
        text: 'With your consent, we use analytics cookies (via tools like Google Analytics 4 in anonymized mode) to understand how users navigate the mRapid web platform. You can revoke consent at any time through our cookie preference center.',
      },
      {
        subtitle: 'Cookie Management',
        text: 'You can manage, block, or delete cookies at any time through your browser settings. Be aware that blocking all cookies may impact your ability to use certain features of the mRapid web platform.',
      },
    ],
  },
];

function AccordionSection({ section, isOpen, onToggle }) {
  const Icon = section.icon;
  return (
    <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm transition-all hover:shadow-md">
      <button
        onClick={onToggle}
        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
      >
        <div className="flex items-center gap-4">
          <div className={`p-2.5 rounded-xl border transition-colors ${isOpen ? 'bg-red-50 border-red-200 text-[#e23744]' : 'bg-gray-100 border-gray-200 text-gray-500 group-hover:bg-red-50 group-hover:border-red-200 group-hover:text-[#e23744]'}`}>
            <Icon className="h-5 w-5" />
          </div>
          <span className={`font-bold text-sm sm:text-base transition-colors ${isOpen ? 'text-[#e23744]' : 'text-gray-900 group-hover:text-[#e23744]'}`}>
            {section.title}
          </span>
        </div>
        {isOpen
          ? <ChevronUp className="h-5 w-5 text-[#e23744] shrink-0" />
          : <ChevronDown className="h-5 w-5 text-gray-400 shrink-0 group-hover:text-[#e23744]" />
        }
      </button>

      {isOpen && (
        <div className="px-5 sm:px-6 pb-6 space-y-5 border-t border-gray-100">
          {section.content.map((item, i) => (
            <div key={i} className="pt-4">
              <h4 className="text-sm font-bold text-gray-900 mb-1.5">{item.subtitle}</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const [openSection, setOpenSection] = useState(0);

  return (
    <section className="pt-28 pb-20 bg-[#f8f8f8] relative overflow-hidden min-h-screen">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-full max-w-5xl h-80 bg-red-100/40 blur-3xl rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#e23744] text-xs font-bold">
            <Shield className="h-4 w-4" />
            <span>Last Updated: September 1, 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Privacy <span className="gradient-text">Policy</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            mRapid is committed to protecting your personal information. This policy explains what data we collect,
            how we use it, and the rights you have over your information.
          </p>
        </div>

        {/* Highlight banner */}
        <div className="mb-8 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 rounded-xl bg-red-100 border border-red-200 text-[#e23744] shrink-0">
            <Lock className="h-6 w-6" />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm">Your privacy is our priority.</p>
            <p className="text-xs text-gray-500 mt-0.5">
              mRapid never sells your personal data to advertisers. All information collected is used solely to improve your ordering experience and ensure safe, timely multi-vendor deliveries.
            </p>
          </div>
        </div>

        {/* Accordion sections */}
        <div className="space-y-3">
          {sections.map((section, index) => (
            <AccordionSection
              key={section.id}
              section={section}
              isOpen={openSection === index}
              onToggle={() => setOpenSection(openSection === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Contact block */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm text-center space-y-4">
          <h3 className="text-xl font-black text-gray-900">Questions About Your Privacy?</h3>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            Our dedicated privacy team is here to help. Reach out to us directly for any data-related inquiries,
            deletion requests, or compliance questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href="mailto:privacy@mrapid.com" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 border border-gray-200 text-gray-900 hover:bg-red-50 hover:border-red-200 hover:text-[#e23744] transition-colors text-sm font-bold">
              <Mail className="h-4 w-4" />
              privacy@mrapid.com
            </a>
            <a href="tel:+919634126086" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 border border-gray-200 text-gray-900 hover:bg-red-50 hover:border-red-200 hover:text-[#e23744] transition-colors text-sm font-bold">
              <Phone className="h-4 w-4" />
              +91 96341 26086
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
