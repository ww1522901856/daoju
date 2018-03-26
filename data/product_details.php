<?php
require("init.php");
@$lid = $_REQUEST["lid"];
if($lid!=null){
	$sql = "select * from daoju_product_details where lid=$lid";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_all($result,1)[0];
	echo json_encode($row);
}
?>