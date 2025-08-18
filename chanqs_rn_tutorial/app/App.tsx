import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import RootNavigator from '../navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

function App() {

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
