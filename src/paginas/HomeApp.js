import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import  Icon  from  'react-native-vector-icons/AntDesign';
import { View, Text, FlatList, Image, ImageBackground} from "react-native";
import styles from './HomeStyle';



const HomePagina = () => {

    const [restaurantes, setRestaurantes] = React.useState([]);
    React.useEffect(()=>{
        fetch('https://api.dev.wdtek.xyz/restaurants')
        .then(response => response.json())
        .then(data => {
            setRestaurantes(data.docs);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);


    const [favorito, setFavorito] = useState(false);
    const [excluirRestaurante, setExcluirRestaurante] = useState(false);


    const MarcarFavorito = (itemId) => {
        setFavorito((favoritos) => ({
            ...favoritos,
            [itemId]: !favoritos[itemId],
        }));
    }


    return (
        <View>
            <View style={styles.containerHeader}>
  <ImageBackground
    source={require('../assets/comida.png')}
    style={styles.backgroundImage}
  >
    <View style={styles.overlay}>
      <Text style={styles.containerHeaderTitle}>
        Todos os sabores do mundo na palma da mão
      </Text>
    </View>
  </ImageBackground>
  <Text style={styles.titleList}>Restaurantes</Text>
</View>
            
            <FlatList
            style={styles.containerRestaurantes}
            data={restaurantes}
            keyExtractor={(item) =>item._id}
            renderItem={({item}) => (
                    <View style={styles.boxRestaurantes}>
                        <View style={styles.imgCard}>
                            <Image 
                            source={{uri:'5ebd79ea7dd83e712eebd892.jpg'}}
                            style={styles.imgBox}/>
                        </View>
                        <View style={styles.infoCard}>
                            <Text 
                            style={styles.nomeRestaurante}
                            numberOfLines={2} 
                            ellipsizeMode="tail">
                                {item.name}
                            </Text>
                            <Text 
                            style={styles.legendaRestaurante}>
                                {item.mealType}
                            </Text>
                            
                        </View>
                        <View style={styles.iconCard}>
                            <TouchableOpacity onPress={() => MarcarFavorito(item._id)}>
                                <Icon
                                style={styles.icone}
                                name={favorito[item._id] ? 'star' : 'staro'}
                                
                                />
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Icon
                                style={styles.iconeBloquear}
                                name={'minuscircleo'}
                                
                                />
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                )}
            />
        </View>
    )
}

export default HomePagina;