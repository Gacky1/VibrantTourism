import { useState, useEffect, useRef } from 'react';
import {
  IoArrowForwardOutline, IoArrowBackOutline, IoRefreshOutline,
  IoScaleOutline, IoInformationCircleOutline, IoSparklesOutline,
  IoFlameOutline, IoTrendingUpOutline,
} from 'react-icons/io5';
import * as IoIcons from 'react-icons/io5';

import StepProgressBar  from './StepProgressBar';
import InterestCard     from './InterestCard';
import DestinationCard  from './DestinationCard';
import ProviderCard     from './ProviderCard';
import ComparisonTable  from './ComparisonTable';
import BookingModal     from './BookingModal';

import { tourismCategories, stateWiseTourism, providersData, stateDetails, RegionsData } from '../../data/tourismData';

/* ── helpers ── */
const ALL_PROVIDERS = [...providersData.resorts, ...providersData.operators, ...providersData.transport];

const PROVIDER_TABS = [
  { key: 'all',       label: 'All'              },
  { key: 'resort',    label: 'Resorts & Stays'  },
  { key: 'operator',  label: 'Tour Operators'   },
  { key: 'transport', label: 'Transport'        },
];

/* ── Step wrapper ── */
const StepShell = ({ title, subtitle, children, onBack, onNext, nextLabel = 'Continue', nextDisabled = false }) => (
  <div className="animate-step">
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-dark">{title}</h2>
      {subtitle && <p className="text-[14px] text-gray-mid mt-2 max-w-xl mx-auto">{subtitle}</p>}
    </div>
    {children}
    <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
      {onBack
        ? <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-mid hover:text-secondary transition-colors">
            <IoArrowBackOutline className="w-4 h-4" /> Back
          </button>
        : <div />
      }
      {onNext && (
        <button
          onClick={onNext}
          disabled={nextDisabled}
          className={`btn-primary ${nextDisabled ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          {nextLabel} <IoArrowForwardOutline className="w-4 h-4" />
        </button>
      )}
    </div>
  </div>
);

/* ── Main component ── */
const SmartBookingAssistant = ({ initialType, initialRegion }) => {
  const isInitialTypeValid = initialType && tourismCategories[initialType];
  const [step,          setStep]          = useState(isInitialTypeValid ? 1 : 0);
  const [interest,      setInterest]      = useState(isInitialTypeValid ? initialType : null);
  const [destination,   setDestination]   = useState(null);
  const [providerTab,   setProviderTab]   = useState('all');
  const [compareList,   setCompareList]   = useState([]);
  const [bookingTarget, setBookingTarget] = useState(null);
  const topRef = useRef(null);
  const prevStepRef = useRef(undefined);

  // Scroll to top of assistant on step change
  useEffect(() => {
    if (prevStepRef.current !== undefined && prevStepRef.current !== step) {
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    prevStepRef.current = step;
  }, [step]);

  /* ── derived data ── */
  const validStates = interest
    ? Object.entries(stateWiseTourism)
        .filter(([, cats]) => cats.includes(interest))
        .map(([state]) => state)
        .filter(state => !initialRegion || RegionsData[initialRegion]?.states.includes(state))
    : Object.keys(stateWiseTourism)
        .filter(state => !initialRegion || RegionsData[initialRegion]?.states.includes(state));

  const filteredProviders = providerTab === 'all'
    ? ALL_PROVIDERS
    : ALL_PROVIDERS.filter(p => p.category === providerTab);

  const recommendedProviders = ALL_PROVIDERS.filter(p => p.rating >= 4.5).slice(0, 3);

  /* ── compare helpers ── */
  const toggleCompare = (provider) => {
    setCompareList(prev =>
      prev.find(p => p.id === provider.id)
        ? prev.filter(p => p.id !== provider.id)
        : prev.length < 3 ? [...prev, provider] : prev
    );
  };
  const removeFromCompare = (id) => setCompareList(prev => prev.filter(p => p.id !== id));

  /* ── reset ── */
  const reset = () => {
    setStep(0); setInterest(null); setDestination(null);
    setCompareList([]); setProviderTab('all');
  };

  /* ── STEP 0: Interest ── */
  const renderStep0 = () => (
    <StepShell
      title="What kind of experience are you looking for?"
      subtitle="Choose your travel interest to get personalised recommendations"
      onNext={() => setStep(1)}
      nextDisabled={!interest}
      step={0}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {Object.values(tourismCategories).map(cat => (
          <InterestCard
            key={cat.id}
            category={cat}
            selected={interest === cat.id}
            onClick={() => setInterest(cat.id)}
          />
        ))}
      </div>

      {/* Popular picks */}
      <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
        <div className="flex items-center gap-2 mb-3">
          <IoFlameOutline className="w-4 h-4 text-secondary" />
          <span className="text-[12px] font-bold text-secondary uppercase tracking-wider">Popular Choices</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['cultural', 'heritage', 'wildlife', 'wellness', 'leisure'].map(k => {
            const cat = tourismCategories[k];
            const Icon = IoIcons[cat.icon] || IoIcons.IoCompassOutline;
            return (
              <button key={k} onClick={() => setInterest(k)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold border transition-all duration-150 ${
                  interest === k ? 'bg-secondary text-white border-secondary' : 'bg-white text-gray-mid border-gray-200 hover:border-secondary hover:text-secondary'
                }`}>
                <Icon className="w-3.5 h-3.5" />
                {cat.title.split(' ')[0]}
              </button>
            );
          })}
        </div>
      </div>
    </StepShell>
  );

  /* ── STEP 1: Destination ── */
  const renderStep1 = () => {
    const cat = tourismCategories[interest];
    return (
      <StepShell
        title={`Where would you like to explore ${cat?.title}?`}
        subtitle="Select a destination to see curated experiences and providers"
        onBack={() => setStep(0)}
        onNext={() => setStep(2)}
        nextDisabled={!destination}
        step={1}
      >
        {/* Interest summary pill */}
        {cat && (
          <div className="flex items-center gap-3 mb-6 p-3 bg-blue-50 rounded-xl border border-blue-100 max-w-sm">
            <div className="icon-box-sm flex-shrink-0">
              {(() => { const I = IoIcons[cat.icon] || IoIcons.IoCompassOutline; return <I className="w-4 h-4" />; })()}
            </div>
            <div>
              <p className="text-[12px] font-bold text-gray-dark">{cat.title}</p>
              <p className="text-[11px] text-gray-mid">{cat.whatItIs}</p>
            </div>
          </div>
        )}

        {/* Popular tag */}
        <div className="flex items-center gap-2 mb-4">
          <IoTrendingUpOutline className="w-4 h-4 text-accent" />
          <span className="text-[12px] font-semibold text-gray-mid">
            {validStates.length} destinations available for {cat?.title}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {validStates.map(state => (
            <DestinationCard
              key={state}
              stateName={state}
              detail={stateDetails[state]}
              selected={destination === state}
              onClick={() => setDestination(state)}
            />
          ))}
        </div>
      </StepShell>
    );
  };

  /* ── STEP 2: Explore ── */
  const renderStep2 = () => {
    const cat = tourismCategories[interest];
    return (
      <StepShell
        title={`Explore experiences in ${destination}`}
        subtitle="Browse resorts, operators, and transport options"
        onBack={() => setStep(1)}
        onNext={() => setStep(3)}
        nextLabel="Compare Providers"
        step={2}
      >
        {/* Destination hero strip */}
        {stateDetails[destination] && (
          <div className="relative h-48 rounded-2xl overflow-hidden mb-7">
            <img src={stateDetails[destination].image} alt={destination}
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-7">
              <h3 className="text-white text-2xl font-bold mb-1">{destination}</h3>
              <p className="text-white/80 text-[13px] max-w-sm">{stateDetails[destination].description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {stateDetails[destination].highlights.map((h, i) => (
                  <span key={i} className="bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/30">{h}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Activities */}
        {cat?.thingsToDo && (
          <div className="mb-7">
            <p className="text-[11px] font-bold text-secondary uppercase tracking-wider mb-3">
              <IoSparklesOutline className="inline w-3.5 h-3.5 mr-1" />
              Recommended Activities
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.thingsToDo.map((t, i) => (
                <span key={i} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-[12px] font-medium text-gray-dark shadow-sm">
                  <IoIcons.IoCheckmarkCircleOutline className="w-3.5 h-3.5 text-secondary" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Provider tabs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {PROVIDER_TABS.map(tab => (
            <button key={tab.key} onClick={() => setProviderTab(tab.key)}
              className={`px-4 py-2 text-[12px] font-semibold rounded-lg border transition-all duration-150 ${
                providerTab === tab.key
                  ? 'bg-secondary text-white border-secondary'
                  : 'bg-white text-gray-mid border-gray-200 hover:border-secondary hover:text-secondary'
              }`}>
              {tab.label}
            </button>
          ))}
          {compareList.length > 0 && (
            <button onClick={() => setStep(3)}
              className="ml-auto flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold rounded-lg bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors">
              <IoScaleOutline className="w-4 h-4" />
              Compare ({compareList.length})
            </button>
          )}
        </div>

        {/* Compare hint */}
        {compareList.length === 0 && (
          <div className="flex items-center gap-2 mb-4 text-[12px] text-gray-mid">
            <IoInformationCircleOutline className="w-4 h-4 text-secondary flex-shrink-0" />
            Tip: Click "+ Compare" on up to 3 providers to compare them side-by-side
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProviders.map(p => (
            <ProviderCard
              key={p.id}
              provider={p}
              inCompare={!!compareList.find(c => c.id === p.id)}
              onToggleCompare={toggleCompare}
              onBook={setBookingTarget}
              onDetails={setBookingTarget}
            />
          ))}
        </div>

        {/* Recommended section */}
        <div className="mt-10 p-5 bg-surface rounded-2xl border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <IoSparklesOutline className="w-4 h-4 text-accent" />
            <span className="text-[12px] font-bold text-gray-dark uppercase tracking-wider">Recommended for You</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {recommendedProviders.map(p => (
              <button key={p.id} onClick={() => setBookingTarget(p)}
                className="group flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-secondary hover:shadow-md transition-all duration-150 text-left">
                <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-gray-dark truncate group-hover:text-secondary transition-colors">{p.name}</p>
                  <p className="text-[11px] text-gray-mid">{p.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </StepShell>
    );
  };

  /* ── STEP 3: Compare ── */
  const renderStep3 = () => (
    <StepShell
      title="Compare Providers"
      subtitle="Select up to 3 providers and compare them side-by-side"
      onBack={() => setStep(2)}
      onNext={() => setStep(4)}
      nextLabel="Proceed to Book"
      step={3}
    >
      {compareList.length === 0 ? (
        <div className="text-center py-16">
          <IoScaleOutline className="w-14 h-14 text-gray-200 mx-auto mb-4" />
          <h3 className="text-base font-semibold text-gray-dark mb-2">No providers selected for comparison</h3>
          <p className="text-[13px] text-gray-mid mb-5">Go back to Explore and click "+ Compare" on providers you're interested in.</p>
          <button onClick={() => setStep(2)} className="btn-outline-blue">
            <IoArrowBackOutline className="w-4 h-4" /> Back to Explore
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-5">
            <p className="text-[13px] text-gray-mid">
              Comparing <span className="font-bold text-gray-dark">{compareList.length}</span> provider{compareList.length > 1 ? 's' : ''}
            </p>
            <button onClick={() => setStep(2)}
              className="flex items-center gap-1.5 text-[12px] font-semibold text-secondary hover:text-blue-700 transition-colors">
              <IoArrowBackOutline className="w-3.5 h-3.5" /> Add more
            </button>
          </div>
          <ComparisonTable
            providers={compareList}
            onRemove={removeFromCompare}
            onBook={setBookingTarget}
          />
        </>
      )}
    </StepShell>
  );

  /* ── STEP 4: Book ── */
  const renderStep4 = () => (
    <StepShell
      title="Ready to Book?"
      subtitle="Choose a provider and confirm your booking"
      onBack={() => setStep(3)}
      step={4}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {(compareList.length > 0 ? compareList : ALL_PROVIDERS.slice(0, 3)).map(p => (
          <ProviderCard
            key={p.id}
            provider={p}
            inCompare={false}
            onToggleCompare={() => {}}
            onBook={setBookingTarget}
            onDetails={setBookingTarget}
          />
        ))}
      </div>

      {/* Start over */}
      <div className="text-center pt-4 border-t border-gray-100">
        <button onClick={reset}
          className="flex items-center gap-2 text-[13px] font-semibold text-gray-mid hover:text-secondary transition-colors mx-auto">
          <IoRefreshOutline className="w-4 h-4" /> Start a new search
        </button>
      </div>
    </StepShell>
  );

  return (
    <div ref={topRef} className="scroll-mt-20">
      {/* Progress bar */}
      <StepProgressBar currentStep={step} onStepClick={setStep} />

      {/* Step content */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-xs">
        {step === 0 && renderStep0()}
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
      </div>

      {/* Booking modal */}
      {bookingTarget && (
        <BookingModal provider={bookingTarget} onClose={() => setBookingTarget(null)} />
      )}

      {/* Floating compare bar */}
      {compareList.length > 0 && step === 2 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 bg-white border border-gray-200 rounded-2xl shadow-xl px-5 py-3">
          <div className="flex -space-x-2">
            {compareList.map(p => (
              <img key={p.id} src={p.image} alt={p.name}
                className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            ))}
          </div>
          <span className="text-[13px] font-semibold text-gray-dark">
            {compareList.length} selected
          </span>
          <button onClick={() => setStep(3)} className="btn-primary text-xs py-2 px-4">
            <IoScaleOutline className="w-3.5 h-3.5" /> Compare Now
          </button>
          <button onClick={() => setCompareList([])}
            className="text-gray-mid hover:text-red-500 transition-colors">
            <IoIcons.IoCloseOutline className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SmartBookingAssistant;
