import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'

import { dogs } from './breeds'

function Dogs() {
    return (
      <View style={styles.container}>
        <Ionicons name="paw-outline" size={48} style={styles.icon} />
        <Text style={styles.heading}>Dogs</Text>
        <Text>Woof!</Text>
        <FlatList
            style={{ flex: 1 }}
            data={dogs} 
            renderItem={({ item, index }) => {
                return <Text>{item.breed}</Text>
            }}
        />
      </View>
    );
  }

export default Dogs

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    heading: {
        fontSize: 48,
        fontWeight: 'bold',
        margin: 20
    },
    icon: {
        color: 'brown'
    }

})