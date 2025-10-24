import styled, { DefaultTheme } from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.primary};
  padding: 14px 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

export const ButtonText = styled.Text`
  color: #ffffffff;
  font-size: 16px;
  font-weight: 600;
`;
