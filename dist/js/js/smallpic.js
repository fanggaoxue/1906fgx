"use strict";

var aImg = document.querySelectorAll('.bus-show img'),
    aSpan = document.querySelectorAll('.bus-show span'),
    abusBom = document.querySelector('.bus-bom'),
    aDiv = document.querySelectorAll(".bus-bom div");
aImg[0].style.opacity = '1';
aImg[0].style.filter = 'alpha(opacity=100)';
aDiv[0].style.opacity = "1";
aDiv[0].style.filter = 'alpha(opacity=100)';
var count = 0; //图片显示

function imgShow(img) {
  for (var i = 0; i < aImg.length; i++) {
    aImg[i].style.opacity = 0;
    aImg[i].style.filter = 'alpha(opacity=0)';
  }

  move(img, {
    'opacity': 100
  });
}

function divShow(div) {
  for (var i = 0; i < aDiv.length; i++) {
    aDiv[i].style.opacity = 0;
    aDiv[i].style.filter = 'alpha(opacity=0)';
  }

  move(div, {
    'opacity': 100
  });
} //nextImg


function nextImg() {
  if (count >= aImg.length - 1) {
    count = 0;
  } else {
    count++;
  }

  imgShow(aImg[count]);
  divShow(aDiv[count]);
} //preImg


function preImg() {
  if (count <= 0) {
    count = aImg.length - 1;
  } else {
    count--;
  }

  imgShow(aImg[count]);
  divShow(aDiv[count]);
}

aSpan[1].onclick = function () {
  nextImg();
};

aSpan[0].onclick = function () {
  preImg();
}; // 刷新


axios({
  method: 'get',
  url: '../json/info1.json',
  data: {}
}).then(function (data) {
  var busul = document.querySelector('.business-rg .bus-ul');
  var newstr = "";

  for (var i = 0; i < data.length; i++) {
    newstr += "\n         <li>\n            <div>\n                <img src=\"".concat(data[i].a1, "\" alt=\"\">\n                <p>").concat(data[i].a2, "</p>\n            </div>\n            <div>\n                <a>").concat(data[i].a3, "</a>\n                <h3>").concat(data[i].a4, "</h3>\n                <a href=\"\">").concat(data[i].a5, "</a>\n            </div>\n        </li>   \n        ");
  }

  busul.innerHTML = newstr;
  var oLi = document.querySelectorAll('.business-rg li');
  var oDiv = document.querySelectorAll('.business-rg div'); // console.log(oLi[0].)

  for (var k = 0; k < data.length; k++) {
    oLi[k].onmouseover = function () {
      this.firstElementChild.firstElementChild.style.cssText = "opacity:1;transform:scale(0.6);transition:all 1s;";
      this.firstElementChild.lastElementChild.style.cssText = "opacity:0;transition:all 1s";
      this.lastElementChild.firstElementChild.style.cssText = "opacity:1;transition:all 1s";
      this.lastElementChild.firstElementChild.nextElementSibling.style.cssText = "opacity:1;transition:all 1s";
      this.lastElementChild.lastElementChild.style.cssText = "opacity:1;transition:all 1s";
    };

    oLi[k].onmouseout = function () {
      this.firstElementChild.firstElementChild.style.cssText = "opacity:1;transform:scale(1);transition:all 1s";
      this.firstElementChild.lastElementChild.style.cssText = "opacity:1;transition:all 1s";
      this.lastElementChild.firstElementChild.style.cssText = "opacity:0;transition:all 1s";
      this.lastElementChild.firstElementChild.nextElementSibling.style.cssText = "opacity:0;transition:all 1s";
      this.lastElementChild.lastElementChild.style.cssText = "opacity:0;transition:all 1s";
    };
  }
})["catch"](function (info) {
  console.log(info);
}); // 爱心 显示

var A = document.querySelectorAll('.brand-con a');

for (var i = 0; i < A.length; i++) {
  A[i].onmouseover = function () {
    this.lastElementChild.style.display = "block";
  };

  A[i].onmouseout = function () {
    this.lastElementChild.style.display = "none";
  };
} // 侧边栏


var oSlide = document.querySelector('.title-bar .slide');
var Li = document.querySelectorAll(".title-bar .slide>li");
console.log(Li[1]);

for (var i = 1; i < Li.length; i++) {
  Li[i].lastElementChild.style.display = "none";

  Li[i].onmouseover = function () {
    this.style.cssText = "background:#fff;color:#ff0a15;";
    this.firstElementChild.style.color = "#ff0a15";
    this.lastElementChild.style.display = "block";
    this.style.backgroundImage = "#ff0a15";
    console.log(this);
  };

  Li[i].onmouseout = function () {
    this.lastElementChild.style.display = "none";
    this.style.cssText = "background:#ff0a15;";
    this.firstElementChild.style.color = "#fff";
  };
} // 吸顶


var odot = document.querySelector('.dot');

window.onscroll = function () {
  //检测滚动条的高度
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop >= 700) {
    //更改box的样式。
    // box.style.position = "fixed";
    // box.style.top = "0";
    odot.style.cssText = "position:fixed;top:100px;";
  } else {
    odot.style.position = "fixed";
  }
};