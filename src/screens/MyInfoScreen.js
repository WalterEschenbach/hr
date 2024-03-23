import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopNavBar from '../navigation/TopNavBar';
import tabs from '../assets/json/nav-buttons-top.json';
import renderTabs from '../utils/topNavRenderer';


const Tab = createMaterialTopTabNavigator();

export default function MyInfoScreen() {
    return (
        <Tab.Navigator
            tabBar={(props) => <TopNavBar {...props} />}>
            {tabs.map((tab, index) => (<Tab.Screen key={index} name={tab.title} component={renderTabs(tab.title)} />))}
        </Tab.Navigator>
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
