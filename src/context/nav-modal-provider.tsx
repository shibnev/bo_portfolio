'use client';

import { ReactNode, Dispatch, createContext, useContext, useState, SetStateAction } from 'react';

interface NavModalContextType {
  isNavOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}

const IsNavModalOpen = createContext<NavModalContextType | undefined>(undefined);

function NavModalProvider({ children }: { children: ReactNode }) {
  const [isNavOpen, setNavOpen] = useState<boolean>(false);

  return (
    <IsNavModalOpen.Provider value={{ isNavOpen, setNavOpen }}>
      {children}
    </IsNavModalOpen.Provider>
  )
}

function useIsNavModal() {
  return useContext(IsNavModalOpen);
}

export { NavModalProvider, useIsNavModal };
