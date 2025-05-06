<?php
// ConfiguraciĆ³n de CORS
header("Access-Control-Allow-Origin:*");  // Restringir a Angular en desarrollo
header("Content-Type: application/json; charset=UTF-8");    
header("Access-Control-Allow-Methods: POST, DELETE, OPTIONS");    
header("Access-Control-Max-Age: 3600");    
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Manejo de preflight (CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("HTTP/1.1 204 No Content");
    exit();
}

$host = 'localhost';
$dbname = 'angular1';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->query("SELECT distinct Provincia,SituacionAltMax,AlturaMaxima,SituacionAltMin,AlturaMinima FROM alturas  order by 1 desc");
    $chats = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($chats);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
