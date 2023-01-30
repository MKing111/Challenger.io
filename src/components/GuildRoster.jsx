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
                                <Typography fontWeight='bold' p={0.5} sx={{ textAlign: 'center', color: roster.character.class === 'Druid' ? '#FF7C0A' : roster.character.class === 'Death Knight' ? '#C41E3A' : roster.character.class === 'Demon Hunter' ? '#A330C9' : roster.character.class === 'Evoker' ? '#33937F' : roster.character.class === 'Hunter' ? '#AAD372' : roster.character.class === 'Mage' ? '#3FC7EB' : roster.character.class === 'Monk' ? '#00FF98' : roster.character.class === 'Paladin' ? '#F48CBA' : roster.character.class === 'Priest' ? '#FFFFFF' : roster.character.class === 'Rogue' ? '#FFF468' : roster.character.class === 'Shaman' ? '#0070DD' : roster.character.class === 'Warlock' ? '#8788EE' : roster.character.class === 'Warrior' ? '#C69B6D': 'white' }}>
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