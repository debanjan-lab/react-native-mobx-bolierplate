import { makeObservable, observable, computed, action, flow, autorun, decorate, configure, makeAutoObservable } from "mobx"
import axios from 'axios'
configure({ enforceActions: true })
import AsyncStorage from '@react-native-async-storage/async-storage';
export class UserStore {
    loading = false;
    list = [];
    token = null

    constructor(value) {
        makeObservable(this, {
            token: observable,
            list: observable,
            loading: observable,
            getListTodoFromApi: action,
            doLogin: action,
            doLogout: action,
            readData: action
        })
        this.value = value
    }


    getListTodoFromApi = async () => {
        this.loading = true
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log("data", data)
        if (data) {
            this.list = data.data;
            this.loading = false
        }
    }
    doLogin = async () => {
        this.loading = true
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log("data", data)
        if (data) {
            this.storeData('Token-XXX')
        }
    }

    doLogout = async () => {
        this.removeData()
    }

    storeData = async (value) => {
        await AsyncStorage.setItem('@token', value).then(() => {
            this.token = 'Token-XXX';
            this.loading = false
        })
    }
    removeData = async () => {
        await AsyncStorage.removeItem('@token').then(() => {
            this.token = null;
        })
    }
    readData = async () => {
        await AsyncStorage.getItem('@token').then((response) => {
            console.log("response", response)
            if (response) {
                this.token = response;
            }
        })
    }
}