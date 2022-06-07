import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Photos from "./src/photos/Photos";
import Photos2 from "./src/photos/photos2";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={NewsFeed} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reels" component={HomeScreen} />
      <Tab.Screen name="Shop" component={AccountScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const NewsFeed = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.imageFeed}
          source={require("./assets/TopBar.jpeg")}
        />
      </View>
      <Photos2 />
    </SafeAreaView>
  );
};

const HomeScreen = () => {
  return <View></View>;
};
const AccountScreen = () => {
  return <SafeAreaView></SafeAreaView>;
};
const SearchScreen = () => {
  return (
    <SafeAreaView>
      <Image
        style={styles.imageSearchScreen}
        source={require("./assets/searchbar.jpg")}
      />
      <View>
        <Photos />
      </View>
    </SafeAreaView>
  );
};

const Profile = () => {
  return <SafeAreaView></SafeAreaView>;
};

const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  imageFeed: { 
    height: 150, 
    width: "100%",
     marginBottom: 0
    },
  imageSearchScreen: { 
    height: 60,
     width: "100%",
      marginBottom: 2 
    },
});

