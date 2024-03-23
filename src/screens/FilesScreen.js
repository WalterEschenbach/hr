import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function FilesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>FilesScreen</Text>
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