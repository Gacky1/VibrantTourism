import {
  IoCompassOutline, IoMapOutline, IoSearchOutline,
  IoScaleOutline, IoCheckmarkCircleOutline,
} from 'react-icons/io5';

const STEPS = [
  { label: 'Interest',    Icon: IoCompassOutline  },
  { label: 'Destination', Icon: IoMapOutline       },
  { label: 'Explore',     Icon: IoSearchOutline    },
  { label: 'Compare',     Icon: IoScaleOutline     },
  { label: 'Book',        Icon: IoCheckmarkCircleOutline },
];

const StepProgressBar = ({ currentStep, onStepClick }) => (
  <div className="w-full max-w-2xl mx-auto mb-10 px-2">
    <div className="flex items-center justify-between relative">
      {/* connecting line */}
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 z-0" />
      <div
        className="absolute top-5 left-0 h-0.5 bg-secondary z-0 transition-all duration-500"
        style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
      />

      {STEPS.map((step, i) => {
        const done    = i < currentStep;
        const active  = i === currentStep;
        const canClick = i < currentStep;

        return (
          <div key={i} className="flex flex-col items-center z-10 gap-1.5">
            <button
              onClick={() => canClick && onStepClick(i)}
              disabled={!canClick}
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                done
                  ? 'bg-secondary border-secondary text-white cursor-pointer hover:bg-blue-700'
                  : active
                    ? 'bg-white border-secondary text-secondary shadow-md shadow-blue-100'
                    : 'bg-white border-gray-200 text-gray-300 cursor-default'
              }`}
            >
              <step.Icon className="w-4.5 h-4.5" />
            </button>
            <span className={`text-[10px] font-semibold uppercase tracking-wide hidden sm:block ${
              active ? 'text-secondary' : done ? 'text-gray-dark' : 'text-gray-300'
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
