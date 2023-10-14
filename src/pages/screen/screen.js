import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Screen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.bigBlue}>
        App Shoes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1, // Use flex to control the container's size
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigBlue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default Screen;