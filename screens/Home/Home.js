import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {COLORS} from '../../constants';
import { useDrawerProgress } from '@react-navigation/drawer';
import MainLayout from "./../../components/MainLayout"

const Home = () => {
  return (
    <MainLayout>
      <Text>Home</Text>
    </MainLayout>
  );
};

export default Home;

const styles = StyleSheet.create({});
