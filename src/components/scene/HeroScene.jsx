// "use client";
// import { useFrame } from "@react-three/fiber";
// import { useEffect, useRef, useState } from "react";
// import { DoubleSide, VideoTexture, LinearFilter } from "three";

// const videoData = [
//   `/Video/video1.mp4`,
//   `/Video/video2.mp4`,
//   `/Video/video3.mp4`,
//   `/Video/video4.mp4`,
//   `/Video/video5.mp4`,
//   `/Video/video6.mp4`,
//   `/Video/video7.mp4`,
//   `/Video/video8.mp4`,
// ];

// const MeshMaker = ({ width, height, position, rotation, videoSrc }) => {
//   const meshRef = useRef();

//   const videoRef = useRef(null);
//   const [texture, setTexture] = useState(null);

//   useEffect(() => {
//     // Create and configure the HTML video element
//     const video = document.createElement("video");
//     video.src = videoSrc;
//     video.crossOrigin = "anonymous";
//     video.loop = true;
//     video.muted = true;
//     video.playsInline = true;
//     video.autoplay = true;
//     video.play().catch(() => {});
//     videoRef.current = video;

//     // Create a Three.js VideoTexture from the video element
//     const vTex = new VideoTexture(video);
//     vTex.minFilter = LinearFilter;
//     vTex.magFilter = LinearFilter;
//     setTexture(vTex);

//     return () => {
//       video.pause();
//       video.src = "";
//       vTex.dispose();
//     };
//   }, [videoSrc]);

//   useEffect(() => {
//     meshRef.current.lookAt(0, 0, 0);
//   });
//   return (
//     <mesh ref={meshRef} position={position} rotation={rotation}>
//       <planeGeometry args={[width, height]} />
//       <meshBasicMaterial map={texture || null} side={DoubleSide} />
//     </mesh>
//   );
// };

// const HeroScene = () => {
//   const [Geometry, setGeometry] = useState({ width: 100, height: 100 });

//   useEffect(() => {
//     const handleResize = () => {
//       // const width =  (window.innerWidth / window.innerHeight) * 50;
//       const width = window.innerWidth / 18;
//       const height = width * 1.5;
//       setGeometry({ width, height });
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const RADIUS = (videoData.length * Geometry.width) / (2 * Math.PI);

//   const groupRef = useRef();
//   const mouseY = useRef(0); // -1 = top of screen, 0 = center, +1 = bottom

//   // useEffect(() => {
//   //   const handleMouseMove = (e) => {
//   //     mouseY.current = (e.clientY / window.innerHeight - 0.5) * 2;
//   //   };
//   //   window.addEventListener("mousemove", handleMouseMove);
//   //   return () => window.removeEventListener("mousemove", handleMouseMove);
//   // }, []);

//   // useFrame(() => {
//   //   if (!groupRef.current) return;
//   //   const targetX = -mouseY.current * 0.3; // negative = tilt down when mouse goes up
//   //   groupRef.current.rotation.x +=
//   //     (targetX - groupRef.current.rotation.x) * 0.05;
//   // });

//   return (
//     <group ref={groupRef} scale={1}>
//       {videoData.map((item, index) => {
//         const angle = (2 * Math.PI * index) / videoData.length;
//         const x = RADIUS * Math.sin(angle);
//         const z = RADIUS * Math.cos(angle);
//         const pos = [x, 0, z];

//         // rotate each panel to face outward from the center axis
//         const rot = [0, -angle, 0];
//         return (
//           <MeshMaker
//             key={index}
//             width={Geometry.width}
//             height={Geometry.height}
//             position={pos}
//             rotation={rot}
//             videoSrc={item}
//           />
//         );
//       })}
//     </group>
//   );
// };
// export default HeroScene;

// =========================================================================================================

// "use client";
// import { useFrame } from "@react-three/fiber";
// import { useEffect, useRef, useState, useCallback } from "react";
// import { DoubleSide, VideoTexture, LinearFilter, MeshBasicMaterial } from "three";

// const videoData = [
//   `/Video/video1.mp4`,
//   `/Video/video2.mp4`,
//   `/Video/video3.mp4`,
//   `/Video/video4.mp4`,
//   `/Video/video5.mp4`,
//   `/Video/video6.mp4`,
//   `/Video/video7.mp4`,
//   `/Video/video8.mp4`,
// ];

// const MeshMaker = ({ width, height, position, rotation, videoSrc }) => {
//   const meshRef = useRef();
//   const videoRef = useRef(null);
//   const [videoTexture, setVideoTexture] = useState(null);
//   const [material, setMaterial] = useState(null);

//   // Create video element and texture
//   useEffect(() => {
//     const video = document.createElement("video");
//     video.src = videoSrc;
//     video.crossOrigin = "anonymous";
//     video.loop = true;
//     video.muted = true; // Important: videos must be muted for autoplay
//     video.playsInline = true;
//     video.preload = "auto";
//     video.load(); // Explicitly load the video

//     const handleCanPlay = () => {
//       video.play().catch(console.error);
//     };

//     video.addEventListener("canplaythrough", handleCanPlay);
//     video.addEventListener("loadeddata", handleCanPlay);

//     // Create texture only after video is ready
//     const texture = new VideoTexture(video);
//     texture.minFilter = LinearFilter;
//     texture.magFilter = LinearFilter;
//     texture.encoding = "sRGBEncoding";

//     const videoMaterial = new MeshBasicMaterial({
//       map: texture,
//       side: DoubleSide,
//     });

//     setVideoTexture(texture);
//     setMaterial(videoMaterial);
//     videoRef.current = video;

//     return () => {
//       video.removeEventListener("canplaythrough", handleCanPlay);
//       video.removeEventListener("loadeddata", handleCanPlay);
//       video.pause();
//       video.src = "";
//       if (texture) texture.dispose();
//       if (videoMaterial) videoMaterial.dispose();
//     };
//   }, [videoSrc]);

//   // Update texture needsUpdate flag continuously
//   useFrame(() => {
//     if (videoRef.current && videoTexture) {
//       videoTexture.needsUpdate = true;
//     }
//   });

//   useEffect(() => {
//     if (meshRef.current) {
//       meshRef.current.lookAt(0, 0, 0);
//     }
//   }, []);

//   return (
//     <mesh ref={meshRef} position={position} rotation={rotation}>
//       <planeGeometry args={[width, height]} />
//       {material && <primitive object={material} />}
//     </mesh>
//   );
// };

// const HeroScene = () => {
//   const [geometry, setGeometry] = useState({ width: 100, height: 100 });
//   const groupRef = useRef();

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth / 18;
//       const height = width * 1.5;
//       setGeometry({ width, height });
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const RADIUS = (videoData.length * geometry.width) / (2 * Math.PI);

//   return (
//     <group ref={groupRef} scale={1}>
//       {videoData.map((item, index) => {
//         const angle = (2 * Math.PI * index) / videoData.length;
//         const x = RADIUS * Math.sin(angle);
//         const z = RADIUS * Math.cos(angle);
//         const pos = [x, 0, z];
//         const rot = [0, -angle, 0];

//         return (
//           <MeshMaker
//             key={`${item}-${index}`} // More specific key
//             width={geometry.width}
//             height={geometry.height}
//             position={pos}
//             rotation={rot}
//             videoSrc={item}
//           />
//         );
//       })}
//     </group>
//   );
// };

// export default HeroScene;


"use client";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";

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

const MeshMaker = ({ width, height, position, rotation, videoSrc, index }) => {
  const meshRef = useRef();
  const videoRef = useRef();
  const textureRef = useRef();
  const materialRef = useRef();

  useEffect(() => {
    // Create video element
    const video = document.createElement("video");
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.src = videoSrc;

    videoRef.current = video;

    // Wait for video to be ready
    const handleLoaded = () => {
      video.play().catch(e => console.log(`Video ${index} play failed:`, e));
    };

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("canplaythrough", handleLoaded);

    // Create texture
    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    
    textureRef.current = texture;

    // Create material with correct color settings
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
      toneMapped: false, // Critical for correct colors
    });

    materialRef.current = material;

    // Update mesh material
    if (meshRef.current) {
      meshRef.current.material = material;
    }

    return () => {
      video.pause();
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("canplaythrough", handleLoaded);
      
      if (textureRef.current) {
        textureRef.current.dispose();
      }
      if (materialRef.current) {
        materialRef.current.dispose();
      }
    };
  }, [videoSrc, index]);

  // Continuous video texture update
  useFrame(() => {
    if (textureRef.current && videoRef.current?.readyState > 2) {
      textureRef.current.needsUpdate = true;
    }
  });

  // Position and rotation
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.set(...position);
      meshRef.current.rotation.set(...rotation);
      meshRef.current.lookAt(0, 0, 0);
    }
  }, [position, rotation]);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[width, height]} />
    </mesh>
  );
};

const HeroScene = () => {
  const [geometry, setGeometry] = useState({ width: 20, height: 30 });
  const groupRef = useRef();

  // Responsive geometry
  useEffect(() => {
    const updateGeometry = () => {
      // const width = Math.min(window.innerWidth / 25, 25);
      const width = window.innerWidth / 18;;
      const height = width * 1.5;
      setGeometry({ width, height });
    };

    updateGeometry();
    window.addEventListener("resize", updateGeometry);
    return () => window.removeEventListener("resize", updateGeometry);
  }, []);

  const RADIUS = useMemo(() => {
    return (videoData.length * geometry.width) / (2 * Math.PI) ;
  }, [geometry.width]);

  // Infinite rotation animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate around Y-axis continuously
      groupRef.current.rotation.y += delta * 0.3; // Adjust speed (0.3 = smooth rotation)
    }
  });

  return (
    <group ref={groupRef} scale={2}>
      {videoData.map((videoSrc, index) => {
        const angle = (Math.PI * 2 * index) / videoData.length;
        const x = Math.cos(angle) * RADIUS;
        const z = Math.sin(angle) * RADIUS;
        const position = [x, 0, z];
        const rotation = [0, angle + Math.PI, 0];

        return (
          <MeshMaker
            key={videoSrc}
            width={geometry.width}
            height={geometry.height}
            position={position}
            rotation={rotation}
            videoSrc={videoSrc}
            index={index}
          />
        );
      })}
    </group>
  );
};

HeroScene.displayName = "HeroScene";

export default HeroScene;