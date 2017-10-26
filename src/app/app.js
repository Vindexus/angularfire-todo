'use strict';
require('./app.scss');
const angular = require('angular');

module.exports = angular.module('angularfire-todo', [
    'ui.router',
    'firebase',
    require('./firebase/index').name,
    require('./config/index').name,
    require('./session/index').name,
    require('./todo/index').name,
    require('./users/index').name
]);