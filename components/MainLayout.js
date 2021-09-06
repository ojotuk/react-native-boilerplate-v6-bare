import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {COLORS} from '../constants';
import {useDrawerProgress} from '@react-navigation/drawer';

const Home = ({children}) => {
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 26],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          ...animatedStyle,
        }}>
        {children}
      </Animated.View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
