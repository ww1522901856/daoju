<?php
require("./init.php");
$sql = "SELECT * FROM daoju_index_guanggaoone";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,1);
echo json_encode($rows);
?>