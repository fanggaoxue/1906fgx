"use strict";

function together() {
  this.login = document.querySelector('.login');
  this.init();
}

together.prototype = {
  init: function init() {
    this.changeinfo();
  },
  changeinfo: function changeinfo(flag) {
    if (!flag) {
      new register();
    } else new login();
  }
};
new together();