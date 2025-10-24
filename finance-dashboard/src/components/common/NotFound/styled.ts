import styled, { DefaultTheme } from "styled-components/native";

export const NotFoundContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const NotFoundTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondaryText};
`;
