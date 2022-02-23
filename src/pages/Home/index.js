import {ScrollView, Image, Button} from 'native-base';
import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import axios from 'axios';
import UserContext from '../../context/UserContext';


export default function Home() {
  const {token,type} = useContext(UserContext);
const [moviesData, setMoviesData] = useState([]);
    useEffect(() => {
      const data = axios.get('https://echo-serv.tbxnet.com/v1/mobile/data', {
        headers: { 'Authorization': `Bearer ${token}` }  })
    .then(function (response) {
      setMoviesData(response.data);
    })
    .catch(function (error) {
      alert("Please login to see the data");
    })
    .then(function () {
      // always executed
    });
    }, []);
    
  const UserContex = useContext(UserContext);
  console.log("contexto", UserContex);
  return (
    <ScrollView>
      <Text></Text>
      {moviesData.map((item, index) => {
        return (
          <View key={index} style={styles.cardBox}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.type}</Text>
            <ScrollView horizontal={true}>
              {item.items.map((item, index) => {
                return (
                  <View key={index} style={styles.poster} >
                    <Text>{item.title}</Text>
                    <Image
                      source={{
                        uri: item.imageUrl,
                      }}
                      alt="Alternate Text"
                      style={{width: 300, height: 300}}
                    />
                    <Text>{item.videoUrl}</Text>
                    <Text>{item.description}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        );
      })}
    </ScrollView>
  );
}
