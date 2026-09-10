import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function VietnamFlag3D({ className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 220;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0.2, 0.1, 4.8);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfffaed, 1.4);
    dirLight.position.set(-2, 3, 4);
    scene.add(dirLight);

    const goldPointLight = new THREE.PointLight(0xf59e0b, 1.6, 10);
    goldPointLight.position.set(1.5, 0.5, 2.5);
    scene.add(goldPointLight);

    // Flag dimensions (Vietnam flag ratio is 2:3) - Enlarged and Centered
    const flagWidth = 4.5;
    const flagHeight = 3.0;
    const segmentsX = 60;
    const segmentsY = 40;

    // Plane geometry
    const geometry = new THREE.PlaneGeometry(flagWidth, flagHeight, segmentsX, segmentsY);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/assets/co_viet_nam.png');
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = true;

    // Material with cloth-like reflection and atmospheric depth
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      side: THREE.DoubleSide,
      roughness: 0.55,
      metalness: 0.05,
      transparent: true,
      opacity: 0.96,
    });

    const flagMesh = new THREE.Mesh(geometry, material);
    scene.add(flagMesh);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const posAttribute = geometry.attributes.position;
    // Store original x, y coordinates
    const initialPositions = posAttribute.array.slice();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const count = posAttribute.count;

      for (let i = 0; i < count; i++) {
        const u = initialPositions[i * 3];     // X coordinate (-flagWidth/2 to +flagWidth/2)
        const v = initialPositions[i * 3 + 1]; // Y coordinate (-flagHeight/2 to +flagHeight/2)

        // Free-floating undulating cloth waves without pole
        const wave1 = Math.sin(u * 1.8 - elapsedTime * 3.4) * 0.35;
        const wave2 = Math.cos(v * 2.2 + u * 1.1 - elapsedTime * 3.8) * 0.18;
        const wave3 = Math.sin((u + v) * 3.5 - elapsedTime * 4.6) * 0.08;

        // Soft edge dampening so center undulates richly
        posAttribute.setZ(i, wave1 + wave2 + wave3);

        // Gentle breathing Y motion
        const yOffset = Math.sin(u * 1.2 - elapsedTime * 2.2) * 0.06;
        posAttribute.setY(i, v + yOffset);
      }

      posAttribute.needsUpdate = true;
      geometry.computeVertexNormals();

      // Subtle dynamic perspective camera drift
      camera.position.x = 0.1 + Math.sin(elapsedTime * 0.3) * 0.15;
      camera.position.y = 0.05 + Math.cos(elapsedTime * 0.35) * 0.08;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w && h) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none select-none ${className}`}
      style={{ minHeight: '260px' }}
    />
  );
}
