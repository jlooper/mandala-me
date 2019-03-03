import { Kinvey } from 'kinvey-nativescript-sdk';

export default class BackendService {

    isLoggedIn() {
        if (!Kinvey.User.getActiveUser()) {
            return false
        }
        else {
            return true
        }
    }

}
