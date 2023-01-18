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
      try {
          const theSmiths = getCharacter([...Array(10).keys()]).then((res)=> {
            setRickAndMortyData(res.data);
          })
      } catch {
        alert("Please refresh the page");
      }
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