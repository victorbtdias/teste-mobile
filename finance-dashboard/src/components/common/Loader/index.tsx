import React from "react";
import { ActivityIndicator } from "react-native";
import { LoaderContainer } from "./styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <ActivityIndicator size="large" />
    </LoaderContainer>
  );
};

export default Loader;
