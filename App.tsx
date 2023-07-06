import { Alert, StyleSheet, Text, View } from 'react-native';
import OwnButton from './src/components/ButtonComponents';
import Logo from './src/components/LogoComponents';
import Textbox, { TypeTextBox } from './src/components/TextboxComponents';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Textbox mode={TypeTextBox.CREDENTIALS} />
      <Textbox mode={TypeTextBox.PASSWORD} />
      <OwnButton action={() => { Alert.alert("Hey Tous le monde") }} name='connexion' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
