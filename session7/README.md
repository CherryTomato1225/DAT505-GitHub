coordinate system
===

![](https://github.com/CherryTomato1225/DAT505-GitHub/blob/master/session2/03-HowToCopyCase/textures/zb.png)

### World coordinate system

In webGL, the world coordinate system takes the center of the screen as the origin (0, 0, 0) and is always the same.You're facing the screen, your right is positive x, your top is positive y, and your screen is pointing to your z.The length unit is defined as follows: the window range is exactly (-1,-1) to (1,1), that is, the lower left corner of the screen coordinates are (-1,-1), the upper right corner
The coordinate is (1,1).

### Screen coordinate system

One of the important functions of webGL is to calculate the 3d world coordinates through transformation and projection, and finally calculate the corresponding position on the display device, which is called the device coordinate.Coordinates on screens, printers, and other devices are two-dimensional coordinates.

### Viewpoint coordinate system

The direction in a coordinate system with the viewpoint (camera) as the origin and the direction of the line of sight as the positive direction of the Z+ axis.WebGL transforms the world coordinates to viewpoint coordinates and then crop them so that only the scene within the line of sight (the viewbody) goes to the next stage of calculation.

Code
===

![](https://github.com/CherryTomato1225/DAT505-GitHub/blob/master/session2/03-HowToCopyCase/textures/zb2.png)

```
mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
```
 Mouse click position:` A=(x1,y1),x1=e.clintX, y1=e.clientY`.
 World coordinate system:` A=(x2,y2);`

 由于A点的坐标值的原点是以屏幕左上角为(0,0);
 我们可以计算可得以屏幕中心为原点的B'值
 x2' = x1 - innerWidth/2
 y2' = innerHeight/2 - y1
 又由于在世界坐标的范围是[-1,1],要得到正确的B值我们必须要将坐标标准化
 x2 = (x1 -innerWidth/2)/(innerwidth/2) = (x1/innerWidth)*2-1
 同理得 y2 = -(y1/innerHeight)*2 +1

```
