import template from './userCard.html';
import controller from './userCard.controller';
import './userCard.css';

let userCardComponent = {
    restrict: 'E',
    bindings: {
        user: '<',
        onRemoveClick: '&',
        onItemClick: '&'
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default userCardComponent;
