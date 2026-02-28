import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useLayoutEffect, useRef, useState } from "react";
import { useCursor } from '@react-three/drei'
import { DoubleSide, Group, Mesh} from "three";
import { useGLTF } from '@react-three/drei'
//import { lerp } from "three/src/math/MathUtils.js";
import { easing } from 'maath'

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
    let rotOffset : number = 0;
    if (num === 1) {
        modelPath = '/glass1-temp.glb';
        defRotation = [Math.PI / 2, -Math.PI / 3, 0];
        rotOffset = -Math.PI/8;
    
    } else if (num === 2) {
        modelPath = '/glass2-temp.glb';
        defRotation = [Math.PI/2, -Math.PI/2 - Math.PI/10, 0]; 
        rotOffset = Math.PI/8;

    } else if (num === 3) {
        modelPath = '/glass5-temp.glb';
        defRotation = [Math.PI/2 , 0.1, 0];  
        rotOffset = -Math.PI/16;
    } else if (num === 4) {
        modelPath = '/glass4-temp.glb';
        defRotation = [Math.PI/2, Math.PI/2, 0]; 
        rotOffset = -Math.PI/16;
    }else {
        //this isnt needed but removing it is breaking something
        return <></>;  // Handle invalid num
    } 

    const ref = useRef<Group>(null);
    const [isHovered, setIsHovered] = useState(false);
    const targetZ = 0.65;
    const originalZ = 0;
    const originalRoto = (num == 4 || num == 3) ? defRotation[0] : defRotation[1];
    const targetRoto = originalRoto + rotOffset;
    useCursor(isHovered);

    useFrame((state, delta) => {
        if (!ref.current) return;

        const destinationZ = isHovered ? targetZ : originalZ;
        const finalRoto = isHovered ? targetRoto : originalRoto;

        easing.damp3(ref.current.position, [position[0], position[1], destinationZ], 0.2, delta);

        if (num === 3 || num === 4) {
            easing.damp(ref.current.rotation, 'x', finalRoto, 0.2, delta);
        } else {
            easing.damp(ref.current.rotation, 'y', finalRoto, 0.2, delta);
        }

        if (isHovered) {
            const time = state.clock.getElapsedTime();
            ref.current.position.y += Math.sin(time * 2) * 0.002; // Tiny vertical float
            ref.current.rotation.z += Math.cos(time * 1) * 0.001; // Tiny tilt wobble
        }

        //Increasing size (slightly)
        const targetScale = isHovered ? scale * 1.05 : scale;
        easing.damp3(ref.current.scale, [targetScale, targetScale, targetScale], 0.15, delta);
    });

    const { scene } = useGLTF(modelPath);

    useLayoutEffect(() => {
        scene.traverse((child) => {
        if (child instanceof Mesh) {
            child.material.transparent = true;

            child.material.depthWrite = false;
            child.material.side = DoubleSide;
            
            if (child.material.map) {
            child.material.alphaMap = child.material.map;
            }

            child.material.needsUpdate = true;
        }
        });
    }, [scene]);

    const redirect = ()  => {
        let id;
        if (num == 1){
            id = "aboutUs";
        } else if (num == 2){
            
        } else if (num == 3){

        } else if (num == 4){

        } 
        const element = document.getElementById(id ? id : "aboutUs");
        if (element) {
                element.scrollIntoView({ 
                behavior: 'smooth', // Makes it glide instead of jumping
                block: 'start'      // Aligns the top of the element to the top of the viewport
                });
            }
    }

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
        onClick={redirect}
        >
            <primitive object={ scene } />
        </group>
    );
}

export const Canvas3D = () => {
    return(
    <div className = "w-full h-dvh absolute top-0 z-40 pointer-events-none ">
        <Canvas className = "w-fit bg-transparent invisible md:visible">
            <directionalLight position = {[0,0,1]}  />
            <Suspense fallback={null}>
                <Glass position={[-3,2,0]} scale={10} num = {1} />
                <Glass position={[3,2,0]} scale={10} num = {2} />
                <Glass position={[-3,-1.75,0]} scale={13} num = {3} />
                <Glass position={[3,-2,0]} scale={10} num = {4} />
            </Suspense>
        </Canvas>
    </div>
    );
}