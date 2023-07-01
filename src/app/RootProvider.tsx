'use client';

import { createContext } from 'react';
import RootStore from '@/stores/RootStore';

export const RootStoreContext = createContext({} as RootStore);

interface RootProviderProps {
  children: React.ReactNode
};

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return (
    <RootStoreContext.Provider value={ new RootStore }>
      { children }
    </RootStoreContext.Provider>
  )
};

export default RootProvider;