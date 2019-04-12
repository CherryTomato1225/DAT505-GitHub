THREE.OBJLoader
===
Create a loader variable to import the model
`var loader = new THREE.OBJLoader();`

First, The code below represents the model path.Second, it represents the callback function after the import, in which we generally need to add the imported model to the scene.
```
loader.load('libs/port.obj', function(obj) {
                    obj.traverse(function(child) {
                        if (child instanceof THREE.Mesh) {
                            child.material.side = THREE.DoubleSide;
                        }
                    });

                    mesh = obj;// stored in a global variable
                    scene.add(obj);// add the imported model to the scene
                });

```

three.audio
===

The Three conditions for using three. audio
---

### Audio

```
// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sounds/ambient.ogg', function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop( true );
    sound.setVolume( 0.5 );
    sound.play();
});

```

### AudioAnalyser
```
// create an AudioAnalyser, passing in the sound and desired fftSize
var analyser = new THREE.AudioAnalyser( sound, 32 );

// get the average frequency of the sound
var data = analyser.getAverageFrequency();

```
### AudioListener
```
// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
var sound = new THREE.Audio( listener );

```
