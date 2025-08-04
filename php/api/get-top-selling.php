<?php
include_once('../config/db.php');

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$sql = "SELECT * FROM tbl_top_selling";
$product = [];
$result = $conn->query($sql);

if($result->num_rows > 0){
  while($row = $result->fetch_assoc()){
    $product[] = $row;
  }
  echo json_encode($product);

} else {
  echo json_encode([]);
}