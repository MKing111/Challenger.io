import { Box, Typography, Stack, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchFromBlizzardAPI } from '../utils/fetchFromBlizzardAPI'
import { Loader } from '../components';
import { affixes, tierList } from '../utils/constants'

const Home = () => {
  const [affixe, setAffixe] = useState('')
  
  useEffect(() => {
    fetchFromBlizzardAPI('mythic-plus/affixes?region=us&locale=en')
      .then((data) => setAffixe(data))
  }, []);

  if(!affixe?.region) return <Loader />;

  return (
      <Container maxWidth="xl" className='gradient' sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{ flexDirection: 'column', display: 'inline-flex', alignItems: 'center'}}>
          <Typography className='title' variant='h1' sx={{ flexDirection: 'column', fontFamily: 'Copperplate Gothic Bold', display: 'inline-flex'}}>
            Challenger.io
          </Typography>
          <Box sx={{ flexDirection: 'column', display: 'inline-flex', alignItems: 'center', pt: 3 }}>
            <Stack sx={{ flexDirection: 'row' }}>
              {affixe.affix_details.map((affix) => (
                <Box key={affix.name} m={1} className='gradient3'>
                  {affixes.map((affix1) => (
                    <Box key={affix1.name}>
                      {affix.name === affix1.name && 
                        <img src={affix1.img} className="affix" alt='logo' />
                      }
                    </Box>
                  ))}
                </Box>
              ))}
            </Stack>
            <Typography className='title' variant='h3' fontWeight='bold'>
                Weekly Affixes
            </Typography>
          </Box>
          <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2} sx={{ bgcolor: '#0d0d0d', boxShadow: 24, display: 'flex'}}>
              {tierList.map((chart) => (
                  <Box key={chart.name} sx={{flexDirection: 'row'}}>
                    <img src={chart.img} className='tierLists gradient' alt='logo' />
                  </Box>
              ))}
          </Stack>
        </Box>
      </Container>
  )
}

export default Home