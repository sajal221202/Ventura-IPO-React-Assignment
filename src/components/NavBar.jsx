import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, SunMedium, Moon } from 'lucide-react';
import clsx from 'clsx';
import { Button } from './Button';
import { useIPOData } from '../hooks/useIPOData';

const navItems = [
  { label: 'Home', to: '/ipo-list' },
  { label: 'Market watch', to: '/ipo-list' }
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useIPOData();
  const location = useLocation();

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const desktopLinkClass = ({ isActive }) =>
    clsx(
      'text-sm font-medium tracking-wide px-2 py-1 rounded-full transition-colors',
      isActive
        ? 'text-slate-900 bg-slate-100'
        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
    );

  const isDetailsPage = location.pathname.startsWith('/ipo-details');

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <Link to="/ipo-list" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-600 text-xs font-semibold text-white shadow-soft">
              VS
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                Ventura Securities
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-500">
                IPO desk
              </span>
            </div>
          </Link>
          {!isDetailsPage && (
            <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 md:inline-flex">
              React assignment
            </span>
          )}
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} end className={desktopLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? (
                <SunMedium className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <Button variant="secondary" size="sm">
              Login
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? (
              <SunMedium className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end
                className={({ isActive }) =>
                  clsx(
                    'rounded-xl px-3 py-2 text-sm font-medium',
                    isActive
                      ? 'bg-slate-900 text-slate-50'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  )
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;


