import styled, { DefaultTheme } from "styled-components/native";

export const HomeContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.secondary};
`;

export const SectionContainer = styled.View`
  padding: 0 24px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primaryText};
  margin-bottom: 16px;
`;
