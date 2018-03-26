<?php
require_once("../init.php");
session_start();
@$uid = $_SESSION["uid"];
if($uid!=null){
	$sql = "select *,(select img from daoju_pic where tu_id=lid limit 1) as pic from `daoju_cart` inner join daoju_lol_product on lid = product_id where user_id=$uid";
	$result = mysqli_query($conn,$sql);
	echo json_encode(mysqli_fetch_all($result,1));
}
?>