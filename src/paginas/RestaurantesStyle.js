import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        alignItems: 'flex-start',
    },
    containerPhone:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
        marginLeft:8
    },
    nome:{
        fontSize:28,
        marginTop:10,
        fontWeight:'bold',
        marginBottom:15,
        marginLeft:15
    },
    txt:{
        fontSize:16,
    },
    icone:{
        fontSize:22,
        marginRight:10
    },
    imgRestauranteNull:{
        width: '100%',
        height: 200 ,
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,iconeNull:{
        color:"#c0c0c0"
    }
});

export default styles