'use strict';

require('./css/todo.scss');

module.exports = angular.module('angularfire-todo.todo',[])
    .service('listsFactory', require('./js/lists.factory'))
    .service('listFactory', require('./js/list.factory'))
    .controller('TodoListController', require('./js/todo.list.controller'))
    .controller('TodoListsController', require('./js/todo.lists.controller'))
    .directive('todoItems', require('./js/todo.items.directive'))
    .config(require('./js/todo.states'));
