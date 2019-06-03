var newstr2 = `
    <div class="login-top">
        <div class="login-lf">手机号登录</div>
        <span></span>
        <div class="login-rg">邮箱登录</div>

    </div>
    <div class="login-text">
        <div class="login-contain">
            <div class="login-id">
                <a href="">使用邮箱验证登录</a>
            </div>
            <div class="input-box">
               
                <input type="text" class="phone" placeholder="请输入手机号">
            </div>
            <div class="info">
                <div class="no"></div>
                <input type="text" class="pwd" placeholder="请输入密码">
            </div>
            <div class="btn">
                <input type="submit" value="登录" class="Btn">

            </div>
        </div>
    </div>
`

function login() {
    this.login = document.querySelector('.login')
    this.init()
}
login.prototype = {
    init: function () {
        this.addinfo()
        this.eventBind()
    },
    addinfo: function () {
        this.login.innerHTML = newstr2
        this.Btn = document.querySelector('.btn .Btn')
        this.phone = document.querySelector('.phone')
        this.pwd = document.querySelector('.pwd')

    },
    change: function () {
        new together().changeinfo()
        console.log('zhuce')
    },
    getdata: function () {
        var _this = this
        axios({
            method: "get",
            url: "http://localhost/project/src/php/login.php",
            data: {
                uphone: _this.phone.value,
                upwd: _this.pwd.value
            }

        }).then(function (data) {
            if (data.state == "1") {
                alert(data.info)
                location.href = "http://localhost/project/src/html/index.html"
            } else {
                alert(data.info)

            }


        }).catch(function (info) {
            console.log(info)
        })

    },
    eventBind: function () {
        this.Btn.addEventListener('click', this.getdata.bind(this))
    }

}