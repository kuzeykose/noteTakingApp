import React, { useContext } from 'react';
import NotePageItem from '../components/NotePageItem'
import { FirebaseContext } from '../provider/Provider'

import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  StyleSheet
} from 'react-native';

const NotesScreen = ({ navigation }) => {
  const value = useContext(FirebaseContext)

  const renderItem = ({ item }) => (
    <NotePageItem item={item} navigation={navigation} />
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={value.note}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
});

export default NotesScreen;
