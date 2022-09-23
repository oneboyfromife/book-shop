import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ProductCard = ({ imgUrl, year, title }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 5,
      }}
    >
      <Image source={{ uri: imgUrl }} style={{}} />
      <View>
        <Text>{title}</Text>
        <Text>{year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
