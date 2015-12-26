<?php

include_once 'common/rest-app.php';

$client = new RestApp();

function getIndexPage() { include 'public/index.html'; }

$client->route('GET', '/', 'getIndexPage');

function getBundle() { include 'public/js/bundle.js'; }

$client->route('GET', '/js/bundle.js', 'getBundle');