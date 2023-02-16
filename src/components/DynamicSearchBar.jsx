import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Autocomplete, TextField, FormControl } from '@mui/material';
import { getFromDB } from '../utils/getFromDB';

const DynamicSearchBar = () => {
  const [value, setValue] = useState([])
  
  const navigate = useNavigate();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <FormControl
      className='search-bar'  
      sx={{
        borderRadius: '30px',
        border: '1px solid #e3e3e3',
        pl: 4,
        boxShadow: '24',
        mx: 'auto',
        width: '395px',
        background: 'white'
      }}
    >
        <Autocomplete
            disablePortal
            className='search-bar'
            getOptionLabel={(value) => `${capitalizeFirstLetter(value.name)}`}
            filterOptions={(x) => x}
            options={value}
            onInputChange={(event, newValue) => getFromDB(newValue)
                .then((data) => setValue(data))}
            renderOption={(props, value) => (
                <Box {...props} key={value.id} sx={{background: '#1B1B1B', color: 'white', height: '50px'}}>
                    <Box sx={{ flexGrow: 1, color: value.class === 'Druid' ? '#FF7C0A' : value.class === 'Death Knight' ? '#C41E3A' : value.class === 'Demon Hunter' ? '#A330C9' : value.class === 'Evoker' ? '#33937F' : value.class === 'Hunter' ? '#AAD372' : value.class === 'Mage' ? '#3FC7EB' : value.class === 'Monk' ? '#00FF98' : value.class === 'Paladin' ? '#F48CBA' : value.class === 'Priest' ? '#FFFFFF' : value.class === 'Rogue' ? '#FFF468' : value.class === 'Shaman' ? '#0070DD' : value.class === 'Warlock' ? '#8788EE' : value.class === 'Warrior' ? '#C69B6D': 'white' }}>
                            { capitalizeFirstLetter(value.name) }
                    </Box>
                    <Box>
                        {value.realm}
                    </Box>
                </Box>
            )}
            renderInput={(params) => <TextField  {...params} variant="standard" label="Search for a Player" sx={{background: 'white', mt: 1}}  />}
            onChange={(event, value) => navigate(`/player/${value.realm}/${value.name}`)}
        />
      </FormControl>
  )
}

export default DynamicSearchBar