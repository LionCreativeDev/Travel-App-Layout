import * as React from 'react';
import { Text, View, Image, TextInput, FlatList, StyleSheet, Dimensions, useWindowDimensions, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { TabView, SceneMap } from 'react-native-tab-view';

// or any pure javascript modules available in npm
import { Card, IconButton, Tabs, TabScreen, useTabIndex, useTabNavigation, } from 'react-native-paper';

import Overview from '../components/details/overview';
import Footer from '../components/details/footer';

let itemSelected = {};

const OverviewRoute = () => (
  <>
  {/*<View style={{ flex: 1, backgroundColor: '#ff4081' }}>
  </View>*/}
    <Overview description={'1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} itemSelected={itemSelected} />
  </>
);

const ReviewsRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
  </View>
);

const TabBarView = ({index, setIndex, routes}) => (
  <View style={{ flexDirection: 'row', alignItems: 'baseline', paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10 }}>
    {routes.map((route) => (
      route.index === index
        ?
        <TouchableOpacity
          onPress={()=>{
            setIndex(route.index)
          }}
        >
          <Text style={styles.activetab}>{route.title}</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          onPress={()=>{
            setIndex(route.index)
          }}
        >
          <Text style={styles.inactivetab}>{route.title}</Text>
        </TouchableOpacity>
    ))}
  </View>
)

const renderScene = SceneMap({
  first: OverviewRoute,
  second: ReviewsRoute,
});

export default function Details({ navigation, route }) {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', index: 0, title: 'Overview' },
    { key: 'second', index: 1, title: 'Reviews' },
  ]);

//console.log("index is ==>", index);
itemSelected = route.params.item;

  return (
    <View style={styles.container}>

      {/* top part */}
      <View style={{ marginTop: 20, borderRadius: 20, shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 10, }}>

        {/*place image*/}
        <Image source={{ uri: route.params.item.url, }} style={styles.itemPhoto} />
        {/*place image*/}

        {/*top buttons*/}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', position: 'absolute', top: 30, paddingHorizontal: 10, }}>
          <IconButton icon="chevron-left" style={{ backgroundColor: 'white' }} color={"black"} size={15} onPress={() => navigation.goBack()} />

          <IconButton icon="heart-outline" style={{ backgroundColor: 'white' }} color={"black"} size={15} onPress={() => console.log('Favorite Button Pressed')} />
        </View>
        {/*top buttons*/}

        {/*place name and price per person*/}
        <View style={{ flexDirection: 'column', width: '100%', position: 'absolute', bottom: 0, }}>
          <Text style={styles.placename} ellipsizeMode="tail" numberOfLines={2}>{route.params.item.name}{/*Acadia National Park, Maine*/}</Text>

          <View style={styles.pricingcontainer}>
            <Text style={styles.price}>
              {route.params.item.price}
            <Text style={styles.persons}>/person</Text>
            </Text>
          </View>

        </View>
        {/*place name and price per person*/}

      </View>
      {/* top part */}
      
      

      <TabView
        navigationState={{ index, routes }}
        renderTabBar={() => (<TabBarView index={index} setIndex={setIndex} routes={routes} />)}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }} 
        style={{paddingTop: 10}}
      />

      <Footer navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    //backgroundColor: '#fbfbfc',
    backgroundColor: '#fbfbfb',
    padding: 20,
  },
  itemPhoto: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').width - 20,
    borderRadius: 20,
  },
  placename:{
    color: 'white',
    fontSize: 18,
    fontFamily: 'verdana',
    paddingHorizontal: 10,
  },
  pricingcontainer:{
    padding: 20,
    backgroundColor: '#00000099', 
    // opacity: 0.8,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  price:{
    color: '#ffffffff',
    fontSize: 18,
    fontFamily: 'verdana',
  },
  persons:{
    color: '#ffffffff',
    fontSize: 10,
    fontFamily: 'verdana',
  },
  activetab:{
    color: '#fc7341', fontSize: 18, fontWeight: 'bold', paddingRight: 10
  },
  inactivetab:{
    color: '#999', fontSize: 14, fontWeight: 'bold', paddingRight: 10
  }
});
