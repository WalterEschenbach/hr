import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BenefitsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Benefits Screen</Text>
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
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});