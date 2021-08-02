import { UserStore } from "./UserStore";
export default class Store {
    constructor() {
        this.user = new UserStore(this);
    }
}