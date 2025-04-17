import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const GreenfieldHome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Welcome Greenfield</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc'
    },
    innerContainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default GreenfieldHome;