The Three conditions for using three. js
====
To actually be able to display anything with Three.js, we need three things: **A scene, a camera, and a renderer** so we can render the scene with the camera.
<br>
The relationship between three conditions
----
![](https://github.com/CherryTomato1225/DAT505-GitHub/blob/master/session2/03-HowToCopyCase/textures/ThreeConditions.jpg)
<br>
Geometry
===
BoxGeometry
---
BoxGeometry(width, height, dept, widthSegments, heightSegments, depthSegments)
<br>
![](https://github.com/CherryTomato1225/DAT505-GitHub/blob/master/session2/03-HowToCopyCase/textures/BoxGeometry.png)
<br>
![](https://github.com/CherryTomato1225/DAT505-GitHub/blob/master/session2/03-HowToCopyCase/textures/BoxGeometry.jpg)

SphereGeometry
---
SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength)

ShapeGeometry
---
The ShapeGeometry is used to create **a polygon plane**.
<br>
ShapeGeometry(shapes, options)

Tetrahedron/Octahedron/Icosahedron
----
THREE.TetrahedronGeometry(radius, detail)
<br>
THREE.OctahedronGeometry(radius, detail)
<br>
THREE.IcosahedronGeometry(radius, detail)
