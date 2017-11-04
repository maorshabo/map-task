import angular from 'angular';
import userService from './users/user.service';

let utilsModule = angular.module('app.utils', [])
    .service('userService', userService)
;

export default utilsModule;
