import React from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';

function Timeline({ events }) {
  const today = new Date();

  const getState = (index) => {
    const eventDate = new Date(events[index].isoDate);
    const prevDate =
      index > 0 ? new Date(events[index - 1].isoDate) : eventDate;
    const isCompleted = today > eventDate;
    const isActive = !isCompleted && today >= prevDate && today <= eventDate;
    return { isCompleted, isActive };
  };

  return (
    <section className="glass-card h-full flex flex-col px-4 py-4 md:px-6 md:py-5">
      <h2 className="mb-4 text-base font-semibold text-slate-900 md:text-lg">
        IPO timeline
      </h2>

      <div className="relative hidden md:block flex-1">
        <div className="pointer-events-none absolute left-[6%] right-[6%] top-4 h-[2px] rounded-full bg-emerald-400" />

        <ol className="relative flex items-start justify-between gap-4">
          {events.map((event, index) => {
            const { isCompleted, isActive } = getState(index);

            return (
              <li
                key={event.key}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={clsx(
                    'mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm',
                    isActive && 'ring-2 ring-emerald-300 ring-offset-2 ring-offset-white'
                  )}
                  aria-hidden="true"
                >
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-xs font-semibold text-slate-900">
                  {event.label}
                </p>
                <p className="text-[11px] text-slate-500">{event.dateLabel}</p>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="md:hidden flex-1">
        <ol className="flex flex-col gap-3">
          {events.map((event, index) => {
            const { isCompleted, isActive } = getState(index);
            const isLast = index === events.length - 1;

            return (
              <li key={event.key} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={clsx(
                      'flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm',
                      isActive && 'ring-2 ring-emerald-300 ring-offset-2 ring-offset-white'
                    )}
                    aria-hidden="true"
                  >
                    <Check className="h-4 w-4" />
                  </div>
                  {!isLast && (
                    <div className="mt-1 h-8 w-px bg-emerald-100" aria-hidden="true" />
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-semibold text-slate-900">
                    {event.label}
                  </p>
                  <p className="text-[11px] text-slate-500">{event.dateLabel}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Timeline;




