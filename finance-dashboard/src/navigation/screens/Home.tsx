import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
`;

const Text = styled.Text`
  font-size: 14px;
`;

export function Home() {
  return (
    <Container>
      <Text>Home Screen</Text>
    </Container>
  );
}
