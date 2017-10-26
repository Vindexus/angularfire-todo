'use strict';

module.exports = require('angular').module('angularfire-todo.firebase', [])
    .factory('firebaseFactory', require('../../../lib/firebase/firebase.factory'))
    .factory('Auth', require('../../../lib/firebase/firebase.auth'));
