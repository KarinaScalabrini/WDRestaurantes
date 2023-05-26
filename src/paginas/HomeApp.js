import React, { useState } from 'react';
import  Icon  from  'react-native-vector-icons/AntDesign';
import { View, Text, FlatList, Image, ImageBackground} from "react-native";
import styles from './HomeStyle';
import { ScrollView, TouchableOpacity, VirtualizedList } from 'react-native';


const HomePagina = () => {

    const [restaurantes, setRestaurantes] = React.useState([]);
    const [pagina, setPagina] = useState(1);
    const [todosRestaurantes, setTodosRestaurantes] = useState([]);
    const [favorito, setFavorito] = useState(false);
    const [excluirRestaurante, setExcluirRestaurante] = useState(false);

    React.useEffect(()=>{

        const limitePorPagina = 10;
        const offset = (pagina - 1) * limitePorPagina;

        fetch(`https://api.dev.wdtek.xyz/restaurants?offset=${offset}&limit=${limitePorPagina}`)
        .then(response => response.json())
        .then(data => {
            setRestaurantes(data.docs);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    const carregarMaisRestaurantes = () =>{

        const limitePorPagina = 10;
        const offset = (pagina - 1) * limitePorPagina;

        fetch(`https://api.dev.wdtek.xyz/restaurants?offset=${offset}&limit=${limitePorPagina}`)
        .then(response => response.json())
        .then(data => {
            setRestaurantes(prevRestaurantes => [...prevRestaurantes, ...data.docs]);
            setPagina(prevPagina => prevPagina + 1);
        })
        .catch(error => {
            console.log(error);
        })
    };

    
    const MarcarFavorito = (itemId) => {
        setFavorito((favoritos) => ({
            ...favoritos,
            [itemId]: !favoritos[itemId],
        }));
    }


    return (
        <ScrollView>
        <View>
            <View style={styles.containerHeader}>
                <ImageBackground
                    source={require('../assets/alimentos.png')}
                    style={styles.backgroundImage}>
                    <View 
                    style={styles.overlay}>
                    <Text 
                    style={styles.containerHeaderTitle}>
                        Todos os sabores do mundo na palma da mão
                    </Text>
                    </View>
                </ImageBackground>
                <Text 
                style={styles.titleList}>Restaurantes
                </Text>
            </View>
            
            <VirtualizedList
            style={styles.containerRestaurantes}
            data={restaurantes}
            keyExtractor={(item) =>String(item._id)}
            
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
                onEndReached={carregarMaisRestaurantes}
                onEndReachedThreshold={0.5} 
                  
            />
        </View>
        </ScrollView>
    )
}

export default HomePagina;