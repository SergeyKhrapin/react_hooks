import { useContext } from "react";
import {CountryContext} from "./Country";

export const CountryList = ({id}: any) => {
  const {countries} = useContext(CountryContext);
  
  return (
    <>
      <ul>
        {countries.map(({name, alpha2Code}: any) => (
          <li key={alpha2Code }>{name}</li>
        ))}
      </ul>
    </>
  );
};
