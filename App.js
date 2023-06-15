

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';

// should be in an environment variable if deployed to production
const firebaseConfig = {
  apiKey: "AIzaSyB_8x8qYLlOFtLstI2NNe01TH0hGlvygXY",
  authDomain: "instagram-clone-aa4a6.firebaseapp.com",
  projectId: "instagram-clone-aa4a6",
  storageBucket: "instagram-clone-aa4a6.appspot.com",
  messagingSenderId: "602531184701",
  appId: "1:602531184701:web:6e087ab509128671b5ea54",
  measurementId: "G-EB1MCS0GLT"
};

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/auth/Landing';
import Register from './pages/auth/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }}/>
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50
  }
})