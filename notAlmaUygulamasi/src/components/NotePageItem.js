import React, { useContext } from 'react'
import { FirebaseContext } from '../provider/Provider'
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const NotePageItem = ({ item, navigation }) => {
  const value = useContext(FirebaseContext)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => {
          value.deleteNote(item.id)
        }}
      >
        <Icon name="delete" size={30} color="red" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('MyNote', {
            item: item
          })
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Icon name="arrow-forward" size={30} color="#292929" />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300
  },
  title: {
    fontSize: 32,
  },
  delete: {
    width: 50,
    alignItems: 'center',

  }
});


export default NotePageItem