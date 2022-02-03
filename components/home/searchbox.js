import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

// or any pure javascript modules available in npm
import { Card, IconButton } from 'react-native-paper';

export default function Searchbox({search, setsearch}) {
  return (
    <View style={styles.searchbox}>
      <TextInput style={styles.input} placeholder="Search for places" placeholderTextColor="#aaa" onChangeText={newText => setsearch(newText)} value={search}/>
      <IconButton icon="magnify" color={"black"} size={20} onPress={() => console.log('Search Button Pressed')} style={styles.searchbtn} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbox:{
    flexDirection: "row",
    height: 60,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.15,
    elevation: 8,
  },
  input:{
    width: '92%',
    // backgroundColor: '#ccc',
    fontSize: 16,
  },
  searchbtn:{
    padding: 0, 
    margin: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.15,
    elevation: 8,
    backgroundColor: '#fff',
    alignSelf: 'center'
  }
});
