import * as THREE from 'three';
import CANNON from 'cannon';
import * as electron from "electron";
import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

document.body.style.margin = 0;
window.addEventListener('resize', onWindowResize, false);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

let reactRoot = document.createElement("div");
reactRoot.id = "root";
reactRoot.style.position = "fixed";
reactRoot.style.display = "block";
reactRoot.style.width = "100px";
reactRoot.style.top = "10vh";
reactRoot.style.left = "10vw";
reactRoot.style["z-index"] = 1;
reactRoot.style["background-color"] = "rgba(255,255,255, .8)";
document.body.appendChild(reactRoot);

ReactDOM.render( <div> Hello, world! </div>,
    document.getElementById('root')
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({
    color: 0x00ff00
});
//var cube = new THREE.Mesh(geometry, material);
//scene.add(cube);
var geometry = new THREE.TorusKnotGeometry( .5, .2, 50, 11);
var torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );
var light = new THREE.PointLight( 0xffffff);
light.position.set( 50, 50, 50 );
scene.add( light );
camera.position.z = 5;

var animate = function () {
    requestAnimationFrame(animate);

    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();