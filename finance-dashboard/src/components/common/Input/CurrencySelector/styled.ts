import styled, { DefaultTheme } from "styled-components/native";

export const CurrencySelectorContent = styled.View`
  margin: 24px 0 10px 0;
  gap: 12px;
`;

export const CurrencySelectorLabel = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;

export const CurrencySelectorCard = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.card};
  border-radius: 24px;
  padding: 16px 0;
`;

export const CurrencyOption = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
`;

export const CurrencyFlag = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const FlagImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 999px;
`;

export const CurrencyCode = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.settingsText};
`;

export const Divider = styled.View`
  height: 2px;
  background-color: #cacaca;
  margin: 0 20px;
`;
