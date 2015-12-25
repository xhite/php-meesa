<?php

include_once 'common/rest-app.php';

$api = new RestApp('/api');

function getMessages() { exit(json_encode(["hi","toto"])); }

$api->route('GET', '/messages', 'getMessages');