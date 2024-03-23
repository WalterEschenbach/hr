import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import NavButtonTop from '../components/items/NavButtonTop';
import tabs from '../assets/json/nav-buttons-top.json';

export default function TopNavBar({ navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                pagingEnabled={true}>
                {tabs.map((tab, index) => (<NavButtonTop key={index} navigation={navigation} tab={tab} />))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#f2f2f2',
        borderWidth: 1,
    }
});
