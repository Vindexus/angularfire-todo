'use strict';

/* @ngInject */
function UsersListController($scope, usersFactory) {
  const usersManager = usersFactory();
  this.list = usersManager.$users;
  this.statusOptions = usersManager.getStatusOptions();

  this.saveUser = (user) => {
    usersManager.saveUser(user);
  }
}

module.exports = UsersListController;