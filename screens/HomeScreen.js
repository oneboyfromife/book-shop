import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginTop: 25,
            color: "gray",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Book Shop
        </Text>
      </View>
      <SearchBar />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        // <FlatList
        //   data={data}
        //   keyExtractor={({ id }, index) => id}
        //   numColumns={2}
        //   renderItem={({ item }) => (
        //     <ProductCard
        //       key={item.id}
        //       year={item.releaseYear}
        //       title={item.title}
        //       // imgUrl={item.albumId}
        //     />
        //   )}
        // />
        <Text>Hello World</Text>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
