import styled, { DefaultTheme } from "styled-components/native";

export const InputLabel = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primaryText};
  margin-bottom: 8px;
`;

export const TextInput = styled.TextInput`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.card};
  border: 1px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.colors.border};
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 16px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primaryText};
  margin-bottom: 10px;
`;
