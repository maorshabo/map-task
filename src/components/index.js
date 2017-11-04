import angular from 'angular';
import UsersList from './usersList/usersList.module';
import UserCard from './userCard/userCard.module';
import GoogleMap from './googleMap/googleMap.module';

let componentsModule = angular.module('app.components', [
    UsersList.name,
    UserCard.name,
    GoogleMap.name
]);

export default componentsModule;
