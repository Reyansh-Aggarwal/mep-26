import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { useCursor } from '@react-three/drei'
import { Group} from "three";
import { useGLTF } from '@react-three/drei'
import { lerp } from "three/src/math/MathUtils.js";

/*const Cube = ({position}: any) => {
    const ref = useRef<Mesh>(null);
    const [isHovered, setIsHovered] = useState(false);
    
    // 1. Use Refs to persist these values across frames
    const isRotating = useRef(false);
    const rotationTarget = useRef(0);

    useCursor(isHovered);

    useFrame((state, delta) => {
        if (ref.current && isRotating.current) {
            const step = delta * 5; // Speed of rotation
            ref.current.rotation.y += step;
            rotationTarget.current += step;

            // 2. Stop once we hit 180 degrees (Math.PI)
            if (rotationTarget.current >= Math.PI) {
                isRotating.current = false;
                rotationTarget.current = 0;
                if (!isHovered){
                    ref.current.rotation.y = Math.PI *2;
                } else {
                    ref.current.rotation.y = Math.PI;
                }
            }
        }
    });

    const onHover = (event: any) => {
        event.stopPropagation();
        setIsHovered(true);
        
        // 3. Trigger the animation flag
        if (!isRotating.current) {
            isRotating.current = true;
        }
    };

    const offHover = () => {
        setIsHovered(false);
        // You can snap the X rotation or set another ref to animate it
        if (!isRotating.current) {
            isRotating.current = true;
        }
    };

    return (
        <mesh position={position} ref={ref} onPointerEnter={onHover} onPointerLeave={offHover}>
            <boxGeometry />
            <meshStandardMaterial color={isHovered ? "orange" : "blue"} />
        </mesh>
    );
}; */

interface GlassProps {
  position: [number, number, number];
  scale: number;
  num: 1 | 2 | 3 | 4;  // Union for safety
  rotation?: [number, number, number];
}

function Glass({ position, scale, num}: GlassProps) {
  let modelPath: string;
  let defRotation: [number, number, number];

  if (num === 1) {
    modelPath = '/glass1-temp.glb';
    defRotation = [Math.PI / 2, -Math.PI / 3, 0];
  } else if (num === 2) {
    modelPath = '/glass2-temp.glb';
    defRotation = [Math.PI/2, -Math.PI/2 - Math.PI/10, 0]; 
  } else if (num === 3) {
    modelPath = '/glass3-temp.glb';
    defRotation = [Math.PI/2 , -Math.PI/2 + Math.PI/3, 0];  
  } else if (num === 4) {
    modelPath = '/glass4-temp.glb';
    defRotation = [Math.PI/2, Math.PI/2, 0]; 
  }else {
    return <></>;  // Handle invalid num
  }

  const ref = useRef<Group>(null);
  const [isHovered, setIsHovered] = useState(false);
  // The "Original" Y rotation from your defRotation array
  const originalX = defRotation[0];
  // The "Hovered" target (Original + 180 degrees)
  const targetX = originalX + Math.PI;

  useCursor(isHovered);

  useFrame(() => {
    if (ref.current) {
      // 1. Determine which angle we are aiming for
      const destination = isHovered ? targetX : originalX;

      // 2. Smoothly interpolate (Lerp) towards that destination
      // The '0.1' is the smoothing factor. Increase for faster rotation.
      ref.current.rotation.x = lerp(
        ref.current.rotation.x,
        destination,
        0.03
      );
    }
  });

  const { scene } = useGLTF(modelPath);

  return (
    <group
      ref={ref}
      position={position}
      rotation={defRotation}
      scale={scale}
      // Use pointerOver/Out for better stability with complex models
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={() => {
        setIsHovered(false);
      }}
    >
      <primitive object={ scene } />
    </group>
  );
}
function Glass2({ position, scale, num}: GlassProps) {
  let modelPath: string;
  let defRotation: [number, number, number];

  if (num === 1) {
    modelPath = '/glass1-temp.glb';
    defRotation = [Math.PI / 2, -Math.PI / 3, 0];
  } else if (num === 2) {
    modelPath = '/glass2-temp.glb';
    defRotation = [Math.PI/2, -Math.PI/2 - Math.PI/10, 0]; 
  } else if (num === 3) {
    modelPath = '/glass3-temp.glb';
    defRotation = [Math.PI/2 , -Math.PI/2 + Math.PI/3, 0];  
  } else if (num === 4) {
    modelPath = '/glass4-temp.glb';
    defRotation = [Math.PI/2, Math.PI/2, 0]; 
  }else {
    return <></>;  // Handle invalid num
  }

  const ref = useRef<Group>(null);
  const [isHovered, setIsHovered] = useState(false);
  const targetZ = 1;
  const originalZ = 0;
  // The "Original" Y rotation from your defRotation array
  useCursor(isHovered);

  useFrame(() => {
    if (ref.current) {
      // 1. Determine which angle we are aiming for
      const destination = isHovered ? targetZ : originalZ;

      // 2. Smoothly interpolate (Lerp) towards that destination
      // The '0.1' is the smoothing factor. Increase for faster rotation.
      ref.current.position.z = lerp(
        ref.current.position.z,
        destination,
        0.03
      );
    }
  });

  const { scene } = useGLTF(modelPath);

  return (
    <group
      ref={ref}
      position={position}
      rotation={defRotation}
      scale={scale}
      // Use pointerOver/Out for better stability with complex models
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={() => {
        setIsHovered(false);
      }}
    >
      <primitive object={ scene } />
    </group>
  );
}
function Glass3({ position, scale, num}: GlassProps) {
  let modelPath: string;
  let defRotation: [number, number, number];

  if (num === 1) {
    modelPath = '/glass1-temp.glb';
    defRotation = [Math.PI / 2, -Math.PI / 3, 0];
  } else if (num === 2) {
    modelPath = '/glass2-temp.glb';
    defRotation = [Math.PI/2, -Math.PI/2 - Math.PI/10, 0]; 
  } else if (num === 3) {
    modelPath = '/glass3-temp.glb';
    defRotation = [Math.PI/2 , -Math.PI/2 + Math.PI/3, 0];  
  } else if (num === 4) {
    modelPath = '/glass4-temp.glb';
    defRotation = [Math.PI/2, Math.PI/2, 0]; 
  }else {
    return <></>;  // Handle invalid num
  }

  const ref = useRef<Group>(null);
  const [isHovered, setIsHovered] = useState(false);
  const targetZ = 1;
  const originalZ = 0;
  const originalY = defRotation[0];
  const targetY = originalY + Math.PI;
  // The "Original" Y rotation from your defRotation array
  useCursor(isHovered);

  useFrame(() => {
    if (ref.current) {
      // 1. Determine which angle we are aiming for
      const destination = isHovered ? targetZ : originalZ;
      const finalRoto = isHovered ? targetY : originalY;
      // 2. Smoothly interpolate (Lerp) towards that destination
      // The '0.1' is the smoothing factor. Increase for faster rotation.
      ref.current.position.z = lerp(
        ref.current.position.z,
        destination,
        0.03
      );
      ref.current.rotation.x = lerp(
        ref.current.rotation.x,
        finalRoto,
        0.03
      );
    }
  });

  const { scene } = useGLTF(modelPath);

  return (
    <group
      ref={ref}
      position={position}
      rotation={defRotation}
      scale={scale}
      // Use pointerOver/Out for better stability with complex models
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={() => {
        setIsHovered(false);
      }}
    >
      <primitive object={ scene } />
    </group>
  );
}
export const Canvas3D = () => {

    return(
    <div className = "w-full h-dvh fixed top-0 z-40 pointer-events-none">
        <Canvas className = "w-full bg-transparent">
            <directionalLight position = {[0,0,1]}  />
            <ambientLight />
            <Suspense fallback={null}>
                <Glass position={[-2.5,2,0]} scale={10} num = {1} />
                <Glass3 position={[2.5,2,0]} scale={10} num = {2} />
                <Glass3 position={[-2.5,-2,0]} scale={10} num = {3} />
                <Glass2 position={[2.5,-2,0]} scale={10} num = {4} />
            </Suspense>
        </Canvas>
    </div>
    );
}