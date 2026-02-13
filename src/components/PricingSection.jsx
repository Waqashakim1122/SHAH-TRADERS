import { useState, useEffect, useRef } from 'react';
import { Info, FileText, Calculator, TrendingUp } from 'lucide-react';

export default function PricingCalculator() {
  const [comparisonMode, setComparisonMode] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const totalSectionRef = useRef(null);
  const warehousingRef = useRef(null);
  const deliveryRef = useRef(null);
  
  const [warehousing, setWarehousing] = useState({
    palletStorage: { qty: 0, rate: 27.5 },
    shelfStorage: { qty: 0, rate: 5 },
    inboundReceiving: { qty: 0, rate: 17.5 },
    containerUnload: { qty: 0, rate: 325 },
  });

  const [pickPack, setPickPack] = useState({
    pickFee: { qty: 0, rate: 2 },
    additionalItems: { qty: 0, rate: 0.35 },
    packaging: { qty: 0, rate: 0.72 },
  });

  const [fbaPrep, setFbaPrep] = useState({
    fnskuLabeling: { qty: 0, rate: 0.30 },
    polybagging: { qty: 0, rate: 0.42 },
    bubbleWrapping: { qty: 0, rate: 0.60 },
    palletBuild: { qty: 0, rate: 20 },
  });

  const [delivery, setDelivery] = useState({
    sameDay: { qty: 0, rate: 14 },
    nextDay: { qty: 0, rate: 9 },
    largeItem: { qty: 0, rate: 87.5 },
    perMile: { qty: 0, rate: 1.85 },
  });

  // Sticky scroll effect - show bottom bar from warehousing, stop at delivery end
  useEffect(() => {
    const handleScroll = () => {
      if (warehousingRef.current && deliveryRef.current) {
        const warehousingTop = warehousingRef.current.getBoundingClientRect().top;
        const deliveryBottom = deliveryRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Show when warehousing is in view and before delivery section ends
        const shouldShow = warehousingTop < windowHeight * 0.8 && deliveryBottom > windowHeight;
        setIsSticky(shouldShow);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateQuantity = (category, field, value) => {
    const qty = parseFloat(value) || 0;
    switch(category) {
      case 'warehousing':
        setWarehousing(prev => ({
          ...prev,
          [field]: { ...prev[field], qty }
        }));
        break;
      case 'pickPack':
        setPickPack(prev => ({
          ...prev,
          [field]: { ...prev[field], qty }
        }));
        break;
      case 'fbaPrep':
        setFbaPrep(prev => ({
          ...prev,
          [field]: { ...prev[field], qty }
        }));
        break;
      case 'delivery':
        setDelivery(prev => ({
          ...prev,
          [field]: { ...prev[field], qty }
        }));
        break;
    }
  };

  const calculateSubtotal = (category) => {
    return Object.values(category).reduce((sum, item) => sum + (item.qty * item.rate), 0);
  };

  const warehousingTotal = calculateSubtotal(warehousing);
  const pickPackTotal = calculateSubtotal(pickPack);
  const fbaPrepTotal = calculateSubtotal(fbaPrep);
  const deliveryTotal = calculateSubtotal(delivery);
  const grandTotal = warehousingTotal + pickPackTotal + fbaPrepTotal + deliveryTotal;

  return (
    <section id="quote" className="relative min-h-screen bg-black py-20 md:py-32 overflow-hidden">
      {/* Background Effects - matching Hero section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-16 gap-6">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em]">Pricing Calculator</span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-wide">
              Quote <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Calculator</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Get an instant estimate for your logistics needs with transparent pricing
            </p>
          </div>
          
          <div className="text-right animate-fade-in delay-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-gray-300 font-medium">Comparison mode</span>
              <button
                onClick={() => setComparisonMode(!comparisonMode)}
                className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                  comparisonMode ? 'bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-lg shadow-cyan-500/30' : 'bg-gray-700'
                }`}
              >
                <span className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  comparisonMode ? 'translate-x-6' : ''
                }`} />
              </button>
            </div>
            <p className="text-sm text-gray-500">Compare us with other companies</p>
          </div>
        </div>

        {/* Warehousing / Storage */}
        <div ref={warehousingRef}>
          <Section title="Warehousing / Storage" icon={Calculator}>
          <ServiceRow
            label="Pallet storage"
            feeRange="$20 – $35 / pallet / month"
            fee="$27.50"
            quantity={warehousing.palletStorage.qty}
            subtotal={warehousing.palletStorage.qty * warehousing.palletStorage.rate}
            onChange={(val) => updateQuantity('warehousing', 'palletStorage', val)}
          />
          <ServiceRow
            label="Shelf/bin storage"
            feeRange="$2 – $8 / month"
            fee="$5.00"
            quantity={warehousing.shelfStorage.qty}
            subtotal={warehousing.shelfStorage.qty * warehousing.shelfStorage.rate}
            onChange={(val) => updateQuantity('warehousing', 'shelfStorage', val)}
          />
          <ServiceRow
            label="Inbound receiving"
            feeRange="$10 – $25 per pallet"
            fee="$17.50"
            quantity={warehousing.inboundReceiving.qty}
            subtotal={warehousing.inboundReceiving.qty * warehousing.inboundReceiving.rate}
            onChange={(val) => updateQuantity('warehousing', 'inboundReceiving', val)}
          />
          <ServiceRow
            label="Floor-loaded container unload"
            feeRange="$250 – $400"
            fee="$325.00"
            quantity={warehousing.containerUnload.qty}
            subtotal={warehousing.containerUnload.qty * warehousing.containerUnload.rate}
            onChange={(val) => updateQuantity('warehousing', 'containerUnload', val)}
          />
        </Section>
        </div>

        {/* Pick & Pack */}
        <Section title="Pick & Pack" icon={Calculator}>
          <ServiceRow
            label="Pick fee (first item)"
            feeRange="$1.50 – $2.50"
            fee="$2.00"
            quantity={pickPack.pickFee.qty}
            subtotal={pickPack.pickFee.qty * pickPack.pickFee.rate}
            onChange={(val) => updateQuantity('pickPack', 'pickFee', val)}
          />
          <ServiceRow
            label="Additional items"
            feeRange="$0.25 – $0.45 each"
            fee="$0.35"
            quantity={pickPack.additionalItems.qty}
            subtotal={pickPack.additionalItems.qty * pickPack.additionalItems.rate}
            onChange={(val) => updateQuantity('pickPack', 'additionalItems', val)}
          />
          <ServiceRow
            label="Packaging material"
            feeRange="$0.15 – $1.30"
            fee="$0.72"
            quantity={pickPack.packaging.qty}
            subtotal={pickPack.packaging.qty * pickPack.packaging.rate}
            onChange={(val) => updateQuantity('pickPack', 'packaging', val)}
          />
        </Section>

        {/* Amazon FBA Prep */}
        <Section title="Amazon FBA Prep" icon={Calculator}>
          <ServiceRow
            label="FNSKU labeling"
            feeRange="$0.20 – $0.40"
            fee="$0.30"
            quantity={fbaPrep.fnskuLabeling.qty}
            subtotal={fbaPrep.fnskuLabeling.qty * fbaPrep.fnskuLabeling.rate}
            onChange={(val) => updateQuantity('fbaPrep', 'fnskuLabeling', val)}
          />
          <ServiceRow
            label="Polybagging"
            feeRange="$0.25 – $0.60"
            fee="$0.42"
            quantity={fbaPrep.polybagging.qty}
            subtotal={fbaPrep.polybagging.qty * fbaPrep.polybagging.rate}
            onChange={(val) => updateQuantity('fbaPrep', 'polybagging', val)}
          />
          <ServiceRow
            label="Bubble wrapping"
            feeRange="$0.40 – $0.80"
            fee="$0.60"
            quantity={fbaPrep.bubbleWrapping.qty}
            subtotal={fbaPrep.bubbleWrapping.qty * fbaPrep.bubbleWrapping.rate}
            onChange={(val) => updateQuantity('fbaPrep', 'bubbleWrapping', val)}
          />
          <ServiceRow
            label="Pallet build/wrap"
            feeRange="$15 – $25"
            fee="$20.00"
            quantity={fbaPrep.palletBuild.qty}
            subtotal={fbaPrep.palletBuild.qty * fbaPrep.palletBuild.rate}
            onChange={(val) => updateQuantity('fbaPrep', 'palletBuild', val)}
          />
        </Section>

        {/* Local Delivery (Ohio) */}
        
        </Section>
        </div>

        {/* Total Section - Normal Position */}
        <div 
          ref={totalSectionRef}
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 mt-8 shadow-2xl animate-fade-in delay-300"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Total estimated cost</h3>
              </div>
              <p className="text-sm text-gray-400">Based on mid-range pricing</p>
            </div>
            
            <div className="flex items-baseline gap-6">
              <div className="text-right">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                  ${grandTotal.toFixed(2)}
                </div>
                <div className="text-sm text-gray-400 mt-1">per month</div>
              </div>
              
              <button className="
                px-8 py-4 rounded-full font-semibold text-white
                bg-gradient-to-r from-cyan-400 to-cyan-600
                shadow-lg shadow-cyan-500/30
                hover:shadow-cyan-500/60
                hover:scale-105
                transition-all duration-300
                flex items-center gap-2
                active:scale-95
              ">
                <FileText className="w-5 h-5" />
                Get the file
              </button>
            </div>
          </div>

          {/* Breakdown */}
          {grandTotal > 0 && (
            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {warehousingTotal > 0 && (
                <div className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-xl p-4 hover:border-cyan-400/30 transition-all">
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Warehousing</div>
                  <div className="text-xl font-bold text-white">${warehousingTotal.toFixed(2)}</div>
                </div>
              )}
              {pickPackTotal > 0 && (
                <div className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-xl p-4 hover:border-cyan-400/30 transition-all">
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Pick & Pack</div>
                  <div className="text-xl font-bold text-white">${pickPackTotal.toFixed(2)}</div>
                </div>
              )}
              {fbaPrepTotal > 0 && (
                <div className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-xl p-4 hover:border-cyan-400/30 transition-all">
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">FBA Prep</div>
                  <div className="text-xl font-bold text-white">${fbaPrepTotal.toFixed(2)}</div>
                </div>
              )}
              {deliveryTotal > 0 && (
                <div className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-xl p-4 hover:border-cyan-400/30 transition-all">
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Delivery</div>
                  <div className="text-xl font-bold text-white">${deliveryTotal.toFixed(2)}</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center animate-fade-in delay-400">
          <p className="text-xs text-gray-600 max-w-3xl mx-auto leading-relaxed">
            All prices are estimates based on standard specifications. Final pricing may vary based on actual requirements, 
            volume commitments, and service level agreements. Contact us for a detailed custom quote.
          </p>
        </div>
      </div>

      {/* Sticky Floating Total Bar - BOTTOM */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
          isSticky ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-6">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-cyan-500/20 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center border border-cyan-400/30">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Total estimated cost</h3>
                  <p className="text-xs text-gray-400">Based on mid-range pricing</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                {/* Category Pills */}
                {grandTotal > 0 && (
                  <div className="hidden lg:flex items-center gap-2">
                    {warehousingTotal > 0 && (
                      <div className="bg-black/40 border border-cyan-400/20 rounded-full px-3 py-1.5">
                        <span className="text-xs text-gray-400">Warehousing: </span>
                        <span className="text-sm font-bold text-white">${warehousingTotal.toFixed(2)}</span>
                      </div>
                    )}
                    {pickPackTotal > 0 && (
                      <div className="bg-black/40 border border-cyan-400/20 rounded-full px-3 py-1.5">
                        <span className="text-xs text-gray-400">Pick&Pack: </span>
                        <span className="text-sm font-bold text-white">${pickPackTotal.toFixed(2)}</span>
                      </div>
                    )}
                    {fbaPrepTotal > 0 && (
                      <div className="bg-black/40 border border-cyan-400/20 rounded-full px-3 py-1.5">
                        <span className="text-xs text-gray-400">FBA: </span>
                        <span className="text-sm font-bold text-white">${fbaPrepTotal.toFixed(2)}</span>
                      </div>
                    )}
                    {deliveryTotal > 0 && (
                      <div className="bg-black/40 border border-cyan-400/20 rounded-full px-3 py-1.5">
                        <span className="text-xs text-gray-400">Delivery: </span>
                        <span className="text-sm font-bold text-white">${deliveryTotal.toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Grand Total */}
                <div className="flex items-baseline gap-4">
                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                      ${grandTotal.toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-400">per month</div>
                  </div>
                  
                  <button className="
                    px-6 py-3 rounded-full font-semibold text-white text-sm
                    bg-gradient-to-r from-cyan-400 to-cyan-600
                    shadow-lg shadow-cyan-500/30
                    hover:shadow-cyan-500/60
                    hover:scale-105
                    transition-all duration-300
                    flex items-center gap-2
                    active:scale-95
                  ">
                    <FileText className="w-4 h-4" />
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .animate-fade-in {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .delay-200 { 
          animation-delay: 0.2s; 
        }
        
        .delay-300 { 
          animation-delay: 0.3s; 
        }
        
        .delay-400 { 
          animation-delay: 0.4s; 
        }
      `}</style>
    </section>
  );
}

function Section({ title, icon: Icon, children }) {
  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 mb-6 shadow-xl animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center border border-cyan-400/30">
          <Icon className="w-5 h-5 text-cyan-400" />
        </div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

function ServiceRow({ label, feeRange, fee, quantity, subtotal, onChange }) {
  return (
    <div className="grid grid-cols-12 gap-3 md:gap-4 items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded-lg px-2">
      <div className="col-span-12 md:col-span-4 flex items-center gap-2">
        <span className="text-gray-200 font-medium text-sm md:text-base">{label}</span>
        <button className="text-gray-500 hover:text-cyan-400 transition-colors">
          <Info className="w-4 h-4" />
        </button>
      </div>
      
      <div className="col-span-6 md:col-span-2 text-center">
        <div className="text-xs text-gray-500 mb-1">Fee Range</div>
        <div className="text-xs md:text-sm text-gray-400">{feeRange}</div>
      </div>
      
      <div className="col-span-6 md:col-span-2 text-center">
        <div className="text-xs text-gray-500 mb-1">Fee (per unit)</div>
        <div className="text-sm md:text-base font-semibold text-white">{fee}</div>
      </div>
      
      <div className="col-span-6 md:col-span-2">
        <div className="text-xs text-gray-500 mb-1 text-center">Quantity</div>
        <input
          type="number"
          min="0"
          step="1"
          value={quantity || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0"
          className="
            w-full px-3 py-2 
            bg-black/40 border border-gray-700 
            rounded-lg text-center text-white
            focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400
            transition-all
            placeholder-gray-600
          "
        />
      </div>
      
      <div className="col-span-6 md:col-span-2 text-right">
        <div className="text-xs text-gray-500 mb-1">Subtotal</div>
        <div className="text-base md:text-lg font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
          ${subtotal.toFixed(2)}
        </div>
      </div>
    </div>
  );

}
