import { useEffect, useState } from "react";
import yelp from "../config/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errormsg, setErrorMsg] = useState("");

  const searchApi = async (initialSearchValue) => {
    console.log("Hi there");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: initialSearchValue,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg("something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, errormsg];
};
