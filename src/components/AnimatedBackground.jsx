import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const AnimatedBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: mountRef.current,
      antialias: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.set(0, 8, 15); // Adjusted camera for better view of the plane
    camera.lookAt(0, 0, 0);

    // --- CONTROLS ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 4;
    controls.maxDistance = 50;
    
    // --- POST-PROCESSING FOR NEON GLOW (BLOOM) ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 1.5;
    bloomPass.radius = 0.5;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- DYNAMIC PARTICLE BACKGROUND (GRID FABRIC) ---
    const gridSize = 150; // Controls density of the fabric
    const particleCount = gridSize * gridSize;
    const positions = new Float32Array(particleCount * 3);
    const geometry = new THREE.BufferGeometry();
    const planeSize = 50; // How large the fabric plane is

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const index = (i * gridSize + j) * 3;
        
        // Position particles in a grid on the XZ plane
        positions[index] = (i / (gridSize - 1) - 0.5) * planeSize; // x
        positions[index + 1] = 0;                                  // y (initial)
        positions[index + 2] = (j / (gridSize - 1) - 0.5) * planeSize; // z
      }
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.04, // Made particles smaller
      color: 0x888888 // This will now be the initial color
    });

    const particles = new THREE.Points(geometry, material);
    particles.rotation.x = -Math.PI / 8; // Tilt the plane slightly for a better view
    scene.add(particles);

    // --- LOAD 3D DRAGON MODEL ---
    const loader = new GLTFLoader();
    let dragonModel = null;
    const neonMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: 0x00bfff,
      metalness: 0.1,
      roughness: 0.5,
    });

    loader.load(
      'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models@master/2.0/Dragon/glTF-Binary/Dragon.glb',
      function (gltf) {
        dragonModel = gltf.scene;
        
        dragonModel.traverse((child) => {
          if (child.isMesh) {
            child.material = neonMaterial;
          }
        });

        dragonModel.scale.set(6, 6, 6);
        dragonModel.position.set(0, -2, 0); // Adjusted position to float above the fabric
        scene.add(dragonModel);
      },
      undefined,
      function (error) {
        console.error('An error happened while loading the model:', error);
      }
    );

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    const colorPalette = [
      new THREE.Color("#29D6FF"), // Electric Blue
      new THREE.Color("#00FFFF"), // Cyan
      new THREE.Color("#6A0DAD")  // Deep Purple
    ];
    
    let animationFrameId;
    
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      controls.update();

      // Animate background particles
      const positions = particles.geometry.attributes.position.array;
      for(let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const z = positions[i3 + 2];
        // More complex wave animation using both x and z for a fabric-like ripple
        positions[i3 + 1] = (Math.sin(elapsedTime * 0.5 + x * 0.25) + Math.sin(elapsedTime * 0.3 + z * 0.25)) * 1.2;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      if (dragonModel) {
        // Animate dragon
        dragonModel.rotation.y += 0.003;
        dragonModel.position.y = -2 + Math.sin(elapsedTime * 0.7) * 0.5; // Adjusted hover height

        // Animate dragon color through the specific palette
        const colorSpeed = 0.2;
        const time = elapsedTime * colorSpeed;
        const colorIndex = Math.floor(time) % colorPalette.length;
        const nextColorIndex = (colorIndex + 1) % colorPalette.length;
        const lerpFactor = time - Math.floor(time);
        const currentColor = colorPalette[colorIndex];
        const nextColor = colorPalette[nextColorIndex];
        
        neonMaterial.emissive.copy(currentColor).lerp(nextColor, lerpFactor);

        // Update the fabric color to match the dragon's glow
        material.color.copy(neonMaterial.emissive);
      }

      composer.render();
    }

    // --- RESIZE HANDLER ---
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      // Dispose of Three.js objects to free up memory
      if (renderer) {
        renderer.dispose();
      }
      if (geometry) {
        geometry.dispose();
      }
      if (material) {
        material.dispose();
      }
      if (neonMaterial) {
        neonMaterial.dispose();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <canvas ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default AnimatedBackground;