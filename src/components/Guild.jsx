import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { useParams } from "react-router-dom";
import { fetchFromBlizzardAPI } from '../utils/fetchFromBlizzardAPI';
import { GuildHeader } from '../components';

const Guild = () => {
  const [guild, setGuild] = useState([]);
  const { realm, id } = useParams();
  
  useEffect(() => {
    fetchFromBlizzardAPI(`guilds/profile?region=us&realm=${realm}&name=${id}&fields=members`)
      .then((data) => setGuild(data))
  }, [realm, id]);

  return (
    <Container maxWidth="xl" >
      <Box className='gradient' sx={{ bgcolor: '#1B1B1B', boxShadow: 24,}}>
          <GuildHeader guild={guild} />
      </Box>
    </Container>
  )
}

export default Guild