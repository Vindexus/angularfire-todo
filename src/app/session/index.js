'use strict';

require('./login.scss');

module.exports = angular.module('angularfire-todo.session',[])
    .controller('loginController', require('./login.controller'))
    .controller('registerController', require('./register.controller'))
    .controller('logoutController', require('./logout.controller'))
    .config(require('./session.states'));
