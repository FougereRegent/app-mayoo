import React from "react";
import { View, Image, Text, StyleSheet } from "react-native"

const Logo = () => {
  return (
    <View
      style={styles.container}>
      <Image source={require("../../assets/mayoo/mayoo-logo.png")}
        style={styles.img}
      />
      <Text
        style={styles.text}>Mayoo</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 120,
  },
  img: {
    width: 65,
    height: 65,
  },
  text: {
    marginTop: 10,
    color: 'gray',
    textAlign: 'center',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 'bold'
  }
})

export default Logo;
