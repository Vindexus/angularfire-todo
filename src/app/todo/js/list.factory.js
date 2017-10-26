const todoLib = require('angularfire-todo-lib');
const listUtil = todoLib.listUtil;

/* @ngInject */
function ListFactory ($firebaseArray, $firebaseObject) {
  function Factory (listId) {
    this.listUtil = listUtil(listId);
    this.$list = $firebaseObject(this.listUtil.listRef);
    this.$items = $firebaseArray(this.listUtil.itemsRef);

    this.addItem = (text) => {
      return this.listUtil.addItem(text);
    }

    this.updateItem = (item) => {
      return this.listUtil.updateItem(item);
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