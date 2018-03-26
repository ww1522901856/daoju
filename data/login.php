<?php
header("Content-Type:application/json;charset=utf-8");
@$uname = $_REQUEST["uname"];
@$upwd = $_REQUEST["upwd"];
@$yzm=$_REQUEST["yzm"];
session_start();
$bk=$_SESSION["code"];
if($bk!=$yzm){
    die('{"code":-1,"msg":"验证码错误，请重试"}');
}

$ureg = '/^[a-zA-Z0-9]{3,12}$/';
$rs = preg_match($ureg,$uname);
if(!$rs){
    die('{"code":-1,"msg":"用户名格式不正确"}');
}
$rs=preg_match($ureg,$upwd);
if(!$rs){
    die('{"code":-1,"msg":"密码格式不正确"}');
}
require_once("./init.php");
$sql="select uid from daoju_user where uname='$uname' and binary upwd='$upwd'";
$result=mysqli_query($conn,$sql);
if(mysqli_error($conn)){
    echo mysqli_error($conn);
}
$row=mysqli_fetch_row($result);
if($row!=null){
 	$uid=$row[0];
	$_SESSION["uid"]=$uid;
 	die('{"code":1,"msg":"登录成功"}');
}else{
	die('{"code":-1,"msg":"密码不正确"}');
}

?>