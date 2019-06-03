var
    oimgbox = document.querySelector(".btnbox .imgbox"),
    oli = document.querySelectorAll(".btnbox .imgbox li"),
    ospan = document.querySelectorAll(".btnbox span"),
    obigimg = document.querySelector(".bigimg>img"),
    oaside = document.querySelector("aside"),
    oasideImg = document.querySelector("aside>img"),
    oshadow = document.querySelector(".shadow"),
    osection = document.querySelector(".glass section"),
    distance = oli[0].offsetWidth,
    count = 0;
oimgbox.style.width = distance * oli.length + "px";


function imgmove() {
    move(oimgbox, {
        "left": -distance * count
    });
}

function nextimg() {
    if (count >= oli.length - 5) {
        count = oli.length - 5
    } else {
        count++
    }
    imgmove()
}

function lastimg() {
    if (count <= 0) {
        count = 0
    } else {
        count--
    }
    imgmove()
}
ospan[0].onclick = function () {
    lastimg()
    console.log(1)
}
ospan[1].onclick = function () {
    nextimg()
}

// 小图地址给大图
for (var i = 0; i < oli.length; i++) {
    oli[i].onmouseover = function () {

        obigimg.src = this.firstElementChild.getAttribute("data-src")
        oasideImg.src = this.firstElementChild.getAttribute("data-src")
    }
}

// 放大镜

osection.onmousemove = function (e) {
    e = e || event;
    var l = e.clientX - this.offsetLeft - oshadow.offsetWidth / 2;
    var t = e.clientY - this.offsetTop - oshadow.offsetHeight / 2;
    l = l < 0 ? 0 : (l > 200 ? 200 : l);
    t = t < 0 ? 0 : (t > 200 ? 200 : t);
    oshadow.style.left = l + "px";
    oshadow.style.top = t + "px";

    oasideImg.style.left = -l * 2 + "px";
    oasideImg.style.top = -t * 2 + "px";

}
osection.onmouseover = function () {
    oshadow.style.display = "block";
    oaside.style.display = "block";
}
osection.onmouseout = function () {
    oshadow.style.display = "none";
    oaside.style.display = "none";
}