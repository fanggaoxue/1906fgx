function together() {
    this.login = document.querySelector('.login')
    this.init()
}
together.prototype = {
    init: function () {
        this.changeinfo()
    },
    changeinfo: function (flag) {
        if (!flag) {
            new register()
        } else(
            new login()
        )
    }
}
new together()