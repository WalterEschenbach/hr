import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const User = ({ imageUrl, firstRowText, secondRowText }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => { console.log('View was pressed!'); }}>
            <Icon name='user' type='font-awesome' style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{firstRowText}</Text>
                <Text style={styles.title}>{secondRowText}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text>test</Text>
            </View>
            <Icon name='angle-right' type='font-awesome' />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '15vh',
        borderBottomWidth: 1,
        padding: 10
    },
    image: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        margin: 10
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 12,
        fontStyle: 'italic'
    },
    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        margin: 10
    }
});

export default User;
