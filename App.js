import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FlatList } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { QueryClientProvider, QueryClient } from "react-query";
import Gaga from './src/Post';
import Photos from './Photos';
import Fugu from './photos2';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const queryClient = new QueryClient();

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
}

const NewsFeed = () => { 
  return (
     <SafeAreaView>
       <View>
       <Image style={{ height: 150, width: '100%', marginBottom: 0}}
    source={require("./assets/TopBar.jpeg")}/>
       </View>
       <Fugu/>
     </SafeAreaView>
) }

const HomeScreen = () => { 
  return (
    <View>
      
    </View>

) }
const AccountScreen = () => {
  return(
    <SafeAreaView>
     
    </SafeAreaView>
  )
}
const SearchScreen = () => { 
  return (
    <SafeAreaView>
    <Image style={{ height: 60, width: '100%', marginBottom: 2}}
    source={require("./assets/searchbar.jpg")}/>
    <View >
      <  Photos />
    </View>

  
  </SafeAreaView>

) }

const Profile = () => { 
  return (
     <SafeAreaView>
      
     </SafeAreaView>
) }

class Product extends React.Component {
  render() {
    const { name, brand, price, productImage } = this.props.product
    return (
      <View style={{ width: '32%', alignItems: 'center',  margin: '0.75%'}}>
        <Image style={{width:123, height: 123}} source={{ uri: productImage}}/>
        
      </View>
    )
  }
}
const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={MainNavigator}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const jsonPlaceholderData = "https://jsonplaceholder.typicode.com/photos"



  
  
