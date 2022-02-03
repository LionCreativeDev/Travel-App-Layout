import * as React from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// or any pure javascript modules available in npm
import { Card, IconButton } from 'react-native-paper';

export default function Categories({type, settype}) {

  const category = [
    {
      categoryname: "Camp",
      categoryimage: require('../../assets/camptransparent.png')
    },
    {
      categoryname: "Mountain",
      categoryimage: require('../../assets/mountains.jpg')
    },
    {
      categoryname: "Beach",
      categoryimage: require('../../assets/beaches1.jpg')
    },
    {
      categoryname: "Forest",
      categoryimage: require('../../assets/forests.jpg')
    },
  ];

  return (
    <>
      <Text style={styles.heading3}>Categories</Text>

      <View>
        {/*<View style={{backgroundColor: 'white', flexDirection: "row"}}>
              <Image style={styles.cimage} source={category[0]["categoryimage"]} />
              <Text style={{alignSelf: 'center'}}>{category[0]["categoryname"]}</Text>
            </View>*/}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={category}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => { settype(item.categoryname) }} activeOpacity={1}>
                <View style={{ backgroundColor: `${type === item.categoryname ? "white" : "#f9f9f9"}`, height: 50, flexDirection: "row", alignItems: 'space-between', marginVertical: 5, marginRight: 5, marginLeft: 5, paddingHorizontal: 5, shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, shadowOpacity: 0.15, elevation: 8, borderRadius: 5, marginBottom: 10 }}>
                  <Image style={styles.cimage} source={item["categoryimage"]} />
                  <Text style={{ alignSelf: 'center', paddingRight: 10, fontFamily: 'verdana', paddingLeft: 5 }}>{item["categoryname"]}</Text>
                </View>
              </TouchableOpacity>
          )}
          style={{ marginLeft: -5, marginTop: 5 }} />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heading3:{
    paddingTop: 20,
    fontSize: 20,
    // fontFamily: 'sans-serif',
    //fontFamily: 'tahoma',
    fontFamily: 'verdana',
    //fontFamily: 'arial',
    fontWeight: 'bold',
  },
  cimage: {
    width: 40, 
    height: 40, 
    resizeMode: 'cover',
    alignSelf: 'center'
    // borderRadius: 5,
    // marginVertical: 5,
    // backgroundColor: 'green'
  }
});
