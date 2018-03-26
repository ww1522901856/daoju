<?php
require_once("./init.php");
$output = [];
@$pno = $_REQUEST["pno"];
@$pageSize = $_REQUEST["pageSize"];
$reg='/^[0-9]{1,}$/';
$rs=preg_match($reg,$pno);
if(!$rs){
    die('{"code":-1,"msg":"页码格式不正确"}');
}
$rs=preg_match($reg,$pageSize);
 if(!$rs){
     die('{"code":-1,"msg":"页行格式不正确"}');
 }
 $sql = "SELECT count(lid) FROM daoju_lol_product";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_row($result);
 $pageCount = ceil($row[0]/$pageSize);
 $start = ($pno-1)*$pageSize;
 $sql = "select * from daoju_lol_product LIMIT $start,$pageSize";
 $result = mysqli_query($conn,$sql);
 if(mysqli_error($conn)){
    echo mysqli_error($conn);
}
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
$output = [
			"pno"=>$pno,
			"pageSize"=>$pageSize,
			"pageCount"=>$pageCount,
			"data"=>$rows];
echo json_encode($output);
?>