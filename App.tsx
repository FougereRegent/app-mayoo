import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OwnButton from './src/components/ButtonComponents';

export default function App() {
  return (
    <View style={styles.container}>
      <OwnButton action={() => { }} name='connexion' />
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
