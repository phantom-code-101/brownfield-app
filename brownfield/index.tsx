import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const BrownfieldHome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Welcome Brownfield</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    innerContainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default BrownfieldHome;