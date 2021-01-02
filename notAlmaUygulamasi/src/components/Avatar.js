import React from 'react'

import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

const Avatar = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: "https://i.picsum.photos/id/669/200/300.jpg?grayscale&hmac=cSKbmX4XRAeDAsGAwllgoks5U1tcy9TVFxuPi3eeM9g" }}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.textItem}>{props.name}</Text>
      <Text style={styles.textItem}>{props.email}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 20,
    borderColor: '#292929',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 30,
  },
  textItem: {
    fontSize: 24,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22
  }
});


export default Avatar