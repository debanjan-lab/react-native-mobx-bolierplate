import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { observer, inject } from "mobx-react";
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './routes/appStack';
import AuthStackNavigator from './routes/authStack';
const App = ({ store }) => {
  console.log("store", store)
  const { getListTodoFromApi, loading, token, readData } = store
  useEffect(() => {
    readData()
  }, [])

  return (
    <NavigationContainer>
      {token ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default inject("store")(observer(App));