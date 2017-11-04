import angular from 'angular';
import googleMapComponent from './googleMap.component';

let googleMapModule = angular.module('app.components.googleMap', [])
    .component('googleMap', googleMapComponent);

export default googleMapModule;
