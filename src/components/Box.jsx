import { useState, useRef, useEffect } from 'react'
import '../App.css'
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Text } from '@react-three/drei';

export function Box({ cube, data, setOpen, setSelectedCharacter }) {

    const meshRef = useRef();
    const [hover, setHover] = useState(false);
  
    const cubePosition = {};
    const textPosition = {};
    const colorMap = data?.image ? useLoader(TextureLoader, `${data.image}`) : null;

    setCubePosition(cube, cubePosition, textPosition);
  
    useFrame(()=> {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.z += 0.003;
    })
  
    useEffect(()=> {
      document.body.style.cursor = hover ? 'pointer' : 'cursor';
    }, [hover])
  
    const handleClick = () => {
      setSelectedCharacter(data);
      setOpen(true);
    }

    if(data?.name === 'Abadango Cluster Princess') data.name = 'Cluster Princess';
  
    return (
      <>
        <Text fontSize={textPosition.fontSize} color='black' scale={[1, 1, 1]} anchorX='left' anchorY="middle" position={[textPosition.x-3, textPosition.y, cubePosition.z]}>{data?.name}</Text>
        <mesh position={[cubePosition.x,cubePosition.y,cubePosition.z]} ref={meshRef} onPointerOver={()=> setHover(true)} onPointerOut={()=> setHover(false)} onClick={handleClick}>
          <boxGeometry args={[1,1,1]} />
          <meshStandardMaterial  map={colorMap} />
        </mesh>
      </>
    )
}

function setCubePosition(cube, cubePosition, textPosition) {
    switch(cube) {
        case '1' :
           cubePosition.x = -6;
           cubePosition.y = 0;
           cubePosition.z = 1.5;
           textPosition.x = -4.8;
           textPosition.y = 1.4;
           textPosition.fontSize = 0.53;
           break;
        case '2':
          cubePosition.x = -3;
          cubePosition.y = 0.1;
          cubePosition.z = 1;
          textPosition.x = -1.4;
          textPosition.y = -1.4;
          textPosition.fontSize = 0.42;
          break;
        case '3':
          cubePosition.x = 0;
          cubePosition.y = 0.2;
          cubePosition.z = .5;
          textPosition.x = 1.8;
          textPosition.y = 1.7;
          textPosition.fontSize = 0.4;
          break;
        case '4':
          cubePosition.x = 3;
          cubePosition.y = 0.1;
          cubePosition.z = 1;
          textPosition.x = 5;
          textPosition.y = -1.4;
          textPosition.fontSize = 0.42;
          break;
        case '5' :
          cubePosition.x = 6;
          cubePosition.y = 0;
          cubePosition.z = 1.5;
          textPosition.x = 7.8;
          textPosition.y = 1.5;
          textPosition.fontSize = 0.53;
      }
    
}
  