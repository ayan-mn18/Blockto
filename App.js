import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Onboarding1 from './Screens/Onboarding/Onboarding1';
import Onboarding2 from './Screens/Onboarding/Onboarding2';
import Onboarding3 from './Screens/Onboarding/Onboarding3';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Satoshi: require('./assets/Fonts/Variable/Satoshi-Variable.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.textStyle} >Let's start With Blockto!</Text>
      <Text style={styles.textStyle}>Crypto is Future.</Text>
      <StatusBar style='light-content' backgroundColor='#000' /> */}
      <Onboarding1 />
      {/* <Onboarding2 /> */}
      {/* <Onboarding3 /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#EEEEEE'
  },
});
