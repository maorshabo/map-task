class UsersListController {
    constructor() {
        "ngInject";
        this.list = [];
        console.log('contructor');
    }

    $onInit() {
        console.log('init');
        console.log(this.list);
    }

    addUser(user) {
        // TODO: Call onAddUserClick()
    }

    removeUser(userId) {
        // TODO: Remove userId from this.list
    }
}

export default UsersListController;