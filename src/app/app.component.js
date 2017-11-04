import template from './app.html';
import controller from './app.controller';
import './app.css';

let appComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
};

export default appComponent;
