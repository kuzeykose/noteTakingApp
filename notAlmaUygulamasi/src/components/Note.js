import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Note = (props) => (
  <View style={{ width: '95%', }}>
    <View style={styles.container}>
      <Text style={styles.lastNote}>Last note</Text>
      <Text style={styles.headerItem}>{props.title}</Text>
      <Text numberOfLines={2} style={styles.textItem}>{props.note}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 200,
    marginBottom: 20,
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
  textItem: {
    fontSize: 24,
    padding: 12,
  },
  headerItem: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 10,
  },
  lastNote: {
    fontSize: 20,
    padding: 10,
    color: '#292929',
    opacity: 0.3
  }
});


export default Note