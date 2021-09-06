import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/Home';
import {Profile} from '../../screens/Profile';
import {Orders} from '../../screens/Orders';
import { Shopping } from '../../screens/Shopping';



const HomeRoute = createNativeStackNavigator();
const ProfileRoute = createNativeStackNavigator();
const OrdersRoute = createNativeStackNavigator();
const ShoppingRoute = createNativeStackNavigator();


export const HomeStack = () => {
  return (
    <HomeRoute.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <HomeRoute.Screen name="HomeScreen">
        {props => <Home {...props} />}
      </HomeRoute.Screen>
    </HomeRoute.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <ProfileRoute.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ProfileScreen">
      <ProfileRoute.Screen name="ProfileScreen">
        {props => <Profile {...props} />}
      </ProfileRoute.Screen>
    </ProfileRoute.Navigator>
  );
};
export const OrdersStack = () => {
  return (
    <OrdersRoute.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OrdersScreen">
      <OrdersRoute.Screen name="OrdersScreen">
        {props => <Orders {...props} />}
      </OrdersRoute.Screen>
    </OrdersRoute.Navigator>
  );
};
export const ShoppingStack = () => {
  return (
    <ShoppingRoute.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ShoppingScreen">
      <ShoppingRoute.Screen name="OrdersScreen">
        {props => <Shopping {...props} />}
      </ShoppingRoute.Screen>
    </ShoppingRoute.Navigator>
  );
};
