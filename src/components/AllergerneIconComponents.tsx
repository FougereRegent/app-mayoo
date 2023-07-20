import React from "react";
import { View, Image, StyleSheet } from "react-native";


type propsAllergeneComponents = {
  name: string,
  pathUrl: string
};

const AllergeneIconComponents = (props: propsAllergeneComponents) => {


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require(props.pathUrl)} />
    </View>
  );

};


export default AllergeneIconComponents;

const styles: any = StyleSheet.create({
  container: {

  },
  image: {

  }
});
