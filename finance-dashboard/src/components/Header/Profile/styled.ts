import styled, { DefaultTheme } from "styled-components/native";

export const ProfileHeaderContainer = styled.View`
  padding: 24px;
`;

export const ProfileSection = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 26px;
`;

export const ProfileImage = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 999px;
`;

export const ProfileUserName = styled.Text`
  font-size: 20px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.lightText};
`;
