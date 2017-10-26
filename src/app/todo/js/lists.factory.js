const listsUtil = require('../../../../lib/todos/lists.util');

/* @ngInject */
function ListsFactory ($firebaseArray) {
  function Factory () {
    this.$lists = $firebaseArray(listsUtil.listsRef);
    this.addList = () => {
      listsUtil.addList();
    };
  }

  return function () {
    return new Factory();
  }
}

module.exports = ListsFactory