import styled, { DefaultTheme } from "styled-components/native";

export const FormContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.secondary};
  padding: 24px;
`;

export const ErrorText = styled.Text`
  color: #ef4444;
  font-size: 13px;
  margin-bottom: 12px;
`;
