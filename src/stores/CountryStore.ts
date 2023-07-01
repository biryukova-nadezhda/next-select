import { IOption } from '@/components/SelectReact/SelectReact';
import { getAllCountries } from '@/service/countriesApi';
import { makeAutoObservable, runInAction } from 'mobx';

export interface ICountry {
  id: string,
  country: string,
  capital: string
};

class CountryStore {
  countiesList: ICountry[] = [];
  countriesOptionsList: IOption[] = [];
  
  constructor () {
    makeAutoObservable(this);
  };

  getAllCountriesAction = async () => {
    try {
      const counties = await getAllCountries();
      runInAction(() => {
        this.countiesList = counties;
      });
    } catch (e) {
      console.log('getAllCountries:' + e);
    };
  }

  getOptions = () => {
    this.countiesList.map((country) => {
      this.countriesOptionsList.push({
        value: country.id,
        label: country.country
      })
    });

    return this.countriesOptionsList;
  }
};

export default CountryStore;