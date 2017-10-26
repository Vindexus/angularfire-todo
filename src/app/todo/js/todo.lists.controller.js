'use strict';

/* @ngInject */
function TodoListsController($scope, listsFactory) {
  var listsManager = listsFactory();
  this.addList = function () {
    listsManager.addList('New thing: ' + new Date())
  }

  this.lists = listsManager.$lists;
}

module.exports = TodoListsController;