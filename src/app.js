import angular from 'angular';

import AppComponent from './app/app.component';
import Components from './components';
// import Directives from './directives/directives';
import Utils from './utils/utils.module';

import AppRun from './app.run';

angular.module('app', [
    Components.name,
    Utils.name,
    // Directives.name,
    // 'ui.bootstrap'
])
    .component('app', AppComponent)
    .run(AppRun)
;

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
});
