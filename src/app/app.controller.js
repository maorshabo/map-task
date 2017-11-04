class appController {
    constructor(userService) {
        "ngInject";
        this._userService = userService;
    }

    $onInit() {
        this.usersList = [];
        this.loadUsers();
    }

    loadUsers() {
        let vm = this;
        this._userService.loadInitUsers().then(users => {
            vm.usersList = users;
        });
    }
}

export default appController;
