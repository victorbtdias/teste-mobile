import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CurrencyContextData {
  currency: "USD" | "BRL";
  toggleCurrency: () => void;
}

const CurrencyContext = createContext<CurrencyContextData>({
  currency: "USD",
  toggleCurrency: () => {},
});

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currency, setCurrency] = useState<"USD" | "BRL">("USD");

  const toggleCurrency = () =>
    setCurrency((prev) => (prev === "USD" ? "BRL" : "USD"));

  useEffect(() => {
    (async () => {
      try {
        const storedCurrency = await AsyncStorage.getItem("currency");
        if (storedCurrency === "USD" || storedCurrency === "BRL") {
          setCurrency(storedCurrency);
        }
      } catch (error) {
        console.error("Erro ao carregar moeda:", error);
      }
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("currency", currency).catch((error) =>
      console.error("Erro ao salvar moeda:", error)
    );
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
