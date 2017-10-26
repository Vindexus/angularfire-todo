const todoLib = require('angularfire-todo-lib');
const listUtil = todoLib.listUtil;

/* @ngInject */
function ListFactory ($firebaseArray, $firebaseObject, $timeout) {
  function Factory (listId) {
    this.listUtil = listUtil(listId);
    this.$list = $firebaseObject(this.listUtil.listRef);
    this.$items = $firebaseArray(this.listUtil.itemsRef);

    this.addItem = (text) => {
      return this.listUtil.addItem(text);
    }

    this.updateItem = (item) => {
      return this.$items.$save(item);
    }

    this.scopeWatcher = (scope) => {
      const updateScope = () => {
        scope.itemUsers = {};
        if(scope.users && scope.items) {
          angular.forEach(scope.items, (item) => {
            if(item.uid) {
              scope.itemUsers[item.$id] = scope.users.$getRecord(item.uid);
            }
          });
        }

        $timeout(function () {});
      }

      scope.items = this.$items;

      scope.items.$watch(updateScope);

      if(scope.users) {
        scope.users.$watch(updateScope);
      }
    }
  }

  var factories = {};
  return function (listId) {
    if(!factories[listId]) {
      factories[listId] = new Factory(listId);
    }

    return factories[listId];
  }
}

module.exports = ListFactory