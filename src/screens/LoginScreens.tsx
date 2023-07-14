import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Logo from "../components/LogoComponents";
import Textbox, { TypeTextBox } from "../components/TextboxComponents";
import OwnButton from "../components/ButtonComponents";
import { IServiceToken, ProxyServiceToken, ServiceToken } from "../utils/GetData";

const LoginScreen = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.credentialsContainer}>
        <View style={styles.textboxsContainer}>
          <Textbox mode={TypeTextBox.CREDENTIALS} onChangeString={(text: string) => setUsername(text)} />
          <Textbox mode={TypeTextBox.PASSWORD} onChangeString={(text: string) => setPassword(text)} />
        </View>
        <OwnButton action={() => {
          let service: IServiceToken = new ProxyServiceToken(new ServiceToken());
          service.getToken({
            username: "damien.venant@outlook.com",
            password: "azerty12345"
          })
        }} name="Connexion" />
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
