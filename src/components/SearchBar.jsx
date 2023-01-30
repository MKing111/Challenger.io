import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = (selection) => {
  const [search, setSearch] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      navigate(`/player/${selection.selection}/${search}`);

      setSearch('');
    }
  }

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: '24',
        mx: 'auto',
      }}
    >
      <input
        className='search-bar'
        placeholder='Search for Players...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type='submit' sx={{ p:'10px', color: '#9C7C38' }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar