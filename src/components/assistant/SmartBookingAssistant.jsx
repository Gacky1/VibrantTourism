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
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-black text-[#0A2540] uppercase tracking-wide leading-tight">{title}</h2>
      {subtitle && <p className="text-[13.5px] text-slate-500 font-semibold mt-2 max-w-xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
    {children}
    <div className="flex items-center justify-between mt-12 pt-6 border-t border-slate-100">
      {onBack ? (
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-600 text-xs font-black uppercase tracking-wider hover:border-blue-600 hover:text-blue-600 transition-all cursor-pointer bg-white active:scale-95"
        >
          <IoArrowBackOutline className="w-4 h-4" /> Back
        </button>
      ) : (
        <div />
      )}
      {onNext && (
        <button
          onClick={onNext}
          disabled={nextDisabled}
          className={`flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md shadow-blue-500/10 transition-all active:scale-95 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none disabled:hover:translate-y-0`}
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
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
      <div className="mt-10 p-6 bg-slate-50 border border-slate-100 rounded-3xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-500 border border-amber-100 flex items-center justify-center">
            <IoFlameOutline className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-black text-[#0A2540] uppercase tracking-widest">Popular Choices</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {['cultural', 'heritage', 'wildlife', 'wellness', 'leisure'].map(k => {
            const cat = tourismCategories[k];
            const Icon = IoIcons[cat.icon] || IoIcons.IoCompassOutline;
            const isSelected = interest === k;
            return (
              <button
                key={k}
                onClick={() => setInterest(k)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12px] font-black uppercase tracking-wider transition-all duration-200 active:scale-95 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-md shadow-[#0A2540]/10'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:shadow-xs'
                }`}
              >
                <Icon className="w-4 h-4" />
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
          <div className="flex items-center gap-3.5 mb-8 p-4 bg-slate-50 border border-slate-200/60 rounded-2xl max-w-md shadow-xs backdrop-blur-sm">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
              {(() => { const I = IoIcons[cat.icon] || IoIcons.IoCompassOutline; return <I className="w-4 h-4" />; })()}
            </div>
            <div>
              <p className="text-[12px] font-black text-[#0A2540] uppercase tracking-wide">{cat.title}</p>
              <p className="text-[11px] text-slate-500 font-semibold leading-tight mt-0.5">{cat.whatItIs}</p>
            </div>
          </div>
        )}

        {/* Available destinations count */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-50 text-amber-700 text-[11px] font-black uppercase tracking-wider border border-amber-100 shadow-xs">
            <IoTrendingUpOutline className="w-4 h-4" />
            <span>{validStates.length} destinations available</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="relative h-56 rounded-3xl overflow-hidden mb-8 shadow-md border border-slate-100/50 group">
            <img
              src={stateDetails[destination].image}
              alt={destination}
              className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/40 to-[#0A2540]/10" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wider leading-tight">{destination}</h3>
              <p className="text-white/80 text-[12.5px] font-semibold max-w-xl mt-1.5 leading-relaxed">{stateDetails[destination].description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {stateDetails[destination].highlights.map((h, i) => (
                  <span key={i} className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl border border-white/15">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Activities */}
        {cat?.thingsToDo && (
          <div className="mb-8 p-5 bg-slate-50/50 border border-slate-100 rounded-3xl">
            <p className="flex items-center gap-1.5 text-[10px] font-black text-[#0A2540] uppercase tracking-widest mb-4">
              <IoSparklesOutline className="w-4 h-4 text-amber-500 animate-pulse" />
              Recommended Activities
            </p>
            <div className="flex flex-wrap gap-2.5">
              {cat.thingsToDo.map((t, i) => (
                <span key={i} className="flex items-center gap-1.5 bg-white border border-slate-100 rounded-xl px-4 py-2 text-[12px] font-bold text-slate-600 shadow-xs hover:border-blue-200 transition-colors">
                  <IoIcons.IoCheckmarkCircle className="w-4 h-4 text-emerald-500" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Compare Info banner */}
        {compareList.length === 0 && (
          <div className="flex items-center gap-2 mb-6 text-[12px] font-semibold text-blue-600 bg-blue-50/60 border border-blue-100/50 rounded-xl px-4 py-3 max-w-2xl">
            <IoInformationCircleOutline className="w-4.5 h-4.5 text-blue-600 flex-shrink-0" />
            Tip: Click "+ Compare" on up to 3 providers to compare them side-by-side
          </div>
        )}

        {/* Provider tabs */}
        <div className="flex flex-wrap gap-2.5 mb-6 items-center">
          {PROVIDER_TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setProviderTab(tab.key)}
              className={`px-4.5 py-2.5 text-[11.5px] font-black uppercase tracking-wider rounded-xl border transition-all duration-200 active:scale-95 cursor-pointer ${
                providerTab === tab.key
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
          {compareList.length > 0 && (
            <button
              onClick={() => setStep(3)}
              className="ml-auto flex items-center gap-1.5 px-4.5 py-2.5 text-[11.5px] font-black uppercase tracking-wider rounded-xl bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-all cursor-pointer shadow-xs"
            >
              <IoScaleOutline className="w-4 h-4" />
              Compare ({compareList.length})
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="mt-12 p-6 bg-slate-50 border border-slate-100 rounded-3xl">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-500 border border-amber-100 flex items-center justify-center">
              <IoSparklesOutline className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-black text-[#0A2540] uppercase tracking-widest">Recommended Premium Options</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedProviders.map(p => (
              <button
                key={p.id}
                onClick={() => setBookingTarget(p)}
                className="group flex items-center gap-3.5 p-3 bg-white rounded-2xl border border-slate-200/70 hover:border-blue-600 hover:shadow-lg transition-all duration-300 text-left cursor-pointer"
              >
                <img src={p.image} alt={p.name} className="w-14 h-14 rounded-xl object-cover flex-shrink-0 border border-slate-100 group-hover:scale-105 transition-transform duration-300" />
                <div className="min-w-0">
                  <p className="text-[13.5px] font-extrabold text-[#0A2540] truncate group-hover:text-blue-600 transition-colors leading-tight uppercase tracking-wide">{p.name}</p>
                  <p className="text-[11.5px] font-extrabold text-blue-600 mt-1">{p.price}</p>
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
        <div className="text-center py-16 bg-slate-50 border border-slate-100 rounded-3xl">
          <IoScaleOutline className="w-16 h-16 text-slate-300 mx-auto mb-4 animate-pulse" />
          <h3 className="text-lg font-black text-[#0A2540] mb-2 uppercase tracking-wide">No providers selected for comparison</h3>
          <p className="text-slate-500 font-semibold text-sm max-w-sm mx-auto mb-6 leading-relaxed">Go back to Explore and click "+ Compare" on providers you're interested in.</p>
          <button onClick={() => setStep(2)} className="btn-outline-blue cursor-pointer py-3.5 px-6 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-black uppercase tracking-wider">
            <IoArrowBackOutline className="w-4 h-4" /> Back to Explore
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <p className="text-[12.5px] font-semibold text-slate-500">
              Comparing{' '}
              <span className="font-bold text-[#0A2540] bg-slate-100 px-2 py-0.5 rounded-md">
                {compareList.length}
              </span>{' '}
              provider{compareList.length > 1 ? 's' : ''}
            </p>
            <button
              onClick={() => setStep(2)}
              className="flex items-center gap-1.5 text-[11.5px] font-black text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider cursor-pointer"
            >
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
      <div className="text-center pt-8 border-t border-slate-100">
        <button
          onClick={reset}
          className="flex items-center gap-2 text-[12px] font-black uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors mx-auto cursor-pointer border border-slate-200 px-4 py-2.5 rounded-xl hover:border-blue-500 bg-white hover:shadow-xs active:scale-95"
        >
          <IoRefreshOutline className="w-4 h-4 animate-spin-slow" /> Start a new search
        </button>
      </div>
    </StepShell>
  );

  return (
    <div ref={topRef} className="scroll-mt-20">
      {/* Progress bar */}
      <StepProgressBar currentStep={step} onStepClick={setStep} />

      {/* Step content */}
      <div className="bg-white rounded-3xl border border-slate-100/80 p-6 md:p-10 shadow-xl shadow-slate-100/50">
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
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 bg-[#0A2540] text-white border border-white/10 rounded-2xl shadow-2xl px-6 py-4.5 animate-scale-in max-w-md w-full justify-between backdrop-blur-md bg-opacity-95">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {compareList.map(p => (
                <img
                  key={p.id}
                  src={p.image}
                  alt={p.name}
                  className="w-9 h-9 rounded-full border-2 border-[#0A2540] object-cover ring-2 ring-blue-500/20"
                />
              ))}
            </div>
            <span className="text-[12px] font-black uppercase tracking-wider text-slate-300">
              {compareList.length} selected
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setStep(3)}
              className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-blue-600/20"
            >
              <IoScaleOutline className="w-3.5 h-3.5" /> Compare
            </button>
            <button
              onClick={() => setCompareList([])}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-red-500 text-white hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <IoIcons.IoCloseOutline className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartBookingAssistant;
