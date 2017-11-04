class UsersListController {
    constructor() {
        "ngInject";
        this.list = [];
        this.CRITERIA = {
            AGE: 'age',
            NAME: 'name'
        };
        this.orderByKey = this.CRITERIA.AGE; // default order by
    }

    $onInit() {

    }

    sortBy(keyName) {
        this.orderByKey = (keyName === this.orderByKey ? '-' + keyName : keyName);
    }

    removeUser(user) {
        this.onRemoveUserClick({user});
    }

    selectUser(user) {
        this.onUserClick({user});
    }
}

export default UsersListController;