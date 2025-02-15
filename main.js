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
const geometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
const plane = new THREE.Mesh(geometry, planeMaterial); // Fixed PlaneGeometry to geometry
plane.rotation.x = -Math.PI / 2;
scene.add(plane); // Fixed scene.add([plane]) to scene.add(plane)

//cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.y = 0.5;
scene.add(cube);


// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7.5);
scene.add(light);

// camera.position.z = 5;

//camera POS
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

//controls
var keys = {};
document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
});
document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

function moveCube() {
    const speed = 0.1;
    if (keys['w']) cube.position.z -= speed;
    if (keys['s']) cube.position.z += speed;
    if (keys['a']) cube.position.x -= speed;
    if (keys['d']) cube.position.x += speed;
}

//animation loop
function animate() {
    requestAnimationFrame(animate);
    moveCube();
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix(); // Fixed updateProjectMatrix to updateProjectionMatrix
    renderer.setSize(window.innerWidth, window.innerHeight);
});