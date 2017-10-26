'use strict';
/* @ngInject */
var TodoStates = function ($stateProvider) {
  var states = [{
    url: '/todos',
    name: 'todos',
    controller: 'TodoListsController',
    controllerAs: 'todos',
    template: require('../views/all.pug'),
    data: {
      pageTitle: 'Todo Lists'
    }
  },{
    url: '/todos/:listId',
    name: 'todo',
    controller: 'TodoListController',
    controllerAs: 'todo',
    template: require('../views/list-page.pug'),
    data: {
      pageTitle: 'Todo'
    }
  }];

  states.forEach(function (state) {
    $stateProvider.state(state);
  });
};
module.exports = TodoStates;
