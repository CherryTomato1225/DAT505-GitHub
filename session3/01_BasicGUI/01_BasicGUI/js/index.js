//Global variables
var scene, camera, renderer;
var geometry, material, mesh, threejs, color;

var WIDTH = window.innerWidth,
HEIGHT = window.innerHeight;

//GUI - Declare variable
var gui = null;

//Rotation converter
var de2ra = function(degree) {
  return degree*(Math.PI/180);
};

init();
render();

function init(){
  threejs = document.getElementById('threejs');

  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a renderer  ------------
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(WIDTH, HEIGHT);
  //renderer.setClearColor(dcdbe1, 1);
  renderer.setClearColor('#dcdbe1',1.0);//Canvas Color
  renderer.shadowMap.Enabled = true;
  renderer.shadowMapSoft = true;

  threejs.appendChild(renderer.domElement);

  var width = window.innerWidth;
  var height = window.innerHeight;

	camera = new THREE.PerspectiveCamera( 60, width / height, 1, 2100 );
	camera.position.z = 1500;

	cameraOrtho = new THREE.OrthographicCamera( - width / 2, width / 2, height / 2, - height / 2, 1, 10 );
	cameraOrtho.position.z = 10;

	scene.fog = new THREE.Fog( 0x000000, 1500, 2100 );
	sceneOrtho = new THREE.Scene();

  // Create a basic perspective camera --------------
  //camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1 , 1000);
  //camera = new THREE.OrthographicCamera(window.innerWidth / -16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / 0, 0, 0);
  camera.position.set(0, 6, 6);
  camera.lookAt(scene.position);
  scene.add(camera);

  // Create a Cube Mesh with material ---------
  //geometry = new THREE.BoxGeometry(2, 2, 2);
  //geometry1 =new THREE.TetrahedronGeometry(1);
  //box1
  geometry1 =new THREE.BoxGeometry(2,2,0.25);
  //geometry2 =new THREE.BoxGeometry(2,2,0.25);
  //geometry3 =new THREE.BoxGeometry(2,2,0.25);
  //geometry4 =new THREE.BoxGeometry(2,2,0.25);
  //box2
  //geometry5 =new THREE.BoxGeometry(2,2,2);


    color = Math.random() * 0xffffff;

  var material = new THREE.MeshLambertMaterial({
    //ambient: color,
    color: color,
    transparent: true,
    //wireframe:true,
  });

  mesh1 = new THREE.Mesh(geometry1, material);
  mesh1.position.set(0, 0, 0);
  mesh1.rotation.set(1, 0, 0.5);
//  mesh1.rotation.y = de2ra(-90);
  mesh1.scale.set(1, 1, 1);
  mesh1.doubleSided = true;
  mesh1.castShadow = true;
  mesh1.opacity=0;

  mesh2 = new THREE.Mesh(geometry1, material);
  mesh2.position.set(0, 0, 1.75);
  mesh2.rotation.set(1, 0, 0.5);
  mesh2.scale.set(1, 1, 1);
  mesh2.doubleSided = true;
  mesh2.castShadow = true;

  mesh3 = new THREE.Mesh(geometry1, material);
  mesh3.position.set(0.875, 0, 0.875);
  mesh3.rotation.set(0, 1.57, 0);
  mesh3.scale.set(1, 1, 1);
  mesh3.doubleSided = true;
  mesh3.castShadow = true;

  mesh4 = new THREE.Mesh(geometry1, material);
  mesh4.position.set(-0.875, 0, 0.875);
  mesh4.rotation.set(0, 1.57, 0);
  mesh4.scale.set(1, 1, 1);
  mesh4.doubleSided = true;
  mesh4.castShadow = true;

  mesh5 = new THREE.Mesh(geometry1, material);
  mesh5.position.set(0, 0, 0);
  mesh5.rotation.set(1, 0, 0.5);
  mesh5.scale.set(1, 1, 1);
  mesh5.doubleSided = true;
  mesh5.castShadow = true;

  mesh6 = new THREE.Mesh(geometry1, material);
  mesh6.position.set(0, 0, 1.75);
  mesh6.rotation.set(1, 0, 0.5);
  mesh6.scale.set(1, 1, 1);
  mesh6.doubleSided = true;
  mesh6.castShadow = true;

  mesh7 = new THREE.Mesh(geometry1, material);
  mesh7.position.set(0.875, 0, 0.875);
  mesh7.rotation.set(0, 1.57, 0);
  mesh7.scale.set(1, 1, 1);
  mesh7.doubleSided = true;
  mesh7.castShadow = true;

  mesh8 = new THREE.Mesh(geometry1, material);
  mesh8.position.set(-0.875, 0, 0.875);
  mesh8.rotation.set(0, 1.57, 0);
  mesh8.scale.set(1, 1, 1);
  mesh8.doubleSided = true;
  mesh8.castShadow = true;

  mesh9 = new THREE.Mesh(geometry1, material);
  mesh9.position.set(0, 0, 0);
  mesh9.rotation.set(1, 0, 0.5);
  mesh9.scale.set(1, 1, 1);
  mesh9.doubleSided = true;
  mesh9.castShadow = true;

  mesh10 = new THREE.Mesh(geometry1, material);
  mesh10.position.set(0, 0, 1.75);
  mesh10.rotation.set(1, 0, 0.5);
  mesh10.scale.set(1, 1, 1);
  mesh10.doubleSided = true;
  mesh10.castShadow = true;

  mesh11 = new THREE.Mesh(geometry1, material);
  mesh11.position.set(0.875, 0, 0.875);
  mesh11.rotation.set(0, 1.57, 0);
  mesh11.scale.set(1, 1, 1);
  mesh11.doubleSided = true;
  mesh11.castShadow = true;

  mesh12 = new THREE.Mesh(geometry1, material);
  mesh12.position.set(-0.875, 0, 0.875);
  mesh12.rotation.set(0, 1.57, 0);
  mesh12.scale.set(1, 1, 1);
  mesh12.doubleSided = true;
  mesh12.castShadow = true;

  mesh13 = new THREE.Mesh(geometry1, material);
  mesh13.position.set(0, 0, 0);
  mesh13.rotation.set(1, 0, 0.5);
  mesh13.scale.set(1, 1, 1);
  mesh13.doubleSided = true;
  mesh13.castShadow = true;

  mesh14 = new THREE.Mesh(geometry1, material);
  mesh14.position.set(0, 0, 1.75);
  mesh14.rotation.set(1, 0, 0.5);
  mesh14.scale.set(1, 1, 1);
  mesh14.doubleSided = true;
  mesh14.castShadow = true;

  mesh15 = new THREE.Mesh(geometry1, material);
  mesh15.position.set(0.875, 0, 0.875);
  mesh15.rotation.set(0, 1.57, 0);
  mesh15.scale.set(1, 1, 1);
  mesh15.doubleSided = true;
  mesh15.castShadow = true;

  mesh16 = new THREE.Mesh(geometry1, material);
  mesh16.position.set(-0.875, 0, 0.875);
  mesh16.rotation.set(0, 1.57, 0);
  mesh16.scale.set(1, 1, 1);
  mesh16.doubleSided = true;
  mesh16.castShadow = true;

  mesh17 = new THREE.Mesh(geometry1, material);
  mesh17.position.set(0, 0, 0);
  mesh17.rotation.set(1, 0, 0.5);
  mesh17.scale.set(1, 1, 1);
  mesh17.doubleSided = true;
  mesh17.castShadow = true;

  mesh18 = new THREE.Mesh(geometry1, material);
  mesh18.position.set(0, 0, 1.75);
  mesh18.rotation.set(1, 0, 0.5);
  mesh18.scale.set(1, 1, 1);
  mesh18.doubleSided = true;
  mesh18.castShadow = true;

  mesh19 = new THREE.Mesh(geometry1, material);
  mesh19.position.set(0.875, 0, 0.875);
  mesh19.rotation.set(0, 1.57, 0);
  mesh19.scale.set(1, 1, 1);
  mesh19.doubleSided = true;
  mesh19.castShadow = true;

  mesh20 = new THREE.Mesh(geometry1, material);
  mesh20.position.set(-0.875, 0, 0.875);
  mesh20.rotation.set(0, 1.57, 0);
  mesh20.scale.set(1, 1, 1);
  mesh20.doubleSided = true;
  mesh20.castShadow = true;

  mesh21 = new THREE.Mesh(geometry1, material);
  mesh21.position.set(0, 0, 0);
  mesh21.rotation.set(1, 0, 0.5);
  mesh21.scale.set(1, 1, 1);
  mesh21.doubleSided = true;
  mesh21.castShadow = true;

  mesh22 = new THREE.Mesh(geometry1, material);
  mesh22.position.set(0, 0, 1.75);
  mesh22.rotation.set(1, 0, 0.5);
  mesh22.scale.set(1, 1, 1);
  mesh22.doubleSided = true;
  mesh22.castShadow = true;

  mesh23 = new THREE.Mesh(geometry1, material);
  mesh23.position.set(0.875, 0, 0.875);
  mesh23.rotation.set(0, 1.57, 0);
  mesh23.scale.set(1, 1, 1);
  mesh23.doubleSided = true;
  mesh23.castShadow = true;

  mesh24 = new THREE.Mesh(geometry1, material);
  mesh24.position.set(-0.875, 0, 0.875);
  mesh24.rotation.set(0, 1.57, 0);
  mesh24.scale.set(1, 1, 1);
  mesh24.doubleSided = true;
  mesh24.castShadow = true;

  mesh25 = new THREE.Mesh(geometry1, material);
  mesh25.position.set(0, 0, 0);
  mesh25.rotation.set(1, 0, 0.5);
  mesh25.scale.set(1, 1, 1);
  mesh25.doubleSided = true;
  mesh25.castShadow = true;

  mesh26 = new THREE.Mesh(geometry1, material);
  mesh26.position.set(0, 0, 1.75);
  mesh26.rotation.set(1, 0, 0.5);
  mesh26.scale.set(1, 1, 1);
  mesh26.doubleSided = true;
  mesh26.castShadow = true;

  mesh27 = new THREE.Mesh(geometry1, material);
  mesh27.position.set(0.875, 0, 0.875);
  mesh27.rotation.set(0, 1.57, 0);
  mesh27.scale.set(1, 1, 1);
  mesh27.doubleSided = true;
  mesh27.castShadow = true;

  mesh28 = new THREE.Mesh(geometry1, material);
  mesh28.position.set(-0.875, 0, 0.875);
  mesh28.rotation.set(0, 1.57, 0);
  mesh28.scale.set(1, 1, 1);
  mesh28.doubleSided = true;
  mesh28.castShadow = true;

  mesh29 = new THREE.Mesh(geometry1, material);
  mesh29.position.set(0, 0, 0);
  mesh29.rotation.set(1, 0, 0.5);
  mesh29.scale.set(1, 1, 1);
  mesh29.doubleSided = true;
  mesh29.castShadow = true;

  mesh30 = new THREE.Mesh(geometry1, material);
  mesh30.position.set(0, 0, 1.75);
  mesh30.rotation.set(1, 0, 0.5);
  mesh30.scale.set(1, 1, 1);
  mesh30.doubleSided = true;
  mesh30.castShadow = true;

  mesh31 = new THREE.Mesh(geometry1, material);
  mesh31.position.set(0.875, 0, 0.875);
  mesh31.rotation.set(0, 1.57, 0);
  mesh31.scale.set(1, 1, 1);
  mesh31.doubleSided = true;
  mesh31.castShadow = true;

  mesh32 = new THREE.Mesh(geometry1, material);
  mesh32.position.set(-0.875, 0, 0.875);
  mesh32.rotation.set(0, 1.57, 0);
  mesh32.scale.set(1, 1, 1);
  mesh32.doubleSided = true;
  mesh32.castShadow = true;

  mesh33 = new THREE.Mesh(geometry1, material);
  mesh33.position.set(0, 0, 0);
  mesh33.rotation.set(1, 0, 0.5);
  mesh33.scale.set(1, 1, 1);
  mesh33.doubleSided = true;
  mesh33.castShadow = true;

  mesh34 = new THREE.Mesh(geometry1, material);
  mesh34.position.set(0, 0, 1.75);
  mesh34.rotation.set(1, 0, 0.5);
  mesh34.scale.set(1, 1, 1);
  mesh34.doubleSided = true;
  mesh34.castShadow = true;

  mesh35 = new THREE.Mesh(geometry1, material);
  mesh35.position.set(0.875, 0, 0.875);
  mesh35.rotation.set(0, 1.57, 0);
  mesh35.scale.set(1, 1, 1);
  mesh35.doubleSided = true;
  mesh35.castShadow = true;

  mesh36 = new THREE.Mesh(geometry1, material);
  mesh36.position.set(-0.875, 0, 0.875);
  mesh36.rotation.set(0, 1.57, 0);
  mesh36.scale.set(1, 1, 1);
  mesh36.doubleSided = true;
  mesh36.castShadow = true;
/*  mesh2 = new THREE.Mesh(geometry2, material);
  mesh2.position.set(1, 0, 0);
  mesh2.rotation.set(0, 0, 0);
  mesh2.rotation.y = de2ra(-90);
  mesh2.scale.set(1, 1, 1);
  mesh2.doubleSided = true;
  mesh2.castShadow = true;
//  scene.add(mesh2);*/

  var group1 = new THREE.Group();
  group1.add( mesh1 );
  group1.add( mesh2 );
  group1.add( mesh3 );
  group1.add( mesh4 );

  var group2 = new THREE.Group();
  group2.add( mesh5 );
  group2.add( mesh6 );
  group2.add( mesh7 );
  group2.add( mesh8 );

  var group3 = new THREE.Group();
  group3.add( mesh9 );
  group3.add( mesh10 );
  group3.add( mesh11 );
  group3.add( mesh12 );

  var group4 = new THREE.Group();
  group4.add( mesh13 );
  group4.add( mesh14 );
  group4.add( mesh15 );
  group4.add( mesh16 );

  var group5 = new THREE.Group();
  group5.add( mesh17 );
  group5.add( mesh18 );
  group5.add( mesh19 );
  group5.add( mesh20 );

  var group6 = new THREE.Group();
  group6.add( mesh21);
  group6.add( mesh22 );
  group6.add( mesh23 );
  group6.add( mesh24 );

  var group7 = new THREE.Group();
  group7.add( mesh25);
  group7.add( mesh26 );
  group7.add( mesh27 );
  group7.add( mesh28 );

  var group8 = new THREE.Group();
  group8.add( mesh29);
  group8.add( mesh30 );
  group8.add( mesh31 );
  group8.add( mesh32 );

  var group9 = new THREE.Group();
  group9.add( mesh33);
  group9.add( mesh34 );
  group9.add( mesh35 );
  group9.add( mesh36);
/*  var group3 = new THREE.Group();
  group3.add( group1 );
  group3.add( group2 );

  scene.add(group3);*/
  scene.add(group1);
  scene.add(group2);
  scene.add(group3);
  scene.add(group4);
  scene.add(group5);
  scene.add(group6);
  scene.add(group7);
  scene.add(group8);
  scene.add(group9);

  group1.position.set(0,-4,0);
  group1.rotation.z=0.825;

  group2.position.set(2.58,-4,0);
  group2.rotation.z=0.825;

  group7.position.set(-2.58,-4,0);
  group7.rotation.z=0.825;

  //group3.position.set(1.58,-1.9,-1.8);
  //group3.position.set(1.665,-3,-2.6);
  group3.position.set(0.08,-2.3,-2.9);
  group3.rotation.z=0.825;
  group3.rotation.x=0.17;

  group4.position.set(2.68,-2.3,-2.9);
  group4.rotation.z=0.825;
  group4.rotation.x=0.17;

  group8.position.set(-2.53,-2.3,-2.9);
  group8.rotation.z=0.825;
  group8.rotation.x=0.17;

  group5.position.set(0.2,0.3,-5.07);
  group5.rotation.z=0.825;
  group5.rotation.x=0.3;

  group6.position.set(2.78,0.3,-5.07);
  group6.rotation.z=0.825;
  group6.rotation.x=0.3;

  group9.position.set(-2.4,0.3,-5.07);
  group9.rotation.z=0.825;
  group9.rotation.x=0.3;

  lightingSystem();

  //GUI - Setup the GUI controller
  var controller = new function() {
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;
    this.positionX = 0;
    this.positionY = 0;
    this.positionZ = 0;
  //  this.rotationX = 50;
    //this.rotationY = 0;
    this.rotationZ = 0;
    this.boxColor = color;
    //this.castShadow = true;
    this.boxOpacity = 1;
  }();

  var gui = new dat.GUI();
/*  var f1 = gui.addFolder('Scale');
  f1.add(controller, 'scaleX', 0.1, 5).onChange( function() {
    mesh.scale.x = (controller.scaleX);
  });
  f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
    mesh.scale.y = (controller.scaleY);
  });
  f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
    mesh.scale.z = (controller.scaleZ);
  });

  var f2 = gui.addFolder('Position');
  f2.add(controller, 'positionX', -5, 5).onChange( function() {
    mesh.position.x = (controller.positionX);
  });
  f2.add(controller, 'positionY', -5, 5).onChange( function() {
    mesh.position.y = (controller.positionY);
  });
  f2.add(controller, 'positionZ', -5, 5).onChange( function() {
    mesh.position.z = (controller.positionZ);
  });*/

  /*var f4 = gui.addFolder('Rotation2');
  f4.add(controller, 'rotationZ', -360, 360).onChange( function() {
  group3.rotation.z = de2ra(controller.rotationZ);
});*/

  var f3 = gui.addFolder('Rotation');
  /*f3.add(controller, 'rotationX', -180, 180).onChange( function() {
    group.rotation.x = de2ra(controller.rotationX);
  });
  f3.add(controller, 'rotationY', -180, 180).onChange( function() {
    group.rotation.y = de2ra(controller.rotationY);
  });*/
  f3.add(controller, 'rotationZ', -132, 132).onChange( function() {
    group2.rotation.z = de2ra(controller.rotationZ);
    group1.rotation.z = de2ra(controller.rotationZ);
    group3.rotation.z = de2ra(controller.rotationZ);
    group4.rotation.z = de2ra(controller.rotationZ);
    group5.rotation.z = de2ra(controller.rotationZ);
    group6.rotation.z = de2ra(controller.rotationZ);
    group7.rotation.z = de2ra(controller.rotationZ);
    group8.rotation.z = de2ra(controller.rotationZ);
    group9.rotation.z = de2ra(controller.rotationZ);
    //group3.rotation.z = de2ra(controller.rotationZ);
  });

  gui.addColor( controller, 'boxColor', color ).onChange( function() {
    group2.material.color.setHex( dec2hex(controller.boxColor) );
  });

gui.addColor( controller, 'boxColor', color ).onChange( function() {
  group1.material.color.setHex( dec2hex(controller.boxColor) );
});
  //gui.add( controller, 'castShadow', false ).onChange( function() {
    //mesh.castShadow = controller.castShadow;
  //});
  gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
    material.opacity = (controller.boxOpacity);
  });
}

//Color converter
function dec2hex(i) {
  var result = "0x000000";
  if (i >= 0 && i <= 15) { result = "0x00000" + i.toString(16); }
  else if (i >= 16 && i <= 255) { result = "0x0000" + i.toString(16); }
  else if (i >= 256 && i <= 4095) { result = "0x000" + i.toString(16); }
  else if (i >= 4096 && i <= 65535) { result = "0x00" + i.toString(16); }
  else if (i >= 65535 && i <= 1048575) { result = "0x0" + i.toString(16); }
  else if (i >= 1048575 ) { result = '0x' + i.toString(16); }
  if (result.length == 8){return result;}
}

// Render Loop
function render () {
  requestAnimationFrame(render);
  //mesh.rotation.x += 0.01; //Continuously rotate the mesh
  //mesh.rotation.y += 0.01;
  //renderer.setClearColor("#000000");
  // Render the scene
  renderer.render(scene, camera);
};

function lightingSystem(){
  var object3d  = new THREE.DirectionalLight('white', 0.15);
  object3d.position.set(6,3,9);
  object3d.name = 'Back light';
  scene.add(object3d);

  object3d = new THREE.DirectionalLight('white', 0.35);
  object3d.position.set(-6, -3, 0);
  object3d.name   = 'Key light';
  scene.add(object3d);

  object3d = new THREE.DirectionalLight('white', 0.55);
  object3d.position.set(9, 9, 6);
  object3d.name = 'Fill light';
  scene.add(object3d);

  var spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set( 3, 30, 3 );
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 2048;
  spotLight.shadow.mapSize.height = 2048;
  spotLight.shadow.camera.near = 1;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 45;
  scene.add( spotLight );
}
