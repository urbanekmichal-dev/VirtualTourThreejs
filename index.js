const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(24, window.innerWidth/window.innerHeight,0.1,1000)

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubeGeometry = new THREE.BoxGeometry(1,5,1);

const colorPink = new THREE.Color("hsl(303,100%,50%)")

const cubeMaterial = new THREE.MeshPhongMaterial({
color: colorPink,
shininess:80,

})
const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)

const light = new THREE.PointLight(colorPink,2);

light.position.z=20
light.position.y=-20
light.position.x=-40

camera.position.z=30

cube.rotation.x=20
cube.rotation.y=20
scene.add(light)
scene.add(cube)



renderer.render(scene,camera)