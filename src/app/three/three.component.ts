import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(500, 300);
    document.body.appendChild(renderer.domElement);

    const loader = new GLTFLoader();

    loader.load(
      'assets/objects/signs/shapes_sp.glb',
      (gltf) => {
        scene.add(gltf.scene);
      },
      (err) => {
        console.log(err);
      }
    );

    const light = new THREE.AmbientLight(0xffffff); // soft white light
    scene.add(light);

    //var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //var cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);

    camera.position.z = 45;

    var animate = function () {
      requestAnimationFrame(animate);

      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
}
