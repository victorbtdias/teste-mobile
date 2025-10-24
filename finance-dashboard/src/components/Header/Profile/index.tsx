import {
  ProfileHeaderContainer,
  ProfileImage,
  ProfileSection,
  ProfileUserName,
} from "./styled";

const userImage = require("../../../../assets/user.png");

interface HeaderProps {
  name?: string;
}

export function ProfileHeader({ name }: HeaderProps) {
  return (
    <ProfileHeaderContainer>
      <ProfileSection>
        <ProfileImage source={userImage} />
        <ProfileUserName>{name}</ProfileUserName>
      </ProfileSection>
    </ProfileHeaderContainer>
  );
}
