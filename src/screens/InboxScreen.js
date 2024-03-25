import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    SectionList,
    StatusBar
} from 'react-native';
import inboxData from '../assets/json/inbox.json';
import { Icon } from 'react-native-elements';


export default function InboxScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                style={styles.listContainer}
                sections={inboxData}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Icon name='user' type='font-awesome' style={styles.image} />
                        <View style={styles.textContainer}>

                            <Text style={styles.title}>{item.request}</Text>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: StatusBar.currentHeight,
        width: '100%',
    },
    listContainer: {
        width: '100%',
    },
    item: {
        flexDirection: 'row',
        padding: 10,
        bottomBorderWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    image: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        marginHorizontal: 10,
    },
    header: {
        fontSize: 18,
        backgroundColor: '#fff',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
    },
});