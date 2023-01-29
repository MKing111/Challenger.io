import { Box, Typography, Stack } from '@mui/material';
import { RosterHeader, Loader } from '../components';
import { classes } from '../utils/constants'
import { Link } from 'react-router-dom';

const GuildRoster = ({ guild }) => {
  
    if(!guild?.members) return <Loader />;
  
    return (
    <Box  m={2} sx={{ boxShadow: 24, }}>
            <Stack spacing={0} className='gradient'>
                <RosterHeader />
                {guild.members.map((roster) => (
                    <Link key={roster.character.name} to={`/player/${guild.realm}/${roster.character.name}`} >
                        <Box sx={{
                            display: 'grid',
                            gridTemplateAreas: `"classIcon name rank"`,
                            border: 1, 
                            borderColor: '#9C7C38',
                            alignItems: 'center',
                            justifyContent: 'space-around'
                            }}>
                            <Box sx={{ gridArea: 'classIcon' }}>
                                {classes.map((image) => (
                                    <span key={image.name}>
                                        {image.name === roster.character.class && 
                                            <img src={image.img} alt='class' className='thumbnail' />
                                        }
                                    </span>
                                ))}
                            </Box>
                            <Box sx={{ gridArea: 'name' }}>
                                <Typography fontWeight='bold' p={0.5} sx={{ color: 'white', textAlign: 'center' }}>
                                    { roster.character.name }
                                </Typography>
                            </Box>
                            <Box sx={{ gridArea: 'rank' }}>
                                <Typography fontWeight='bold' p={0.5} sx={{ color: 'white', textAlign: 'center' }}>
                                    { roster.rank }
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                ))}
            </Stack>
        </Box>
  )
}

export default GuildRoster