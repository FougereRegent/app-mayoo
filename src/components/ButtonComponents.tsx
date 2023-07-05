import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

type ButtonProps = {
  name: string,
  action: Function
}

const OwnButton = (props: ButtonProps) => {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        props.action();
      }}>
      <View>
        <Text style={styles.text}>
          {props.name.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white'
  },
  button: {
    width: 200,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'rgba(0.0, 0.0, 0.0, 0.07)',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default OwnButton;
