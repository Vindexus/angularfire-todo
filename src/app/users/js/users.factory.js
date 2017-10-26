const todoLib = require('angularfire-todo-lib');
const usersUtil = todoLib.usersUtil;

/* @ngInject */
function usersFactory ($firebaseArray, $timeout) {
  function Factory () {
    this.$users = $firebaseArray(usersUtil.usersRef);

    this.getStatusOptions = usersUtil.getStatusOptions;

    this.addUser = (user) => {
      console.log('You cannot add users without using CLI.');
    };

    this.saveUser = (user) => {
        console.log('user', user);
      return this.$users.$save(user).then((u) => {
        console.log('u',u);
      });
    }

    this.scopeWatcher = (scope) => {
      const updateScope = () => {
        scope.userOptions = [{id: null, label: '[no user]'}];
        for(var i = 0; i < this.$users.length; i++) {
          let u = this.$users[i];
          let label = u.username ? u.username : '';
          scope.userOptions.push({id: u.$id, label: label + ' [' + u.email + ']'})
        }
        $timeout(function () {});
      }

      scope.users = this.$users;
      this.$users.$watch(updateScope)
    }
  }

  return function () {
    return new Factory();
  }
}

module.exports = usersFactory