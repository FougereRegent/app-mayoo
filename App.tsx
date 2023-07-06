import { Alert, StyleSheet, Text, View } from 'react-native';
import OwnButton from './src/components/ButtonComponents';

export default function App() {
  return (
    <View style={styles.container}>
      <OwnButton action={() => { Alert.alert("Hey Tous le monde") }} name='connexion' />
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
