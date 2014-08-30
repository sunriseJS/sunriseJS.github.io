/**
 * @license sunriseJS Game Engine
 * @copyright (C) 2014 - 2014 Jonas Gerdes, Jonathan Wiemers
 * http://www.sunrisejs.net
 *
 * sunriseJS is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 *
 *
 * 
 * @param  {[type]} sr
 * @return {[type]}
 */
(function($sr){	
	var $rootScope = $sr.$rootScope;
	/**
	 * Initialising the canvas as a child of the sunriseJS-app element 
	 * with the data the user specified in the config area.
	 * @return {[type]}
	 */
	$sr.initCanvas = function(){
		screenWidth = game.config.screenWidth;
		screenHeight = game.config.screenHeight;
		var canvas = document.createElement('canvas');
		canvas.id     = "sunriseJS-screen";
		canvas.width  = game.config.screenWidth;
		canvas.height = game.config.screenHeight;
		$rootScope.dom.appendChild(canvas);
		$rootScope.canvas = canvas;
		$rootScope.canvas.context = canvas.getContext("2d");
	}

	$rootScope.clearCanvas = function(){
		// Store the current transformation matrix
		$rootScope.canvas.context.save();
		// Use the identity matrix while clearing the canvas
		$rootScope.canvas.context.setTransform(1, 0, 0, 1, 0, 0);
		$rootScope.canvas.context.clearRect(0, 0, game.config.screenWidth, game.config.screenHeight);
		// Restore the transform
		$rootScope.canvas.context.restore();
	}





	$sr.strokeRect = function(x,y,width,height){
		return $rootScope.canvas.context.strokeRect(x, y, width, height);
	}
	
})($sr = window.$sr = window.$sr || {});