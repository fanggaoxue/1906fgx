axios({
    method: 'get',
    url: '../../src/json/good.json',
    data: {}
}).then(function (data) {
    var str = "";
    for (var k = 0; k < data.length; k++) {
        var olftop = document.querySelector('.good .good-lf .lf-top');


        str += `
            <div class="frame">
                <img src="../images/${data[k].p1}" alt="">
                <div class="img-rg">
                    <a class="cloth" href="">${data[k].p2}</a>
                    <br />
                    <a href="">${data[k].p3}</a>
                    <p>${data[k].p4}
                        <span>${data[k].p5}</span>
                    </p>
                    <div class="process">
                        <b></b>
                    </div>

                    <h4>${data[k].p6}</h4>
                    <h5><a>${data[k].p7}</a></h5>
                </div>
            </div>
        `
    }
    olftop.innerHTML = str;

}).catch(function (info) {
    console.log(info)
})