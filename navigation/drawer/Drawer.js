import React from 'react';
import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import * as Stacks from '../stack';

import {COLORS, icons} from '../../constants';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      {/* Header */}
      <View>
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label={() => <Text>Help</Text>}
        // icon={icons.cart}
        onPress={() => console.log('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="red"
        drawerStyle={{
          flex: 1,
          width: '65%',
          paddingRight: 20,
          backgroundColor: 'red',
        }}
        sceneContainerStyle={{
          backgroundColor: 'red',
        }}
        initialRouteName="Home"
        drawerContent={props => {
          return (
            <CustomDrawerContent navigation={props.navigation} {...props} />
          );
        }}>
        <Drawer.Screen
          name="Home"
          options={{
            headerStyle: {backgroundColor: COLORS.primary},
            drawerIcon: ({color, focused, size}) => (
              <Image source={icons.home} style={{width: 20, height: 20}} />
            ),
          }}>
          {props => <Stacks.HomeStack {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name="Profile"
          options={{
            headerStyle: {backgroundColor: COLORS.primary},
            drawerIcon: ({color, focused, size}) => (
              <Image source={icons.home} style={{width: 20, height: 20}} />
            ),
          }}>
          {props => <Stacks.ProfileStack {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name="Orders"
          options={{
            headerStyle: {backgroundColor: COLORS.primary},
            drawerIcon: ({color, focused, size}) => (
              <Image source={icons.home} style={{width: 20, height: 20}} />
            ),
          }}>
          {props => <Stacks.OrdersStack {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name="Shopping"
          options={{
            headerStyle: {backgroundColor: COLORS.primary},
            drawerIcon: ({color, focused, size}) => (
              <Image source={icons.home} style={{width: 20, height: 20}} />
            ),
          }}>
          {props => <Stacks.ShoppingStack {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigation;
