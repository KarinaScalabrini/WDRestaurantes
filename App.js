import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import  store  from '../WDRestaurants/src/paginas/Redux';
import NavigatorApp from './src/navegacao/NavigatorApp';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigatorApp />
      </NavigationContainer>
    </Provider>
  );
}
