import { Kinvey } from 'kinvey-nativescript-sdk';

const dataStore = Kinvey.DataStore.collection('images');

export default class KinveyService {

login(user) {

    return Kinvey.User.login(user.username, user.password)
        .then(() => {
            let activeUser = Kinvey.User.getActiveUser();
            return activeUser.registerForLiveService();
        })
        .catch(function (error) {
            alert({
                title: "Oops",
                okButtonText: "OK",
                message: error.message
            });

        });
}

logout() {
    let activeUser = Kinvey.User.getActiveUser();
    if (activeUser) {
        return activeUser.unregisterFromLiveService()
            .then(() => {
                return activeUser.logout();
            });
    }

    return Promise.resolve();
}

register(user) {
    return Kinvey.User.signup(user)
        .then(function (user) {
            return user
        })
        .catch(function (error) {
            alert({
                title: "Oops",
                okButtonText: "OK",
                message: error.message
            });

        });
}

getData() {
    return dataStore;
}
}
