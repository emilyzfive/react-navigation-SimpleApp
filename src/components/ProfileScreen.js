import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const OneScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      1 Screen
    </Text>
  </View>
)

const TwoScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      2 Screen
    </Text>
  </View>
)

const ThreeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
     3 Screen
    </Text>
  </View>
)

const FourScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      4 Screen
    </Text>
  </View>
)

const ProfileScreen = TabNavigator({
  One: {screen: OneScreen},
  Two: {screen: TwoScreen},
  Three: {screen: ThreeScreen},
  Four: {screen: FourScreen}
})

ProfileScreen.navigationOptions = {
  title: 'Profile',
};

export default ProfileScreen;
