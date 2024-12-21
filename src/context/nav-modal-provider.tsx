'use client';

import { children } from '@/types';
import { Dispatch, createContext, useContext, useState, SetStateAction } from 'react';

interface INavModalContextType {
  isNavOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}

const IsNavModalOpen = createContext<INavModalContextType | undefined>(undefined);

interface INavModalProviderProps {
  children: children;
}

function NavModalProvider({ children }: INavModalProviderProps) {
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
