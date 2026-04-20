"use client";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { DoubleSide, VideoTexture, LinearFilter } from "three";

const videoData = [
  `/Video/video1.mp4`,
  `/Video/video2.mp4`,
  `/Video/video3.mp4`,
  `/Video/video4.mp4`,
  `/Video/video5.mp4`,
  `/Video/video6.mp4`,
  `/Video/video7.mp4`,
  `/Video/video8.mp4`,
];

const MeshMaker = ({ width, height, position, rotation, videoSrc }) => {
  const meshRef = useRef();

  const videoRef = useRef(null);
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    // Create and configure the HTML video element
    const video = document.createElement("video");
    video.src = videoSrc;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.play().catch(() => {});
    videoRef.current = video;

    // Create a Three.js VideoTexture from the video element
    const vTex = new VideoTexture(video);
    vTex.minFilter = LinearFilter;
    vTex.magFilter = LinearFilter;
    setTexture(vTex);

    return () => {
      video.pause();
      video.src = "";
      vTex.dispose();
    };
  }, [videoSrc]);

  useEffect(() => {
    meshRef.current.lookAt(0, 0, 0);
  });
  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture || null} side={DoubleSide} />
    </mesh>
  );
};

const HeroScene = () => {
  const [Geometry, setGeometry] = useState({ width: 100, height: 100 });

  useEffect(() => {
    const handleResize = () => {
      // const width =  (window.innerWidth / window.innerHeight) * 50;
      const width = window.innerWidth / 18;
      const height = width * 1.5;
      setGeometry({ width, height });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const RADIUS = (videoData.length * Geometry.width) / (2 * Math.PI);

  const groupRef = useRef();
  const mouseY = useRef(0); // -1 = top of screen, 0 = center, +1 = bottom

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     mouseY.current = (e.clientY / window.innerHeight - 0.5) * 2;
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  // useFrame(() => {
  //   if (!groupRef.current) return;
  //   const targetX = -mouseY.current * 0.3; // negative = tilt down when mouse goes up
  //   groupRef.current.rotation.x +=
  //     (targetX - groupRef.current.rotation.x) * 0.05;
  // });

  return (
    <group ref={groupRef} scale={1}>
      {videoData.map((item, index) => {
        const angle = (2 * Math.PI * index) / videoData.length;
        const x = RADIUS * Math.sin(angle);
        const z = RADIUS * Math.cos(angle);
        const pos = [x, 0, z];

        // rotate each panel to face outward from the center axis
        const rot = [0, -angle, 0];
        return (
          <MeshMaker
            key={index}
            width={Geometry.width}
            height={Geometry.height}
            position={pos}
            rotation={rot}
            videoSrc={item}
          />
        );
      })}
    </group>
  );
};

export default HeroScene;
