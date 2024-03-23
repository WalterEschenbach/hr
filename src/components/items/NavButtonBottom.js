import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default function NavButtonBottom({ navigation, tab }) {
    const { title, icon } = tab;
    return (
        <TouchableOpacity
            style={styles.tab}
            onPress={() => navigation.navigate(title)}>
            <Icon style={styles.icon} name={icon} type='font-awesome' />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    icon: {
        color: '#333',
    },
    text: {
        color: '#333',
    },
});
