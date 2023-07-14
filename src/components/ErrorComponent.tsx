import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ErrorProps = {
  message: string,
  isVisible: boolean
};

const ErrorComponent = (props: ErrorProps) => {
  const displayValue: any = props.isVisible ? "flex" : "none";
  return (
    <View style={{ display: displayValue }}>
      <Text style={style.textStyle}>
        {props.message}
      </Text>
    </View>
  );
};


const style: any = StyleSheet.create(
  {
    textStyle: {
      color: "red",
      fontSize: 16
    }
  }
);

export default ErrorComponent;
