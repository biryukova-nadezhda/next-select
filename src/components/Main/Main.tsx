'use client';

import { useContext, useEffect } from 'react';
import { RootStoreContext } from '@/app/RootProvider';
import { observer } from 'mobx-react-lite';
import style from './Main.module.css';
import SelectReact from '../SelectReact/SelectReact';


const Main: React.FC = observer(() => {
  const rootStore = useContext(RootStoreContext);
  const { countryStore } = rootStore;

  useEffect(() => {
    countryStore.getAllCountriesAction();
  }, []);

  return (
    <main className={ style.main }>
      <SelectReact options={ countryStore.getOptions() } />
    </main>
  )
});

export default Main;