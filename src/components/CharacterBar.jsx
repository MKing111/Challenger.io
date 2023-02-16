import { Box, Typography } from '@mui/material';
import { ScoreHeaders, Loader, Gateway } from '../components';
import { Link } from 'react-router-dom';
import { postToDB } from '../utils/postToDB';

const CharacterBar = ({ player }) => {

    if(!player?.name) return <Loader />;

    return (
    <Box m={2} p={3} pb={10} sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateAreas: `"name . . stats"`,
                gridAutoFlow: 'row',
                }} > 
        <Box p={2} className='gradient' sx={{ 
                        display: 'inline-flex', 
                        gridArea: 'name',
                        boxShadow: 24,
                        flexDirection: 'row',
                        textAlign: 'center'}}>
            <img src={ player.thumbnail_url } id="headshot" className='gradient2' alt='logo' />
            <Box  p={3} pl={5} sx={{ flexDirection: 'column' }}>
                <Typography variant='h2' fontWeight='bold' sx={{ textAlign: 'left', fontFamily: 'Copperplate Gothic Bold', color: player.class === 'Druid' ? '#FF7C0A' : player.class === 'Death Knight' ? '#C41E3A' : player.class === 'Demon Hunter' ? '#A330C9' : player.class === 'Evoker' ? '#33937F' : player.class === 'Hunter' ? '#AAD372' : player.class === 'Mage' ? '#3FC7EB' : player.class === 'Monk' ? '#00FF98' : player.class === 'Paladin' ? '#F48CBA' : player.class === 'Priest' ? '#FFFFFF' : player.class === 'Rogue' ? '#FFF468' : player.class === 'Shaman' ? '#0070DD' : player.class === 'Warlock' ? '#8788EE' : player.class === 'Warrior' ? '#C69B6D': 'white' }}>
                    { player.name }
                </Typography>
                    {player.guild === null
                        ?   <div></div> :
                        <Link to={`/guilds/${player.realm}/${player.guild.name}`}>
                            <Typography variant='h5' fontWeight='bold' className='title' sx={{textAlign: 'left'}}>
                                { player.guild.name }
                            </Typography>
                        </Link>
                    } 
                <Typography variant='h3' fontWeight='bold' sx={{ textAlign: 'left', fontFamily: 'Copperplate Gothic Bold' }}>
                    <Box mt={0.5} sx={{ whiteSpace: 'nowrap' }}>
                        <span style={{ color: player.faction === 'alliance' ? '#4D85E6' : player.faction === 'horde' ? 'red' : 'white', marginRight: '10px'}}>
                        { player.race } 
                        </span>
                        <span style={{ color: player.class === 'Druid' ? '#FF7C0A' : player.class === 'Death Knight' ? '#C41E3A' : player.class === 'Demon Hunter' ? '#A330C9' : player.class === 'Evoker' ? '#33937F' : player.class === 'Hunter' ? '#AAD372' : player.class === 'Mage' ? '#3FC7EB' : player.class === 'Monk' ? '#00FF98' : player.class === 'Paladin' ? '#F48CBA' : player.class === 'Priest' ? '#FFFFFF' : player.class === 'Rogue' ? '#FFF468' : player.class === 'Shaman' ? '#0070DD' : player.class === 'Warlock' ? '#8788EE' : player.class === 'Warrior' ? '#C69B6D': 'white' }}>
                        { player.class }
                        </span>
                    </Box>
                </Typography>
            </Box>
            </Box>
        <button onClick={(e) => {postToDB({
             "name": player.name,
             "realm": player.realm,
             "guild": player.guild.name,
             "playerClass": player.class,
             "region": 'us'
        })}}>
            Enter DB
        </button>
        <ScoreHeaders player={player} />
    </Box>
)
}

export default CharacterBar