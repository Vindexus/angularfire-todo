'use strict';

/* @ngInject */
function TodoListController($scope, $timeout, $stateParams, listFactory) {
  const listManager = listFactory($stateParams.listId);
  this.list = listManager.$list;
  this.items = listManager.$items;

  this.addItem = function () {
    listManager.addItem()
      .then(() => console.log('success!'))
      .catch((err) => {
        alert(err);
      })
  };
}

module.exports = TodoListController;