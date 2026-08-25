import type React from 'react';
import { useRef, useMemo, useCallback, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

type ImageItem = string | { src: string; alt?: string };

interface InfiniteGalleryProps {
  images: ImageItem[];
  speed?: number;
  zSpacing?: number;
  visibleCount?: number;
  falloff?: { near: number; far: number };
  className?: string;
  style?: React.CSSProperties;
}

interface PlaneData {
  index: number;
  z: number;
  imageIndex: number;
  x: number;
  y: number;
}

const DEFAULT_DEPTH_RANGE = 45;
const MAX_HORIZONTAL_OFFSET = 7;
const MAX_VERTICAL_OFFSET = 7;

function GalleryScene({
  images,
  speed = 1,
  visibleCount = 6,
}: {
  images: ImageItem[];
  speed?: number;
  visibleCount?: number;
}) {
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const lastInteraction = useRef(Date.now());

  const normalizedImages = useMemo(
    () => images.map((img) => (typeof img === 'string' ? { src: img, alt: '' } : img)),
    [images]
  );

  const textures = useTexture(normalizedImages.map((img) => img.src));

  const materials = useMemo(
    () =>
      Array.from(
        { length: visibleCount },
        () =>
          new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 1,
            side: THREE.FrontSide,
          })
      ),
    [visibleCount]
  );

  const spatialPositions = useMemo(() => {
    const positions: { x: number; y: number }[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const horizontalAngle = (i * 2.618) % (Math.PI * 2);
      const verticalAngle = (i * 1.618 + Math.PI / 3) % (Math.PI * 2);
      const horizontalRadius = (i % 3) * 1.1;
      const verticalRadius = ((i + 1) % 4) * 0.7;

      positions.push({
        x: (Math.sin(horizontalAngle) * horizontalRadius * MAX_HORIZONTAL_OFFSET) / 3,
        y: (Math.cos(verticalAngle) * verticalRadius * MAX_VERTICAL_OFFSET) / 4,
      });
    }
    return positions;
  }, [visibleCount]);

  const totalImages = normalizedImages.length;
  const depthRange = DEFAULT_DEPTH_RANGE;

  const planesData = useRef<PlaneData[]>(
    Array.from({ length: visibleCount }, (_, i) => ({
      index: i,
      z: visibleCount > 0 ? ((depthRange / visibleCount) * i) % depthRange : 0,
      imageIndex: totalImages > 0 ? i % totalImages : 0,
      x: spatialPositions[i]?.x ?? 0,
      y: spatialPositions[i]?.y ?? 0,
    }))
  );

  useFrame((_, delta) => {
    if (autoPlay) {
      setScrollVelocity((prev) => prev + 0.25 * delta);
    }
    setScrollVelocity((prev) => prev * 0.94);

    const imageAdvance = totalImages > 0 ? visibleCount % totalImages || totalImages : 0;

    planesData.current.forEach((plane, i) => {
      let newZ = plane.z + scrollVelocity * delta * 10;

      if (newZ >= depthRange) {
        newZ -= depthRange;
        plane.imageIndex = (plane.imageIndex + imageAdvance) % totalImages;
      } else if (newZ < 0) {
        newZ += depthRange;
        plane.imageIndex = ((plane.imageIndex - imageAdvance) % totalImages + totalImages) % totalImages;
      }

      plane.z = newZ;
      const normalizedPosition = plane.z / depthRange;
      let opacity = 1;

      if (normalizedPosition < 0.15) {
        opacity = normalizedPosition / 0.15;
      } else if (normalizedPosition > 0.8) {
        opacity = (1 - normalizedPosition) / 0.2;
      }

      if (materials[i]) {
        materials[i].opacity = Math.max(0, Math.min(1, opacity));
      }
    });
  });

  return (
    <>
      {planesData.current.map((plane, i) => {
        const texture = textures[plane.imageIndex];
        const material = materials[i];
        if (!texture || !material) return null;

        material.map = texture;
        material.needsUpdate = true;

        const worldZ = plane.z - depthRange / 2;
        return (
          <mesh
            key={plane.index}
            position={[plane.x, plane.y, worldZ]}
            scale={[3.2, 2.2, 1]}
            material={material}
          >
            <planeGeometry args={[1, 1]} />
          </mesh>
        );
      })}
    </>
  );
}

export default function InfiniteGallery({
  images,
  className = 'h-96 w-full',
  style,
  speed = 1,
  visibleCount = 6,
}: InfiniteGalleryProps) {
  return (
    <div className={className} style={style}>
      <Canvas
        camera={{ position: [0, 0, 0], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
      >
        <GalleryScene images={images} speed={speed} visibleCount={visibleCount} />
      </Canvas>
    </div>
  );
}
