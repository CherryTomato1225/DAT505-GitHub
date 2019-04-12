Control the objects in the group
===

```
//Create a group.
var cubes = [];

//add obejcts into group.
cubes.push(mesh);

//control the obejcts in group.
cubes.forEach(function(c, i){
     cubes[2].rotation.x += 0.5;
});

```
