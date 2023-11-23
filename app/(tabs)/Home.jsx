import { View, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Text } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Cards from "../../components/Home/Cards";
import { Feather } from "@expo/vector-icons";
const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "rgb(255,255,255)" }}>
      <Tabs.Screen
        options={{
          headerStyle: {
            backgroundColor: "rgb(255,255,255)",
          },
          tabBarIcon: () => <Feather name="home" size={25} color="black" />,
          tabBarLabel: "Home",
          headerTitle: "",
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
      <View style={{ padding: 5 }}>
        <Cards />
      </View>
    </SafeAreaView>
  );
};

export default Home;
