import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default function NavButtonTop({ navigation, tab }) {
    const { title } = tab;
    return (
        <TouchableOpacity
            style={styles.tab}
            onPress={() => navigation.navigate(title)}>
            <Text style={styles.text} >{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tab: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    text: {
        color: '#333',
        marginHorizontal: 15,
    },
});
