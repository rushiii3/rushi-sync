import { Image } from "react-native";
import React from "react";

const Images = ({ data }) => {
  console.log(data);
  const reversedData = data.slice().reverse(); // Create a copy of data and reverse it

  return reversedData.map((value, key) => (
    <Image
      key={key} // Add a unique key for each image
      style={{
        height: 550,
        borderColor: "black",
        borderWidth: 0.2,
        marginVertical: 20,
        borderRadius: 20,
        backgroundColor: "black",
        resizeMode: "contain", // Use resizeMode instead of objectFit for React Native
      }}
      source={{
        uri: value?.imageUrl?.url,
      }}
    />
  ));
};

export default Images;
