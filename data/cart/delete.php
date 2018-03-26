<?php
require("../init.php");
@$iid = $_REQUEST["iid"];
$sql = "delete from daoju_cart where iid = $iid";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
   echo mysqli_error($conn);
}
$rows = mysqli_affected_rows($conn);

if($rows>0)
echo '{"code":1,"msg":"删除成功"}';
else
echo '{"code":-1,"msg":"删除失败"}';
?>