import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Logo from "../components/LogoComponents";
import Textbox, { TypeTextBox } from "../components/TextboxComponents";
import OwnButton from "../components/ButtonComponents";

const LoginScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.credentialsContainer}>
        <View style={styles.textboxsContainer}>
          <Textbox mode={TypeTextBox.CREDENTIALS} />
          <Textbox mode={TypeTextBox.PASSWORD} />
        </View>
        <OwnButton action={() => props.navigation.navigate('test')} name="Connexion" />
      </View>
    </View>
  );
};


const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  },
  credentialsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
  },
  textboxsContainer: {
    paddingVertical: 2,
    marginBottom: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 80
  }
});

export default LoginScreen;
