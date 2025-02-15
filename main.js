// Scene Creation
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000

);

//Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//plane
const geometry = new THREE.PlaneGeometry( 50, 50 );
const planeMaterial = new THREE.MeshStandardMaterial({color : 0x228b22})
const plane = new THREE.Mesh(PlaneGeometry, planeMaterial)
plane.rotation.x = -Math.PI / 2;
scene.add([plane])

//cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({color:0x00ff00})
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
cube.position.y = 0.5
scene.add(cube);

// camera.position.z = 5;



//camera POS
camera.position.set(0,5,10);
camera.lookAt(0,0,0);

//controls
const keys = {};
document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
})


//animation loop
function animate() {
    requestAnimationFrame(animate);
    
    renderer.render(scene, camera);
}
animate();



window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

});