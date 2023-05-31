import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './HomeStyle';
import { ActivityIndicator, TouchableOpacity, View, Text, FlatList, Image, ImageBackground, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

const HomePagina = () => {

    const dispatch = useDispatch();
    const favoritos = useSelector((state) => state.favoritos) || [];
    const navigation = useNavigation();
    const [favorito, setFavorito] = useState([]);
    const [restaurantes, setRestaurantes] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [todosRestaurantes, setTodosRestaurantes] = useState([]);
    const [inputPesquisa, setInputPesquisa] = useState('');
    const [loading, setLoading] = useState(false);
    

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

        if(loading){
            return;
        }
        setLoading(true);

        const limitePorPagina = 10;
        const offset = (pagina - 1) * limitePorPagina;

        fetch(`https://api.dev.wdtek.xyz/restaurants?offset=${offset}&limit=${limitePorPagina}`)
            .then(response => response.json())
            .then(data => {

                const novosRestaurantes = data.docs.filter(restaurante => !restaurantes.some(r => r._id === restaurante._id));
                setRestaurantes(prevRestaurantes => [...prevRestaurantes, ...novosRestaurantes]);
                setPagina(prevPagina => prevPagina + 1);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    };

    
    const MarcarFavorito = (itemId) => {
        
        if (favorito.includes(itemId)) {
            setFavorito(prevFavorito => prevFavorito.filter(id => id !== itemId));
            dispatch({ type: 'desmarcarFavoritos', payload: itemId });
          } else {
            setFavorito(prevFavorito => [...prevFavorito, itemId]);
            dispatch({ type: 'marcarFavoritos', payload: itemId });
          }
      };
      

    const header = ({item}) => (
        <View style={styles.containerHeader}>
        <Image
            source={require('../assets/comida.png')}
            resizeMode='cover'
            style={styles.backgroundImage}>
        </Image>
        <View style={styles.pesquisa1}>
            <View style={styles.pesquisa}>
                <TextInput
                value={inputPesquisa}
                style={styles.inputPesquisa}
                onChangeText={text => setInputPesquisa(text)}/>
                <TouchableOpacity>
                    <Icon name="search1" style={styles.search}/>
                </TouchableOpacity> 
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
                <Icon name="heart" style={styles.favoritos}/>
            </TouchableOpacity>
        </View>
        
    </View>
    )

    renderFooter = () => {
        if (!loading) return null;
        return (
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        );
      };


    return (
        <FlatList style={styles.container}
        data={restaurantes}
        keyExtractor={(item) => String(item._id)}
        renderItem={({item}) => (
            <TouchableOpacity style={styles.boxRestaurantes}
            onPress={() => navigation.navigate('RestaurantePage', {itemId: item._id})}
            >
                <View style={styles.imgCard}>
                {item && item.image && item.image.url !== '' ? (
                    <Image
                    source={{ uri: item.image.url }}
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
                        name={favorito.includes(item._id) ? 'star' : 'staro'}
                        
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => BloquearRestaurante(item._id)}>
                        <Icon
                        style={styles.iconeBloquear}
                        name={'minuscircleo'}
                        
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
    )} 
        onEndReached={carregarMaisRestaurantes}
        onEndReachedThreshold={0.8}
        ListHeaderComponent={header}
        ListFooterComponent={renderFooter}>                    
        </FlatList> 
          
    )
}
  export default HomePagina;