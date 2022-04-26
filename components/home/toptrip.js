import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// or any pure javascript modules available in npm
import { Card, IconButton } from 'react-native-paper';

export default function Toptrips() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5,}}>
      <View style={{paddingRight: 10, flexDirection: 'row', justifyContent: 'center',
    alignItems: 'center'}}>
        <Text style={styles.heading4}>Top trips</Text>
        <Icon name="chevron-down" size={8} color={'#fc7341'} />
      </View>

      <View style={{paddingLeft: 10, flexDirection: 'row', justifyContent: 'center',
    alignItems: 'center'}}>
        <Text style={styles.heading5}>Explore</Text>
        <Icon name="chevron-down" size={8} style={{color: '#fc7341'}} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  heading4:{
    fontSize: 16,
    // fontFamily: 'sans-serif',
    //fontFamily: 'tahoma',
    fontFamily: 'verdana',
    //fontFamily: 'arial',
    fontWeight: 'bold',
    marginRight: 5
    // backgroundColor: 'red'
  },
  heading5:{
    fontSize: 14,
    // fontFamily: 'sans-serif',
    //fontFamily: 'tahoma',
    fontFamily: 'verdana',
    //fontFamily: 'arial',
    fontWeight: 'bold',
    color: "#999",
    marginRight: 5
  },
});
