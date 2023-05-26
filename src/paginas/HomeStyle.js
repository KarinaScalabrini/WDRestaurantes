
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    app:{
        flex:1,
        backgroundColor:"#ffffff"
    },
    // Header do app
    containerHeader:{
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        height:450,
        backgroundColor:"#ffffff",
        
    },
    image:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',

        
    },
    backgroundImage:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    // overlay: {
    //     flex:1,
    //     backgroundColor: 'black', // Ajuste a cor e a opacidade desejadas
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
    containerHeaderTitle:{
        fontSize:35,
        color:"#ffffff",
        padding:25,
        fontWeight:"bold",
        textAlign:"center",
        

    }
    //Título lista
    ,titleList:{
        fontSize:30,
        fontWeight:"bold",
        color:"#252422",
        paddingLeft:5,
        marginBottom:10,
        marginTop:10,
        textAlign:"center",
        backgroundColor:"#ffffff"
    }
    //container lista de restaurantes
    ,containerRestaurantes:{
        width:"100%",
        backgroundColor:"#ffffff",
        
    },
    boxRestaurantes:{
        height:150,
        flexDirection:"row",
        borderRadius:10,
        backgroundColor:"#ffffff",
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height:0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        marginVertical: 10,
        elevation:2,
        marginLeft:10,
        marginRight:10,
        padding:15,
    },
    overlay:{
        opacity:0.5,
        backgroundColor:"black",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    imgCard:{
        width:"40%",
        backgroundColor:"#c0c0c0",
        borderRadius:15,

    },
    infoCard:{
        width:"52%",
        paddingLeft:8

    },
    iconCard:{
        width:"8%"
    },
    imgBox:{
        flex:1
    },
    nomeRestaurante:{
        fontSize:15,
        fontWeight:"bold",
        width:"90%",
    },
    legendaRestaurante:{
        marginTop:7,
        width:"60%",
    },
    icone:{
        
        fontSize:24,
        color:"#F04A00",
        marginTop:10,
        textAlign:"center"
    },
    iconeBloquear:{
        color:"#46494c",
        fontSize:21,
        marginTop:5,
        textAlign:"center"
    }
});

export default styles