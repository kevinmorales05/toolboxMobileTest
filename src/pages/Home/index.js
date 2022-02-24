import {ScrollView, Image, Pressable } from 'native-base';
import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import axios from 'axios';
import UserContext from '../../context/UserContext';

export default function Home({navigation}) {
  const {token, type} = useContext(UserContext);
  const [moviesData, setMoviesData] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    const data = axios
      .get('https://echo-serv.tbxnet.com/v1/mobile/data', {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(function (response) {
        setMoviesData(response.data);
      })
      .catch(function (error) {
        alert('Please login to see the data');
        navigation.navigate('Login');
      })
      .then(function () {
      
      });
  }, []);

  return (
    <ScrollView style={{backgroundColor:'black'}}>
      <Text></Text>
      {moviesData.map((item, index) => {
        return (
          <View key={index} style={styles.cardBox}>
            <Text style={{fontSize: 20, color:'white', fontWeight:'bold'}}>{item.title}</Text>
            {item.type === 'poster' ? (
              <>
                <ScrollView horizontal={true}>
                  {item.items.map((item, index) => {
                    return (
                      <Pressable key={index} style={styles.poster}>
                        <Image
                          source={{
                            uri: item.imageUrl,
                          }}
                          alt="Alternate Text"
                          style={{width: 300, height: '100%'}}
                        />
                        <Text style={styles.textPoster}>{item.title}</Text>
                      </Pressable>
                    );
                  })}
                </ScrollView>
              </>
            ) : (
              <ScrollView horizontal={true}>
                {item.items.map(item => {
                  return (
                    <Pressable
                      key={item.title}
                      onPress={() => {
                        setShowVideo(true);
                        if (showVideo == true) {
                          setShowVideo(false);
                        }
                      }}>
                      <View style={styles.thumbr}>
                        <Image
                          source={{
                            uri: item.imageUrl,
                          }}
                          alt="Alternate Text"
                          style={{width: 300, height: 200}}
                        />

                        <Text style={styles.textThumbr}>{item.title}</Text>
                      </View>
                    </Pressable>
                  );
                })}
              </ScrollView>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}


