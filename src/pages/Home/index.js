import {ScrollView, Image, Pressable, Modal, Button} from 'native-base';
import React from 'react';
import {useEffect, useState, useContext} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import Video from 'react-native-video';

export default function Home() {
  const {token, type} = useContext(UserContext);
  const [moviesData, setMoviesData] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
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
      })
      .then(function () {
        // always executed
      });
  }, []);

  const UserContex = useContext(UserContext);
  console.log('contexto', UserContex);
  return (
    <ScrollView>
      <Text></Text>
      {moviesData.map((item, index) => {
        return (
          <View key={index} style={styles.cardBox}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            {item.type === 'poster' ? (
              <>
                <ScrollView horizontal={true}>
                  {item.items.map((item, index) => {
                    return (
                      <View key={index} style={styles.poster}>
                        <Image
                          source={{
                            uri: item.imageUrl,
                          }}
                          alt="Alternate Text"
                          style={{width: 300, height: '100%'}}
                        />
                        <Text style={styles.textPoster}>{item.title}</Text>
                      </View>
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

/*
                  <Modal isOpen={showVideo} onClose={() => setShowVideo(false)} key={item.title}>
                        <Modal.Body>
                        <Video
                          source={{uri: item.videoUrl}} // Can be a URL or a local file.
                          style={{
                            height: 600,
                            width: 320,
                            justifyContent: 'center',
                            alignContent: 'center',
                            margin: 0,
                          }}
                          
                        />
                        </Modal.Body>
                      </Modal>
*/
