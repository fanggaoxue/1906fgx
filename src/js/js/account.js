var oadd = document.querySelector(".col .add");
var ominus = document.querySelector(".col .minus");

oadd.onclick = function () {
    console.log(11)
    var price = this.parentNode.previousElementSibling.innerHTML;
    var num = this.previousElementSibling.innerHTML;
    num++;
    this.previousElementSibling.innerHTML = num;
    this.parentNode.nextElementSibling.innerHTML = price * num;


}
ominus.onclick = function () {
    var price = this.parentNode.previousElementSibling.innerHTML;
    var num = this.nextElementSibling.innerHTML;
    if (num > 0) {
        num--;
        this.nextElementSibling.innerHTML = num;
        this.parentNode.nextElementSibling.innerHTML = price * num;
    }

}