import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SearchScreen from "./screens/searchScreen";
import BookTransactionScreen from "./screens/bookTransactionScreen";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";


export default class App extends React.Component {
  render() {

  return (
    <AppContainer/>
  )
}};

const TabNavigator = createBottomTabNavigator( {
  bookTransactionScreen:{screen:BookTransactionScreen},
  searchScreen:{screen:SearchScreen},

},

{
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: () => {
          const routeName = navigation.state.routeName;
          console.log(routeName);
          if (routeName === "bookTransactionScreen") {
            return(
              <Image source= {require("./assets/book.png")} style={styles.image}></Image>
            )
          }
          else if (routeName === "searchScreen") {
            return(
              <Image source= {require("./assets/searchingbook.png")} style={styles.image}></Image>
            )
    
          }
        }
    
      })
 
    });


  

  


const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:40,
    height:40
  }
});
