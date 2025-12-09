import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import clsx from 'clsx';
import NavBar from './components/NavBar';
import LoadingSpinner from './components/LoadingSpinner';
import { useIPOData } from './hooks/useIPOData';

const IPOList = lazy(() => import('./pages/IPOList'));
const IPODetails = lazy(() => import('./pages/IPODetails'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const { theme } = useIPOData();

  return (
    <div className={clsx(theme === 'dark' && 'dark')}>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-50">
        <BrowserRouter>
          <NavBar />
          <Suspense fallback={<LoadingSpinner fullPage label="Loading page..." />}>
            <Routes>
              <Route path="/" element={<Navigate to="/ipo-list" replace />} />
              <Route path="/ipo-list" element={<IPOList />} />
              <Route path="/ipo-details/:id" element={<IPODetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;


