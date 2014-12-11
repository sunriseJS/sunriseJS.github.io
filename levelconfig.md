Level Config
=======

We are serious! We want you to have as less work as you could have designing a level. 
But since the level editor is not completed yet, you have to do a bit of work here.

Hint: it's not possible to have comments in JSON.


## Basics 
as first it's pretty important to define a level width and high. This dimensions doensn't have anything to do with the game width and high.
The Level files consist of pure JSON.

``` 
{
    "width" : 2096,
	"height": 512,
	//if you give to colors here you get an gradient.
	"background":{
		"from":"#9ba8c5",
		"to":"#e9cea4"
	}
}
```
*****

## Layer
It's possible to define mutliplay layer to draw on. If you are using images here, you can simply put the name 
All the layer options are:

| Option        | Description	| Values	|
| :-------------: |:------------| ---------:	|
| type	      	| Set a time for the layer | image / tiles 	|
| size-x      	| Discribes what happens if the player reaches the end of the layer in X direction      |   loop / original / stretch 	|
| size-y 		| Discribes what happens if the player reaches the end of the layer in Y direction      |   loop / original / stretch 	|
| scroll-x 		| Set scroll speed in X direction     |    unlimeted 	|
| scroll-y 		| Set scroll speed in Y direction     |    unlimeted 	|
| x 			| Position of the layer relative to the gameScreen in X direction |    unlimeted	|
| y 			| Position of the layer relative to the gameScreen in X direction |    unlimeted	|
| z 			| Layer z-index. |    0 - unlimeted 	|
| tiles 		| If type = tiles It's an array where all tiles are setted |    [imgX, imgY, tileX, tileY]  	|
| group 		| Group where all the tiles are pushed |    group name 	|
| tileset 		| Name of the tileset |    image name	|




``` 
{
    //Basics
    	....
    "layer": [
		{

			"type": "image",
			//Use the image name from the game.config
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
All entities are drawn on an own layer.

Hint: The z index is relative to the entity layer. Entities are drawn on an own layer. Layers with z <= 0 are drawn in front of the entities. Layers with z > 0 are drawn behind.

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
			//Simply add components at this point to configure your entiies
			"components":{
				"elevator": {
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
		},
		{
			"type": "item",
			"x": 1344,
			"y": 64
		}
	]
}

```

Hint: If a name is defined, the entity will be saved in ```scope.name``