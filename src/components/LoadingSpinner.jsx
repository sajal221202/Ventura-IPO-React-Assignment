import React from 'react';
import clsx from 'clsx';

function LoadingSpinner({ fullPage = false, label = 'Loading...' }) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center px-4',
        fullPage ? 'min-h-[60vh]' : 'py-8'
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-soft">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
        <p className="text-sm font-medium text-slate-600">{label}</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;


