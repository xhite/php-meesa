<?php

// a basic HTTP REST App using dependency injection
// and chain of responsibility pattern

class RestApp {
      // base_url should not end with '/'
      function __construct($base_url = '') { $this->base_url = $base_url; }
      function route($method, $path, callable $callback){ $this->routes[$method][$this->base_url.$path] = $callback; }
      function addHandler($handler){ $this->handlers[count($this->handlers)] = $handler; }
      function forward($method, $path){
      	       if (isset($this->handlers))
	       	  foreach ($this->handlers as $handler) {
    		  	  $handler->handle($method, $path);
	          }
		 
      }
      function handle($method, $path){
	       if (isset($this->routes[$method][$path])){
		  http_response_code(200);
	       	  $this->routes[$method][$path]();
	       } else
		  $this->forward($method, $path);
      }
      function run(){
      	       http_response_code(404);
      	       $method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'GET';
	       $path = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/';
	       $this->handle($method, $path);
	       exit();
      }
}