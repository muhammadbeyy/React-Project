import React, { useState, useContext, useEffect } from "react";
//import { useCallback } from "react";

const url =
  "https://api.alquran.cloud/v1/ayah/262/editions/quran-uthmani,en.asad";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [surahNumber, setSurahNumber] = useState(1);
  const [surahData, setSurahData] = useState(null);

  return (
    <AppContext.Provider
      value={{
        loading,
        surahNumber,
        setSurahNumber,
        surahData,
        setSurahData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
