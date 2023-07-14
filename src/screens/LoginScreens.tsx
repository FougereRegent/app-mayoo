import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Logo from "../components/LogoComponents";
import Textbox, { TypeTextBox } from "../components/TextboxComponents";
import OwnButton from "../components/ButtonComponents";
import { IServiceToken, ProxyServiceToken, ServiceToken } from "../utils/GetData";


//TODO : Change arrow function to class.
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
        <OwnButton action={async () => {

          let service: IServiceToken = new ProxyServiceToken(new ServiceToken());
          console.log(process.env);

          try {
              let token = await service.getToken({
                username: username,
                password: password
              });

              console.log(token);
          }
          catch(error) {
            console.log(error); 
          }

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
