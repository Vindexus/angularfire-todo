'use strict';

module.exports = angular
  .module('angularfire-todo.config', [])
  .config(require('./state-config'))
  .run(function($window, Auth, $rootScope){
    Auth.onAuthStateChanged((user) => {
      console.log('user',user);
      if(user) {
        $rootScope.currentUser = user;
      }
      else {
        $rootScope.currentUser = false;
      }
    });
  });