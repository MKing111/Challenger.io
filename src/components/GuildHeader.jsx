import { Box, Typography } from '@mui/material';
import { Loader } from '../components';

const GuildHeader = ({ guild }) => {
  
  if(!guild?.members) return <Loader />;

  return (
    <Box m={2} p={3} sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateAreas: `"name . mythic heroic normal"`,
            gridAutoFlow: 'row',
            gridTemplateRows: 'repeat(2, 40%)',
            gap: 1,
            alignItems: 'flex-start'
            }} >
        <Box className='gradient' sx={{ 
                        display: 'inline-flex', 
                        gridArea: 'name',
                        boxShadow: 24,
                        flexDirection: 'column',
                        }}>
            <Typography variant='h2' fontWeight='bold' m={3} sx={{ color: 'white', whiteSpace: 'nowrap' }}>
                { guild.name }
            </Typography>
            <Typography variant='h6' fontWeight='bold' mb={2} pl={3.5} sx={{ color: 'white', whiteSpace: 'nowrap' }}>
                { guild.realm}
            </Typography>
        </Box>
        <Box className='gradient' sx={{ 
                        display: 'inline-flex', 
                        gridArea: 'mythic',
                        boxShadow: 24,
                        flexDirection: 'column',
                        textAlign: 'center'}}>
            <Typography variant='h6' fontWeight='bold' sx={{ color: 'white', whiteSpace: 'nowrap' }}>
              { guild.raid_progression['vault-of-the-incarnates'].mythic_bosses_killed }/8 M
            </Typography>
        </Box>
        <Box className='gradient' sx={{ 
                        display: 'inline-flex', 
                        gridArea: 'heroic',
                        boxShadow: 24,
                        flexDirection: 'column',
                        textAlign: 'center'}}>
            <Typography variant='h6' fontWeight='bold' sx={{ color: 'white', whiteSpace: 'nowrap' }}>
              { guild.raid_progression['vault-of-the-incarnates'].heroic_bosses_killed }/8 H
            </Typography>
        </Box>
        <Box className='gradient' sx={{ 
                        display: 'inline-flex', 
                        gridArea: 'normal',
                        boxShadow: 24,
                        flexDirection: 'column',
                        textAlign: 'center'}}>
            <Typography variant='h6' fontWeight='bold' sx={{ color: 'white', whiteSpace: 'nowrap' }}>
              { guild.raid_progression['vault-of-the-incarnates'].normal_bosses_killed }/8 N
            </Typography>
        </Box>
    </Box>
  )
}


export default GuildHeader