import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Search = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Icon name='search' type='material' style={styles.icon} />
                <TextInput
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder='Search...'
                    style={styles.input}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        width: '100%',
        height: 75,
        borderWidth: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
    },
    icon: {
        marginLeft: 15,
    },
    input: {
        height: '100%',
        flexGrow: 1,
        borderRadius: 10,
    },
    focusedInput: {
        paddingLeft: 10,
    },
    blurredInput: {
        paddingLeft: 30,
    },
});

export default Search;
