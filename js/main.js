import * as THREE from "../node_modules/three/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js";

// Если вы тоже вертели это все, то раскомментируйте строки

const scene = new THREE.Scene();
const spaceTexture = new THREE.TextureLoader().load("images/peopl.jpg");
scene.background = spaceTexture;

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0);
document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// camera.position.set(10, 10, 5);
// controls.minPolarAngle = Math.PI / 2;
// controls.maxPolarAngle = Math.PI;

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const earthTexture = new THREE.TextureLoader().load("images/ground-texture.jpg");
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(1, 64, 64),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
  })
);
earth.position.z = -5;

scene.add(earth);

function animate() {
  requestAnimationFrame(animate);

  earth.rotation.y += 0.003;
  earth.rotation.x += 0.002;
  earth.rotation.z += 0.002;
  //   controls.update();
  renderer.render(scene, camera);
}
animate();
