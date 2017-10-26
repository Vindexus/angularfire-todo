'use strict';

/* @ngInject */
function RegisterController ($scope, Auth, $timeout, $location) {
  this.email = "";
  this.password = "";
  this.submit = function () {
    this.error = false;
    Auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        $location.url('/todos');
      })
      .catch((err) => {
        this.error = err.toString();
        $timeout(function () {})
      });
  }
}

module.exports = RegisterController;