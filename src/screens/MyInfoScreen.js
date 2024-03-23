import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function MyInfoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Info Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
