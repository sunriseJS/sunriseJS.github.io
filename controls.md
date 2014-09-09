Controls
=======


Getting startetd
---------
SunriseJS provides a very easy way of binding controls to actions. You are able to bind functions on ```keyup``` and ```keydown``` events or just find out whether a key is pressed or not. 
Lets start easy.

Is a key pressed?
---------

As already mentioned before, its damn easy to find out!

******

### Example:
```javascript 
sr.controls.isKeyPressed('a');
```
Returns true if 'a' is pressed.

*****

### or:
```javascript 
sr.controls.isKeyPressed('a','shift');
```
Returns true if 'a' is pressed together with the shift key.

*****
### Using keyCodes
You like KeyCodes? Ok, no problem. It's even posible to put in KeyCodes!
```javascript 
sr.controls.isKeyPressed('87','a');
```
Returns true if 'w' is pressed together with 'a'.


Add a function to a key
---------
Maybe you just want a function to be executed when a Player presses or releases one or several keys(e.g. change the used item).

*****

### Excample of binding functions to a single key

Excample ```key down```:
```javascript 
sr.controls.onKeyDown('a',funtion(){
	// will be executed if the player hits 'a'
});
```

Excample ```key up```:
```javascript 
sr.controls.onKeyUp('a',funtion(){
	// will be executed if the player releases 'a'
});
```


*****


### Excample of binding functions to several keys
It's the same syntax like [isKeyPressed](#Is_a_key_pressed?)

Excample ```key down```:
```javascript 
sr.controls.onKeyDown('a','b',funtion(){
	// will be executed if the player hits 'a' and 'b' at the same time'
});
```




