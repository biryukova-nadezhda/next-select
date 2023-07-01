import { makeAutoObservable } from 'mobx';
import TaskStore from './TaskStore';
import CountryStore from './CountryStore';

class RootStore {
  taskStore = new TaskStore();
  countryStore = new CountryStore();

  constructor() {
    makeAutoObservable(this);
  };
};

export default RootStore;