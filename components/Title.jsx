import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const Title = ({ text }) => {
  const [fontsLoaded] = useFonts({
    myfont: require('../assets/fonts/sfpro.ttf'), // Add your custom font here
  });
  if (!fontsLoaded) {
    return null;
  }

  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'myfont', // Use custom font
    letterSpacing: -1,
    color: 'white', // White text for better visibility
    fontSize: 23,
    color: 'white', // White text color to contrast the black background
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Title;
