import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Feather } from '@expo/vector-icons';
const Profile = () => {
  return (
    <View>

      <Tabs.Screen
      
      options={{
        headerStyle: {
          backgroundColor: "rgb(255,255,255)",
        },
        tabBarIcon:() => (<Feather name="user" size={25} color="black" />),
        tabBarLabel: "Home",
        headerTitle:'',
        headerLeft: () => (
          <View>
            <Text
              variant="titleSmall"
              style={{ fontWeight: 800, marginLeft: 20 }}
            >
              RushiSync
            </Text>
          </View>
        ),
        headerRight: () => (
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => console.log("Pressed")}
              style={{ marginRight: 15 }}
            >
              <MaterialIcons size={25} name="chat-bubble-outline" />
            </TouchableOpacity>
          </View>
        ),
      }}
    />
    </View>
  )
}

export default Profile