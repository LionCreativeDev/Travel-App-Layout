import * as React from 'react';
import { Text, View, Image, TextInput, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import HomeHeader from '../components/home/homeheader';
import Searchbox from '../components/home/searchbox';
import Categories from '../components/home/categories';
import Toptrips from '../components/home/toptrip';
import Places from '../components/home/places';
import Footer from '../components/home/footer';

// or any pure javascript modules available in npm
import { Card, IconButton } from 'react-native-paper';

export default function Home({ navigation }) {

  //const [type, settype] = React.useState("Camp");
  const [type, settype] = React.useState("");
  const [search, setsearch] = React.useState("");

  
  React.useEffect(() => {
    if(search !== "")
      settype("");
  },[search]);

  React.useEffect(() => {
    if(type !== "")
      setsearch("");
  },[type]);
  
  return (
    <View style={styles.container}>

      <HomeHeader />

      <View style={styles.center}>
        <Text style={styles.heading1}>Where do {'\n'}you want to go?</Text>

        <Searchbox search={search} setsearch={setsearch} />

        <Categories type={type} settype={settype}/>

        <Toptrips />
        
        <Places navigation={navigation} type={type} search={search} />
        
        <Footer />

      </View>
      {/*<Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 20,
    //backgroundColor: '#fbfbfc',
    backgroundColor: '#fbfbfb',
    paddingHorizontal: 20,
  },  
  center:{

  },
  heading1:{
    marginTop: 10,
    fontSize: 30,
    // fontFamily: 'sans-serif',
    //fontFamily: 'tahoma',
    fontFamily: 'verdana',
    //fontFamily: 'arial',
    fontWeight: 'bold',
    //paddingTop: 20,
    paddingBottom: 10,
    //backgroundColor: 'green',
  },  
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
});
