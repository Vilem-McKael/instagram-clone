import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Register() {

    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
    })

    function handleSignUp() {
        console.log(credentials)
    }

  return (
    <View>
      <TextInput 
        placeholder="name"
        autoCompleteType="off"
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
        secureTextEntry={false}
        value={credentials.password}
        onChangeText={(password) => setCredentials({...credentials, 'password': password})}
      />
      <Button 
        title='Sign Up'
        onPress={handleSignUp}
      />
    </View>
    
  )
}