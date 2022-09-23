import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";

const SearchBar = (props) => {
  const [text, setText] = useState();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Type a book!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
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
    marginBottom: 25,
    borderRadius: 10,
    height: 40,
  },
});
