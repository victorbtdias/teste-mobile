import styled, { DefaultTheme } from "styled-components/native";

export const SwitchInputContent = styled.View`
  margin: 24px 0 10px 0;
  gap: 12px;
`;

export const SwitchInputLabel = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;

export const SwitchInputCard = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.card};
  border-radius: 24px;
  padding: 8px 8px 8px 16px;
`;

export const SwitchInputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SwitchInputText = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.settingsText};
`;

export const SettingsSwitch = styled.Switch``;
