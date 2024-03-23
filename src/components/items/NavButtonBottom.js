import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function NavButtonBottom({ navigation, tab }) {
    const { title, icon } = tab;
    return (
        <TouchableOpacity
            style={styles.tab}
            onPress={() => navigation.navigate(title)}>
            <Icon style={styles.icon} name={icon} type='font-awesome' />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderWidth: 1,            
        borderColor: '#000000', 
    },
    icon: {
        color: '#333',
    },
});
