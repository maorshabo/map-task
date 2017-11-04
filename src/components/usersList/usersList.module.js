import angular from 'angular';
import usersListComponent from './usersList.component';

let usersListModule = angular.module('app.components.usersList', [])
    .component('usersList', usersListComponent);

export default usersListModule;
