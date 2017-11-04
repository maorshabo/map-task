import angular from 'angular';
import UsersList from './usersList/usersList.module';

let componentsModule = angular.module('app.components', [
    UsersList.name
]);

export default componentsModule;
