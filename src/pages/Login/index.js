import React from 'react';
import {useState, useContext} from 'react';
import {Text, TextInput} from 'react-native';
import styles from './styles';
import {Center, VStack, Button, useToast} from 'native-base';
import axios from 'axios';
import UserContext from '../../context/UserContext';


export default function Login({navigation}) {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [dataUser, setdataUser] = useState('');
  const toast = useToast();

  const {setToken, setType} = useContext(UserContext);

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const data = axios
      .post('https://echo-serv.tbxnet.com/v1/mobile/auth', {sub: keyword })
      .then(function (response) {
        setdataUser(response.data);
        setToken(response.data.token);
        setType(response.data.type);
        setKeyword(' ');
        navigation.navigate('Home');
      })
      .catch(function (error) {
        toast.show({
          description: "Wrong keyword, try again!",
          placement: "bottom",
          backgroundColor: "#057BAD"
        });
        setKeyword(' ');
      });
  };
  return (
    <Center style={styles.container}>
      <Text style={styles.mainText}>Login</Text>
      <VStack space={4} alignItems="center">
        <Center w="64" h="20" bg="#2CBBFA" rounded="md" shadow={3}>
          
          <Text>Keyword</Text>
          <TextInput
            onChangeText={setKeyword}
            value={keyword}
            placeholder="Please write your keyword"
            keyboardType="default"
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
