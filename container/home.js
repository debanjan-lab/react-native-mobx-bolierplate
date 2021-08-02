import React, { useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { observer, inject } from "mobx-react";
const Home = ({ navigation, store }) => {
    const { doLogout } = store
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text> Home ... </Text>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={doLogout}>
                <Text style={{ padding: 10, backgroundColor: 'red', color: '#fff', textAlign: 'center' }}>LOGOUT</Text>
            </TouchableOpacity>
            <View style={{ margin: 100 }} />
            <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')}>
                <Text style={{ padding: 10, backgroundColor: 'blue', color: '#fff', textAlign: 'center' }}>Go to About</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default inject("store")(observer(Home));