/* 7 */
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import useResults from "../hooks/useResults";

const ResturantDetails = ({ results }) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: results.image_url }} />
      <Text style={style.text}>{results.name}</Text>
      <Text>
        {results.rating} Stars,{results.review_count} Reviews
      </Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    marginLeft: 15,
  },

  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 5,
  },
  text: {
    fontWeight: "bold",
  },
});

export default ResturantDetails;
