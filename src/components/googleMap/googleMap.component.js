import template from './googleMap.html';
import controller from './googleMap.controller';
import './googleMap.css';

let googleMapComponent = {
    restrict: 'E',
    bindings: {
        center: '<',
        users: '<',
        selectedMarker: '<'
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default googleMapComponent;
