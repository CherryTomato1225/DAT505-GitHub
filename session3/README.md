dat.GUI
===

A lightweight graphical user interface for changing variables in JavaScript.

Various types of controls
---

#### 1.Number
```
var controls = new function () {
   this.rotationSpeed = 0.02;
};

var gui = new dat.GUI();
gui.add(controls, 'rotationSpeed', 0, 0.5);

```
![](https://github.com/CherryTomato1225/DAT505-GitHub/blob/master/session2/03-HowToCopyCase/textures/RS.png)

#### 2.String(input)
```
var controls = new function () {
    this.site = "DAT505"
};

var gui = new dat.GUI();
gui.add(controls, 'site');

```
#### 3.Boolean(Checkbox)
```
var controls = new function () {
    this.visible = true
};

var gui = new dat.GUI();
gui.add(controls, 'visible');

```
#### 4.Function(button)
```
var controls = new function () {
    this.hello = function() {
      alert("welcome to DAT505!");
    }
};

var gui = new dat.GUI();
gui.add(controls, 'hello');

```
#### 5.Color
```
var controls = new function () {
    this.color0 = "#ffae23"; // CSS string
    this.color1 = [0, 128, 255]; // RGB array
    this.color2 = [0, 128, 255, 0.3]; // RGB with alpha
    this.color3 = {h: 350, s: 0.9, v: 0.3}; // Hue, saturation, value
};

var gui = new dat.GUI();
gui.addColor(controls, 'color0');

```
