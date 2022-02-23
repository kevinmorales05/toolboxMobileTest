import { text } from 'express';
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
    }
});

export default styles;