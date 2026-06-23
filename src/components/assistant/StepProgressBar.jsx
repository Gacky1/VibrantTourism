import {
  IoCompassOutline, IoMapOutline, IoSearchOutline,
  IoScaleOutline, IoCheckmarkCircleOutline, IoCheckmarkOutline
} from 'react-icons/io5';

const STEPS = [
  { label: 'Interest',    Icon: IoCompassOutline  },
  { label: 'Destination', Icon: IoMapOutline       },
  { label: 'Explore',     Icon: IoSearchOutline    },
  { label: 'Compare',     Icon: IoScaleOutline     },
  { label: 'Book',        Icon: IoCheckmarkCircleOutline },
];

const StepProgressBar = ({ currentStep, onStepClick }) => (
  <div className="w-full max-w-2xl mx-auto mb-12 px-4 select-none">
    <div className="flex items-center justify-between relative">
      {/* connecting line background */}
      <div className="absolute top-[22px] left-2 right-2 h-[5px] bg-slate-100 z-0 rounded-full" />
      {/* active filling line */}
      <div
        className="absolute top-[22px] left-2 h-[5px] bg-gradient-to-r from-blue-600 to-indigo-600 z-0 transition-all duration-500 rounded-full"
        style={{ width: `calc(${(currentStep / (STEPS.length - 1)) * 100}% - 16px)` }}
      />

      {STEPS.map((step, i) => {
        const done    = i < currentStep;
        const active  = i === currentStep;
        const canClick = i < currentStep;

        return (
          <div key={i} className="flex flex-col items-center z-10 gap-2 relative">
            <button
              onClick={() => canClick && onStepClick(i)}
              disabled={!canClick}
              className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 relative ${
                done
                  ? 'bg-emerald-500 border-emerald-500 text-white cursor-pointer hover:bg-emerald-600 hover:scale-105 active:scale-95 shadow-md shadow-emerald-100'
                  : active
                    ? 'bg-white border-blue-600 text-blue-600 shadow-xl shadow-blue-100 scale-110 ring-4 ring-blue-50'
                    : 'bg-white border-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              {done ? (
                <IoCheckmarkOutline className="w-5 h-5 stroke-[3px]" />
              ) : (
                <step.Icon className="w-[18px] h-[18px]" />
              )}

              {/* Pulsing glow for active step */}
              {active && (
                <span className="absolute -inset-1 rounded-full border border-blue-500/20 animate-ping pointer-events-none" />
              )}
            </button>
            <span className={`text-[10.5px] font-black uppercase tracking-wider hidden sm:block transition-colors duration-200 ${
              active ? 'text-blue-600' : done ? 'text-slate-700' : 'text-slate-400'
            }`}>
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

export default StepProgressBar;
