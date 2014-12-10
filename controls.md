
Controls
=======

# Keyboard

SunriseJS provides a very easy way of binding controls to actions. You are able to bind functions on ```keyup``` and ```keydown``` events or just find out whether a key is pressed or not. 
Lets start easy.


Is a key pressed?
---------

As already mentioned before, its damn easy to find out!

******

#### Example:
```javascript 
sr.controls.isKeyPressed('a');
```
Returns true if 'a' is pressed.

*****

#### or:
```javascript 
sr.controls.isKeyPressed('a','shift');
```
Returns true if 'a' is pressed together with the shift key.

*****
#### Using keyCodes
You like KeyCodes? Ok, no problem. It's even posible to put in KeyCodes!
```javascript 
sr.controls.isKeyPressed('87','a');
```
Returns true if 'w' is pressed together with 'a'.


Add a function to a key
---------
Maybe you just want a function to be executed when a Player presses or releases one or several keys(e.g. change the used item).

*****

#### Excample of binding functions to a single key

Excample ```key down```:
```javascript 
sr.controls.onKeyDown('a',function(){
	// will be executed if the player hits 'a'
});
```

Excample ```key up```:
```javascript 
sr.controls.onKeyUp('a',function(){
	// will be executed if the player releases 'a'
});
```


*****


#### Excample of binding functions to several keys
It's the same syntax like [isKeyPressed](#Is_a_key_pressed?)

Excample multi```key down```:
```javascript 
sr.controls.onKeyDown('a','b',function(){
	// 'a' and 'b' will execute the same funktion 'onKeyDown'
});
```

It's even possible to do something like this:

```javascript 
sr.controls.onKeyDown('a',function(){
	// This function is excecuted if 'a' is pressed
},'b',function(){
	// This function is excecuted if 'b' is pressed
});
```

This is cool because you are able to define functiones anywhere in your script and you assign them at one place. That makes your script much clearer and easer to maintain!

So first we define some functions:
```javascript 
var myFirstFunction = fucntion(){
	console.log('executet on a');
};

var mySecontFunction = function(){
	console.log('executed on b or c');
}
```
And now you just have to assign the functions to the key, It's easy like this:

```javascript 
sr.controls.onKeyDown('a',myFirstFunction,'b','c',mySecountFunction);
```

That's it!
*****

# Mouse
SunriseJS doenst support mouse inputs at the moment.

