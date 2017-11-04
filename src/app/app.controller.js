class appController {
    constructor(userService) {
        "ngInject";
        this._userService = userService;
    }

    $onInit() {
        this.usersList = [];
        this.selectedUser = null;
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

    }

    removeUser(user) {
        if(user) {
            this.usersList.splice(this.usersList.indexOf(user), 1);
            // notification user deleted
        }
    }

    selectUser(user) {
        this.selectedUser = user;
        console.log(this.selectedUser);
    }
}

export default appController;
