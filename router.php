<?php
include_once 'common/rest-app.php';

require 'api/routes.php';
require 'client/routes.php';

$app = new RestApp();

$app->addHandler($api);
$app->addHandler($client);

$app->run();