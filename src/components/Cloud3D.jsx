import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Cloud3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9.6);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    container.appendChild(renderer.domElement);

    // 2. Master DevOps Cloud System Group
    const masterGroup = new THREE.Group();
    masterGroup.position.set(0.3, 0.1, -0.8);
    scene.add(masterGroup);

    // Palette Colors matching User Reference & Midnight Tech:
    // Cyan / Electric Blue for Left Loop & Nodes
    const COLOR_CYAN = 0x22D3EE;
    const COLOR_ELECTRIC = 0x3B82F6;
    const COLOR_DEEP_BLUE = 0x1D4ED8;
    // Amber / Gold / Coral for Right Loop (Release, Deploy, Monitor)
    const COLOR_GOLD = 0xFBBF24;
    const COLOR_AMBER = 0xF59E0B;
    const COLOR_CORAL = 0xFB7185;
    // Purple / Magenta for Cloud Neon Aura
    const COLOR_PURPLE = 0x8B5CF6;
    const COLOR_MAGENTA = 0xEC4899;

    // ============================================================
    // 3. THE 3D DEVOPS INFINITY LOOP (LEMNISCATE)
    // ============================================================
    class DevOpsInfinityCurve extends THREE.Curve {
      constructor(scaleX = 3.4, scaleY = 1.45, depthZ = 0.7) {
        super();
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.depthZ = depthZ;
      }
      getPoint(t, optionalTarget = new THREE.Vector3()) {
        const angle = t * Math.PI * 2;
        // 3D Twisted Lemniscate
        const x = this.scaleX * Math.sin(angle);
        const y = this.scaleY * Math.sin(angle * 2);
        const z = this.depthZ * Math.cos(angle);
        return optionalTarget.set(x, y, z);
      }
    }

    const infinityCurve = new DevOpsInfinityCurve(3.3, 1.4, 0.75);

    // Left Loop (Build / Code / Test): Cyan & Electric Blue Gradient
    // Right Loop (Release / Deploy / Monitor): Gold & Amber Gradient
    // We create custom segmented geometries with vertex colors for seamless 3D gradient flow!
    const tubeSegments = 240;
    const tubeRadius = 0.11;
    const tubeGeo = new THREE.TubeGeometry(infinityCurve, tubeSegments, tubeRadius, 20, true);

    // Color vertices along the tube path based on position
    const pos = tubeGeo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const colorCyan = new THREE.Color(COLOR_CYAN);
    const colorBlue = new THREE.Color(COLOR_ELECTRIC);
    const colorGold = new THREE.Color(COLOR_GOLD);
    const colorAmber = new THREE.Color(COLOR_AMBER);
    const colorPurple = new THREE.Color(COLOR_PURPLE);

    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vy = pos.getY(i);
      let c = new THREE.Color();

      if (vx < -0.3) {
        // Left loop (Code / Build / Test)
        const t = Math.min(1, Math.max(0, (-vx - 0.3) / 3.0));
        c.copy(colorCyan).lerp(colorBlue, t * 0.7);
      } else if (vx > 0.3) {
        // Right loop (Release / Deploy / Monitor)
        const t = Math.min(1, Math.max(0, (vx - 0.3) / 3.0));
        c.copy(colorGold).lerp(colorAmber, t * 0.8);
      } else {
        // Center intersection with cloud
        c.copy(colorPurple);
      }

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    tubeGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const tubeMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.25,
      metalness: 0.85,
      emissive: 0x1E293B,
      emissiveIntensity: 0.3
    });

    const infinityMesh = new THREE.Mesh(tubeGeo, tubeMat);
    masterGroup.add(infinityMesh);

    // Glowing Wireframe Aura around the Infinity Loop
    const wireTubeGeo = new THREE.TubeGeometry(infinityCurve, 120, tubeRadius * 1.35, 8, true);
    const wireTubeMat = new THREE.MeshBasicMaterial({
      color: COLOR_CYAN,
      wireframe: true,
      transparent: true,
      opacity: 0.16
    });
    const wireTubeMesh = new THREE.Mesh(wireTubeGeo, wireTubeMat);
    masterGroup.add(wireTubeMesh);

    // ============================================================
    // 4. THE 3D LUMINOUS CLOUD (INTERWOVEN WITH THE LOOP)
    // ============================================================
    const cloudGroup = new THREE.Group();
    // Positioned at the center nexus where the loops cross
    cloudGroup.position.set(0, 0, 0);
    masterGroup.add(cloudGroup);

    // Layer 1: Stylized 3D Multi-Puff Cloud Body
    const cloudPuffs = [
      // Central core puff
      { x: 0, y: 0.15, z: 0.1, r: 1.15 },
      // Flanking mounds
      { x: -0.9, y: -0.05, z: 0.15, r: 0.95 },
      { x: 0.9, y: -0.05, z: 0.15, r: 0.95 },
      { x: -1.5, y: -0.25, z: 0.05, r: 0.75 },
      { x: 1.5, y: -0.25, z: 0.05, r: 0.75 },
      // Top puffy crests
      { x: -0.45, y: 0.75, z: 0.2, r: 0.85 },
      { x: 0.45, y: 0.85, z: 0.15, r: 0.9 },
      // Depth backers
      { x: -0.5, y: 0.2, z: -0.4, r: 1.0 },
      { x: 0.5, y: 0.15, z: -0.4, r: 1.05 },
      { x: 0.0, y: 0.5, z: -0.3, r: 0.85 },
      // Soft bottom base
      { x: -0.6, y: -0.35, z: 0.2, r: 0.7 },
      { x: 0.6, y: -0.35, z: 0.2, r: 0.7 }
    ];

    // Core Cloud Material: Pearl Cyan / White with Soft Subsurface Lighting
    const cloudCoreMat = new THREE.MeshStandardMaterial({
      color: 0xF8FAFC,
      roughness: 0.2,
      metalness: 0.2,
      emissive: 0x1E3A8A,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.92
    });

    // Cloud Neon Rim Outline Material (Vibrant Purple/Magenta from user's image)
    const cloudRimMat = new THREE.MeshStandardMaterial({
      color: COLOR_MAGENTA,
      emissive: COLOR_PURPLE,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.5,
      transparent: true,
      opacity: 0.85
    });

    const puffMeshes = [];
    cloudPuffs.forEach((cfg, idx) => {
      // 1. Inner soft cloud puff
      const geo = new THREE.SphereGeometry(cfg.r, 22, 22);
      // Soft organic deformation
      const p = geo.attributes.position;
      for (let j = 0; j < p.count; j++) {
        const px = p.getX(j);
        const py = p.getY(j);
        const pz = p.getZ(j);
        const bump = 1 + Math.sin(px * 4 + py * 3) * 0.045;
        p.setXYZ(j, px * bump, py * bump, pz * bump);
      }
      geo.computeVertexNormals();

      const mesh = new THREE.Mesh(geo, cloudCoreMat);
      mesh.position.set(cfg.x, cfg.y, cfg.z);
      mesh.userData = {
        baseX: cfg.x,
        baseY: cfg.y,
        baseZ: cfg.z,
        speed: 0.4 + (idx % 4) * 0.12,
        phase: idx * 0.8
      };
      cloudGroup.add(mesh);
      puffMeshes.push(mesh);

      // 2. Outer luminous contour rim puff (slightly larger & offset backwards for border look)
      if (idx < 7) {
        const rimGeo = new THREE.SphereGeometry(cfg.r * 1.08, 16, 16);
        const rimMesh = new THREE.Mesh(rimGeo, cloudRimMat);
        rimMesh.position.set(cfg.x, cfg.y, cfg.z - 0.12);
        cloudGroup.add(rimMesh);
      }
    });

    // Internal Lighting inside Cloud
    const cloudHeartLight = new THREE.PointLight(COLOR_CYAN, 4.0, 14);
    cloudHeartLight.position.set(0, 0.4, 0.6);
    cloudGroup.add(cloudHeartLight);

    const cloudPurpleLight = new THREE.PointLight(COLOR_MAGENTA, 3.0, 14);
    cloudPurpleLight.position.set(0, -0.2, -0.5);
    cloudGroup.add(cloudPurpleLight);

    // ============================================================
    // 5. DATA PACKETS FLOWING ALONG THE INFINITY LOOP
    // ============================================================
    const packetCount = 20;
    const packets = [];
    const packetGeo = new THREE.SphereGeometry(0.08, 12, 12);

    for (let i = 0; i < packetCount; i++) {
      const isRight = (i >= packetCount / 2);
      const pColor = isRight ? COLOR_GOLD : COLOR_CYAN;
      const pMat = new THREE.MeshBasicMaterial({
        color: pColor,
        transparent: true,
        opacity: 0.95
      });
      const pMesh = new THREE.Mesh(packetGeo, pMat);

      // Small point light for leader packets
      if (i % 5 === 0) {
        const pLight = new THREE.PointLight(pColor, 1.8, 4);
        pMesh.add(pLight);
      }

      masterGroup.add(pMesh);
      packets.push({
        mesh: pMesh,
        offset: i / packetCount,
        speed: 0.08
      });
    }

    // ============================================================
    // 6. GLOBAL NETWORK ARCS & CONNECTED TELEMETRY MATRIX
    // ============================================================
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Glowing network arcs arching across the horizon (as seen in user image)
    const arcCount = 14;
    const arcMat = new THREE.LineBasicMaterial({
      color: COLOR_CYAN,
      transparent: true,
      opacity: 0.2
    });
    const arcGoldMat = new THREE.LineBasicMaterial({
      color: COLOR_GOLD,
      transparent: true,
      opacity: 0.18
    });

    for (let i = 0; i < arcCount; i++) {
      const startX = (Math.random() - 0.5) * 12;
      const startY = -3.2 + Math.random() * 0.8;
      const startZ = -2 + (Math.random() - 0.5) * 3;

      const endX = (Math.random() - 0.5) * 12;
      const endY = -3.2 + Math.random() * 0.8;
      const endZ = -2 + (Math.random() - 0.5) * 3;

      const midX = (startX + endX) * 0.5;
      const midY = 0.5 + Math.random() * 3.5;
      const midZ = (startZ + endZ) * 0.5 + Math.random() * 1.5;

      const arcCurve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(startX, startY, startZ),
        new THREE.Vector3(midX, midY, midZ),
        new THREE.Vector3(endX, endY, endZ)
      );

      const arcPoints = arcCurve.getPoints(50);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
      const arcLine = new THREE.Line(arcGeo, (i % 2 === 0) ? arcMat : arcGoldMat);
      networkGroup.add(arcLine);

      // Endpoint Nodes
      const nodeGeom = new THREE.SphereGeometry(0.05, 8, 8);
      const n1 = new THREE.Mesh(nodeGeom, new THREE.MeshBasicMaterial({ color: COLOR_CYAN }));
      n1.position.copy(arcCurve.v0);
      networkGroup.add(n1);

      const n2 = new THREE.Mesh(nodeGeom, new THREE.MeshBasicMaterial({ color: COLOR_GOLD }));
      n2.position.copy(arcCurve.v2);
      networkGroup.add(n2);
    }

    // Perspective digital ground grid / skyline data nodes in lower distance
    const groundGridGroup = new THREE.Group();
    scene.add(groundGridGroup);

    const pillarCount = 45;
    const pillarGeo = new THREE.BoxGeometry(0.08, 1, 0.08);
    for (let i = 0; i < pillarCount; i++) {
      const h = 0.4 + Math.random() * 1.8;
      const pMat = new THREE.MeshBasicMaterial({
        color: (i % 3 === 0) ? COLOR_ELECTRIC : (i % 3 === 1) ? COLOR_CYAN : 0x1E293B,
        transparent: true,
        opacity: 0.35 + Math.random() * 0.3
      });
      const pillar = new THREE.Mesh(pillarGeo, pMat);
      pillar.scale.set(1, h, 1);
      pillar.position.set(
        (Math.random() - 0.5) * 16,
        -3.5 + h * 0.5,
        -4 + (Math.random() - 0.5) * 4
      );
      groundGridGroup.add(pillar);
    }

    // Floating Stardust Particles
    const starCount = 180;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = (Math.random() - 0.5) * 18;
      starPos[i + 1] = (Math.random() - 0.5) * 12;
      starPos[i + 2] = -4 + (Math.random() - 0.5) * 8;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: COLOR_CYAN,
      size: 0.035,
      transparent: true,
      opacity: 0.5
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // ============================================================
    // 7. LIGHTING SETUP
    // ============================================================
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));

    const leftBlueLight = new THREE.PointLight(COLOR_ELECTRIC, 3.2, 22);
    leftBlueLight.position.set(-4, 2, 4);
    scene.add(leftBlueLight);

    const rightGoldLight = new THREE.PointLight(COLOR_GOLD, 3.2, 22);
    rightGoldLight.position.set(4, -1, 4);
    scene.add(rightGoldLight);

    const topCyanLight = new THREE.DirectionalLight(COLOR_CYAN, 0.9);
    topCyanLight.position.set(0, 6, 6);
    scene.add(topCyanLight);

    // ============================================================
    // 8. INTERACTION & ANIMATION LOOP
    // ============================================================
    let targetRotY = 0;
    let targetRotX = 0;

    const handlePointerMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      targetRotY = x * 0.65;
      targetRotX = y * 0.45;
    };

    window.addEventListener('pointermove', handlePointerMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse tracking on master group
      masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.05;

      // Gentle floating levitation cycle
      masterGroup.position.y = Math.sin(time * 0.8) * 0.14;
      masterGroup.position.x = Math.cos(time * 0.5) * 0.1;

      // Cloud puffs subtle breathing
      puffMeshes.forEach(puff => {
        const u = puff.userData;
        puff.position.y = u.baseY + Math.sin(time * u.speed + u.phase) * 0.05;
        puff.position.x = u.baseX + Math.cos(time * u.speed * 0.8 + u.phase) * 0.035;
      });

      // Internal light pulse (lightning & telemetry heartbeat)
      cloudHeartLight.intensity = 3.2 + Math.sin(time * 2.4) * 1.4;
      cloudPurpleLight.intensity = 2.4 + Math.cos(time * 2.0) * 1.2;

      // Move data packets along the Infinity Loop
      packets.forEach(p => {
        p.offset = (p.offset + p.speed * delta) % 1;
        const pt = infinityCurve.getPoint(p.offset);
        p.mesh.position.copy(pt);
      });

      // Subtle wire tube rotation & particle spin
      wireTubeMesh.rotation.y = Math.sin(time * 0.3) * 0.1;
      starPoints.rotation.y = time * 0.012;
      groundGridGroup.position.x = Math.sin(time * 0.2) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="cloud-3d-canvas-wrap"
      aria-hidden="true"
    />
  );
}
