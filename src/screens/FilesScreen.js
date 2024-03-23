import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Search from '../components/forms/Search';
import FileFolder from '../components/items/FileFolder';
import folders from '../assets/json/file-categories.json';

export default function FilesScreen() {
    return (
        <View style={styles.container}>
            <Search />
            <ScrollView>
                {folders.map((folder, index) => <FileFolder key={index} title={folder.title} number={folder.quantity} />)}
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
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
