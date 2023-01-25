import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { useParams } from "react-router-dom";
import { fetchFromBlizzardAPI } from '../utils/fetchFromBlizzardAPI';

const Guild = () => {
  const [guild, setGuild] = useState([]);
  const { realm, id } = useParams();
  
  useEffect(() => {
    fetchFromBlizzardAPI(`guilds/profile?region=us&realm=${realm}&name=${id}&fields=members`)
      .then((data) => setGuild(data))
  }, [id]);

  return (
    <Container maxWidth="xl" >
      <Box className='gradient' sx={{ bgcolor: '#1B1B1B', boxShadow: 24,}}>
       { guild.name }
       { guild.faction}
      </Box>
    </Container>
  )
}

export default Guild
