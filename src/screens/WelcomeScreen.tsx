import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Logo from "../components/LogoComponents";
import { TextBox, Title, TitleType } from "../components/TextComponents";
import OwnButton from "../components/ButtonComponents";
import { NavigationProp } from "@react-navigation/native";


const WelcomeScreen = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.containerTitle}>
        <Title TypeTitle={TitleType.H1}>
          Premiere Connexions
        </Title>
      </View>
      <View style={styles.containerText}>
        <TextBox>
          Veuillez indiquer votre  profil de préférences alimentaires afin que nous puissons tenir
          compte de vos goûts et restrictions alimentaires
        </TextBox>
      </View>
      <View style={styles.containerButton}>
        <OwnButton name="Suivant" action={() => {
          navigation.navigate("AllergeneScreen")
        }} />
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6847",
    justifyContent: "center",
    alignItems: "center"
  },
  containerTitle: {
    marginTop: 10
  },
  containerText: {
    marginTop: 10
  },
  containerButton: {
    marginTop: 15
  }
});

export default WelcomeScreen;
