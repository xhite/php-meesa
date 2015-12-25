<?php

include_once 'common/rest-app.php';

$client = new RestApp();

function getM() { echo 'file'; }

$client->route('GET', '/', 'getM');