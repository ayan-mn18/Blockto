import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import OnboardingView from './Screens/Onboarding/OnboardingView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Authentication/Login/Login';

const AppStack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Satoshi: require('./assets/Fonts/Variable/Satoshi-Variable.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer >
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="OnboardingView" component={OnboardingView} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Signup" component={Login} />
        <AppStack.Screen name="SignupCode" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    // color: '#EEEEEE'
  },
});
