import { StyleSheet} from 'react-native';
import React from  'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigatorApp from './src/navegacao/NavigatorApp';

export default function App() {
  return (
    <NavigationContainer>
      <NavigatorApp/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf2fa',
  },
});
