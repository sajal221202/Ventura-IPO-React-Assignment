import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Download } from 'lucide-react';
import IPOStatsGrid from '../components/IPOStatsGrid';
import Timeline from '../components/Timeline';
import LoadingSpinner from '../components/LoadingSpinner';
import { Button } from '../components/Button';
import { useIPOData } from '../hooks/useIPOData';

function IPODetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getIpoById } = useIPOData();

  const [ipo, setIpo] = useState(null);
  const [loading, setLoading] = useState(true);
  const touchStartX = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const found = getIpoById(id);
      setIpo(found || null);
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [getIpoById, id]);

  useEffect(() => {
    if (ipo) {
      document.title = `${ipo.companyName} IPO details | Ventura IPO`;
    } else {
      document.title = 'IPO details | Ventura IPO';
    }
  }, [ipo]);

  useEffect(() => {
    const handleTouchStart = (event) => {
      if (event.changedTouches && event.changedTouches.length > 0) {
        touchStartX.current = event.changedTouches[0].clientX;
      }
    };

    const handleTouchEnd = (event) => {
      if (touchStartX.current == null) return;
      const endX = event.changedTouches[0].clientX;
      if (endX - touchStartX.current > 80) {
        navigate(-1);
      }
      touchStartX.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigate]);

  const handleDownload = () => {
    console.log('Download IPO details as PDF');
  };

  if (loading) {
    return <LoadingSpinner fullPage label="Fetching IPO details..." />;
  }

  if (!ipo) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
        <p className="text-sm font-semibold text-slate-900">
          We could not find IPO details for this identifier.
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Please check the URL or return to the IPO list.
        </p>
        <div className="mt-4 flex gap-2">
          <Button variant="secondary" size="sm" onClick={() => navigate(-1)}>
            Go back
          </Button>
          <Button size="sm" onClick={() => navigate('/ipo-list')}>
            View all IPOs
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 pb-10 pt-6 md:pt-8">
      <section className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 md:mt-1"
            aria-label="Go back to previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-slate-400">
              Home &nbsp;/&nbsp; Market watch
            </p>
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold text-white shadow-soft ${ipo.logoColor}`}
              >
                {ipo.symbol}
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                  {ipo.symbol} IPO details
                </h1>
                <p className="mt-0.5 text-sm text-slate-500 md:text-base">
                  {ipo.companyName}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600 shadow-soft sm:hidden"
            aria-label="Download IPO details as PDF"
          >
            <Download className="h-4 w-4" />
          </button>
          <Button
            size="md"
            className="animate-softPulse"
            onClick={() => {
              console.log('Apply now clicked');
            }}
          >
            Apply now
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-stretch">
        <IPOStatsGrid ipo={ipo} />
        <Timeline events={ipo.timeline} />
      </section>

      <section className="mt-6 rounded-card bg-white/90 p-4 shadow-soft ring-1 ring-slate-100 md:mt-8 md:p-6 lg:mt-10 dark:bg-slate-900/90 dark:ring-slate-800">
        <h2 className="text-lg font-semibold text-slate-900 md:text-xl dark:text-slate-50">
          About the company
        </h2>
        <div className="mt-3 space-y-3 text-sm text-slate-600 md:mt-4 md:space-y-4 md:text-base dark:text-slate-300">
          {ipo.about.map((paragraph, index) => (
            <p key={index} className="text-justify leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}

export default IPODetails;


