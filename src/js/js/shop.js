var changetime = document.querySelector(".time .changetime")
setInterval(function () {
    var nowDate = new Date();
    var futureDate = new Date("2019-6-1 14:50:00");
    var ms = futureDate.getTime() - nowDate.getTime();

    var hours = parseInt(ms % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = parseInt(ms % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60));
    var seconds = parseInt(ms % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000);
    changetime.innerHTML = hours + "小时" + minutes + "分" + seconds + '秒';
}, 1000)

// list

axios({
    method: "get",
    url: "../json/list.json",
    data: {}
}).then(function (data) {
    var picShow = document.querySelector(".picShow-con")
    var count = 1;
    var num = 0;
    // var pageNum = Math.ceil(data.length / 12)


    function SHOW(n) {
        var str = "";
        for (var i = (n - 1) * 12; i < 12 * n; i++) {
            num++
            if (num % 4 == 0) {
                str += `
                 <div class="wrap" style="margin-right:0">
                <a href = "http://localhost/project/src/html/glass.html?id={${data[i].id}}">
                    <img src="${data[i].b1}" alt="">
                    <span>${data[i].b2}</span>
                </a>
                <div class="message">
                    <h3>
                        <a href="">${data[i].b3}</a>
                        <a href="">${data[i].b4}</a>
                    </h3>
                </div>
                <div class="price">
                    <b>￥</b>
                    <b><a href = "http://localhost/project/src/html/glass.html?id={${data[i].id}}">${data[i].b5}</a></b>
                    <b><a href = "http://localhost/project/src/html/glass.html?id={${data[i].id}}">${data[i].b6}</a></b>
                    <a href="">去抢购</a>
                </div>
                <div class="progress">
                    <div class="barwrap">
                        <div class="bar"></div>
                        <span>${data[i].b7}</span>
                    </div>
                </div>
                  <a class="mask" href=""></a>
            </div>
            `
            } else {
                str += `
                 <div class="wrap">
                <a href="">
                    <img src="${data[i].b1}" alt="">
                    <span>${data[i].b2}</span>
                </a>
                <div class="message">
                    <h3>
                        <a href="">${data[i].b3}</a>
                        <a href="">${data[i].b4}</a>
                    </h3>
                </div>
                <div class="price">
                    <b>￥</b>
                    <b>${data[i].b5}</b>
                    <b>${data[i].b6}</b>
                    <a href="">去抢购</a>
                </div>
                <div class="progress">
                    <div class="barwrap">
                        <div class="bar"></div>
                        <span>${data[i].b7}</span>
                    </div>
                </div>
                  <a class="mask" href="http://localhost/project/src/html/glass.html?id={${data[i].id}}"></a>
            </div>
            `
            }

        }
        picShow.innerHTML = str;
    }
    SHOW(1)

    // 按钮控制页面的变化
    var tabcon = document.querySelectorAll('.tab .tab-con a');
    // console.log(tabcon)
    // var sum = pageNum
    // console.log(sum)
    for (var i = 0; i < tabcon.length; i++) {
        // console.log(tabcon.length)
        tabcon[i].onclick = function () {
            SHOW(i + 1);
            console.log(i)
        }
    }
}).catch(function (info) {
    console.log(info);
})