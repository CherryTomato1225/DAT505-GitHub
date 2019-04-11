//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Create different Mesh with same basic material ---------

  //cube
  geometry1 = new THREE.BoxGeometry(100, 100, 100);

  //sphere
  geometry2 = new THREE.SphereGeometry(80,18,12);

 //shape
  rectShape= new THREE.Shape();
    rectShape.moveTo(0,0);
    rectShape.lineTo(-50, 100);
    rectShape.lineTo(50, 100);
  geometry3 = new THREE.ShapeGeometry( rectShape );

 //tetrahedron
  geometry4 = new THREE.TetrahedronGeometry(80);

 //Icosahedron
  geometry5 = new THREE.IcosahedronGeometry(80);

//Octahedron
  //geometry6 = new THREE.OctahedronGeometry(80);

  material = new THREE.MeshBasicMaterial( { color: "#FF00FF" } );

  mesh1 = new THREE.Mesh( geometry1, material );
  mesh1.position.z = -1000;
  mesh1.position.x = -400;

  mesh2 = new THREE.Mesh( geometry2, material );
  mesh2.position.z = -1000;
  mesh2.position.x = -200;

  mesh3 = new THREE.Mesh( geometry3, material );
  mesh3.position.z = -1000;
  mesh3.position.x = 0;

  mesh4 = new THREE.Mesh( geometry4, material );
  mesh4.position.z = -1000;
  mesh4.position.x = 200;

  mesh5 = new THREE.Mesh( geometry5, material );
  mesh5.position.z = -1000;
  mesh5.position.x = 400;
  // Add mesh to scene
  scene.add( mesh1 );
  scene.add( mesh2 );
  scene.add( mesh3 );
  scene.add( mesh4 );
  scene.add( mesh5 );
}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.01; //Continuously rotate the mesh
  mesh1.rotation.y += 0.01;

  mesh2.rotation.x += 0.01;
  mesh2.rotation.y += 0.01;

  mesh3.rotation.x += 0.01;
  mesh3.rotation.y += 0.01;

  mesh4.rotation.x += 0.01;
  mesh4.rotation.y += 0.01;

  mesh5.rotation.x += 0.01;
  mesh5.rotation.y += 0.01;

  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
