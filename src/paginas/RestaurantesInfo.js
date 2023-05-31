import React, { useEffect, useState} from 'react';
import { View, Text, Image } from 'react-native';
import  Icon  from  'react-native-vector-icons/AntDesign';
import Styles from '../paginas/RestaurantesStyle'

const RestaurantePage = ({route}) =>{

    const { itemId } = route.params;
    const [restaurante, setRestaurante] = useState(null);

    useEffect(() => {
        const  getRestaurante = async () => {
            try{
                const response = await fetch(`https://api.dev.wdtek.xyz/restaurants/${itemId}`);
                const data = await response.json();
                setRestaurante(data);
            }catch (error ){
                console.log(error)
            }
        };

        getRestaurante();

    }, [itemId]);

    if (!restaurante) {
        return <Text>Carregando...</Text>; 
      }

      const deliverySizeMinutes = restaurante?.services?.delivery?.schedules?.[0]?.sizeMinutes;
      const start = restaurante?.services?.delivery?.schedules?.[0]?.start;
      const end = restaurante?.services?.delivery?.schedules?.[0]?.end;
    

    return(
        <View>
        {restaurante.image && restaurante.image.url ? (
          <Image
            source={{ uri: restaurante.image.url }}
            style={{ width: '100%', height: 200 }}
          />
        ): (
            <View style={Styles.imgRestauranteNull}>
                <Icon name="home" size={150} style={Styles.iconeNull}/>
            </View>
        )}
        <View style={Styles.container}>
          <Text style={Styles.nome}>{restaurante.name}</Text>
        </View>
        <View style={Styles.container}>
            <View style={Styles.containerPhone}>
                <Icon name="phone" style={Styles.icone}/>
                <Text style={Styles.txt}>{restaurante.contacts.phoneNumber}</Text>
                <Text>{restaurante.cuisines.name}</Text>
            </View>
            <View style={Styles.containerPhone}>
                <Icon name="enviromento" style={Styles.icone}/>
                <Text style={Styles.txt}>{restaurante.addressInfo.address}</Text>
            </View>
            {end && start && (
                <View style={Styles.containerPhone}>
                <Icon name="clockcircleo" style={Styles.icone}/>
                    <Text style={Styles.txt}>{start} / {end}</Text>
                    
            </View>
            )}
            { deliverySizeMinutes !== null && (
                <View style={Styles.containerPhone}>
                <Icon name="shoppingcart" style={Styles.icone}/>
                <Text style={Styles.txt}>{deliverySizeMinutes} min.</Text>
            </View>)}
            
            
        </View>
      </View>
        
    )
}
export default RestaurantePage;