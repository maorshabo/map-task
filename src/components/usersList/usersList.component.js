import template from './usersList.html';
import controller from './usersList.controller';
import './usersList.css';

let usersListComponent = {
    restrict: 'E',
    bindings: {
        list: '=',
        onUserClick: '&',
        onAddUserClick: '&',
        onRemoveUserClick: '&'
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default usersListComponent;
