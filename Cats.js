import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'

import { cats } from './breeds'

function Cats() {
    return (
      <View style={styles.container}>
        <Ionicons name="bandage-outline" size={48} style={styles.icon} />
        <Text style={styles.heading}>Cats!</Text>
        <Text>Meow!</Text>
        <FlatList
            style={{ flex: 1 }}
            data={cats} 
            renderItem={({ item, index }) => {
                return <Text>{item.breed}</Text>
            }}
        />
      </View>
    );
  }

export default Cats

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
        color: 'orange'
    }

})