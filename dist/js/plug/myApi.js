//········································ 随机数字      m,n之间    ok   
function randomNum(m, n) {
    var num = parseInt(Math.random() * (n - m + 1) + m);
    return num;
}


// ·······································随机数字 1, 100 之间 四舍五入

// function randomNum() {
//     var num = parseInt(Math.round(Math.random() * 100));
//     return num;
// }

//········································数组最大值   ok


function getMax(arr) {
    var maxNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (maxNum < arr[i]) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}
// var arr = [1212, 213, 12, 3, 21, 3, 21, 3, 211]
// console.log(getMax(arr))
//········································数组最小值   ok


function getMin(arr) {
    var minNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (minNum > arr[i]) {
            minNum = arr[i];
        }
    }
    return minNum;
}
// var arr = [1212, 213, 12, 3, 21, 3, 21, 3, 211]
// console.log(getMin(arr))

//········································随机验证码  ok
// btn.onclick = function () {
var code = "";
for (var i = 0; i < 4; i++) {
    var num = randomNum(48, 122);
    if (num >= 48 && num <= 57 || num >= 65 && num <= 90 || num >= 97 && num <= 122) {
        code += String.fromCharCode(num);
    } else {
        i-- //如果不符合条件，循环重新遍历
    }
}
// txt.innerHTML = code;} 赋予的位置

// ·······································随机颜色   ok
function randomColor() {
    var
        r = randomNum(0, 255),
        g = randomNum(0, 255),
        b = randomNum(0, 255);
    return '#' + systemChange(r, g, b);
}
//更改颜色为16进制颜色
function systemChange(r, g, b) {
    r = r.toString(16).length < 2 ? "0" + r.toString(16) : r.toString(16);
    g = g.toString(16).length < 2 ? "0" + g.toString(16) : g.toString(16);
    b = b.toString(16).length < 2 ? "0" + b.toString(16) : b.toString(16);
    return '' + r + g + b;
}

// console.log(randomColor())
//··································x-y倒计时或者正计时    ok
function sj(x, y) {
    // var nowDate = new Date()
    // var houDate = new Date("2018-07-02 00:00:00")

    var ms = x - y
    var days = parseInt(ms / (1000 * 60 * 60 * 24))
    var hous = parseInt((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var min = parseInt((ms % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60) / (1000 * 60))
    var mms = parseInt((ms % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60) % (1000 * 60) / 1000)
    box.innerHTML = (days + "天" + hous + "小时" + min + "分钟" + mms + "秒")
}

//  sj(new Date(), new Date("2018-07-02 00:00:00"))

//····································吸顶
window.onscroll = function () {
    //检测滚动条的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 130) {
        //更改box的样式。
        // box.style.position = "fixed";
        // box.style.top = "0";
        box.style.cssText = "position:fixed;top:0;";
    } else {
        box.style.position = "static";
    }
}
//····································返回顶部
function goTop() {
    //获取当前滚动条的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //设置滚动条减小（动态）
    var timer = setInterval(function () {
        //每段时间让scrollTop递减
        scrollTop -= 30;
        //设置滚动条的高度
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
        //关闭定时器
        if (scrollTop <= 0) {
            clearInterval(timer);
        }
    }, 10)
}
// .onclick = function () {
//     goTop();}

//·····································逐渐消失
jici = 0
var time = setInterval(function () {
    box.style.height = 100 - jici + "px"
    jici++
    console.log(xiaoshi)
    if (jici > 100) {
        clearInterval(time)
    }
}, 30)
//·····································获取非行间样式
function getStyle(ele, attr) {
    return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele, null)[attr];
}