Level Config
=======

We are serious! We want you to have as less work as you could have designing a level. 
But since the level editor is not completed yet, you have to do a bit of work here.

Hint: It's not possible to have comments in JSON.


## Basics 
as first it's pretty important to define a level width and high. This dimensions doensn't have anything to do with the game width and high.
The Level files consist of pure JSON.

``` 
{
    "width" : 2096,
	"height": 512,
	"background":{
		"from":"#9ba8c5",
		"to":"#e9cea4"
	}
}

If you set ```from``` and ```to``` for the background, you will get a gradient.
```
*****

## Layer
It's possible to define mutliplay layer to draw on. If you are using images here, you can simply put the name 
All the layer options are:

Hint: The z index is relative to the entity layer. Entities are drawn on an own layer which can not be reached from the level.JSON. Layers with z <= 0 are drawn in front of the entities. Layers with z > 0 are drawn behind.

| Option        | Description	| Values	|
| :-------------: |:------------| ---------:	|
| type	      	| Set a time for the layer | image / tiles 	|
| background	| A background image for the Layer | choose from game.config.images |
| size-x      	| Discribes what happens if the player reaches the end of the layer in X direction      |   loop / original / stretch 	|
| size-y 		| Discribes what happens if the player reaches the end of the layer in Y direction      |   loop / original / stretch 	|
| scroll-x 		| Set scroll speed in X direction     |    unlimeted 	|
| scroll-y 		| Set scroll speed in Y direction     |    unlimeted 	|
| x 			| Position of the layer relative to the gameScreen in X direction |    unlimeted	|
| y 			| Position of the layer relative to the gameScreen in X direction |    unlimeted	|
| z 			| Layer z-index. |    0 - unlimeted 	|
| tiles 		| If type = tiles It's an array where all tiles are setted |    [imgX, imgY, tileX, tileY]  	|
| group 		| Group where all the tiles are pushed |    group name 	|
| tileset 		| Name of the tileset |    choose from game.config.images	|




``` 
{
    //Basics
    	....
    "layer": [
		{

			"type": "image",
			"image": "background1",
			"size-x": "loop",
			"size-y": "original",
			"scroll-x": 0.5,
			"scroll-y": 0.5,
			"x": -600,
			"y": -128,
			"z": 2
		}
	}
}
```
*****

## Entity Layer
You can add entities to your game simply by adding them to the entities array.

| Option          | Description	| Values	|
| :-------------: |:------------| ---------:|
| type	      	| Choose of the entityTypes that you have defined in the game.config | entityType 	|
| x, y	      	| Starting position of the Entity | unlimeted 	|
| name	      	| If a name is defined, the entity will be saved in ```scope.name``` | unique name 	|
| components	| You can simply add a component to the entity and set component values | unique name 	|

```
{ 
	//Basics
    	....
   	//Layer
    	....
	"entities": [
		{
			"type": "player",
			"x": 436,
			"y": -128,
			"name": "player"
		},
		{
			"type": "elevator",
			"x": 0,
			"y": 256,
			"components":{
				"elevatorComp": {
					"minY": 0,
					"maxY": 500
				}
			}
		},
		{
			"type": "bot",
			"x": 1024,
			"y": -128,
			"name": "bot"
		}
	]
}

```
