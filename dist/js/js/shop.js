"use strict";

var changetime = document.querySelector(".time .changetime");
setInterval(function () {
  var nowDate = new Date();
  var futureDate = new Date("2019-6-1 14:50:00");
  var ms = futureDate.getTime() - nowDate.getTime();
  var hours = parseInt(ms % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = parseInt(ms % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60));
  var seconds = parseInt(ms % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000);
  changetime.innerHTML = hours + "小时" + minutes + "分" + seconds + '秒';
}, 1000); // list

axios({
  method: "get",
  url: "../json/list.json",
  data: {}
}).then(function (data) {
  var picShow = document.querySelector(".picShow-con");
  var count = 1;
  var num = 0; // var pageNum = Math.ceil(data.length / 12)

  function SHOW(n) {
    var str = "";

    for (var i = (n - 1) * 12; i < 12 * n; i++) {
      num++;

      if (num % 4 == 0) {
        str += "\n                 <div class=\"wrap\" style=\"margin-right:0\">\n                <a href = \"http://localhost/project/src/html/glass.html?id={".concat(data[i].id, "}\">\n                    <img src=\"").concat(data[i].b1, "\" alt=\"\">\n                    <span>").concat(data[i].b2, "</span>\n                </a>\n                <div class=\"message\">\n                    <h3>\n                        <a href=\"\">").concat(data[i].b3, "</a>\n                        <a href=\"\">").concat(data[i].b4, "</a>\n                    </h3>\n                </div>\n                <div class=\"price\">\n                    <b>\uFFE5</b>\n                    <b><a href = \"http://localhost/project/src/html/glass.html?id={").concat(data[i].id, "}\">").concat(data[i].b5, "</a></b>\n                    <b><a href = \"http://localhost/project/src/html/glass.html?id={").concat(data[i].id, "}\">").concat(data[i].b6, "</a></b>\n                    <a href=\"\">\u53BB\u62A2\u8D2D</a>\n                </div>\n                <div class=\"progress\">\n                    <div class=\"barwrap\">\n                        <div class=\"bar\"></div>\n                        <span>").concat(data[i].b7, "</span>\n                    </div>\n                </div>\n                  <a class=\"mask\" href=\"\"></a>\n            </div>\n            ");
      } else {
        str += "\n                 <div class=\"wrap\">\n                <a href=\"\">\n                    <img src=\"".concat(data[i].b1, "\" alt=\"\">\n                    <span>").concat(data[i].b2, "</span>\n                </a>\n                <div class=\"message\">\n                    <h3>\n                        <a href=\"\">").concat(data[i].b3, "</a>\n                        <a href=\"\">").concat(data[i].b4, "</a>\n                    </h3>\n                </div>\n                <div class=\"price\">\n                    <b>\uFFE5</b>\n                    <b>").concat(data[i].b5, "</b>\n                    <b>").concat(data[i].b6, "</b>\n                    <a href=\"\">\u53BB\u62A2\u8D2D</a>\n                </div>\n                <div class=\"progress\">\n                    <div class=\"barwrap\">\n                        <div class=\"bar\"></div>\n                        <span>").concat(data[i].b7, "</span>\n                    </div>\n                </div>\n                  <a class=\"mask\" href=\"http://localhost/project/src/html/glass.html?id={").concat(data[i].id, "}\"></a>\n            </div>\n            ");
      }
    }

    picShow.innerHTML = str;
  }

  SHOW(1); // 按钮控制页面的变化

  var tabcon = document.querySelectorAll('.tab .tab-con a'); // console.log(tabcon)
  // var sum = pageNum
  // console.log(sum)

  for (var i = 0; i < tabcon.length; i++) {
    // console.log(tabcon.length)
    tabcon[i].onclick = function () {
      SHOW(i + 1);
      console.log(i);
    };
  }
})["catch"](function (info) {
  console.log(info);
});