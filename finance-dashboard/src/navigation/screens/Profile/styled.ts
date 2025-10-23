import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const ProfileContainer = styled(LinearGradient).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    colors: [theme.colors.primary, theme.colors.gradient],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 },
  })
)`
  flex: 1;
`;

export const ProfileContent = styled.View`
  flex: 1;
  padding: 24px;
`;

export const ProfileSectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
`;
