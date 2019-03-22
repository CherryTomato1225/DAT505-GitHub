//Setup the global variables
var camera, scene, renderer, geometry, material, mesh;
var texture;
var cubesNum=10;

var cubes=[];
var cubespeed=[];

function init() {
	// Create a scene
	scene = new THREE.Scene();

	// Create a geometry
	// 	Create a box (cube) of 10 width, length, and height
	geometry = new THREE.BoxGeometry( 10, 10, 10 );

   for(let i=0;i<cubesNum;i++){
		 let randomValue=Math.random()*0.5;
		 cubespeed.push(randomValue);

     texture = new THREE.TextureLoader().load( "texture"+Math.floor(Math.random()*3+1)+".jpg" );

		 material = new THREE.MeshBasicMaterial( { map: texture} );

		 mesh = new THREE.Mesh( geometry, material );
		 mesh.position.y=30;
		 mesh.position.x=Math.random() * 20 - 10;
		 mesh.position.z=Math.random() * 20 - 10;
		 mesh.scale.x=Math.random() ;
		 mesh.scale.y=Math.random() ;
		 mesh.scale.z=Math.random() ;

     scene.add( mesh );
		 cubes.push(mesh);
	 }


	// Create a camera
	// 	Set a Field of View (FOV) of 75 degrees
	// 	Set an Apsect Ratio of the inner width divided by the inner height of the window
	//	Set the 'Near' distance at which the camera will start rendering scene objects to 2
	//	Set the 'Far' (draw distance) at which objects will not be rendered to 1000
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 2, 1000 );
	// Move the camera 'out' by 30
	camera.position.z = 30;

	// Create a WebGL Rendered
	renderer = new THREE.WebGLRenderer();
	// Set the size of the rendered to the inner width and inner height of the window
	renderer.setSize( window.innerWidth, window.innerHeight );

	// Add in the created DOM element to the body of the document
	document.body.appendChild( renderer.domElement );
}


function animate() {
	requestAnimationFrame( animate );
	// Call the requestAnimationFrame function on the animate function
	// 	(thus creating an infinite loop)
	cubes.forEach(function(c,i){
		c.rotation.x+= 0.02;
	  c.rotation.y += 0.01;

		if (c.position.y <- 60){
 		 c.position.y = 35;
  }

});

	for(var i=0;i<10;i++){

	cubes[i].position.y -=cubespeed[i];
}

	// Render everything using the created renderer, scene, and camera
	renderer.render( scene, camera );
}

init();
animate();
