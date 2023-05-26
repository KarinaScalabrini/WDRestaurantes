import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePagina from '../paginas/HomeApp';
import RestaurantePage from '../paginas/RestaurantesInfo';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="HomePagina"
            component={HomePagina}
            options={{headerShow: false}}
            />
            <Stack.Screen
            name="RestaurantePage"
            component={RestaurantePage}

            />
        </Stack.Navigator>
    )
};

export default AppNavigator;