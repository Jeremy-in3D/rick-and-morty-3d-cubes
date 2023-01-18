import { Canvas } from '@react-three/fiber';
import { Box } from './Box';
import { Stars, OrbitControls } from '@react-three/drei';

export function Scene({ rickAndMortyData, setOpen, setSelectedCharacter}) {
    return (
        <>
            <Canvas>
                <OrbitControls />
                <Stars />
                <ambientLight intensity={0.1} />
                <pointLight position={[3,3,3]} />
                <Box cube='1' data={rickAndMortyData ? rickAndMortyData[0] : null} setOpen={setOpen} setSelectedCharacter={setSelectedCharacter} />
                <Box cube='2' data={rickAndMortyData ? rickAndMortyData[1] : null} setOpen={setOpen} setSelectedCharacter={setSelectedCharacter} />
                <Box cube='3' data={rickAndMortyData ? rickAndMortyData[2] : null} setOpen={setOpen} setSelectedCharacter={setSelectedCharacter} />
                <Box cube='4' data={rickAndMortyData ? rickAndMortyData[3] : null} setOpen={setOpen} setSelectedCharacter={setSelectedCharacter} />
                <Box cube='5' data={rickAndMortyData ? rickAndMortyData[4] : null} setOpen={setOpen} setSelectedCharacter={setSelectedCharacter} />
            </Canvas>
        </>
    )
}