import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavButtonBottom from '../components/items/NavButtonBottom';
import  tabs from '../assets/json/nav-buttons-bottom.json';

export default function BottomNavBar ({ navigation }) {
    
    return (
        <View style={styles.container}>
            {tabs.map((tab, index) => (<NavButtonBottom key={index} navigation={navigation} tab={tab} />))}
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
    }
});
