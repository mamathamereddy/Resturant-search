/* 3 */
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchterm, onChange, onSubmit }) => {
  return (
    <View style={style.searchbarbackgorund}>
      <Feather name="search" style={style.iconstyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="search"
        style={style.inputstyle}
        value={searchterm}
        onChangeText={onChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const style = StyleSheet.create({
  searchbarbackgorund: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    borderRadius: 15,
    height: 50,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  iconstyle: {
    fontSize: 35,
    alignSelf: "center",
    margin: 15,
  },
  inputstyle: {
    flex: 1,
    fontSize: 19,
  },
});

export default SearchBar;
