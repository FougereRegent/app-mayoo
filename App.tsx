import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Textbox, { TypeTextBox } from './src/components/TextboxComponents';

export default function App() {
  return (
    <View style={styles.container}>
      <Textbox mode={TypeTextBox.PASSWORD} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
