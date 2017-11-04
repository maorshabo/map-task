import { LATITUDE_KEYNAME, LONGTITUDE_KEYNAME } from '../constants/userKeys';

class appController {
    constructor(userService) {
        "ngInject";
        this._userService = userService;
    }

    $onInit() {
        this.usersList = [];
        this.selectedUser = null;
        this.mapCenter = {latitude: 45, longitude: -73};
        this.loadUsers();
    }

    loadUsers() {
        // TODO: fix this
        let vm = this;
        this._userService.loadInitUsers().then(users => {
            vm.usersList = users;
        });
    }

    addUser() {
        if (this.usersList.length === 100) {
            window.alert('No more users');
        }

        this._userService.getUsers(this.usersList.length + 1).then(users => {
            this.usersList = users;
        });
    }

    removeUser(user) {
        if(user) {
            this.usersList.splice(this.usersList.indexOf(user), 1);
            // notification user deleted
        }
    }

    selectUser(user) {
        this.selectedUser = user;
    }
}

export default appController;
