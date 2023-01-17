import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const filterOptions = [
  'Alphabetical Asc',
  'Alphabetical Desc',
  'Random'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function SelectFilter({ rickAndMortyData, setRickAndMortyData }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Filter Characters</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={(e)=> handleChange(e, rickAndMortyData, setRickAndMortyData, setPersonName)}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {filterOptions.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, personName, theme)}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

function handleChange(event, rickAndMortyData,  setRickAndMortyData, setPersonName) {

  const {
    target: { value },
  } = event;

  const rickAndMortyDataCopy = { ...rickAndMortyData };
  const rickAndMortyCharacters = []
    
  for (const [key, value] of Object.entries(rickAndMortyDataCopy)) {
    rickAndMortyCharacters.push(value)
  }
    
  switch(value[value.length-1]) {
    case 'Alphabetical Asc' :
      rickAndMortyCharacters.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
      break;
    case 'Alphabetical Desc':
      rickAndMortyCharacters.sort(function(a, b){
        if(a.name < b.name) { return 1; }
        if(a.name > b.name) { return -1; }
        return 0;
    })
      break;
    default :      
      for (let i = rickAndMortyCharacters.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [rickAndMortyCharacters[i], rickAndMortyCharacters[j]] = [rickAndMortyCharacters[j], rickAndMortyCharacters[i]];
      }
  }

  const filteredData = {};
  const filterCharacters = rickAndMortyCharacters.map((character, index)=> filteredData[index] = character);
  setRickAndMortyData(filteredData);

  const selectedItem = [value[value.length-1]];
  setPersonName(selectedItem);
};
