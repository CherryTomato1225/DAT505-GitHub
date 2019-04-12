var renderer, scene, camera;
var controls;
var objects = [];
var randomRotX=[];
var randomRotY=[];
//var randomcolor=[];

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
  for (var x = -10; x <= 10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
    for (var y = 10; y <=10; y += 5) {
      for (var z = -10; z <=10; z += 5) {
      var boxGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);//？
      //var boxMaterial = new THREE.MeshLambertMaterial({color:  0xFFFFFF});

      var boxMaterial = new THREE.MeshLambertMaterial({color:0xFFFFFF});
      //var boxMaterial2 = new THREE.MeshLambertMaterial({color:0xFF0000});
    //  var boxMaterial3 = new THREE.MeshLambertMaterial({color:0x6600FF});
      /*if (x==-5 && y==-5) {
           boxMaterial = new THREE.MeshLambertMaterial({color: 0x6600F});
        }else if (x==0 && y==0) {
         boxMaterial = new THREE.MeshLambertMaterial({color: 0xFF0000});
      }else {
       boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
     }*/

      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.z = y;
      mesh.rotation.x = Math.random() * 200 - 100;
      mesh.rotation.y = Math.random() * 200 - 100;
      mesh.rotation.z = Math.random() * 200 - 100;

      var randomValueX=Math.random() * 0.1-0.05;
      var randomValueY=Math.random() * 0.1-0.05;

      randomRotX.push(randomValueX);
      randomRotY.push(randomValueY);
      objects.push( mesh );
      scene.add(mesh);

  }
}
}
    document.body.appendChild(renderer.domElement);
}

 console.log(objects);
 var cubescale=-2;

function drawFrame(){
  requestAnimationFrame(drawFrame);
  //objects[6].rotation.x+=randomRotX[6];
  //objects[12].rotation.x+=randomRotX[12];
  for(var i=0;i<5;i++){
    objects[i].material=new THREE.MeshLambertMaterial({color:0xFF0099});
  }
  objects[9].material=new THREE.MeshLambertMaterial({color:0x990099});
  objects[14].material=new THREE.MeshLambertMaterial({color:0x990099});
  objects[19].material=new THREE.MeshLambertMaterial({color:0x990099});
  objects[24].material=new THREE.MeshLambertMaterial({color:0x990099});

  for(var i=20;i<24;i++){
    objects[i].material=new THREE.MeshLambertMaterial({color:0x3300CC});
  }
  objects[5].material=new THREE.MeshLambertMaterial({color:0x33FFCC});
  objects[10].material=new THREE.MeshLambertMaterial({color:0x33FFCC});
  objects[15].material=new THREE.MeshLambertMaterial({color:0x33FFCC});

  for(var i=6;i<9;i++){
    objects[i].material=new THREE.MeshLambertMaterial({color:0x99FF00});
  }
  objects[13].material=new THREE.MeshLambertMaterial({color:0xFFFF00});
  objects[18].material=new THREE.MeshLambertMaterial({color:0xFFFF00});

  objects[16].material=new THREE.MeshLambertMaterial({color:0xFF9933});
  objects[17].material=new THREE.MeshLambertMaterial({color:0xFF9933});

  objects[11].material=new THREE.MeshLambertMaterial({color:0x99FFFF});

  cubescale+=0.03;
  if(cubescale>2){
     cubescale=-2;
  }

    objects.forEach(function(c,i){
    c.scale.x=cubescale;
    c.scale.y=cubescale;
    c.scale.z=cubescale;
    c.rotation.x+=0.03;
    c.position.y=0.01;
    //c.position.y=Math.random();
  });
  renderer.render(scene, camera);
}

init();
drawFrame();
//animate();
//render();
