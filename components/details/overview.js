import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// or any pure javascript modules available in npm
import {IconButton} from 'react-native-paper';

export default function Overview({description, itemSelected}) {
  return (
    <View style={{ backgroundColor: 'transparent' }}>
      <ScrollView>
        <>
          <View style={{ flexDirection: 'row' }}>
            {/*Duration */}
            <View style={{ flexDirection: 'row', alignItems: "center" }}>
              <View>
                <IconButton icon="circle" color={"#fc7341"} size={20} />
              </View>

              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 10, color: '#999', fontFamily: 'verdana', }}>DURATION</Text>
                <Text style={{ fontWeight: 'bold' }}>{itemSelected.duration}</Text>
              </View>
            </View>
            {/*Duration */}

            {/*Rating */}
            <View style={{ flexDirection: 'row', alignItems: "center" }}>
              <View>
                <IconButton icon="star" color={"#fc7341"} size={20} />
              </View>

              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 10, color: '#999', fontFamily: 'verdana', }}>RATING</Text>
                <Text style={{ fontWeight: 'bold' }}>{itemSelected.rating} out of 5</Text>
              </View>
            </View>
            {/*Rating */}
          </View>
          <Text style={styles.placedescription}>{description}</Text>
        </>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  placedescription:{
    fontFamily: 'verdana',
    fontSize: 12,
    fontWeight: 'normal',
    color: "#777",
    lineHeight: 15,
    paddingHorizontal: 10,
    paddingBottom: 100
  }
});
