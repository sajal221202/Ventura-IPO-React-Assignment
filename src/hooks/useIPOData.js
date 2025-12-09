import React, { createContext, useContext, useMemo, useState } from 'react';
import { ipoData } from '../data/ipoData';

const IPOContext = createContext(null);

export function IPOProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [lotsFilter, setLotsFilter] = useState('all');

  const value = useMemo(
    () => ({
      ipos: ipoData,
      theme,
      setTheme,
      searchTerm,
      setSearchTerm,
      dateFilter,
      setDateFilter,
      lotsFilter,
      setLotsFilter,
      getIpoById: (id) => ipoData.find((ipo) => ipo.id === id)
    }),
    [theme, searchTerm, dateFilter, lotsFilter]
  );

  return React.createElement(IPOContext.Provider, { value }, children);
}

export function useIPOData() {
  const context = useContext(IPOContext);
  if (!context) {
    throw new Error('useIPOData must be used within an IPOProvider');
  }
  return context;
}


