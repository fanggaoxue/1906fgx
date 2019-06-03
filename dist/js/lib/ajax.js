/** 
    1:请求方式  get   post
    
    2:接口

    3：传递的数据
        {
            name : wangshuai,
            pwd : 1234345,
            id : 100
        }
        ?name=wangshuai&pwd=1233445&id=100

    4：回调函数接收 传回的数据




        ajax({
            method : 'get',
            url : 'register.php',
            data : {
                name : 'wangshuai',
                pwd : '11111'
            },
            success : function(data){
                console.log(data);
            }    
        })
*/ 
function ajax(options){


    var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");

    //请求数据的处理      name=value&age=1000;
    var packData = "";
    for(key in options.data){
        packData += '&' + key + '=' + options.data[key];
    }

    //判断请求的类型get  post
    if(options.method == 'get'){
        xhr.open('get',options.url + '?' + packData.slice(1));
        xhr.send();
    }else{
        xhr.open('post',options.url);
        //设置请求头
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(packData.slice(1));
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.responseText);
            if(options.success){
                options.success(data);
            }
        }
    }

}


