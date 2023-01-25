import { Box, Typography } from '@mui/material';
import { ScoreHeaders, Loader } from '../components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import React from 'react'

const CharacterBar = ({ player }) => {

    if(!player?.name) return <Loader />;

    return (
    <Box m={2} p={3} sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateAreas: `"img name . stats"`,
                gridAutoFlow: 'row',
                }} >
        <img src={ player.thumbnail_url } id="headshot" className='gradient' alt='logo' /> 
        <Box p={1.5} m={2} className='gradient' sx={{ 
                        display: 'inline-flex', 
                        gridArea: 'name',
                        boxShadow: 24,
                        flexDirection: 'column',
                        textAlign: 'center'}}>
            <Typography variant='h2' fontWeight='bold' sx={{ color: player.class === 'Druid' ? '#FF7C0A' : player.class === 'Death Knight' ? '#C41E3A' : player.class === 'Demon Hunter' ? '#A330C9' : player.class === 'Evoker' ? '#33937F' : player.class === 'Hunter' ? '#AAD372' : player.class === 'Mage' ? '#3FC7EB' : player.class === 'Monk' ? '#00FF98' : player.class === 'Paladin' ? '#F48CBA' : player.class === 'Priest' ? '#FFFFFF' : player.class === 'Rogue' ? '#FFF468' : player.class === 'Shaman' ? '#0070DD' : player.class === 'Warlock' ? '#8788EE' : player.class === 'Warrior' ? '#C69B6D': 'white' }}>
                { player.name }
            </Typography>
                {player.guild === null
                    ?   <div></div> :
                    <Link to={`/guilds/${player.realm}/${player.guild.name}`}>
                        <Typography variant='h6' sx={{color: 'white'}}>
                            { player.guild.name }
                        </Typography>
                    </Link>
                } 
            <Typography variant='h4' fontWeight='bold' sx={{color: 'white' }}>
                <Box mt={0.5} sx={{ whiteSpace: 'nowrap' }}>
                    <span style={{ color: player.faction === 'alliance' ? '#67BCFF' : player.faction === 'horde' ? '#FF4709' : 'white', marginRight: '10px'}}>
                    { player.race } 
                    </span>
                    <span style={{ color: player.class === 'Druid' ? '#FF7C0A' : player.class === 'Death Knight' ? '#C41E3A' : player.class === 'Demon Hunter' ? '#A330C9' : player.class === 'Evoker' ? '#33937F' : player.class === 'Hunter' ? '#AAD372' : player.class === 'Mage' ? '#3FC7EB' : player.class === 'Monk' ? '#00FF98' : player.class === 'Paladin' ? '#F48CBA' : player.class === 'Priest' ? '#FFFFFF' : player.class === 'Rogue' ? '#FFF468' : player.class === 'Shaman' ? '#0070DD' : player.class === 'Warlock' ? '#8788EE' : player.class === 'Warrior' ? '#C69B6D': 'white' }}>
                    { player.class }
                    </span>
                </Box>
            </Typography>
        </Box>
        <ScoreHeaders player={player} />
    </Box>
)
}

export default CharacterBar