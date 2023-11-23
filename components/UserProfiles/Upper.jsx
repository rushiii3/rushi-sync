import { View } from "react-native";
import React from "react";
import { Avatar, Text } from "react-native-paper";
import { Entypo, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const Upper = ({ username, userprofile, noOfpost }) => {
  return (
    <View>
      <View style={{ padding: 5, marginTop: 10 }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Avatar.Image
              size={200}
              source={{
                uri:
                  userprofile == null
                    ? "https://www.cnet.com/a/img/resize/e9afc7426679411d3c456864140ef4e2d2587bd8/hub/2023/07/05/b8503974-3baa-4311-bfa1-5e5b747c83ad/jujutsu-kaisen-season-2.jpg?auto=webp&fit=crop&height=360&width=640"
                    : userprofile,
              }}
              style={{ backgroundColor: "White", borderColor: "black" }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              variant="headlineMedium"
              style={{ marginTop: 10, fontWeight: "800" }}
            >
              {username}
            </Text>
            <Text variant="titleMedium">Total Post : {noOfpost} </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: "black",
            borderRadius: 50,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingHorizontal: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="share" size={25} color="black" />
            <Text style={{ marginLeft: 5 }}>Share</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: "black",
            borderRadius: 50,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingHorizontal: 30,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="message-circle" size={25} color="black" />
            <Text style={{ marginLeft: 5 }}>Message</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Upper;
