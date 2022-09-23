import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SearchBar = (props) => {
  const [text, setText] = useState();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);

  return (
    <View style={styles.searchBar}>
      <FontAwesome name="search" size={20} color="gray" />
      <TextInput
        placeholder="Type a book!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
        style={{
          marginLeft: 10,
          fontSize: 16,
          color: "gray",
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#eceff1",
    padding: 8,
    marginTop: 7,
    marginBottom: 17,
    borderRadius: 10,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
});
