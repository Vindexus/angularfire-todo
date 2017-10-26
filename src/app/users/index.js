'use strict';

module.exports = angular.module('angularfire-todo.users',[])
    .service('usersFactory', require('./js/users.factory'))
    .controller('UsersListController', require('./js/users.controller'))
    .config(require('./js/users.states'));
