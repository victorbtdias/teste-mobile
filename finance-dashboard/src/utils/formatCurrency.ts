export function formatCurrency(value: number, currency: "USD" | "BRL") {
  const USD_TO_BRL = 5.39; //Foi considerado a cotação do dólar no dia 23/10. Em um caso real, eu utilizaria uma api para conversão de moedas.

  const convertedValue = currency === "BRL" ? value * USD_TO_BRL : value;

  const locale = currency === "USD" ? "en-US" : "pt-BR";
  const symbol = currency === "USD" ? "$" : "R$";

  return `${symbol}${convertedValue.toLocaleString(locale, {
    minimumFractionDigits: 2,
  })}`;
}
