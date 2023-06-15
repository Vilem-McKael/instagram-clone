import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

import firebase from 'firebase/compat'
require('firebase/auth')

export default function Register() {

    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
    })

    async function onSignUp() {
        const { name, email, password } = credentials;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            firebase.firestore().collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
                name,
                email
            })
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }

  return (
    <View>
      <TextInput 
        placeholder="name"
        autoCompleteType="off"
        autoCapitalize='none'
        value={credentials.name}
        onChangeText={(name) => setCredentials({...credentials, 'name': name})}
      />
      <TextInput
        placeholder="email"
        autoCompleteType="off"
        autoCapitalize='none'
        value={credentials.email}
        onChangeText={(email) => setCredentials({...credentials, 'email': email})}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        value={credentials.password}
        onChangeText={(password) => setCredentials({...credentials, 'password': password})}
      />
      <Button 
        title='Sign Up'
        onPress={onSignUp}
      />
    </View>
    
  )
}