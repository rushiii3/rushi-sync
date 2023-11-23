import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { PaperProvider } from 'react-native-paper';

const index = () => {
  return (
    <PaperProvider>
      <Redirect href="/Home" />
    </PaperProvider>
   
  )
}

export default index