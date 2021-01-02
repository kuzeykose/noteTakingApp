import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../provider/Provider'

import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

const MyNotesScreen = ({ route, navigation }) => {
  const value = useContext(FirebaseContext)

  const { item } = route.params;
  const [header, setHeader] = useState(item.title)
  const [note, setNote] = useState(item.note)

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.headerInput}
        onChangeText={text => setHeader(text)}
        value={header}
        placeholder="Header"
      ></TextInput>
      <TextInput
        style={styles.noteInput}
        onChangeText={text => setNote(text)}
        value={note}
        placeholder="Take some notes here!"
        multiline
      ></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          value.updateNote(item.id, header, note)
        }}
      >
        <Text style={{ fontSize: 20 }}>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerInput: {
    marginTop: 10,
    width: '95%',
    height: '10%',
    borderColor: '#292929',
    fontSize: 28,
    padding: 10,
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
  noteInput: {
    height: '80%',
    width: '95%',
    borderColor: '#292929',
    fontSize: 24,
    paddingTop: 20,
    padding: 10,
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
  button: {
    backgroundColor: '#77de76',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 75,
    borderRadius: 10,
  }
});


export default MyNotesScreen;
