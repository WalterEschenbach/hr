import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PersonalScreen from './PersonalScreen';
import JobScreen from './JobScreen';
import TopNavBar from '../navigation/TopNavBar';
import TimeOffScreen from './TimeOffScreen';
import DocumentsScreen from './DocumentsScreen';
import BenefitsScreen from './BenefitsScreen';
import PerformanceScreen from './PerformanceScreen';
import NotesScreen from './NotesScreen';


const Tab = createMaterialTopTabNavigator();

export default function MyInfoScreen() {
    return (
        <Tab.Navigator
            tabBar={(props) => <TopNavBar {...props} />}>
            <Tab.Screen name="Personal" component={PersonalScreen} />
            <Tab.Screen name="Job" component={JobScreen} />
            <Tab.Screen name="Time Off" component={TimeOffScreen} />
            <Tab.Screen name="Documents" component={DocumentsScreen} />
            <Tab.Screen name="Benefits" component={BenefitsScreen} />
            <Tab.Screen name="Performance" component={PerformanceScreen} />
            <Tab.Screen name="Notes" component={NotesScreen} />
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
