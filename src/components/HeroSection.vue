<script setup>
import {onMounted} from "vue";

// TODO: handle webgl compat
import * as THREE from 'three';
import {GLTFLoader} from "three/addons";
import {OrbitControls} from "three/addons";

onMounted(() => {
  // const cssIsStupid = document.getElementById('fakeScrollDiv');
  // cssIsStupid.style.height = `${window.innerHeight}px`;
  // cssIsStupid.style.width = `${window.innerWidth}px`;

  const heroText = document.querySelector('.heroText');
  const heroTextRect = heroText.getBoundingClientRect();
  console.log(heroTextRect)
  heroText.style.top = `${(window.innerHeight / 2)-(heroTextRect.height/2)}px`;
  heroText.style.left = `${(window.innerWidth / 2)-(heroTextRect.width/2)}px`;
  console.log(heroText.style.top, heroText.style.left)



  const mainCanvas = document.getElementById('heroCanvas');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({canvas: mainCanvas});

  const debug = false;
  if (debug) {
    const controls = new OrbitControls(camera, renderer.domElement);
  }
  let mainModel;

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  scene.background = new THREE.Color(0xafeeee);
  //init POS at {"x": 2.1991834294317485,"y": 3.568469483626246,"z": 10.304884681638285}
  camera.position.set(2.279317794493362, 4.644799604731107, 9.87394075964819);
  // init LOOKAT at {"x": 0.008671504387951858, "y": -0.1341224260109513,"z": -0.9909268287076433}
  camera.lookAt(86.72, -1341.22, -9909.26);

  const loader = new GLTFLoader();
  loader.load('tree.glb',
      (model) => {
        scene.add(model.scene);
        mainModel = model;
        mainModel.scene.scale.set(100, 100, 100);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (e) => {
        console.error("err", e);
      });

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  scene.add(directionalLight);

  renderer.setAnimationLoop(animate);

  function animate() {
    if (debug) {
      controls.update();
    }
    renderer.render(scene, camera);
  }

  if (debug) {
    window.addEventListener('mousemove', (e) => {
      const lookat = new THREE.Vector3();
      camera.getWorldDirection(lookat)
      console.log(camera.position, lookat);
    });
  }
  window.addEventListener('resize', onWindowResize, false);
  function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // cssIsStupid.style.height = `${window.innerHeight}px`;
    // cssIsStupid.style.width = `${window.innerWidth}px`;

    const heroTextRect = heroText.getBoundingClientRect();
    console.log(heroTextRect)
    heroText.style.top = `${(window.innerHeight / 2)-(heroTextRect.height/2)}px`;
    heroText.style.left = `${(window.innerWidth / 2)-(heroTextRect.width/2)}px`;
    console.log(heroText.style.top, heroText.style.left)
  }
});
</script>

<template>
  <div class="heroComponentContainer">
    <div class="heroContainer">
      <canvas class="heroCanvas" id="heroCanvas"></canvas>
      <div class="heroText">
        <h1>Main Header</h1>
  <!--      elevate ur zen-->
        <p>Sub Header</p>
        <button class="services">See our services</button>
      </div>
    </div>
<!--    <div id="fakeScrollDiv"></div>-->
  </div>

</template>

<style scoped>
.heroComponentContainer{
  width:100%;
  height:100%;
}
.heroContainer{
  width:100%;
  height:100%;
}
.heroCanvas{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: relative;
}

.heroText{
  position: absolute; /*why isn't this in the middle*/
  top: 50%;
  left: 50%;
  text-align: center;
  font: 2em 'notoSans', sans-serif;
  color: #ffffff;
}

.services{
  background-color: #000000;
  color: #ffffff;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 0.6em;
}

</style>