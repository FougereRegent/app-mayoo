import { Alert, StyleSheet, Text, View } from 'react-native';
import OwnButton from './src/components/ButtonComponents';
import Logo from './src/components/LogoComponents';
import Textbox, { TypeTextBox } from './src/components/TextboxComponents';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreens';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AllergeneScreen from './src/screens/AllergeneScreen';
import PresentDayAtLunchRoomScreen from './src/screens/PresentDayAtLunchRoomScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='WelcomeScreen'>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="test"
          component={Logo}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="AllergeneScreen"
          component={AllergeneScreen}
        />
        <Stack.Screen
          name="PresentDayAtLunchRoomScreen"
          component={PresentDayAtLunchRoomScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
