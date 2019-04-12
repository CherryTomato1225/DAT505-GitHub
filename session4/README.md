Group[]
===
```
var objects = [];

for (var x = -10; x <= 10; x += 5) {

  var boxGeometry = new THREE.BoxGeometry(3, 6, 3);
  var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
  var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(mesh);
objects.push( mesh );
}

```
