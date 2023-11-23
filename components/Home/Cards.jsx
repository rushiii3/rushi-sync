import { ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import axios from "axios";
import PostCards from "../common/PostCards";

const Cards = () => {
  const [refreshing, setrefreshing] = useState(false);
  const onRefresh = () => {
    setrefreshing(true);
    getData();
  };
  const [PostData, setPostData] = useState([""]);
  const getData = async () => {
    const { data } = await axios.get(
      `https://socialmedia-1eyo.vercel.app/api/v2/post/get-post`
    );
    setPostData(data);
    setrefreshing(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <FlashList
        renderItem={({ item }) => {
          return <PostCards item={item} />;
        }}
        estimatedItemSize={50}
        data={PostData}
      />
    </ScrollView>
  );
};

export default Cards;
