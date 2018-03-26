<?php
require("../init.php");
session_start();
@$uid = $_SESSION["uid"];
//$uid =2;
@$lid = $_REQUEST["lid"];
if($uid!=null&&$lid!=null){
	$sql = "select iid from daoju_cart where user_id = $uid and product_id = $lid";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_row($result);
	if($row==null){
		$sql = "insert into daoju_cart values (null,$uid,$lid,1,0)";
		$result = mysqli_query($conn,$sql);
		echo json_encode("1");
	}else{
		$sql = "update daoju_cart set count = (count+1) where user_id = $uid and product_id = $lid";
		$result = mysqli_query($conn,$sql);
		echo json_encode("2");
	}
	
}
?>