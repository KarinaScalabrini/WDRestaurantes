import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePagina from '../paginas/HomeApp';
import RestaurantePage from '../paginas/RestaurantesInfo';
import FavoritosPagina from '../paginas/FavoritosApp';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="HomePagina"
            component={HomePagina}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="RestaurantePage"
            component={RestaurantePage}

            />
            <Stack.Screen
            name="Favoritos"
            component={FavoritosPagina}

            />
        </Stack.Navigator>
    )
};

export default AppNavigator;