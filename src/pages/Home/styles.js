import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',  
        height: '100%',
        backgroundColor:'black',
    },
    mainText:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'white'
    },
    btn:{
        backgroundColor:'#057BAD',
        color:'white',
    },
    cardBox:{
        border:'1px solid #057BAD',
        padding:10,
        flex:1,
    },
    poster:{
        height:400,
        width:320,
        border:5,
        borderColor:'blue',
        padding:10,
        margin:10,
        borderRadius:10,
        backgroundColor:'white'
    },
    thumbr:{
        height:250,
        width:320,
        border:5,
        borderColor:'blue',
        padding:10,
        margin:10,
        borderRadius:10,
        backgroundColor:'#057BAD',
        justifyContent:'center',
    },
    textPoster:{
        position:'absolute',
        bottom:15,
        fontSize:20,
        right:130,
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
    },
    textThumbr:{
        fontSize:15,
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
    },

});

export default styles;