import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

// or any pure javascript modules available in npm
import { Card, IconButton } from 'react-native-paper';

export default function HomeHeader() {
  return (
    <View style={styles.top}>

      {/*<View style={styles.avatar}>
        <Image source={{ uri: 'https://www.clipartmax.com/png/full/189-1892495_flat-avatar-i-can-make-your-cute-flat-avatar-if-you-illustration.png' }} style={{ width: "80%", height: "80%", resizeMode: 'contain' }}></Image>
      </View>*/}

      <TouchableOpacity style={styles.avatar} activeOpacity={0.5}> 
         <Image source={{ uri: 'https://www.clipartmax.com/png/full/189-1892495_flat-avatar-i-can-make-your-cute-flat-avatar-if-you-illustration.png' }} style={{ width: "80%", height: "80%", resizeMode: 'contain' }} /> 
       </TouchableOpacity>

      <Text style={styles.welcomemessage}>Hi Developer!</Text>

      <View style={styles.notification}>
        {/*<Image source={{ uri: 'https://www.clipartmax.com/png/full/189-1892495_flat-avatar-i-can-make-your-cute-flat-avatar-if-you-illustration.png' }} style={{ width: 25, height: "80%", resizeMode: 'contain' }}></Image>*/}
        <IconButton icon="bell-outline" color={"black"} size={20} onPress={() => console.log('Notification Button Pressed')} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  top:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  avatar:{
    // justifyContent: 'center',
    // backgroundColor: '#ccc',
    backgroundColor: '#fc7341',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    // borderRadius: 25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.15,
    elevation: 8,
    // backgroundColor: '#ccc',
    // padding: 20,
    borderRadius: 25
  },
  welcomemessage:{
    alignSelf: 'center',
    // backgroundColor: 'red',
    width: '80%',
    paddingHorizontal: 5,
    // fontFamily: 'sans-serif',
    //fontFamily: 'tahoma',
    fontFamily: 'verdana',
    //fontFamily: 'arial',
    fontWeight: 'normal',
  },
  notification:{
    // justifyContent: 'center',
    // backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    // borderRadius: 25
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.15,
    elevation: 8,
    backgroundColor: 'white',
    // padding: 20,
    borderRadius: 25
  },
});
