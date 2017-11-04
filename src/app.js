import angular from 'angular';
import 'angular-simple-logger';
import 'angular-google-maps';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'underscore';

import AppComponent from './app/app.component';
import Components from './components';
// import Directives from './directives/directives';
import Utils from './utils/utils.module';
import AppRun from './app.run';
import AppConfig from './app.config';


angular.module('app', [
    Components.name,
    Utils.name,
    'nemLogging',
    'uiGmapgoogle-maps'
    // Directives.name,
    // 'ui.bootstrap'
])
    .component('app', AppComponent)
    .config(AppConfig)
    .run(AppRun)
;

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
});
