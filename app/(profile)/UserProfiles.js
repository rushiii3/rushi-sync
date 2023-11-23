import { View, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import { Divider } from "react-native-paper";
import Images from "../../components/common/Images";
import Upper from "../../components/UserProfiles/Upper";
import axios from "axios";

const UserProfiles = () => {
  const params = useGlobalSearchParams();
  const { userid,userImage } = params;
  const [UserData, setUserData] = useState([""]);
  const getUserDetail = async () => {
    try {
      const userData = await axios.get(`https://socialmedia-1eyo.vercel.app/api/v2/user/profile/${userid}`);
      setUserData(userData.data.data);
      console.log(UserData[0].user.username);
    } catch (error) {
      console.log(error.response.data.message);
    } 
  };
  useEffect(() => {
    getUserDetail();
  }, []);
  return (
    <SafeAreaView
      style={{ backgroundColor: "rgb(255,255,255)", paddingBottom: 100 }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "rgb(255,255,255)",
          },
          headerTitle: userid,
        }}
      />
      <ScrollView>
        <Upper username={userid} userprofile={userImage} noOfpost={UserData.length}/>
        <Divider style={{ marginVertical: 20 }} />
        <View style={{ marginTop: 20, padding: 10 }}>
          <Images data={UserData}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default UserProfiles;
