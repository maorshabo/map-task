import angular from 'angular';
import userCardComponent from './userCard.component';

let usersCardModule = angular.module('app.components.userCard', [])
    .component('userCard', userCardComponent);

export default usersCardModule;
