'use strict';

/* @ngInject */
function LoginController(Auth, $location) {
  this.submit = () => {
    Auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => $location.url('/todos'))
      .catch((err) => alert(err));
  }
}

module.exports = LoginController;