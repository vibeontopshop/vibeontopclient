'use client';
import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';

export default function Ordersummary() {
  const [orderData, setOrderData] = useState(null);
  const mountRef = useRef(null);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem('selectedProduct'));
    if (storedOrder) {
      setOrderData(storedOrder);
    }
  }, []);

  useEffect(() => {
    if (!mountRef.current || !orderData) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#ffffff');

    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xfacc15, 0.6);
    scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0xfff1c1, 0x080820, 0.4);
    scene.add(hemisphereLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffa500, 0.5, 100);
    pointLight.position.set(-3, 5, 3);
    scene.add(pointLight);

    const spotLight = new THREE.SpotLight(0xffffff, 0.3);
    spotLight.position.set(0, 10, 10);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.2;
    spotLight.castShadow = true;
    scene.add(spotLight);

    const planeGeometry = new THREE.PlaneGeometry(500, 500);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.15 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -2.5;
    plane.receiveShadow = true;
    scene.add(plane);

    const geometry = new RoundedBoxGeometry(3, 4, 0.2, 8, 0.3);

    const sideMaterial = new THREE.MeshPhysicalMaterial({
      color: '#8B4513',
      metalness: 0.5,
      roughness: 0.2,
      clearcoat: 0.9,
      clearcoatRoughness: 0.05,
      reflectivity: 0.8,
      sheen: 0.5,
      iridescence: 0.2,
      iridescenceIOR: 1.3,
      thickness: 0.5,
      transmission: 0.05,
      opacity: 1.0,
      envMapIntensity: 1.0
    });

    const frontCanvas = document.createElement('canvas');
    frontCanvas.width = 1024;
    frontCanvas.height = 1024;
    const frontCtx = frontCanvas.getContext('2d');

    const frontGradient = frontCtx.createLinearGradient(0, 0, 0, 1024);
    frontGradient.addColorStop(0, '#fff8dc');
    frontGradient.addColorStop(1, '#fde68a');
    frontCtx.fillStyle = frontGradient;

    roundRect(frontCtx, 0, 0, 1024, 1024, 80);

    frontCtx.textAlign = 'center';
    frontCtx.textBaseline = 'middle';
    frontCtx.fillStyle = '#78350f';
    frontCtx.font = 'bold 80px "Poppins", sans-serif';
    frontCtx.shadowColor = 'rgba(0,0,0,0.1)';
    frontCtx.shadowBlur = 10;
    frontCtx.fillText('ORDER SUMMARY', 512, 100);

    frontCtx.shadowBlur = 0;
    frontCtx.beginPath();
    frontCtx.moveTo(160, 180);
    frontCtx.lineTo(864, 180);
    frontCtx.lineWidth = 6;
    frontCtx.strokeStyle = '#d97706';
    frontCtx.stroke();

    frontCtx.textAlign = 'left';
    frontCtx.fillStyle = '#1a1a1a';
    frontCtx.font = 'bold 44px "Poppins", sans-serif';

    let startY = 260;
    const lineHeight = 60;

    frontCtx.fillText(`Product: ${orderData.name}`, 120, startY);
    frontCtx.fillText(`Color: ${orderData.color}`, 120, startY + lineHeight);
    frontCtx.fillText(`Size: ${orderData.size}`, 120, startY + lineHeight * 2);
    frontCtx.fillText(`Weight: ${orderData.weight}`, 120, startY + lineHeight * 3);
    frontCtx.fillText(`Quantity: ${orderData.quantity}`, 120, startY + lineHeight * 4);

    frontCtx.font = 'bold 48px "Poppins", sans-serif';
    frontCtx.fillText(`Subtotal: ₹${(orderData.price * orderData.quantity).toFixed(2)}`, 120, startY + lineHeight * 5);
    frontCtx.fillText(`Discount: ${orderData.discount}%`, 120, startY + lineHeight * 6);

    frontCtx.fillStyle = '#dc2626';
    frontCtx.font = 'bold 48px "Poppins", sans-serif';
    frontCtx.fillText(`TOTAL: ₹${((orderData.price * orderData.quantity) - ((orderData.price * orderData.quantity * orderData.discount) / 100)).toFixed(2)}`, 120, startY + lineHeight * 7);

    const frontTexture = new THREE.CanvasTexture(frontCanvas);
    const frontMaterial = new THREE.MeshBasicMaterial({ map: frontTexture });

    const backCanvas = document.createElement('canvas');
    backCanvas.width = 1024;
    backCanvas.height = 1024;
    const backCtx = backCanvas.getContext('2d');

    const backGradient = backCtx.createLinearGradient(0, 0, 0, 1024);
    backGradient.addColorStop(0, '#fff8dc');
    backGradient.addColorStop(1, '#fde68a');
    backCtx.fillStyle = backGradient;

    roundRect(backCtx, 0, 0, 1024, 1024, 80);

    backCtx.textAlign = 'center';
    backCtx.textBaseline = 'middle';
    backCtx.fillStyle = '#78350f';
    backCtx.font = 'bold 72px "Poppins", sans-serif';
    backCtx.shadowColor = 'rgba(0,0,0,0.1)';
    backCtx.shadowBlur = 10;

    backCtx.fillText('Thank You', 512, 400);
    backCtx.fillText('For Choosing Us!', 512, 500);

    const backTexture = new THREE.CanvasTexture(backCanvas);
    const backMaterial = new THREE.MeshBasicMaterial({ map: backTexture });

    const materials = [sideMaterial, sideMaterial, sideMaterial, sideMaterial, frontMaterial, backMaterial];
    const card = new THREE.Mesh(geometry, materials);
    card.castShadow = true;
    scene.add(card);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      const time = Date.now() * 0.001;
      card.position.y = Math.sin(time) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [orderData]);

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
  }

  if (!orderData) {
    return (
      <div className="flex items-center justify-center w-full h-[500px] text-amber-700 font-bold text-2xl">
        Loading Order Summary...
      </div>
    );
  }

  return (
    <div
      className="w-full max-w-7xl mx-auto aspect-[3/2] sm:aspect-[5/3] md:aspect-[16/9] bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 rounded-2xl shadow-xl overflow-hidden relative"
    >
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
}
