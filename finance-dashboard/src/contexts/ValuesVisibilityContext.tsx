import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ValuesVisibilityContextData {
  showValues: boolean;
  toggleValuesVisibility: () => void;
}

const ValuesVisibilityContext = createContext<ValuesVisibilityContextData>({
  showValues: true,
  toggleValuesVisibility: () => {},
});

export const ValuesVisibilityProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [showValues, setShowValues] = useState(true);

  const toggleValuesVisibility = () => {
    setShowValues((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem("showValues");
        if (value !== null) {
          setShowValues(value === "true");
        }
      } catch (error) {
        console.error("Erro ao carregar showValues:", error);
      }
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("showValues", String(showValues)).catch((error) =>
      console.error("Erro ao salvar preferência de visibilidade:", error)
    );
  }, [showValues]);

  return (
    <ValuesVisibilityContext.Provider
      value={{ showValues, toggleValuesVisibility }}
    >
      {children}
    </ValuesVisibilityContext.Provider>
  );
};

export const useValuesVisibility = () => useContext(ValuesVisibilityContext);
