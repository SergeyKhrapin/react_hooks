import { useState, useEffect, createContext} from "react";
import { CountryList } from "./CountryList";

interface ICountryContext {
  countries: []
}

export const CountryContext = createContext<ICountryContext>({countries: []});

const Country = ({children}: any) => {
  // console.log("Country");
  
  const [countries, setCountries] = useState<[]>([]); // ***
  const [value, setValue] = useState<string>("");
  
  useEffect(() => {
    async function fetchCountries(value: string) {
      if (value === "") return;
      const data = await fetch(`https://restcountries.com/v2/name/${value}`);
      const list = await data.json();
      setCountries(list);
    }
    fetchCountries(value);
  }, [value]);

  return (
    <CountryContext.Provider value={{countries}}>
      <h1>Countries</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <CountryList id={value} />
      {children}
    </CountryContext.Provider>
  );
};

export default Country;
