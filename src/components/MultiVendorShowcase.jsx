import React, { useState } from 'react';
import { Store, Star, Clock, CheckCircle2, Plus, SlidersHorizontal, Sparkles, X, Smartphone } from 'lucide-react';

export default function MultiVendorShowcase({ onOpenDownloadModal }) {
  const [selectedCategory, setSelectedCategory] = useState('dining');
  const [customizingItem, setCustomizingItem] = useState(null);
  const [multiChoiceSelection, setMultiChoiceSelection] = useState({});

  const categories = [
    { id: 'dining', name: 'Restaurants & Dining', count: '320+ Stores' },
    { id: 'grocery', name: 'Groceries & Fresh', count: '180+ Supermarkets' },
    { id: 'pharmacy', name: 'Pharmacy & Wellness', count: '90+ Chemists' },
    { id: 'electronics', name: 'Tech & Gadgets', count: '60+ Retailers' },
  ];

  const vendorsData = {
    dining: [
      {
        id: 'v1',
        name: 'Trattoria Artisanal Pizza',
        cuisine: 'Italian • Gourmet Pizza',
        rating: 4.9,
        reviews: 1240,
        deliveryTime: '20-30 min',
        minOrder: '₹12.00',
        badge: 'Top Rated',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80',
        items: [
          {
            id: 'm1',
            name: 'Wood-Fired Truffle & Burrata Pizza',
            price: 18.5,
            description: 'Hand-tossed sourdough base, black truffle cream, fresh burrata, wild arugula.',
            options: [
              { name: 'Crust Choice', choices: ['Classic Neapolitan', 'Sourdough Thin Crust', 'Gluten-Free (+ ₹2.50)'] },
              { name: 'Extra Toppings', choices: ['Extra Burrata (+ ₹3.00)', 'Spicy Pepperoni (+ ₹2.00)', 'Fresh Basil'] },
            ],
          },
          {
            id: 'm2',
            name: 'Artisan Rigatoni Carbonara',
            price: 16.0,
            description: 'Crispy guanciale, pecorino romano, organic egg yolks, fresh black pepper.',
            options: [
              { name: 'Pasta Type', choices: ['Fresh Rigatoni', 'Penne', 'Gluten-Free Fusilli'] },
              { name: 'Cheese Level', choices: ['Standard Pecorino', 'Extra Pecorino Romano (+ ₹1.50)'] },
            ],
          },
        ],
      },
      {
        id: 'v2',
        name: 'Sakura Sushi & Ramen Bar',
        cuisine: 'Japanese • Asian Fusion',
        rating: 4.8,
        reviews: 980,
        deliveryTime: '25-35 min',
        minOrder: '₹15.00',
        badge: 'Express Vendor',
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80',
        items: [
          {
            id: 'm3',
            name: 'Dragon Roll & Sashimi Deluxe',
            price: 22.0,
            description: 'Eel, avocado, cucumber topped with spicy tuna, tobiko caviar, and unagi glaze.',
            options: [
              { name: 'Rice Preference', choices: ['Traditional Seasoned Rice', 'Brown Rice (+ ₹1.00)'] },
              { name: 'Spice Level', choices: ['Mild', 'Medium Spicy', 'Fiery Wasabi Mayo'] },
            ],
          },
        ],
      },
    ],
    grocery: [
      {
        id: 'v3',
        name: 'Organic Harvest Market',
        cuisine: 'Fresh Produce • Organic Dairy',
        rating: 4.9,
        reviews: 2150,
        deliveryTime: '15-25 min',
        minOrder: '₹10.00',
        badge: 'Eco Friendly',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80',
        items: [
          {
            id: 'g1',
            name: 'Custom Organic Fruit & Berry Basket',
            price: 24.99,
            description: 'Select your preferred fresh farm-harvested seasonal berries, avocados, and citrus.',
            options: [
              { name: 'Berry Selection', choices: ['Blueberries & Strawberries', 'Raspberries & Blackberries (+ ₹2.00)'] },
              { name: 'Ripeness Choice', choices: ['Ready to Eat Today', 'Firm for the Week'] },
            ],
          },
        ],
      },
    ],
    pharmacy: [
      {
        id: 'v4',
        name: 'MediCare Express Pharmacy',
        cuisine: 'OTC Medicines • Wellness & Vitamins',
        rating: 4.9,
        reviews: 640,
        deliveryTime: '15 min',
        minOrder: '₹5.00',
        badge: '24/7 Delivery',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
        items: [
          {
            id: 'p1',
            name: 'Daily Immunity & Wellness Bundle',
            price: 19.99,
            description: 'Vitamin C 1000mg, Zinc Chelate, Elderberry Extract, and Electrolyte Hydration tabs.',
            options: [
              { name: 'Form Factor', choices: ['Effervescent Tablets', 'Chewable Gummies (+ ₹1.50)'] },
            ],
          },
        ],
      },
    ],
    electronics: [
      {
        id: 'v5',
        name: 'CyberTech Mobile & Accessories',
        cuisine: 'Audio • Cables • Power Banks',
        rating: 4.7,
        reviews: 410,
        deliveryTime: '30-40 min',
        minOrder: '₹20.00',
        badge: 'Official Store',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
        items: [
          {
            id: 'e1',
            name: 'Ultra-Fast Wireless ANC Earbuds',
            price: 49.99,
            description: 'Bluetooth 5.3, active noise cancellation, 30h battery with charging case.',
            options: [
              { name: 'Color Choice', choices: ['Matte Black', 'Glacial White', 'Cyber Purple'] },
            ],
          },
        ],
      },
    ],
  };

  const handleOpenCustomizer = (item, vendorName) => {
    setCustomizingItem({ ...item, vendorName });
    const initial = {};
    item.options?.forEach((opt) => {
      initial[opt.name] = opt.choices[0];
    });
    setMultiChoiceSelection(initial);
  };

  const handleOrderInApp = () => {
    setCustomizingItem(null);
    onOpenDownloadModal('all');
  };

  const currentVendors = vendorsData[selectedCategory] || [];

  return (
    <section id="marketplace" className="py-20 bg-[#f8f8f8] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#e23744] text-xs font-bold">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Interactive Multi-Choice Marketplace</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Discover Stores & Customize <span className="gradient-text">Your Choices</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg">
            Mix and match orders from top-tier restaurants, supermarkets, pharmacies, and tech hubs directly in the mRapid app.
          </p>
        </div>

        {/* Category Tabs Switcher */}
        <div className="mt-10 flex items-center justify-center gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center px-6 py-3 rounded-2xl border text-sm font-bold transition-all shrink-0 ${
                  isActive
                    ? 'border-[#e23744] bg-[#e23744] text-white shadow-lg shadow-red-500/25'
                    : 'border-gray-200 bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] font-normal mt-0.5 ${isActive ? 'text-red-100' : 'text-[#e23744]'}`}>{cat.count}</span>
              </button>
            );
          })}
        </div>

        {/* Vendors & Products Grid - Full Width */}
        <div className="mt-12 space-y-8">
          {currentVendors.map((vendor) => (
            <div key={vendor.id} className="rounded-3xl glass-card border border-gray-200 overflow-hidden shadow-xl">
              
              {/* Vendor Banner Header */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#e23744] text-white text-xs font-bold shadow-md">
                    {vendor.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white">{vendor.name}</h3>
                    <p className="text-xs text-red-300 font-semibold mt-0.5">{vendor.cuisine}</p>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-slate-200 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-white/20 backdrop-blur-md">
                    <span className="flex items-center text-amber-400 font-bold">
                      <Star className="h-3.5 w-3.5 fill-current mr-1" />
                      {vendor.rating} ({vendor.reviews})
                    </span>
                    <span>•</span>
                    <span className="flex items-center text-slate-200 font-medium">
                      <Clock className="h-3.5 w-3.5 text-red-400 mr-1" />
                      {vendor.deliveryTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Vendor Multi-Choice Items */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="text-xs uppercase tracking-wider text-[#e23744] font-bold flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-[#e23744]" />
                  <span>Featured Multi-Choice Items</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vendor.items.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 rounded-2xl bg-slate-50 border border-gray-200 hover:border-red-400 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="text-base font-bold text-gray-900 leading-snug">{item.name}</h4>
                          <span className="text-base font-extrabold text-[#e23744]">₹{item.price.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-gray-200 flex items-center justify-between">
                        <span className="text-[11px] text-[#e23744] font-bold">
                          {item.options?.length || 0} Multi-Choice Options
                        </span>
                        <button
                          onClick={() => handleOpenCustomizer(item, vendor.name)}
                          className="px-4 py-2 rounded-xl bg-[#e23744] hover:bg-red-700 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors shadow-sm"
                        >
                          <Plus className="h-4 w-4" />
                          <span>Customize & Order</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Multi-Choice Customization Modal */}
      {customizingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl text-left space-y-6">
            <button
              onClick={() => setCustomizingItem(null)}
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              <span className="text-[10px] text-[#e23744] font-bold uppercase tracking-wider">{customizingItem.vendorName}</span>
              <h3 className="text-xl font-extrabold text-gray-900 mt-0.5">{customizingItem.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{customizingItem.description}</p>
            </div>

            {/* Custom Multi-Choice Form Options */}
            <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
              {customizingItem.options?.map((opt) => (
                <div key={opt.name} className="space-y-2">
                  <label className="text-xs font-bold text-gray-800 block">{opt.name}</label>
                  <div className="space-y-1.5">
                    {opt.choices.map((choice) => (
                      <button
                        key={choice}
                        onClick={() =>
                          setMultiChoiceSelection({
                            ...multiChoiceSelection,
                            [opt.name]: choice,
                          })
                        }
                        className={`w-full text-left p-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                          multiChoiceSelection[opt.name] === choice
                            ? 'border-[#e23744] bg-red-50 text-[#e23744]'
                            : 'border-gray-200 bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <span>{choice}</span>
                        {multiChoiceSelection[opt.name] === choice && (
                          <CheckCircle2 className="h-4 w-4 text-[#e23744]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 block">Item Price</span>
                <span className="text-lg font-black text-[#e23744]">₹{customizingItem.price.toFixed(2)}</span>
              </div>

              <button
                onClick={handleOrderInApp}
                className="gradient-button px-6 py-3 rounded-xl font-bold text-sm text-white shadow-lg flex items-center space-x-2"
              >
                <Smartphone className="h-4 w-4" />
                <span>Order in mRapid App</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
