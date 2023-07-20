import React from "react";
import { StyleSheet, View } from "react-native";
import AllergeneIconComponents from "../components/AllergerneIconComponents";
import OwnButton from "../components/ButtonComponents";
import Logo from "../components/LogoComponents";
import { TextBox, Title, TitleType } from "../components/TextComponents";



const AllergeneScreen = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <View style={styles.headerTitle}>
          <Logo />
          <Title TypeTitle={TitleType.H1}>
            Etape 1
          </Title>
          <View style={styles.headerText}>
            <TextBox>
              Veuillez Sélectionner les allèrgenes qui vous concernent pour que nous puissions prendre en compte
              vos restrictions alimentaire
            </TextBox>
          </View>
        </View>
      </View>
      <View style={styles.allergeneView}>
        <AllergeneIconComponents path={require("../../assets/allergenes/molusque.png")} name="molusque" />
        <AllergeneIconComponents path={require("../../assets/allergenes/sesame.png")} name="sesame" />
        <AllergeneIconComponents path={require("../../assets/allergenes/moutarde.png")} name="moutarde" />
        <AllergeneIconComponents path={require("../../assets/allergenes/noix.png")} name="noix" />
        <AllergeneIconComponents path={require("../../assets/allergenes/cereale.png")} name="cereale" />
        <AllergeneIconComponents path={require("../../assets/allergenes/poisson.png")} name="poisson" />
        <AllergeneIconComponents path={require("../../assets/allergenes/cacahouette.png")} name="cacahouette" />
        <AllergeneIconComponents path={require("../../assets/allergenes/crustace.png")} name="crustace" />
        <AllergeneIconComponents path={require("../../assets/allergenes/celeri.png")} name="celeri" />
      </View>
      <View style={styles.validationView}>
        <OwnButton name="Suivant" action={() => { navigation.navigate("PresentDayAtLunchRoomScreen") }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    flexDirection: "column",
    backgroundColor: "#FF6847",
    alignItems: "center",
  },
  logoView: {
    flex: 1,
    justifyContent: "center",
  },
  allergeneView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerTitle: {
  },
  headerText: {
    paddingHorizontal: 25,
  },
  validationView: {
    flex: 1,
    paddingTop: 25
  }
});

export default AllergeneScreen;
