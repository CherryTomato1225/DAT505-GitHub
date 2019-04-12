var renderer, scene, camera;
var controls;
var cubes = [];

function init() {

  console.log("Init Function Starts");

  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(10, 20, 85);//could change the camera's rotations
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 500, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  var ambLight = new THREE.AmbientLight(0xFFFFFF);
  ambLight.position.set(0, 500, 0);
  ambLight.add(spotLight);
  scene.add(ambLight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);


for (var x = -10; x <= 10; x += 5 ) {// Start from -45 and sequentially add one every 5 pixels
  for (var y = -10; y <= 10; y += 5) {
    var geometry = new THREE.BoxGeometry(3, 3, 3);

 //Concatenation of the x and y values (open Console to see)
    console.log("X:" +x+ ", Y: " +y);

    if (x==-5 && y==5){
       material = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
    } else {
       material = new THREE.MeshLambertMaterial({color:  0xFFFFFF});
}
    var mesh = new THREE.Mesh(geometry, material);

    	mesh.position.x = x;
    	mesh.position.y = y;

      mesh.scale.y = 1;

    	mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;

    scene.add( mesh );
    cubes.push(mesh);
}
}
document.body.appendChild(renderer.domElement);

}

function drawFrame(){
  requestAnimationFrame(drawFrame);

  //forEach takes all the arrary entries and passes the c as the ...
  cubes.forEach(function(c, i){

  cubes[8].rotation.x += 0.5;

});

  renderer.render(scene, camera);
}

init();
drawFrame();
