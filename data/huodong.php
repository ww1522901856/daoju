<?php
require("init.php");
$sql = "select * from daoju_huodong";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,1);
echo json_encode($rows);
?>