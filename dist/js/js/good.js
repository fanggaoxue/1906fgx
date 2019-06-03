"use strict";

axios({
  method: 'get',
  url: '../../src/json/good.json',
  data: {}
}).then(function (data) {
  var str = "";

  for (var k = 0; k < data.length; k++) {
    var olftop = document.querySelector('.good .good-lf .lf-top');
    str += "\n            <div class=\"frame\">\n                <img src=\"../images/".concat(data[k].p1, "\" alt=\"\">\n                <div class=\"img-rg\">\n                    <a class=\"cloth\" href=\"\">").concat(data[k].p2, "</a>\n                    <br />\n                    <a href=\"\">").concat(data[k].p3, "</a>\n                    <p>").concat(data[k].p4, "\n                        <span>").concat(data[k].p5, "</span>\n                    </p>\n                    <div class=\"process\">\n                        <b></b>\n                    </div>\n\n                    <h4>").concat(data[k].p6, "</h4>\n                    <h5><a>").concat(data[k].p7, "</a></h5>\n                </div>\n            </div>\n        ");
  }

  olftop.innerHTML = str;
})["catch"](function (info) {
  console.log(info);
});