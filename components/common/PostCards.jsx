import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useRouter } from "expo-router";

const PostCards = ({ item }) => {
    const router = useRouter();
  return (
    <Card
      style={{ marginVertical: 10, marginHorizontal: 5, backgroundColor: "" }}
      mode="elevated"
    >
      <Card.Title
        title={
          <TouchableOpacity onPress={() => router.push({ pathname: "/(profile)/UserProfiles", params: { userid: item.user?.username,userImage:item?.user?.url} })}>
            <Text variant="bodyMedium" style={{ fontWeight: 600 }}>
              {item.user?.username}
            </Text>
          </TouchableOpacity>
        }
        left={(props) => (
          <Avatar.Image
            size={44}
            {...props}
            source={{
              uri:
                item?.user?.url == null
                  ? "https://www.cnet.com/a/img/resize/e9afc7426679411d3c456864140ef4e2d2587bd8/hub/2023/07/05/b8503974-3baa-4311-bfa1-5e5b747c83ad/jujutsu-kaisen-season-2.jpg?auto=webp&fit=crop&height=360&width=640"
                  : item?.user?.url,
            }}
            style={{ backgroundColor: "White", borderColor: "black" }}
          />
        )}
      />

      <Card.Cover
        source={{
          uri: item?.imageUrl?.url,
        }}
        style={{ width: "100%", height: 450, borderRadius: 0 }}
      />
      <Card.Content>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            padding: 5,
            overflow: "hidden",
          }}
        >
          <Text
            variant="bodyMedium"
            style={{ fontWeight: 600, marginRight: 5 }}
          >
            {item.user?.username}
          </Text>
          <Text variant="bodyMedium" numberOfLines={1}>
            {item.caption}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            justifyContent: "start",
            alignItems: "center",
            alignContent: "flex-start",
          }}
        >
          <TouchableOpacity>
            <Ionicons size={30} name="heart-outline" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Fontisto size={25} name="comment" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Fontisto size={25} name="share-a" />
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 4, marginLeft: 4, fontWeight: "800" }}>
          {item?.likes?.length} likes
        </Text>
      </Card.Content>
    </Card>
  );
};

export default PostCards;
