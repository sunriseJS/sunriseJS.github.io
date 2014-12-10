How to sunriseJS
=======


Getting startetd
---------

### Bind sunriseJS to the HTML

```
<div id="example" sunriseJS-app="my example app"></div>
```

and include sunrise JS at the end of the ```body``` tag

```
<body>
	<!-- other html stuff -->
	<script src="sunrise.js" type="text/javascript"></script>
</body>
```

*****

So, what's my part?
--------

Just grab an new javascript file and define a global variable 

```javascript
var game = {};
```

Okay, sice you got that we can start definig three essential things: ```config``` , ```init``` and ```run```

```
var game = {
	config: {
		//do config stuff
	},

	init: function($scope){
		// Initialize static content here
	},

	run: function($scope){
		// The run function will be called 60 times per second. 
	},
};
```

Maybe you noticed that we pass a variable into the ```init``` and ```run`` function. This is where you store all the runtime necessary stuff.

Its also possible to define own functions. ```$scope```will be passed in every function that are defined within ```game = {}```.

Eg.
``` 
var game = {
	config: {
		//do config stuff
	},

	createBots: function ($scope) {
		// generate bots here
	},

	init: function($scope){
		// Initialize static content here
	},

	run: function($scope){
		// The run function will be called 60 times per second. 
	}
};

```