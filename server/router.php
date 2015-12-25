<?php

// a basic HTTP Router using dependency injection

class Router {
      function route($method, $path, callable $callback){ $this->routes[$method][$path] = $callback; }
      function run(){
      	       $path = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '/';
	       $method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'GET';
	       $this->routes[$method][$path]();
      }
}