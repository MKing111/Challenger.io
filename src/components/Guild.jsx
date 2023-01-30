import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { useParams } from "react-router-dom";
import { fetchFromBlizzardAPI } from '../utils/fetchFromBlizzardAPI';
import { GuildHeader, GuildRoster } from '../components';

const Guild = () => {
  const [guild, setGuild] = useState([]);
  const { realm, id } = useParams();
  
  useEffect(() => {
    fetchFromBlizzardAPI(`guilds/profile?region=us&realm=${realm}&name=${id}&fields=raid_progression%2Craid_encounters%3ARAID_SLUG%3ADIFFICULTY%2Craid_rankings%2Cmembers`)
      .then((data) => setGuild(data))
  }, [realm, id]);

  return (
    <Container maxWidth="xl" >
      <Box className='gradient' sx={{ bgcolor: '#0d0d0d', boxShadow: 24,}}>
          <GuildHeader guild={guild} />
          <GuildRoster guild={guild} />
      </Box>
    </Container>
  )
}

export default Guild