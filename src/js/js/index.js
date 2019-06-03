//轮播图
function autoBanner() {
    this.oImg = document.querySelectorAll('.imgBox img');
    this.oSpan = document.querySelectorAll('.show span');
    this.oImg[0].style.opacity = "1";
    this.oImg[0].style.filter = 'alpha(opacity=100)';
    this.oUl = document.querySelector('.show ul')
    this.count = 0;
    this.init()

}
autoBanner.prototype = {
    init: function () {
        this.eventBind()
        this.createPoint()
        this.pointShow()
        // this.autoPlay()

    },
    imgMove: function (img) {
        for (var i = 0; i < this.oImg.length; i++) {
            this.oImg[i].style.opacity = 0
            this.oImg[i].style.filter = 'alpha(opacity = 0)';
        }
        move(img, {
            'opacity': 100
        })
    },
    preImg: function () {
        if (this.count <= 0) {
            this.count = this.oImg.length - 1
        } else {
            this.count--
        }
        this.imgMove(this.oImg[this.count])
        this.clearActive()
        this.oLi[this.count].className = 'active';

    },
    nextImg: function () {
        if (this.count >= this.oImg.length - 1) {
            this.count = 0
        } else {
            this.count++
        }
        this.imgMove(this.oImg[this.count])
        this.clearActive()
        this.oLi[this.count].className = 'active';
    },
    autoPlay: function () {
        var _this = this;
        setInterval(function () {
            _this.nextImg()
        }, 5000)
    },
    createPoint: function () {
        for (var i = 0; i < this.oImg.length; i++) {
            var createli = document.createElement('li')
            this.oUl.appendChild(createli)

        }
        this.oLi = this.oUl.querySelectorAll('li')
        this.oLi[0].className = 'active'

    },
    pointShow: function () {
        var _this = this;
        for (var i = 0; i < this.oLi.length; i++) {
            this.oLi[i].onmouseover = function () {
                // _this.oLi[i].index = i;
                _this.clearActive()
                this.className = 'active';
                _this.count = i;
                _this.imgMove()
            }
        }
    },
    clearActive: function () {
        for (var k = 0; k < this.oLi.length; k++) {
            this.oLi[k].className = '';

        }
    },
    eventBind: function () {
        this.oSpan[0].addEventListener('click', this.preImg.bind(this))
        this.oSpan[1].addEventListener('click', this.nextImg.bind(this))
        // this.oLi.addEventListener('mouseover', this.pointShow.bind(this))

    }


}
new autoBanner()


// title-bar