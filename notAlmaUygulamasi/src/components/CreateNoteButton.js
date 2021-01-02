import React from 'react'

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

const CreateNoteButton = (props) => (
  <View style={{ width: '48%' }}>
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.navigation.navigate(props.navigationName)
      }}
    >
      <Text style={{ marginBottom: 20 }}>
        <Icon name={props.icon} size={80} color="#292929" />
      </Text>
      <Text style={styles.headerItem}>{props.title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 4,
    height: '48%',
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
  headerItem: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default CreateNoteButton