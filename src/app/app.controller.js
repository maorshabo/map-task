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
            console.log(users);
            vm.usersList = users;
        });
    }
}

export default appController;
