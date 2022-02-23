import React from 'react';
import {useState, useContext} from 'react';
import {Text, TextInput} from 'react-native';
//import {useHistory} from 'react-router-dom';
import styles from './styles';
import {Center, VStack, Button} from 'native-base';
import axios from 'axios';
import UserContext from '../../context/UserContext';

export default function Login({navigation}) {
  //let history = useHistory();
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [dataUser, setdataUser] = useState('');

  const {setToken, setType} = useContext(UserContext);

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    //"ToolboxMobileTest"
    console.log('desde el login', keyword);
    const data = axios
      .post('https://echo-serv.tbxnet.com/v1/mobile/auth', {sub: keyword })
      .then(function (response) {
        setdataUser(response.data);
        console.log('DESDE EL SERVIDOR', dataUser);
        setToken(response.data.token);
        setType(response.data.type);
        setKeyword(' ');
        navigation.navigate('Home');
      })
      .catch(function (error) {
        alert('Wrong keyword!');
        setKeyword(' ');
      });
  };
  return (
    <Center style={styles.container}>
      <Text style={styles.mainText}>Login</Text>
      <VStack space={4} alignItems="center">
        <Center w="64" h="20" bg="#FAA139" rounded="md" shadow={3}>
          <Text>Keyword</Text>
          <TextInput
            onChangeText={setKeyword}
            value={keyword}
            placeholder="Please write your keyword"
            keyboardType="text"
          />
        </Center>
        <Center>
          <Button
            onPress={login}
            style={styles.btn}
            isLoading={loading}
            isLoadingText="Loading">
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              Send
            </Text>
          </Button>
        </Center>
      </VStack>
    </Center>
  );
}
