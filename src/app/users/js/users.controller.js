'use strict';

/* @ngInject */
function UsersListController($scope, usersFactory) {
  const usersManager = usersFactory();
  this.list = usersManager.$users;
}

module.exports = UsersListController;