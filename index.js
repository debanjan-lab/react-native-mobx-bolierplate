/**
 * @format
 */
import React from 'react';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from "mobx-react"
import { UserStore } from './store/UserStore';
import 'react-native-gesture-handler';
const store = new UserStore;

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)


AppRegistry.registerComponent(appName, () => Root);
