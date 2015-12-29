<?php

include_once 'common/rest-app.php';

$api = new RestApp('/api');

function connect() {
$mysqli = new mysqli($url, $user, $password);
if ($mysqli->connect_errno) {
    echo "MySQL Connection error : (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
return $mysqli;
}

function getMessages() {
$connection = connect();
$query = "SELECT * FROM meesa.Message";
$result = mysqli_query($connection, $query);
$array = [];
$i = 0;
while ($row = $result->fetch_assoc()) {
        $array[$i++]=$row;
    }
$json = json_encode($array);
echo $json;
mysqli_close($connection);
}

$api->route('GET', '/messages', 'getMessages');

function postMessage() {
$message = htmlspecialchars(file_get_contents('php://input'));

$connection = connect();
$query = "INSERT INTO meesa.Message (content,dateCreation) VALUES ('".$message."',CURDATE())";
$result = mysqli_query($connection, $query);

$json = json_encode($result);
echo $query;
mysqli_close($connection);
}

$api->route('POST', '/messages', 'postMessage');

function deleteMessage() {
$id = htmlspecialchars(file_get_contents('php://input'));

$connection = connect();
$query = "DELETE FROM meesa.Message WHERE id="."'".$id."'";
$result = mysqli_query($connection, $query);
$json = json_encode($result);
echo $json;
mysqli_close($connection);
}

$api->route('DELETE', '/messages', 'deleteMessage');