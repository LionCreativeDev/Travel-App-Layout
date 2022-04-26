import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// or any pure javascript modules available in npm
import { List, Card, IconButton, Colors} from 'react-native-paper';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={()=>{ console.log("Book Now Pressed"); }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold',}}>Book now</Text>
        <List.Icon color={'white'} icon="arrow-right" style={{marginBottom:5}} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 80,
    backgroundColor: '#121212',
    borderRadius: 20,

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.4,
    elevation: 8,
    position: 'absolute',
    bottom: 20,
    width: '100%'
  },
  button: {
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "center"
    // backgroundColor: "#DDDDDD",
    // padding: 10,
    // fontSize: 14, 
    // fontWeight: 'bold', 
    // color: 'white',
  },
});
