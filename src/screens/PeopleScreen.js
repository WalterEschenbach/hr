import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import User from '../components/items/User';
import usersData from '../assets/json/users.json';
import Search from '../components/forms/Search';


export default function PeopleScreen() {
    return (
        <View style={styles.container}>
            <Search />
            <ScrollView>
                {usersData.map((user, index) => <User key={index} imageUrl={require('../assets/images/user-profile.jpg')} firstRowText={user.name} secondRowText={user.work_title} />)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
