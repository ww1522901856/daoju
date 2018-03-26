<?php
require("../init.php");
session_start();
@$uid = $_SESSION["uid"];
//@$uid =  2;
@$checked = $_REQUEST["checked"];
if($uid!=null&&$checked!=null){
	$sql = "update daoju_cart set is_checked = $checked where user_id=$uid";
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
}else{
	echo "checked 不能为null";
}
?>