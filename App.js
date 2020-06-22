/* 1 */
import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResturantShowScreen from "./src/screens/ResturantShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    DetailScreen: ResturantShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Resturant Search",
    },
  }
);
export default createAppContainer(navigator);
