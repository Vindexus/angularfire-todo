/* @ngInject */
module.exports = function (listFactory, usersFactory) {
  return {
    restrict: 'E',
    scope: {
      id: '='
    },
    template: require('../views/items.pug'),
    link: function ($scope) {
      const listManager = listFactory($scope.id);
      const usersManager = usersFactory($scope.id);
      usersManager.scopeWatcher($scope);
      listManager.scopeWatcher($scope);
      $scope.updateItem = function (item) {
        listManager.updateItem(item).then((res) => {
        })
        .catch((err) => {
        });
      }
    }
  }
}