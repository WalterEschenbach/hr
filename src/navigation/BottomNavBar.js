import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BottomNavBar = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.tabText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => navigation.navigate('Inbox')}>
                <Text style={styles.tabText}>Inbox</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => navigation.navigate('People')}>
                <Text style={styles.tabText}>People</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tab}
                onPress={()=> navigation.navigate('Files')}>
                <Text style={styles.tabText}>Files</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tab}
                onPress={()=> navigation.navigate('MyInfo')}>
                <Text style={styles.tabText}>My Info</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        height: 100,
        borderTopWidth: 1,
        borderTopColor: '#000000',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderWidth: 1,            
        borderColor: '#000000', 
    },
    tabText: {
        fontSize: 16,
        color: '#333',
    },
});

export default BottomNavBar;
