import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import firebase from 'firebase/compat/app';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import firebase from 'firebase/compat';
require('firebase/auth');


// the firebaseConfig object is your way of connecting to your app's
// corresponding firebase database. the variables are generated by firestore;
// you can consider these as similar to variables you would set in settings.py in Django

// All of these should be in environment variables eventually

const firebaseConfig = {
  apiKey: "AIzaSyB_8x8qYLlOFtLstI2NNe01TH0hGlvygXY",
  authDomain: "instagram-clone-aa4a6.firebaseapp.com",
  projectId: "instagram-clone-aa4a6",
  storageBucket: "instagram-clone-aa4a6.appspot.com",
  messagingSenderId: "602531184701",
  appId: "1:602531184701:web:6e087ab509128671b5ea54",
  measurementId: "G-EB1MCS0GLT"
};

// intializes a connection to your firebase application
// app will crash if another instance of the app has been initialized....?
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/auth/Landing';
import Register from './pages/auth/Register';
import { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {

    const [loaded, setLoaded] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    useState(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          setLoggedIn(false)
          setLoaded(true)
        } else {
          setLoggedIn(true)
          setLoaded(true)
        }
      })
    }, [])

    if (!loaded) {
      return(
        <View style={styles.appContainer}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
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

    return (
      <View style={styles.appContainer}>
        <Text>User is logged in</Text>
      </View>
    )
  
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50
  }
})