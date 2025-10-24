import React from "react";
import { Modal, FlatList, GestureResponderEvent } from "react-native";
import { PrimaryButton } from "../Button";
import {
  ModalContainer,
  ModalContent,
  ModalOption,
  OptionText,
} from "./styled";

interface Option {
  id: string;
  name: string;
}

interface SelectModalProps {
  visible: boolean;
  options: Option[];
  onPress: (item: Option) => void;
  onClose: (event?: GestureResponderEvent) => void;
}

export function SelectModal({
  visible,
  options,
  onPress,
  onClose,
}: SelectModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <ModalContainer>
        <ModalContent>
          <FlatList
            data={options}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ModalOption onPress={() => onPress(item)}>
                <OptionText>{item.name}</OptionText>
              </ModalOption>
            )}
          />

          <PrimaryButton label="Close" onPress={onClose} />
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}
