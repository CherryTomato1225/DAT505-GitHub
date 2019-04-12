// MatCap-style image rendered on a sphere
// modify sphere UVs instead of using a ShaderMaterial

var camera, scene, renderer;
var image;
var mouseX = 0, mouseY = 0;
var container, stats;

var eyes=[];

var windowHalfX=[];
var windowHalfY=[];
//var windowHalfX = window.innerWidth / 2;
//var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 0, 0, 150 );
  scene.add( camera ); // since light is child of camera

	scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );

	var material = new THREE.MeshPhongMaterial( {
		color: 0xffffff,
		specular: 0x050505,
		shininess: 50,
		map: THREE.ImageUtils.loadTexture('images/eye.png'),
	});

	var geometry = new THREE.SphereGeometry( 30, 32, 16 );
	var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
	for ( i = 0; i < faceVertexUvs.length; i ++ ) {
		var uvs = faceVertexUvs[ i ];
		var face = geometry.faces[ i ];
		for ( var j = 0; j < 3; j ++ ) {
			uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
			uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
		}
	}

for(var i=0;i<15;i++){
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.x=Math.random() * 300 -150;
	mesh.position.y=Math.random() * 200- 100;
	mesh.position.z=Math.random() *600-600;

	var windowHalfXVaule = (mesh.position.x+window.innerWidth/2);
	var windowHalfYValue = (-mesh.position.y-window.innerWidth/2);

  console.log(windowHalfYValue);

	scene.add( mesh );
	eyes.push(mesh);

	//mouseX.push(0);
	//mouseY.push(0);

	windowHalfX.push(windowHalfXVaule);
	windowHalfY.push(windowHalfYValue);
}

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	//console.log(window.innerHeight)
	renderer.render( scene, camera );
}

function onWindowResize() {
  //windowHalfX = window.innerWidth / 2;
  //windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
	for (i=0;i<15;i++){
  //mouseX[i]= event.clientX - windowHalfX[i];
  //mouseY[i]= event.clientY - windowHalfY[i];

	//eyes[i].rotation.x = (event.clientY - windowHalfY[i])/1600;
	//eyes[i].rotation.y = (event.clientX- windowHalfX[i])/1600;
	eyes[i].rotation.x = (event.clientY - windowHalfY[i])/300;
	//eyes[1].rotation.x = (event.clientY - windowHalfY[1])/200;
	eyes[i].rotation.y = (-event.clientX + windowHalfX[i])/300;
	//eyes[1].rotation.y = (event.clientX - windowHalfX[1])/200;
}
//  var mouseYValue= event.clientY - windowHalfY;

	//mouseX.push(mouseXValue);
	//mouseY.push(mouseYValue);
	//console.log("0"+eyes[0].rotation.x );
	//console.log("1"+eyes[1].rotation.x );
}
