import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import yelp from "../config/yelp";

const ResturantShowScreen = ({ navigation }) => {
  const [result, setresult] = useState(null);
  const id = navigation.getParam("id");
  /* console.log(id); */
  /* console.log(result) */ const results = async (id) => {
    const response = await yelp.get(`/${id}`);
    setresult(response.data);
  };
  useEffect(() => {
    results(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={style.name}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={style.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginLeft: 10,
    marginBottom: 15,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 20,
  },
});

export default ResturantShowScreen;
