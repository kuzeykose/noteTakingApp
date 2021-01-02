import React, { useContext } from 'react';

import Item from '../components/Item'
import Avatar from '../components/Avatar'
import Note from '../components/Note'
import CreateNoteButton from '../components/CreateNoteButton'

import { FirebaseContext } from '../provider/Provider'

import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const value = useContext(FirebaseContext)
  const renderItem = ({ item }) => (
    <Item item={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          name="Kuzey Kose"
          email="test@test.com"
        />
      </View>
      <View style={styles.slide}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={value.note}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.note}>
        <Note
          title="Note 1"
          note="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
        />
      </View >
      <View style={styles.create}>
        <CreateNoteButton
          title="Create Note"
          icon='playlist-add'
          navigation={navigation}
          navigationName='Take Note'
        />
        <CreateNoteButton
          title="Show Notes"
          icon='list'
          navigation={navigation}
          navigationName='Notes'
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    marginTop: 20,
    alignItems: 'center'
  },
  note: {
    alignItems: 'center'
  },
  slide: {
    marginTop: 10,
  },
  create: {
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default HomeScreen;
