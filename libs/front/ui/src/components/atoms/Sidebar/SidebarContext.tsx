import React, { createContext, useContext, useState } from 'react';

type SidebarContextProps = {
  currentPage: string | null;
  setCurrentPage: (page: string) => void;
};

type SidebarProviderProps = {
  children?: React.ReactNode;
};

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export default function SidebarProvider({ children }: SidebarProviderProps) {
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  return <SidebarContext.Provider value={{ currentPage, setCurrentPage }}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) throw new Error('useSidebar must be used within a SidebarProvider');

  return context;
}
