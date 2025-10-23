import styled, { DefaultTheme } from "styled-components/native";

interface IconProps {
  bgColor: string;
}

interface AmountProps {
  color: string;
}

export const CardContainer = styled.View`
  height: 78px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.card};
  padding: 17px;
  border: 1px ${({ theme }: { theme: DefaultTheme }) => theme.colors.border};
  border-radius: 12px;
  margin-bottom: 12px;
  shadow-color: #0000000d;
  shadow-offset: 0px 1px;
  shadow-opacity: 1;
  shadow-radius: 2px;
  elevation: 2;
`;

export const CardIcon = styled.View<IconProps>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ bgColor }: IconProps) => bgColor};
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const CardInfo = styled.View`
  flex: 1;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primaryText};
  margin-bottom: 4px;
`;

export const CardComplement = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondaryText};
`;

export const CardValue = styled.Text<AmountProps>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ color }: AmountProps) => color};
`;
