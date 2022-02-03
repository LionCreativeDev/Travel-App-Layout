import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// or any pure javascript modules available in npm
import { Card, IconButton, Colors} from 'react-native-paper';

const menu = [
  { name: 'Home', icon: 'home-outline' },
  { name: 'Location', icon: 'compass-outline' },
  { name: 'Favorite', icon: 'heart-outline' },
  { name: 'Account', icon: 'account-outline' }
];

export default function Footer() {
  return (
    <View style={styles.footer}>
      {menu.map((item, key) => (
        <IconButton key={item.name}
          icon={item.icon}
          color={Colors.white}
          size={25}
          onPress={() => console.log(`You Pressed ${item.name} button`)}
        />
      ))}
      {/*<IconButton
        icon="home-outline"
        color={Colors.white}
        size={20}
        onPress={() => console.log('Pressed')}
      />
      <IconButton
        icon="compass-outline"
        color={Colors.white}
        size={20}
        onPress={() => console.log('Pressed')}
      />
      <IconButton
        icon="heart-outline"
        color={Colors.white}
        size={20}
        onPress={() => console.log('Pressed')}
      />
      <IconButton
        icon="account-outline"
        color={Colors.white}
        size={20}
        onPress={() => console.log('Pressed')}
      />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignContent: 'center',
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
    // bottom: 0,
    bottom: 20,
    width: '100%'
  }
});
