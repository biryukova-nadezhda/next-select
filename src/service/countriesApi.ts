import { ICountry } from "@/stores/CountryStore";
const API_URL = 'http://localhost:3001/countries';

export const getAllCountries = async (): Promise<ICountry[]> => {
  const res = await fetch(API_URL, {cache: 'no-store'});
  const countries = await res.json();
  return countries;
};