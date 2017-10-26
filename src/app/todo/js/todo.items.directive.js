/* @ngInject */
module.exports = function (listFactory) {
  return {
    restrict: 'E',
    scope: {
      id: '='
    },
    template: require('../views/items.pug'),
    link: function ($scope) {
      const listManager = listFactory($scope.id);
      $scope.items = listManager.$items;
      $scope.updateItem = function (item) {
        listManager.updateItem(item);
      }
    }
  }
}