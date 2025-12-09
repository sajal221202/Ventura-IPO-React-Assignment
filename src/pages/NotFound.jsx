import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Page not found | Ventura IPO';
  }, []);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
        404 error
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-slate-500 md:text-base">
        The page you are looking for doesn&apos;t exist or may have been moved.
      </p>
      <div className="mt-5 flex gap-2">
        <Button variant="secondary" size="sm" onClick={() => navigate(-1)}>
          Go back
        </Button>
        <Button size="sm" onClick={() => navigate('/ipo-list')}>
          Go to IPO list
        </Button>
      </div>
    </main>
  );
}

export default NotFound;


