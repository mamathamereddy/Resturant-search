/* 2 */
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResturantsList from "../components/ResturantsList";

const SearchScreen = () => {
  /* console.log(props); */
  const [searchterm, setSearchTerm] = useState("");
  const [searchApi, results, errormsg] = useResults();

  const FilterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {/*  by adding flex of 1 we can avoid the content that cannot be cut off in the screen
      or we can wrap in <> </> as said in 110 video */}
      <SearchBar
        searchterm={searchterm}
        onChange={setSearchTerm}
        onSubmit={() => searchApi(searchterm)}
      />
      {errormsg ? <Text>{errormsg} </Text> : null}
      {/* <Text>we found {results.length} results</Text> */}
      <ScrollView>
        {/* //allows us to scroll vertically */}
        <ResturantsList tittle="Cost Effective" results={FilterByPrice("$")} />
        <ResturantsList tittle="Bit Pricier" results={FilterByPrice("$$")} />
        <ResturantsList tittle="big Effective" results={FilterByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
