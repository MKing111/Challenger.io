import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { useParams } from "react-router-dom";

import { CharacterBar, Keys } from '../components';
import { fetchFromRaiderioAPI } from '../utils/fetchFromRaiderioAPI';

const Player = () => {
  const [player, setPlayer] = useState([]);
  const { realm, id } = useParams();
  
  useEffect(() => {
    fetchFromRaiderioAPI(`characters/profile?region=us&realm=${realm}&name=${id}&fields=raid_progression%2Cmythic_plus_scores_by_season%3Acurrent%2Cgear%2Cguild%2Cmythic_plus_ranks%2Cmythic_plus_best_runs%3Aall'`)
      .then((data) => setPlayer(data))
  }, [id]);

  return (
    <Container maxWidth="xl" >
      <Box className='gradient' sx={{ bgcolor: '#0d0d0d', boxShadow: 24,}}>
          <CharacterBar player={player}/>
          <Keys player={player}/>
      </Box>
    </Container>
  )
}

export default Player