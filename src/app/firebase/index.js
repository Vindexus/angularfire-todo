'use strict';
const todoLib = require('angularfire-todo-lib');

module.exports = require('angular').module('angularfire-todo.firebase', [])
    .factory('firebaseFactory', todoLib.firebase.factory)
    .factory('Auth', todoLib.firebase.auth);
