import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',  
        height: '100%',
        backgroundColor:'#2CBBFA',
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
        height:500,
        flex:1,
    },
    poster:{
        height:400,
        width:340,
        border:5,
        borderColor:'blue',
        padding:10,
        margin:10,
        borderRadius:10,
        backgroundColor:'red'
    }

});

export default styles;