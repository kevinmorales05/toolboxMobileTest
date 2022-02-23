import React, { useState } from 'react';
import UserContext from './context/UserContext';
import Login from './pages/Login';
import Home from './pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
const App = () => {
  const Stack = createNativeStackNavigator();
  const UserData = {
    token: '12345',
    type: 'admin',
  };
  const [token, setToken] = useState("");
  const [type, setType] = useState("second")

  return (
    <UserContext.Provider value={{token,type, setToken, setType}}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" options={{
              headerShown: false
            }} component={Login} />
            <Stack.Screen name="Home" 
            
            options={{
              title: 'My Movies',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            
            component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </UserContext.Provider>
  );
};

export default App;
