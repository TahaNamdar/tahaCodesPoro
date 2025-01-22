"use client";

import React, { FC, useEffect, useRef } from "react";
import * as THREE from "three";
import image from "@/public/beat.jpg";

interface IPanoramaViewer {
  children: React.ReactNode;
}

const PanoramaViewer: FC<IPanoramaViewer> = ({ children }: IPanoramaViewer) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scene: THREE.Scene | undefined;
    let camera: THREE.PerspectiveCamera | undefined;
    let renderer: THREE.WebGLRenderer | undefined;
    let sphere: THREE.Mesh | undefined;

    const init = async () => {
      if (!containerRef.current) return;

      // Initialize the scene, camera, and renderer
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Load the panoramic image and create a texture
      const loader = new THREE.TextureLoader();
      const texture = loader.load(image.src);

      // Create a spherical geometry and map the texture to it
      const geometry = new THREE.SphereGeometry(300, 60, 40); // Smaller sphere
      geometry.scale(-1, 1, 1); // Flip the geometry inside out

      const material = new THREE.MeshBasicMaterial({ map: texture });
      sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      // Set up the camera position
      camera.position.set(0, 0, 0.1);

      // Handle window resize
      const onWindowResize = () => {
        if (camera && renderer) {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        }
      };

      window.addEventListener("resize", onWindowResize);

      // Cleanup function
      return () => {
        window.removeEventListener("resize", onWindowResize);
        if (renderer) {
          renderer.dispose();
          containerRef.current?.removeChild(renderer.domElement);
        }
      };
    };

    const animate = () => {
      const rotationSpeed = 0.00005;
      let lastTime = 0;

      const loop = (time: number) => {
        const delta = time - lastTime;
        lastTime = time;

        if (sphere) {
          sphere.rotation.y += rotationSpeed * delta;
        }

        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }

        requestAnimationFrame(loop);
      };

      loop(0);
    };

    // Initialize and start animation
    init().then(animate);

    // Cleanup on unmount
    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div id="container" ref={containerRef} className="relative ">
      <div className="absolute top-0 left-0">{children}</div>
    </div>
  );
};

export default PanoramaViewer;
