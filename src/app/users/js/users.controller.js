'use strict';

/* @ngInject */
function UsersListController($scope, usersFactory) {
  const usersManager = usersFactory();
  this.list = usersManager.$users;

  this.saveUser = (user) => {
    usersManager.saveUser(user);
  }
}

module.exports = UsersListController;