<?php
header("Content-Type:application/json");
require_once("./init.php");
$sql = "SELECT * FROM daoju_index_carousel";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,1);
echo json_encode($rows);
?>