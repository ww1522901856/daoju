<?php
//data/users/isLogin.php
header("Content-Type:application/json");
require_once("../init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid!=null){
	$sql="select user_name from daoju_user where uid=$uid";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	$uname=$row[0];
	echo json_encode(["ok"=>1,"user_name"=>$uname]);
}else
	echo json_encode(["ok"=>0]);