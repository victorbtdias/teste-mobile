import { Feather } from "@expo/vector-icons";
import { Fragment } from "react";
import { useThemeContext } from "../../../../contexts/ThemeContext";
import { useCurrency } from "../../../../contexts/CurrencyContext";
import {
  CurrencyCode,
  CurrencyFlag,
  CurrencyOption,
  CurrencySelectorCard,
  CurrencySelectorContent,
  CurrencySelectorLabel,
  Divider,
  FlagImage,
} from "./styled";

const usFlag = require("../../../../../assets/us.png");
const brFlag = require("../../../../../assets/br.png");

export function CurrencySelector() {
  const { isDark } = useThemeContext();
  const { currency, toggleCurrency } = useCurrency();

  const currencies = [
    { code: "USD", flagUrl: usFlag },
    { code: "BRL", flagUrl: brFlag },
  ];

  return (
    <CurrencySelectorContent>
      <CurrencySelectorLabel>Currency</CurrencySelectorLabel>
      <CurrencySelectorCard>
        {currencies.map((item, index) => (
          <Fragment key={item.code}>
            <CurrencyOption
              onPress={() => currency !== item.code && toggleCurrency()}
              activeOpacity={0.7}
            >
              <CurrencyFlag>
                <FlagImage source={item.flagUrl} />
                <CurrencyCode>{item.code}</CurrencyCode>
              </CurrencyFlag>
              {currency === item.code && (
                <Feather
                  name="check"
                  size={24}
                  color={!isDark ? "#000000" : "#ffffff"}
                />
              )}
            </CurrencyOption>
            {index < currencies.length - 1 && <Divider />}
          </Fragment>
        ))}
      </CurrencySelectorCard>
    </CurrencySelectorContent>
  );
}
