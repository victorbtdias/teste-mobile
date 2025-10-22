import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
`;

const Text = styled.Text`
  font-size: 14px;
`;

export function Profile() {
  return (
    <Container>
      <Text>Profile Screen</Text>
    </Container>
  );
}
