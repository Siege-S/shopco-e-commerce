<?php
require_once __DIR__ . '/../../vendor/autoload.php'; 

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../'); // Load from root
$dotenv->load();

$servername = $_ENV['DB_SERVERNAME'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$dbname = $_ENV['DB_DBNAME'];

try {
    $conn = new mysqli($servername, $username, $password, $dbname);
    // echo "Connection Successful";
} catch (mysqli_sql_exception $e) {
    echo "Connection Failed: " . $e->getMessage();
}
