import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronUp, ShoppingCart, Truck, CreditCard, AlertTriangle, Scale, Ban, RefreshCw, Users, Mail, Phone } from 'lucide-react';

const sections = [
  {
    id: 'acceptance',
    icon: FileText,
    title: '1. Acceptance of Terms',
    content: [
      {
        subtitle: 'Agreement to Terms',
        text: 'By downloading, installing, or using the mRapid mobile application or accessing mRapid\'s web platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to any part of these terms, you must not use our services.',
      },
      {
        subtitle: 'Eligibility',
        text: 'You must be at least 18 years of age to create an mRapid account and place orders. By using mRapid, you represent and warrant that you meet this age requirement. For orders involving age-restricted items (e.g., alcohol), additional age verification may be required at delivery.',
      },
      {
        subtitle: 'Modifications to Terms',
        text: 'mRapid reserves the right to update or modify these Terms of Service at any time. We will notify you of significant changes via push notification, email, or an in-app banner. Your continued use of the platform following any update constitutes your acceptance of the revised terms. The "Last Updated" date at the top of this page reflects the most recent revision.',
      },
    ],
  },
  {
    id: 'ordering',
    icon: ShoppingCart,
    title: '2. Multi-Vendor Ordering',
    content: [
      {
        subtitle: 'Order Placement & Confirmation',
        text: 'When you place an order through mRapid, you are entering into a direct purchase agreement with the respective merchant partner(s). mRapid facilitates this transaction as an intermediary platform. An order is considered confirmed only when you receive a confirmation notification with an assigned order reference number (e.g., #MRP-XXXXX).',
      },
      {
        subtitle: 'Multi-Choice Item Customizations',
        text: 'mRapid allows you to customize items with multi-choice options (size, toppings, preparation instructions, etc.). These customizations are transmitted directly to the merchant. While we relay your preferences accurately, mRapid cannot be held responsible if a merchant is unable to fulfill a specific customization due to stock or operational constraints.',
      },
      {
        subtitle: 'Order Accuracy',
        text: 'You are responsible for reviewing your cart, selected items, quantities, delivery address, and customizations before confirming your order. Once an order is confirmed and a merchant has begun preparation, modifications may not be possible. Contact support immediately if you identify an error.',
      },
      {
        subtitle: 'Merchant Availability',
        text: 'Vendor availability, menu items, pricing, and hours of operation are determined solely by the merchant partner. mRapid displays real-time information provided by merchants but is not responsible for discrepancies between listed and actual item availability.',
      },
    ],
  },
  {
    id: 'delivery',
    icon: Truck,
    title: '3. Delivery & Logistics',
    content: [
      {
        subtitle: 'Delivery Estimates',
        text: 'Estimated delivery times displayed in the mRapid app are algorithmic projections based on restaurant preparation time, route optimization, and current traffic conditions. These are estimates and not guarantees. Factors outside mRapid\'s control (severe weather, road closures, etc.) may affect delivery times.',
      },
      {
        subtitle: 'Multi-Vendor Route Optimization',
        text: 'For orders containing items from multiple vendors, mRapid\'s logistics engine optimizes dispatch routes to minimize wait time. In some cases, items from different vendors may arrive together or in separate batches. You will be notified in real-time of each pickup and delivery milestone.',
      },
      {
        subtitle: 'Delivery Address Responsibility',
        text: 'You are responsible for providing a complete and accurate delivery address, including any applicable apartment/unit numbers, gate codes, or access instructions. mRapid and its delivery partners are not liable for failed deliveries caused by incorrect or incomplete address information provided by the customer.',
      },
      {
        subtitle: 'Contactless Delivery',
        text: 'mRapid offers a contactless delivery option where your order is left at your door with a photo confirmation. By enabling this feature, you accept responsibility for retrieving your order promptly. mRapid is not liable for theft or damage to contactlessly delivered orders once a photo confirmation has been logged.',
      },
    ],
  },
  {
    id: 'payments',
    icon: CreditCard,
    title: '4. Payments & Pricing',
    content: [
      {
        subtitle: 'Payment Methods',
        text: 'mRapid accepts major credit and debit cards (Visa, Mastercard, American Express), UPI, net banking, and the mRapid Wallet. All payments are processed through PCI-DSS compliant payment gateways. By saving a payment method, you authorize mRapid to charge that method for future orders until you remove it.',
      },
      {
        subtitle: 'Pricing Accuracy',
        text: 'Item prices, delivery fees, and applicable taxes displayed at checkout are current at the time of browsing and may change without notice due to merchant pricing updates. The final price confirmed at checkout is the price you will be charged.',
      },
      {
        subtitle: 'Delivery Fees',
        text: 'Delivery fees are calculated dynamically based on distance, order value, demand, and applicable promotions. Multi-vendor bundled orders may receive consolidated delivery fee discounts versus placing separate single-vendor orders.',
      },
      {
        subtitle: 'Taxes & Surcharges',
        text: 'All applicable local, state, and federal taxes are included in the displayed price breakdown at checkout. mRapid remits merchant taxes on behalf of applicable vendor partners in accordance with jurisdictional requirements.',
      },
    ],
  },
  {
    id: 'refunds',
    icon: RefreshCw,
    title: '5. Cancellations & Refunds',
    content: [
      {
        subtitle: 'Cancellation Window',
        text: 'Orders may be cancelled without charge within 2 minutes of placement, provided the merchant has not yet accepted or begun preparing the order. Once a merchant confirms your order, cancellations will be evaluated on a case-by-case basis and may incur a partial cancellation fee.',
      },
      {
        subtitle: 'Refund Eligibility',
        text: 'Refunds are issued for: (a) orders cancelled before merchant preparation; (b) undelivered orders where delivery failure is attributable to mRapid or the delivery partner; (c) significantly incorrect or missing items as confirmed by our support team. Refunds are NOT issued for change-of-mind cancellations after preparation has begun.',
      },
      {
        subtitle: 'Refund Processing',
        text: 'Approved refunds are processed within 3–7 business days to your original payment method, or instantly to your mRapid Wallet if you choose that option. Processing times may vary depending on your bank or card issuer.',
      },
      {
        subtitle: 'Dispute Resolution',
        text: 'If you believe your refund request was incorrectly denied, you may escalate the dispute through in-app support or by emailing support@mrapid.com with your order reference number, a description of the issue, and any supporting evidence (photos, screenshots).',
      },
    ],
  },
  {
    id: 'prohibited',
    icon: Ban,
    title: '6. Prohibited Activities',
    content: [
      {
        subtitle: 'Account Misuse',
        text: 'You may not create multiple accounts to abuse promotional codes, referral programs, or loyalty rewards. Accounts found engaging in such activity will be permanently suspended and any outstanding wallet balance may be forfeited.',
      },
      {
        subtitle: 'Fraudulent Orders',
        text: 'Placing orders with no intent to accept delivery, submitting false refund or chargeback claims, or providing fraudulent payment information is strictly prohibited and may result in immediate account termination, legal action, and reporting to relevant financial authorities.',
      },
      {
        subtitle: 'Platform Interference',
        text: 'You may not attempt to reverse-engineer, decompile, scrape, or interfere with the mRapid platform, APIs, or infrastructure. Automated access to the platform without express written permission from mRapid is strictly prohibited.',
      },
      {
        subtitle: 'Harassment',
        text: 'Any form of harassment, abuse, or threatening behavior directed toward mRapid employees, support agents, delivery partners, or merchant staff is grounds for immediate and permanent account suspension.',
      },
    ],
  },
  {
    id: 'liability',
    icon: Scale,
    title: '7. Limitation of Liability',
    content: [
      {
        subtitle: 'Platform as Intermediary',
        text: 'mRapid is a technology platform that connects customers with independent merchant partners and delivery agents. mRapid is not the producer, manufacturer, or direct seller of any items ordered through the platform. Merchant partners are independently responsible for the quality, safety, and accuracy of their products.',
      },
      {
        subtitle: 'Liability Cap',
        text: 'To the maximum extent permitted by applicable law, mRapid\'s total liability to you for any claim arising from your use of the platform shall not exceed the amount you paid for the specific order giving rise to the claim in the 30 days preceding the incident.',
      },
      {
        subtitle: 'Force Majeure',
        text: 'mRapid shall not be liable for any failure or delay in performance of its obligations caused by circumstances beyond its reasonable control, including acts of God, natural disasters, pandemics, governmental actions, strikes, internet outages, or third-party service failures.',
      },
    ],
  },
  {
    id: 'user-accounts',
    icon: Users,
    title: '8. User Accounts & Termination',
    content: [
      {
        subtitle: 'Account Security',
        text: 'You are responsible for maintaining the confidentiality of your account credentials. mRapid strongly recommends enabling two-factor authentication. You must notify mRapid immediately at support@mrapid.com if you suspect unauthorized access to your account.',
      },
      {
        subtitle: 'Account Termination by User',
        text: 'You may deactivate and delete your mRapid account at any time through app settings. Account deletion is permanent and irreversible. Any outstanding mRapid Wallet balance at the time of deletion will be forfeited unless a withdrawal request is submitted prior to deletion.',
      },
      {
        subtitle: 'Termination by mRapid',
        text: 'mRapid reserves the right to suspend or permanently terminate any account, with or without notice, for violations of these Terms of Service, fraudulent activity, or behavior detrimental to the mRapid community or platform integrity.',
      },
    ],
  },
  {
    id: 'governing-law',
    icon: AlertTriangle,
    title: '9. Governing Law & Disputes',
    content: [
      {
        subtitle: 'Governing Law',
        text: 'These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which mRapid is incorporated, without regard to its conflict of law provisions.',
      },
      {
        subtitle: 'Informal Resolution',
        text: 'Before initiating any formal legal proceedings, both parties agree to attempt to resolve any dispute through good-faith negotiation. Contact our support team at legal@mrapid.com to initiate this process. We aim to resolve all disputes within 30 days of initial contact.',
      },
      {
        subtitle: 'Binding Arbitration',
        text: 'If informal resolution fails, disputes shall be resolved through binding arbitration administered by a recognized arbitration body in accordance with its commercial arbitration rules. Class action lawsuits and class-wide arbitration are expressly waived to the extent permitted by law.',
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

export default function TermsPage() {
  const [openSection, setOpenSection] = useState(0);

  return (
    <section className="pt-28 pb-20 bg-[#f8f8f8] relative overflow-hidden min-h-screen">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-full max-w-5xl h-80 bg-red-100/40 blur-3xl rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#e23744] text-xs font-bold">
            <FileText className="h-4 w-4" />
            <span>Last Updated: September 1, 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Terms of <span className="gradient-text">Service</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Please read these Terms of Service carefully before using the mRapid platform. By accessing or using our services, you agree to be bound by the terms described below.
          </p>
        </div>

        {/* Important notice banner */}
        <div className="mb-8 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 rounded-xl bg-red-100 border border-red-200 text-[#e23744] shrink-0">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm">Important Notice</p>
            <p className="text-xs text-gray-500 mt-0.5">
              These terms constitute a legally binding agreement between you and mRapid Inc. They govern your use of all mRapid products, services, websites, and mobile applications. By using mRapid, you accept these terms in full.
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
          <h3 className="text-xl font-black text-gray-900">Questions About Our Terms?</h3>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            If you have any questions about these Terms of Service or need clarification on any provision, our legal and support team is available to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href="mailto:legal@mrapid.com" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 border border-gray-200 text-gray-900 hover:bg-red-50 hover:border-red-200 hover:text-[#e23744] transition-colors text-sm font-bold">
              <Mail className="h-4 w-4" />
              legal@mrapid.com
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
