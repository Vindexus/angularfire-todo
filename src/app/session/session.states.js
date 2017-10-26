'use strict';
/* @ngInject */
var SessionStates = function ($stateProvider) {
  var states = [{
    url: '/login',
    name: 'login',
    controller: 'loginController',
    controllerAs: 'login',
    template: require('./views/login.pug'),
    data: {
      pageTitle: 'Login'
    }
  }, {
    url: '/register',
    name: 'register',
    controllerAs: 'register',
    controller: 'registerController',
    template: require('./views/register.pug'),
    data: {
      pageTitle: 'Register'
    }
  }, {
    url: '/logout',
    name: 'logout',
    controller: 'logoutController',
    data: {
      pageTitle: 'Logout'
    }
  }];
  states.forEach(function (state) {
    console.log('state', state);
    $stateProvider.state(state);
  });
};

module.exports = SessionStates;
