import React, { useEffect, useMemo } from 'react';
import { CalendarDays, Filter, Layers, Search } from 'lucide-react';
import IPOCard from '../components/IPOCard';
import { useIPOData } from '../hooks/useIPOData';

function IPOList() {
  const {
    ipos,
    searchTerm,
    setSearchTerm,
    dateFilter,
    setDateFilter,
    lotsFilter,
    setLotsFilter
  } = useIPOData();

  useEffect(() => {
    document.title = 'IPO list | Ventura IPO';
  }, []);

  const filteredIpos = useMemo(
    () =>
      ipos.filter((ipo) => {
        const matchesSearch =
          !searchTerm ||
          ipo.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ipo.symbol.toLowerCase().includes(searchTerm.toLowerCase());

        let matchesDate = true;
        if (dateFilter === 'upcoming') {
          matchesDate = ipo.status === 'upcoming';
        } else if (dateFilter === 'ongoing') {
          matchesDate = ipo.status === 'ongoing';
        } else if (dateFilter === 'closed') {
          matchesDate = ipo.status === 'closed' || ipo.status === 'listed';
        }

        let matchesLots = true;
        if (lotsFilter === 'lt5') {
          matchesLots = ipo.numberOfLots < 5;
        } else if (lotsFilter === '5to10') {
          matchesLots = ipo.numberOfLots >= 5 && ipo.numberOfLots <= 10;
        } else if (lotsFilter === 'gt10') {
          matchesLots = ipo.numberOfLots > 10;
        }

        return matchesSearch && matchesDate && matchesLots;
      }),
    [dateFilter, ipos, lotsFilter, searchTerm]
  );

  return (
    <main className="mx-auto max-w-6xl px-4 pb-10 pt-6 md:pt-8">
      <section className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-600">
            Market watch
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900 md:text-3xl">
            IPO list
          </h1>
          <p className="mt-1 text-sm text-slate-500 md:text-base">
            Track upcoming and ongoing IPOs. Tap a card to see full IPO details.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex w-full items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm shadow-sm md:w-72">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="search"
              placeholder="Search by name or symbol"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-8 w-full border-0 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
              <CalendarDays className="h-4 w-4 text-slate-400" />
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="bg-transparent text-xs font-medium focus:outline-none"
                aria-label="Filter IPOs by issue date status"
              >
                <option value="all">All dates</option>
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
              <Layers className="h-4 w-4 text-slate-400" />
              <select
                value={lotsFilter}
                onChange={(e) => setLotsFilter(e.target.value)}
                className="bg-transparent text-xs font-medium focus:outline-none"
                aria-label="Filter IPOs by number of lots"
              >
                <option value="all">All lots</option>
                <option value="lt5">&lt; 5 lots</option>
                <option value="5to10">5 - 10 lots</option>
                <option value="gt10">&gt; 10 lots</option>
              </select>
            </div>

            <span className="hidden items-center gap-1 rounded-full bg-slate-900 px-3 py-1.5 text-[11px] font-medium text-slate-50 md:inline-flex">
              <Filter className="h-3 w-3" />
              Filters
            </span>
          </div>
        </div>
      </section>

      {filteredIpos.length === 0 ? (
        <section className="glass-card flex flex-col items-center justify-center py-10 text-center">
          <p className="text-sm font-medium text-slate-900">
            No IPOs match your filters.
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Try changing the date or lots filter to see more opportunities.
          </p>
        </section>
      ) : (
        <section
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="IPO list"
        >
          {filteredIpos.map((ipo, index) => (
            <IPOCard key={ipo.id} ipo={ipo} index={index} />
          ))}
        </section>
      )}
    </main>
  );
}

export default IPOList;


