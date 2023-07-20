import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";


type propsAllergeneComponents = {
  name: string,
  path: number
};

const AllergeneIconComponents = (props: propsAllergeneComponents) => {


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={props.path} />
      <View style={styles.containerText}>
        <Text style={styles.text}>
          {props.name.toUpperCase()}
        </Text>
      </View>
    </View>
  );

};


export default AllergeneIconComponents;

const styles: any = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    height: 85,
    alignItems: "center"
  },
  image: {
    width: 48,
    height: 48
  },
  containerText: {
    backgroundColor: "#2090f4",
    width: 80,
    padding: 5,
    borderRadius: 20
  },
  text: {
    color: "white",
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center"
  }
});
