import { View, Text } from 'react-native'
import React from 'react'

import * as fb from '../firebase';

export default function test() {

    useEffect(() => {
        async function getCities(db) {
            const citiesCol = collection(db, 'cities');
            citySnapshot = await getDocs(citiesCol);
            cityList = citySnapshot.docs.map(doc => doc.date());
            console.log(citList);
        }
        getCities();
    }, [])

  return (
    <View>
      <Text>test</Text>
    </View>
  )
}