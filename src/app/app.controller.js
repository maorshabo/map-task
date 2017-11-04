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
        this._userService.getUsers(this.usersList.length + 1).then(users => {
            this.usersList = users;
        });
    }

    removeUser(user) {
        if (user) {
            this.usersList = [].concat(
                this.usersList.slice(0, this.usersList.indexOf(user)),
                this.usersList.slice(this.usersList.indexOf(user) + 1, this.usersList.length)
            );
            // notification user deleted
        }
    }

    selectUser(user) {
        this.selectedUser = user;
    }
}

export default appController;
