export interface Continent {
  code: string;
  name: string;
}

export interface Language {
  code: string;
  name: string;
}

export interface Country {
  code: string;
  name: string;
  native: string;
  capital: string;
  emoji: string;
  currency: string;
  continent: Continent;
  languages: Language[];
}

export interface CountriesData {
  countries: Country[];
}

export interface CountryData {
  country: Country;
}

export interface ContinentsData {
  continents: Continent[];
}
