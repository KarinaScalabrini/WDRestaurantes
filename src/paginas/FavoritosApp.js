import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../paginas/HomeStyle';
import { useNavigation } from '@react-navigation/native';

const Favoritos = ({ favoritos }) => {
  const [restaurantesFavoritos, setRestaurantesFavoritos] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const buscarRestaurante = async (itemId) => {
      if (loading) {
        return;
      }
      setLoading(true);

      try {
        const response = await fetch(`https://api.dev.wdtek.xyz/restaurants/${itemId}`);
        const data = await response.json();
        setRestaurantesFavoritos(prevState => [...prevState, data]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

  favoritos.forEach(itemId => {
    buscarRestaurante(itemId);
  });
}, [favoritos]);

  if (restaurantesFavoritos.length === 0) {
    return <Text>Nenhum restaurante favorito encontrado.</Text>;
  }

  return (
    <>
      {restaurantesFavoritos.map(restaurante => (
        <View key={restaurante._id}>
            <Text></Text>
          <TouchableOpacity
            style={styles.boxRestaurantes}
            onPress={() => navigation.navigate('RestaurantePage', { itemId: restaurante._id })}
          >
            <View style={styles.imgCard}>
              {restaurante && restaurante.image && restaurante.image.url !== '' ? (
                <Image
                  source={{ uri: restaurante.image.url }}
                  style={styles.imgBox}
                />
              ) : (
                <Icon
                  name="home"
                  size={80}
                  style={styles.iconHome}
                />
              )}
            </View>
            <View style={styles.infoCard}>
              <Text
                style={styles.nomeRestaurante}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {restaurante.name}
              </Text>
              <Text
                style={styles.legendaRestaurante}
              >
                {restaurante.mealType}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  favoritos: state.favoritos,
});

export default connect(mapStateToProps)(Favoritos);
