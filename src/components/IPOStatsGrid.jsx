const statFields = [
  { key: 'issueSize', label: 'Issue size' },
  { key: 'priceRange', label: 'Price range' },
  { key: 'minimumAmount', label: 'Minimum amount' },
  { key: 'lotSizeLabel', label: 'Lot size' },
  { key: 'issueDates', label: 'Issue dates' },
  { key: 'listedOn', label: 'Listed on' },
  { key: 'listedPrice', label: 'Listed price' },
  { key: 'listingGainsLabel', label: 'Listing gains' }
];

function renderStatValue(fieldKey, value) {
  if (fieldKey !== 'listingGainsLabel') {
    return value;
  }

  const match = typeof value === 'string' ? value.match(/^(.*?)(\s*\([^)]*\))$/) : null;

  if (!match) {
    return value;
  }

  const mainText = match[1].trim();
  const percentText = match[2];

  return (
    <>
      {mainText && <span>{mainText} </span>}
      <span className="text-rose-600">{percentText}</span>
    </>
  );
}

function IPOStatsGrid({ ipo }) {
  return (
    <section className="glass-card h-full px-4 py-4 md:px-6 md:py-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-900 md:text-lg">
          IPO details
        </h2>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-emerald-700">
          {ipo.statusLabel}
        </span>
      </div>

      <dl className="grid grid-cols-2 gap-3 text-[11px] md:grid-cols-4 md:gap-4 md:text-xs lg:text-sm">
        {statFields.map((field) => (
          <div
            key={field.key}
            className="rounded-2xl bg-slate-50 px-3 py-2.5 md:px-3.5 md:py-3"
          >
            <dt className="mb-1 text-[10px] font-medium uppercase tracking-wide text-slate-400">
              {field.label}
            </dt>
            <dd className="text-sm font-semibold text-slate-900 md:text-base">
              {renderStatValue(field.key, ipo[field.key])}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default IPOStatsGrid;


