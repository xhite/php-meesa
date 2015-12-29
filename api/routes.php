<?php

session_start();

include_once 'common/rest-app.php';

$api = new RestApp('/api');

function connect() {
// set your database url and credentials here
$url = <url to database>;
$user = <user>;
$password = <password>;
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
$connection = connect();
if(!isset( $_SESSION['user_id'] ))
{
$query = "SELECT * FROM meesa.User WHERE name='".$_SERVER['PHP_AUTH_USER']."' AND password='".$_SERVER['PHP_AUTH_PW']."'";
$result = mysqli_query($connection, $query);
if (!$result) {
http_response_code(403);
echo 'You are not admin';
exit();
}
}
$id = htmlspecialchars(file_get_contents('php://input'));
$query = "DELETE FROM meesa.Message WHERE id="."'".$id."'";
$result = mysqli_query($connection, $query);
$json = json_encode($result);
echo $json;

mysqli_close($connection);
}

$api->route('DELETE', '/messages', 'deleteMessage');


function connectUser() {
if(isset( $_SERVER['PHP_AUTH_USER'] ))
{
$id = htmlspecialchars(file_get_contents('php://input'));

$connection = connect();
$query = "SELECT * FROM meesa.User WHERE name='".$_SERVER['PHP_AUTH_USER']."' AND password='".$_SERVER['PHP_AUTH_PW']."'";
$result = mysqli_query($connection, $query);
if ($result) {
$_SESSION['user_id'] = $result->fetch_assoc()["id"];
echo 'ok';
}
mysqli_close($connection);
} else {
http_response_code(401);
}
}

$api->route('GET', '/user', 'connectUser');