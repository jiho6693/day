import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import { GLTFLoader } from 'GLTFLoader';
import { BackSide } from 'three';
// import { DirectionalLight } from 'three';
// import { OBJLoader } from 'OBJLoader';



const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();



//장면추가
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000); 

const modelContainer = new THREE.Group();
scene.add(modelContainer);


//카메라
//const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const fov = 70;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1  ;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = -2.0;
camera.position.x = -3;
camera.position.y = 0;
camera.lookAt(new THREE.Vector3(0,0,0));

//렌더러
const renderer = new THREE.WebGLRenderer({
  alpha : true,
  antialias : true
});
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 1;
			camera.position.y = -50;

			camera.rotation.x = 1.16;
			camera.rotation.y = 10.12;
			camera.rotation.z = 0.27;


//orbit추가 카메라 이후에 등장
const controls = new OrbitControls(camera, renderer.domElement);
	controls.update();
	controls.maxPolarAngle = 5
  controls.enableDamping = true;
  controls.update();
   
			


	 const skyMaterialArray = []
      const texture_ft = new THREE.TextureLoader().load('./ex-12/posx.jpg')
      const texture_bk = new THREE.TextureLoader().load('./ex-12/negx.jpg') //
      const texture_up = new THREE.TextureLoader().load('./ex-12/posy.jpg') //
      const texture_dn = new THREE.TextureLoader().load('./ex-12/negy.jpg') //
      const texture_rt = new THREE.TextureLoader().load('./ex-12/posz.jpg') //
      const texture_lf = new THREE.TextureLoader().load('./ex-12/negz.jpg')

      skyMaterialArray.push(
        new THREE.MeshStandardMaterial({
          map: texture_ft,
        })
      )
      skyMaterialArray.push(
        new THREE.MeshStandardMaterial({
          map: texture_bk,
        })
      )
      skyMaterialArray.push(
        new THREE.MeshStandardMaterial({
          map: texture_up,
        })
      )
      skyMaterialArray.push(
        new THREE.MeshStandardMaterial({
          map: texture_dn,
        })
      )
      skyMaterialArray.push(
        new THREE.MeshStandardMaterial({
          map: texture_rt,
        })
      )
      skyMaterialArray.push(
        new THREE.MeshStandardMaterial({
          map: texture_lf,
        })
      )

      // 반복문
      for (let i = 0; i < 6; i++){
        skyMaterialArray[i].side = THREE.BackSide
      }

      const skyGeometry = new THREE.BoxGeometry( 1000,1000,1000 );
			// const skyMaterial = new THREE.MeshBasicMaterial( { color: 0x333333 } );
			const cube = new THREE.Mesh( skyGeometry, skyMaterialArray );
	
			
			
// const texture = new THREE.TextureLoader().load( './ex-12/grass.jpeg' );
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set( 4, 4 );

// const geometry = new THREE.PlaneGeometry( 1, 1 );
// const material03 = new THREE.MeshBasicMaterial( {
// 	 map: texture,

// 	} );
// const plane = new THREE.Mesh( geometry, material03 );
// plane.scale.set(2000, 2000, 2000); 
// plane.position.set(0.0, -1.5, 0.0); 
// plane.rotation.x = Math.PI / 2;
// plane.rotation.y = Math.PI / 2;
// scene.add( plane );



// //obj
// const loader01 = new GLTFLoader();
// // // load a resource
// loader01.load(
// 	// resource URL
// 	'source/Rock1.glb',
// 	// called when the resource is loaded
// 	function ( gltf ) {
    
//     gltf.scene.scale.set(0.3, 0.2, 0.5); 
//     gltf.scene.position.y= -0.7
//     gltf.scene.position.z= 0.4
//     gltf.scene.position.x= -0.8
// 	gltf.scene.rotation.z = Math.PI / 2;
//     gltf.scene.traverse( function ( child ){
//       child.castShadow = true;
//       child.receiveShadow = true;
// 	  child.userData.link = "1";
//      });
// 		scene.add( gltf.scene );

// 		gltf.animations; // Array<THREE.AnimationClip>
// 		gltf.scene; // THREE.Group
// 		gltf.scenes; // Array<THREE.Group>
// 		gltf.cameras; // Array<THREE.Camera>
// 		gltf.asset; // Object

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

// const loader1 = new GLTFLoader();
// // // load a resource
// loader1.load(
// 	// resource URL
// 	'source/4_6scafolding.glb',
// 	// called when the resource is loaded
// 	function ( sca ) {
//     sca.scene.scale.set(10, 10, 10); 
    
//     sca.scene.position.y= -10;
//     sca.scene.position.z= 1.1
//     sca.scene.position.x= -1
//     sca.scene.traverse( function ( child ){
//       child.castShadow = true;
//       child.receiveShadow = true;
// 	  child.userData.link = '1';
//      });
// 		scene.add( sca.scene );

// 		sca.animations; // Array<THREE.AnimationClip>
// 		sca.scene; // THREE.Group
// 		sca.scenes; // Array<THREE.Group>
// 		sca.cameras; // Array<THREE.Camera>
// 		sca.asset; // Object

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

// const loader3 = new GLTFLoader();
// // // load a resource
// loader3.load(
// 	// resource URL
// 	'source/goodby.glb',
// 	// called when the resource is loaded
// 	function ( sca ) {
//     sca.scene.scale.set(5, 5, 5); 
    
//     sca.scene.position.y= 1;
//     sca.scene.position.z= 0;
//     sca.scene.position.x= 10
//     sca.scene.traverse( function ( child ){
//       child.castShadow = true;
//       child.receiveShadow = true;
// 	  child.userData.link = '1';
//      });
// 		scene.add( sca.scene );

// 		sca.animations; // Array<THREE.AnimationClip>
// 		sca.scene; // THREE.Group
// 		sca.scenes; // Array<THREE.Group>
// 		sca.cameras; // Array<THREE.Camera>
// 		sca.asset; // Object

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

// const loader4 = new GLTFLoader();
// // // load a resource
// loader4.load(
// 	// resource URL
// 	'source/seoul.gltf',
// 	// called when the resource is loaded
// 	function ( sca ) {
//     sca.scene.scale.set(1, 1, 1); 
    
//     sca.scene.position.y= 1;
//     sca.scene.position.z= 0;
//     sca.scene.position.x= 10
//     sca.scene.traverse( function ( child ){
//       child.castShadow = true;
//       child.receiveShadow = true;
// 	  child.userData.link = '1';
//      });
// 		scene.add( sca.scene );

// 		sca.animations; // Array<THREE.AnimationClip>
// 		sca.scene; // THREE.Group
// 		sca.scenes; // Array<THREE.Group>
// 		sca.cameras; // Array<THREE.Camera>
// 		sca.asset; // Object

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

// // const loader2 = new GLTFLoader();
// // // // load a resource
// // loader2.load(
// // 	// resource URL
// // 	'source/house.glb',
// // 	// called when the resource is loaded
// // 	function ( sca ) {
// //     sca.scene.scale.set(0.01, 0.01, 0.01); 
// //     sca.scene.position.y= -1.58;
// //     sca.scene.position.z= 4;
// //     sca.scene.position.x= -5;
// //     sca.scene.traverse( function ( child ){
// //       child.castShadow = true;
// //       child.receiveShadow = true;
// // 	  child.userData.link = '1';
// //      });
// // 		scene.add( sca.scene );

// // 		sca.animations; // Array<THREE.AnimationClip>
// // 		sca.scene; // THREE.Group
// // 		sca.scenes; // Array<THREE.Group>
// // 		sca.cameras; // Array<THREE.Camera>
// // 		sca.asset; // Object

// // 	},
// // 	// called while loading is progressing
// // 	function ( xhr ) {

// // 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// // 	},
// // 	// called when loading has errors
// // 	function ( error ) {

// // 		console.log( 'An error happened' );

// // 	}
// // );


//빛
const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
      scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xFEF9E7 , 2);
//   directionalLight.position.set(-9, 0 , 2);
// //   const dlHelper = new THREE.DirectionalLightHelper
// //   (directionalLight, 0.2, 0x0000ff);
// //   scene.add(dlHelper);
//   scene.add(directionalLight);
//   directionalLight.castShadow = true; // 그림자 0
//   directionalLight.shadow.mapSize.width = 1024;
//   directionalLight.shadow.mapSize.height  = 1024;
//   directionalLight.shadow.radius = 1
//   directionalLight.shadow.bias = -0.0005;

// const light = new THREE.AmbientLight( 0x404040, 0.5); // soft white light
// scene.add( light );

// //fog
// {
//   const color = 0xFFFFFF;
//   const density = 0.2;
//   scene.fog = new THREE.FogExp2(color, density);
// }

//rain drop
function addRain() {
	// raindrop geometry and material
	var rainDropGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
	var rainDropMaterial = new THREE.MeshBasicMaterial({
	  color: 0xAAAAAA,
	  transparent: true,
	  opacity: 0.5,
	});
  
	// add raindrops to scene
	for (var i = 0; i < 100; i++) {
	  var rainDrop = new THREE.Mesh(rainDropGeometry, rainDropMaterial);
	  rainDrop.position.set(
		Math.random() * 200 - 100,
		Math.random() * 200 - 100,
		Math.random() * 200 - 100
	  );
	  scene.add(rainDrop);
	}
  }

  addRain();







//mouse

function changeCursor(event) {
	if (event.target === renderer.domElement) {
	  renderer.domElement.style.cursor = 'pointer';
	} else {
	  renderer.domElement.style.cursor = 'default';
	}
  }
  renderer.domElement.addEventListener('mousemove', function(event) {
	var raycaster = new THREE.Raycaster();
	pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
	pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
	raycaster.setFromCamera(pointer, camera);
	var intersects = raycaster.intersectObjects(scene.children);
	if (intersects.length > 0) {
	  changeCursor(event);
	} else {
	  changeCursor(event);
	}
  });




  

  
  	


// Add an event listener for mousedown and touchstart events
function onMouseClick( event) {
    // Calculate mouse position
	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    
    // Set raycaster
    raycaster.setFromCamera( pointer, camera );

    // Check for intersections
    var intersects = raycaster.intersectObjects( scene.children );

    // If an intersection is found, redirect to the desired URL

	//one
	if ( intersects.length > 0 ) {
		const { link } = intersects[0].object.userData;
		if (link === '1'){
	    }
		// else {
		// window.location.href = link, '_blank';
	    // }
    }

}


window.addEventListener( 'pointerdown', onMouseClick, false );	 
	



 
  function onWindowResize(){
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

//weather
//rain
const starGeo = new THREE.BufferGeometry ()
            const vertices = [];
            for (let i = 0; i < 15000; i++) {
            const x = Math.random() * 400 - 300;
            const y = Math.random() * 500 - 250;
            const z = Math.random() * 400 - 200;
            vertices.push(x, y, z);
            }
            starGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            let starMaterial = new THREE.PointsMaterial({
                color:0xaaaaaa,
                size:0.1,
                transparent: true
            })
            const stars = new THREE.Points(starGeo,starMaterial)
            
//fog
const fogcolor = 0xFFFFFF;
const fogdensity = 0.0;


 scene.add( cube );
    

  function animate() {
	const positions = starGeo.attributes.position.array;
	for (let i = 1; i < positions.length; i += 3) {
		if (positions[i] < -200) {
		positions[i] = 200;
		}
		positions[i] -= 3;
	}
	starGeo.attributes.position.needsUpdate = true;
	stars.rotation.y +=0.002;
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
  }


function render(time) {
time *= 0.00009;  // convert time to seconds  
directionalLight.position.y = Math.cos( time ) * 3.75 + 1.25;

renderer.render(scene, camera);

requestAnimationFrame(render);
}
requestAnimationFrame(render);

// 반응형 처리


animate();
onWindowResize();


