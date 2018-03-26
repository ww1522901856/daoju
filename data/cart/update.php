<?php
require("../init.php");
@$iid = $_REQUEST["iid"];
@$count = $_REQUEST["count"];
if($iid!=null&&$count!=null){
	$sql = "update daoju_cart set count = $count where iid = $iid";
	$result = mysqli_query($conn,$sql);
	if(mysqli_error($conn)){
    echo mysqli_error($conn);
	}
	$count = mysqli_affected_rows($conn);
	if($count>0){
    echo '{"code":1,"msg":"修改成功"}';
	}else{
   echo '{"code":2,"msg":"修改失败"}';
	}
}
?>