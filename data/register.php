<?php
header("Content-Type:application/json;charset=utf-8");
@$uname = $_REQUEST["uname"];
@$upwd = $_REQUEST["upwd"];
@$phone = $_REQUEST["phone"];
//*3:创建正则表达式来验证用户输入参数
$ureg = '/^[a-zA-Z0-9]{3,12}$/';
$ureg1 = '/^[0-9]{11}$/';
$rs = preg_match($ureg,$uname);
//die 函数：输出一段字符串并且停止当前php程序
if(!$rs){
    die('{"code":-1,"msg":"用户名格式不正确"}');
}
$rs=preg_match($ureg,$upwd);
if(!$rs){
    die('{"code":-1,"msg":"密码格式不正确"}');
}
$rs=preg_match($ureg1,$phone);
if(!$rs){
    die('{"code":-1,"msg":"手机号格式不正确"}');
}
require_once("./init.php");
$sql = "INSERT INTO daoju_user VALUES(NULL,'$uname','$upwd','$phone',NULL,NULL,'img/logo.png',1)";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
	echo mysqli_error($conn);
}
if($result===false){
   die('{"code":-1,"msg":"注册失败！"}');
}else{
   die('{"code":1,"msg":"注册成功！"}');
}
?>