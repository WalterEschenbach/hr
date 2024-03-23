import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

export default function FileFolder({ title, number }) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => { console.log('View was pressed!'); }}>
            <Icon style={styles.folderIcon} name='folder' type='font-awesome' />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.numberContainer}>
                    <Text style={styles.number}>{number}</Text>
                </View>
            </View>
            <Icon style={styles.arrowIcon} name='angle-right' type='font-awesome' />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 70,
        borderBottomWidth: 1,
        padding: 10
    },
    folderIcon: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        margin: 10,
        height: '75%'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    numberContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    number: {
        fontSize: 16,
        color: '#000',
        backgroundColor: '#f2f2f2',
    },
    arrowIcon: {
        fontSize: 16,
        color: '#000',
    },
});


