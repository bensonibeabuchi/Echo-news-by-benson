import React, { createContext, useContext, useState } from 'react';

const CountryContext = createContext();

export const useCountryContext = () => useContext(CountryContext);

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState("us");
  const [activeCountry, setActiveCountry] = useState("us");

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
    setActiveCountry(newCountry);
  };

  return (
    <CountryContext.Provider value={{ country, activeCountry, handleCountryChange }}>
      {children}
    </CountryContext.Provider>
  );
};
