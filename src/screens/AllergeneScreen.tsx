import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "../components/LogoComponents";
import { Title, TitleType, TextBox } from "../components/TextComponents";
import OwnButton from "../components/ButtonComponents";



const AllergeneScreen = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Logo />
        <View style={styles.headerTitle}>
          <Title TypeTitle={TitleType.H1}>
            Etape 1
          </Title>
        </View>
        <View style={styles.headerText}>
          <TextBox>
            Veuillez Sélectionner les allèrgenes qui vous concernent pour que nous puissions prendre en compte
            vos restrictions alimentaire
          </TextBox>
        </View>
      </View>
      <View style={styles.allergeneView}>
        <OwnButton name="Suivant" action={() => { }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  logoView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 5
  },
  allergeneView: {
    flex: 2,
    alignItems: "center",
  },
  headerTitle: {
  },
  headerText: {
    paddingHorizontal: 25,
    marginVertical: 10
  },
  validationView: {
    borderWidth: 1
  }
});

export default AllergeneScreen;
