<?php
require("../init.php");
@$iid=$_REQUEST["iid"];
@$checked=$_REQUEST["checked"];
if($iid!=null&&$checked!=null){
	$sql =  "update daoju_cart set is_checked=$checked where iid=$iid";
	$result = mysqli_query($conn,$sql);
	if(mysqli_error($conn)){
		echo mysqli_error($conn);
	}
	$row = mysqli_affected_rows($conn); 
	if($row>0){
    echo '{"code":1,"msg":"修改成功"}';
	}else{
   echo '{"code":2,"msg":"修改失败"}';
	}
}
?>