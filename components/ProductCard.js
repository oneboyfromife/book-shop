import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ProductCard = ({ imgUrl, year, title, author }) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: imgUrl }} />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: "gray",
            fontSize: 13,
          }}
        >
          {author}
        </Text>
        <Text
          style={{
            color: "gray",
            fontSize: 13,
            marginVertical: 5,
          }}
        >
          .
        </Text>
        <Text
          style={{
            color: "gray",
            fontSize: 13,
          }}
        >
          {year}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "gray",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    borderColor: "#e0e0e0",
    overflow: "hidden",
  },
});
