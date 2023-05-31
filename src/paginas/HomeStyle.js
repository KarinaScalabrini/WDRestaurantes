
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    app:{
        flex:1,
        backgroundColor:"#ffffff"
    },
    container:{
        flex:1,
        backgroundColor:"#ffffff",
    },
    // Header do app
    containerHeader:{
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        height:420,
        backgroundColor:"#ffffff",
        
    },
    backgroundImage:{
        width:"100%",
        height:'70%'
        
    },
    pesquisa:{
        borderWidth:2,
        borderColor:'black',
        width:"70%",
        height:45,
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        
    },
    favoritos:{
        fontSize:33,
        padding:5
    },
    pesquisa1:{
        top:20,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
        width:'100%',
        height:60,
    },
    search:{
        float:'right',
        fontSize:22,
    },
    inputPesquisa:{
        width:'90%',
        height:'100%',
        borderRadius:15
    },
    //Título lista
    titleList:{
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
        backgroundColor:"#ffffff"
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
    imgCard:{
        width:"40%",
        borderRadius:15,
    },
    iconHome:{
        color:"#c0c0c0",
        textAlign:'center',
        flex:1,
        paddingTop:20
    },
    infoCard:{
        width:"52%",
        paddingLeft:8

    },
    iconCard:{
        width:"8%"
    },
    imgBox:{
        flex:1,
        borderRadius:15
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