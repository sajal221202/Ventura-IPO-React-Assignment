import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Layers } from 'lucide-react';
import clsx from 'clsx';

const _ipoCardDeps = [Link, ArrowRight, CalendarDays, Layers];
void _ipoCardDeps;

function IPOCard({ ipo, index }) {
  return (
    <Link
      to={`/ipo-details/${ipo.id}`}
      className={clsx(
        'glass-card group flex h-full flex-col gap-4 p-4 md:p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500',
        'animate-fadeInUp'
      )}
      style={{ animationDelay: `${index * 60}ms` }}
      aria-label={`${ipo.companyName} IPO details`}
    >
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={clsx(
                'flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold text-white shadow-soft',
                ipo.logoColor
              )}
            >
              {ipo.symbol}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{ipo.companyName}</p>
              <p className="text-xs text-slate-500">{ipo.sector}</p>
            </div>
          </div>
          <span
            className={clsx(
              'rounded-full px-3 py-1 text-[11px] font-medium',
              ipo.status === 'ongoing'
                ? 'bg-emerald-50 text-emerald-700'
                : ipo.status === 'upcoming'
                ? 'bg-amber-50 text-amber-600'
                : 'bg-slate-100 text-slate-500'
            )}
          >
            {ipo.statusLabel}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-slate-400" />
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wide text-slate-400">
                Issue period
              </span>
              <span className="font-medium text-slate-800">{ipo.issueDates}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-slate-400" />
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wide text-slate-400">
                Number of lots
              </span>
              <span className="font-semibold text-slate-800">
                {ipo.numberOfLots} lots
              </span>
            </div>
          </div>
        </div>

        <div className="mt-1 flex flex-wrap items-end justify-between gap-3 border-t border-dashed border-slate-100 pt-3 text-xs md:text-sm">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-slate-400">
              Issue size
            </p>
            <p className="font-semibold text-slate-900">{ipo.issueSize}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wide text-slate-400">
              Price range
            </p>
            <p className="font-semibold text-slate-900">{ipo.priceRange}</p>
          </div>
          <div className="flex items-center gap-2 text-emerald-600">
            <span className="text-xs font-semibold">View details</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-[11px] md:text-xs">
        <div className="flex flex-col">
          <span className="uppercase tracking-wide text-slate-400">Min invest</span>
          <span className="font-semibold text-slate-900">{ipo.minInvestment}</span>
        </div>
        <div className="text-right">
          <span className="uppercase tracking-wide text-slate-400">
            Shares / lots
          </span>
          <p className="font-semibold text-slate-900">
            {ipo.sharesPerLot} shares / {ipo.numberOfLots} lots
          </p>
        </div>
      </div>
    </Link>
  );
}

export default IPOCard;


