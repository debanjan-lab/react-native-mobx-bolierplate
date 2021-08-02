import React, { useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
const About = ({ navigation }) => {
    console.log(navigation)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text> About ... </Text>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={{ padding: 10, backgroundColor: 'blue', color: '#fff', textAlign: 'center' }}>Go to Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default About;