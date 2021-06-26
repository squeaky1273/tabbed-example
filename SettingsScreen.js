import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'


function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Ionicons name="ios-planet-outline" size={48} style={styles.icon} />
        <Text style={styles.heading}>Settings!</Text>
        <Text>Foo bar</Text>
      </View>
    );
  }

export default SettingsScreen

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
        color: 'cornflowerblue'
    }

})