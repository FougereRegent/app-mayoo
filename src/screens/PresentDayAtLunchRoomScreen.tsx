import React from "react";
import { StyleSheet, View } from "react-native";
import AllergeneIconComponents from "../components/AllergerneIconComponents";
import OwnButton from "../components/ButtonComponents";
import Logo from "../components/LogoComponents";
import { TextBox, Title, TitleType } from "../components/TextComponents";



const PresentDayAtLunchRoomScreen = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <View style={styles.headerTitle}>
          <Logo />
          <Title TypeTitle={TitleType.H1}>
            Etape 2
          </Title>
          <View style={styles.headerText}>
            <TextBox>
              Veuillez indiquer les jours où vous êtes susceptibles d'être présent à la cantine scolaire
            </TextBox>
          </View>
        </View>
      </View>
      <View style={styles.contentView}>
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
  contentView: {
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

export default PresentDayAtLunchRoomScreen;
