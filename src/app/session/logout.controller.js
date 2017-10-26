'use strict';

/* @ngInject */
function LogoutController(Auth, $location) {
  Auth.signOut()
    .then(() => $location.url('/login'))
    .catch((err) => alert(err));
}

module.exports = LogoutController;