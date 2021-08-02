import React, { useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { observer, inject } from "mobx-react";
const Login = ({ navigation, store }) => {

    const { doLogin, token } = store;

    console.log(store)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text> Login ... </Text>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={doLogin}>
                <Text style={{ padding: 10, backgroundColor: 'green', color: '#fff', textAlign: 'center' }}>LOGIN</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default inject("store")(observer(Login));