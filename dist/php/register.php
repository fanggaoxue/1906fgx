<?php
    header('content-type:html/text;charset=utf8');
    include('public.php');

    $uphone=$_GET['uphone'];
    $upwd=$_GET['upwd'];
     $sql="select * from info where phone='$uphone'";
     $res=mysqli_query($connect,$sql);
     $arr=mysqli_fetch_assoc($res);

     if($arr){
         echo json_encode(array(
             'state'=>"0",
             "info"=>"账号存在，请重新注册"
         ));
     }else{
         $insert="insert into info(phone,pwd)values('$uphone','$upwd')";
         mysqli_query($connect,$insert);
         echo json_encode(array(
             'state'=>'1',
             'info'=>'注册成功'
         ));
     }
?>