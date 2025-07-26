<?php
// require db.php
require_once('../config/db.php');

// allow CORS & return json response
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$products = [];
$sql = "SELECT * FROM tbl_items";
$result = $conn->query($sql);

if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
      $products[] = $row;
    }
    echo json_encode($products);
} else {
    echo json_encode([]);
}