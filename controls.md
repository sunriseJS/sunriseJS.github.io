Controls
=======


Getting startetd
---------
SunriseJS provides a very easy way of binding controls to actions. You are able to bind functions on ```keyup```and ```keydown``` event or just ask whether a key is pressed or not. 
Lets start easy.

Is a key pressed?
---------

As already mentioned before, its damn easy to find out!

Example:
```javascript 
sr.controls.isKeyPressed('a');
```
Returns true if 'a' is pressed.

or:
```javascript 
sr.controls.isKeyPressed('a','shift');
```
Returns true if 'a' is pressed together with the shift key.

You like KeyCodes? Ok, no problem. Its even posible to put in KeyCodes!
```javascript 
sr.controls.isKeyPressed('87','a');
```
Returns true if 'w' is pressed together with 'a'.