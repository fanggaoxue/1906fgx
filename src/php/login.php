<?php
    header('content-type:html/text;charset=utf8');
    include('public.php');

    $uphone=$_GET['uphone'];
    $upwd=$_GET['upwd'];
     $sql="select * from info where phone='$uphone'";
     $res=mysqli_query($connect,$sql);
     $arr=mysqli_fetch_assoc($res);

     if($arr){
         if($upwd==$arr['pwd']){
             echo json_encode(array(
                 'state'=>'1',
                'info'=>'登录成功'
             ));
         }else{
              echo json_encode(array(
                 'state'=>'0',
                'info'=>'密码错误'
             ));
         }
     }else{
        
         echo json_encode(array(
             'state'=>'0',
             'info'=>'用户名不存在'
         ));
     }
?>