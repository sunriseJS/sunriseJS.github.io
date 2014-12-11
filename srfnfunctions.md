Scope functions
=======

The variable that is passed into the functions that are declared in ```game = {}``` well be named ```scope```here.
## Group system

Groups in sunriseJS are mainly used to draw images on the canvas and for the collision detection. Other that that you are wellcome to add new functionllity to anhance the way groups are used.



### addToGroup
In usual cases you don't have to declare a group before you can use it. 
Simply add an entity to a group. if the group was not declared before it will be createt when you add an entity.

```
scope.fn.addToGroup(Entity, "myNewGroup");
```
It's also possible to add an array of entities to a group:
```
// A new bot was defined before in: scope.bot
var bots = [];
for (var i = 0; i < 5; i++) {
	// Create a new entity by cloning a bot and assigning new position
	var clone = scope.bot.clone(10,10);
	bots.push(clone);
}
// Add all new bots to some groups
scope.fn.addToGroup(bots, 'bots');
scope.fn.addToGroup(bots, 'toRender');
```


### defineCollidingGroups
If you want two entities to collide to each other you have to define a colliding pair.
A colliding pair consists of two normal groups.
```
// Assumed we have a group "bots" and a group "ground"
scope.fn.defineCollidingGroups('bots', 'ground');
```
If a bot collides with a part of the ground, "onCollision" will be emited in all components of the ground and the bot entity.
### deleteCollidingGroups
You have the possibility to delete befrore defined colliding pairs by simply calling: 

```
scope.fn.deleteCollidingGroups("group1", "group2");
```
### defineEmptyGroup
If you want to declare a group before you have entities to put in. That can be sensefull if you want to define colliding groups before you have entities but it's sure that they will be created later.

```
scope.fn.defineEmptyGroup("myEmptyGroup");
``` 
### getGroupsByEntity
Will return all the groups that obtain a specific entity.

```
scope.fn.getGroupsByEntity(myEntity);
``` 
### removeEntityFromGroup
Removes an entity from a group.

```
scope.fn.removeEntityFromGroup(myEntity, "allMyEntities");
```
### removeEntityFromAllGroups
Removes an entity from all groups.

Warning: The entity will be removed from the toRender group. So it will not longer be rendered. 

```
scope.fn.removeEntityFromAllGroups(myEntity);
```

*****

## Events
SunriseJS provides a simple way of adding events to your game. 
### on
Define a function that should be triggered on some event.

```
scope.fn.on("someEvent",function(){
	// React on some event
});
```
### emit
You can simply emit an event into the scope.
```
scope.fn.emit("someEvent");
```

*****

## Sound
Games without sound can't be named games! That's why sunriseJS provides a simple way to play sounds!
### playSound
Let's asume there is a sound loaded with the name 'steps' we can simple call:
```
scope.fn.playSound('steps');
```
### isSoundPlaying
Returns a boolean if a sound is playing. 
```
var isPlayingSteps = scope.fn.isSoundPlaying('steps');
```
### pauseSound
pauses a specific sound.
```
scope.fn.pauseSound('steps');
```

***** 

## Loading
All the loading should not be called by yourself. Only do it if you have a real point.
They are all used in the [game.config](gameconfig.md).
### loadImages
### loadLevels
### loadScript
### loadSounds

*****

## Components

### Component

*****

## Drawing on canvas
### Renderer
### Stage
### Sprite
### StateMachine
### CoreObject
### Entity
### CollisionBody
### Physics

*****




*****
##FPS
### fps






