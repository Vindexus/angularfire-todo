'use strict';

/* @ngInject */
var StateConfig = function ($locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }).hashPrefix('!');

    // For any unmatched url, redirect to /
    // see https://github.com/angular-ui/ui-router/issues/1403
    $urlRouterProvider.otherwise(function($injector) {
        $injector.get('$state').go('todos');
        return true;
    });
};
module.exports = StateConfig;
