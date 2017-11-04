class UserCardController {
    constructor() {
        "ngInject";
    }

    $onInit() {
        this.user.profile = `http://www.designskilz.com/random-users/images/imageF${this.getImageIndex()}.jpg`;
    }

    getImageIndex() {
        return Math.floor(Math.random() * 50) + 1
    }
}

export default UserCardController;