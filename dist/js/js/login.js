"use strict";

var newstr2 = "\n    <div class=\"login-top\">\n        <div class=\"login-lf\">\u624B\u673A\u53F7\u767B\u5F55</div>\n        <span></span>\n        <div class=\"login-rg\">\u90AE\u7BB1\u767B\u5F55</div>\n\n    </div>\n    <div class=\"login-text\">\n        <div class=\"login-contain\">\n            <div class=\"login-id\">\n                <a href=\"\">\u4F7F\u7528\u90AE\u7BB1\u9A8C\u8BC1\u767B\u5F55</a>\n            </div>\n            <div class=\"input-box\">\n               \n                <input type=\"text\" class=\"phone\" placeholder=\"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\">\n            </div>\n            <div class=\"info\">\n                <div class=\"no\"></div>\n                <input type=\"text\" class=\"pwd\" placeholder=\"\u8BF7\u8F93\u5165\u5BC6\u7801\">\n            </div>\n            <div class=\"btn\">\n                <input type=\"submit\" value=\"\u767B\u5F55\" class=\"Btn\">\n\n            </div>\n        </div>\n    </div>\n";

function login() {
  this.login = document.querySelector('.login');
  this.init();
}

login.prototype = {
  init: function init() {
    this.addinfo();
    this.eventBind();
  },
  addinfo: function addinfo() {
    this.login.innerHTML = newstr2;
    this.Btn = document.querySelector('.btn .Btn');
    this.phone = document.querySelector('.phone');
    this.pwd = document.querySelector('.pwd');
  },
  change: function change() {
    new together().changeinfo();
    console.log('zhuce');
  },
  getdata: function getdata() {
    var _this = this;

    axios({
      method: "get",
      url: "http://localhost/project/src/php/login.php",
      data: {
        uphone: _this.phone.value,
        upwd: _this.pwd.value
      }
    }).then(function (data) {
      if (data.state == "1") {
        alert(data.info);
        location.href = "http://localhost/project/src/html/index.html";
      } else {
        alert(data.info);
      }
    })["catch"](function (info) {
      console.log(info);
    });
  },
  eventBind: function eventBind() {
    this.Btn.addEventListener('click', this.getdata.bind(this));
  }
};