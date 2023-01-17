import { useState, useEffect } from 'react'
import './App.css'
import { getCharacter } from 'rickmortyapi';
import { SelectFilter } from './components/SelectFilter';
import { CharacterBioModal } from './components/CharacterBioModal';
import { Scene } from './components/Scene';

function App() {
  const [rickAndMortyData, setRickAndMortyData] = useState();
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(!rickAndMortyData){
      const theSmiths = getCharacter([ 1, 2, 3, 4, 5 ]).then((res)=> {
        setRickAndMortyData(res.data);
      })
    }
  }, [])

  return (
    <div className="app">
      <CharacterBioModal open={open} setOpen={setOpen} selectedCharacter={selectedCharacter} />
      <div style={{ height: '50%', width: '100%' }}>
        <Scene rickAndMortyData={rickAndMortyData} setOpen={setOpen} setSelectedCharacter={setSelectedCharacter}/>
      </div>
      <SelectFilter rickAndMortyData={rickAndMortyData} setRickAndMortyData={setRickAndMortyData} />
    </div>
  )
}

export default App