import React from 'react'

import {
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
const image = { uri: "https://picsum.photos/200/300?grayscale" };

const Item = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      navigation.navigate('MyNote', {
        item: item
      })
    }}
  >
    <ImageBackground source={image} imageStyle={{ borderRadius: 6 }} style={styles.image}>
      <Text style={styles.title}>{item.title}</Text>
    </ImageBackground>
  </TouchableOpacity>

);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 16,
    height: 120,
    width: 200,
    borderColor: '#292929',
    borderRadius: 10,
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
  title: {
    fontSize: 32,
    color: 'white',
    padding: 20
  },
  image: {
    height: 120,
    width: 200,
    flex: 1,
    justifyContent: "center",
  },
});


export default Item