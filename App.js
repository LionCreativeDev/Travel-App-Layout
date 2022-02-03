import * as React from 'react';
import { Text, View, Image, TextInput, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // You can import from local files
// import HomeHeader from './components/home/homeheader';
// import Searchbox from './components/home/searchbox';
// import Categories from './components/home/categories';
// import Toptrips from './components/home/toptrip';
// import Places from './components/home/places';
// import Footer from './components/home/footer';

// // or any pure javascript modules available in npm
// import { Card, IconButton } from 'react-native-paper';

import Home from './screens/home';
import Details from './screens/details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    {/*<View style={styles.container}>

      <HomeHeader />

      <View style={styles.center}>
        <Text style={styles.heading1}>Where do {'\n'}you want to go?</Text>

        <Searchbox />

        <Categories />

        <Toptrips />
        
        <Places />
        
        <Footer />

      </View>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>*/}
    {/*<Home />
    <Details />*/}
    

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // justifyContent: 'center',
  //   paddingTop: Constants.statusBarHeight,
  //   //backgroundColor: '#fbfbfc',
  //   backgroundColor: '#fbfbfb',
  //   padding: 20,
  // },
  // center:{

  // },
  // heading1:{
  //   marginTop: 10,
  //   fontSize: 14,
  //   // fontFamily: 'sans-serif',
  //   //fontFamily: 'tahoma',
  //   fontFamily: 'verdana',
  //   //fontFamily: 'arial',
  //   fontWeight: 'bold',
  // },  
  // // paragraph: {
  // //   margin: 24,
  // //   fontSize: 18,
  // //   fontWeight: 'bold',
  // //   textAlign: 'center',
  // // },
});
