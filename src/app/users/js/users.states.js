'use strict';
/* @ngInject */
var UserSates = function ($stateProvider) {
  var states = [{
    url: '/users',
    name: 'users',
    controller: 'UsersListController',
    controllerAs: 'users',
    template: require('../views/users.pug'),
    data: {
      pageTitle: 'Users'
    }
  }];
  states.forEach(function (state) {
    console.log('state', state);
    $stateProvider.state(state);
  });
};

module.exports = UserSates;
