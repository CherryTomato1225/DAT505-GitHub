var renderer, scene, camera;
var controls;
var objects = [];
var container, stats;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(30, W / H, .1, 1000);
  camera.position.set(0, 55, 80);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;
  controls=new THREE.OrbitControls(camera,renderer.domElement);
  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -60; x <= 60; x += 5) { // Start from -45 and sequentially add one every 5 pixels
    for (var y = -45; y < 45; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);//？
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.y = y;
      mesh.rotation.x = Math.random() * 200 - 100;
      mesh.rotation.y = Math.random() * 200 - 100;
      mesh.rotation.z = Math.random() * 200 - 100;
      /*for (var z = -9; z <10; z += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 6, 3);
      //The color of the material is assigned a random color
      //var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.y = y;
      mesh.position.z = z;
      mesh.scale.y = 0.5;
      if (x>=0&&y>=0&&z>=0) {
          var boxMaterial = new THREE.MeshLambertMaterial({color: '#3931d2'});
        }else if (x>=0&&y>=0&&z<0) {
          var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFF66FF});
        }else if (x>=0&&y<0&&z>=0) {
          var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
        }else if (x>=0&&y<0&&z<0) {
          var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
       }else if (x<0&&y>=0&&z>=0) {
         var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFF5FFF});
       }else if (x<0&&y>=0&&z<0) {
          var boxMaterial = new THREE.MeshLambertMaterial({color: 0xF66FFF});
        }else if (x<0&&y>=0&&z>=0) {
          var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
        }else {
          var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
        }*/

      objects.push( mesh );
      scene.add(mesh);

  }
}
   //stats = new Stats();
   //container.appendChild( stats.dom );
    document.body.appendChild(renderer.domElement);
}

  /*  function render() {
				var timer = 0.0001 * Date.now();
				for ( var i = 0, l = objects.length; i < l; i ++ ) {
					var object = objects[ i ];
					object.rotation.x += 0.01;
					object.rotation.y += 0.005;
				}
      }

    function animate() {
				requestAnimationFrame( animate );
  			render();
        //stats.update();
      }*/


function drawFrame(){
  requestAnimationFrame(drawFrame);
  renderer.render(scene, camera);
}

init();
drawFrame();
//animate();
//render();
