import React from "react";
import { View, Text } from "react-native";

type ErrorProps = {
  message: string,
  isVisible: boolean
};

const ErrorComponent = (props: ErrorProps) => {
  const displayValue: any = props.isVisible ? "flex" : "none";
  return (
    <View style={{ display: displayValue }}>
      <Text>
        {props.message}
      </Text>
    </View>
  );
};

export default ErrorComponent;
