import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
  background-color: #00000080;
`;

export const ModalContent = styled.View`
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  max-height: 60%;
`;

export const ModalOption = styled.TouchableOpacity`
  padding: 12px;
  border-bottom-width: 1px;
  border-color: #e5e7eb;
`;

export const OptionText = styled.Text`
  font-size: 16px;
`;
