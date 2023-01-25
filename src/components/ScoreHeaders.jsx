import { Box, Typography } from '@mui/material';
import { Loader } from '../components';

const ScoreHeaders = ({ player }) => {

    if(!player?.name) return <Loader />;

    const { scores: { all }}  = player.mythic_plus_scores_by_season[0];

    return (
        <Box sx={{
            gridArea: 'stats',
            display: 'grid',
            gridAutoFlow: 'row',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(2, 40%)',
            gap: 1,
            }}>
            <Box m={2} mb={1} p={1} className='gradient' sx={{ 
                            display: 'inline-flex', 
                            gridColumn: '3',
                            boxShadow: 24,
                            whiteSpace: 'nowrap'}}>
                <Typography variant='h6' fontWeight='bold' mb={2} sx={{ color: '#A335EE' }}>
                   { player.gear.item_level_equipped } <span style={{color: 'white'}}>ilvl</span>
                </Typography>
            </Box>
            <Box m={2} mb={1} p={1} className='gradient' sx={{ 
                            display: 'inline-flex', 
                            gridColumn: '4',
                            boxShadow: 24,}}>
                <Typography variant='h6' fontWeight='bold' mb={2} sx={{ color: 'white', whiteSpace: 'nowrap' }}>
                    { player.raid_progression['vault-of-the-incarnates'].summary } 
                </Typography>
            </Box>
            <Box m={2} mb={1} p={1} className='gradient' sx={{ 
                            display: 'inline-flex', 
                            gridColumn: '5',
                            boxShadow: 24,
                            whiteSpace: 'nowrap'}}>
                <Typography variant='h6' fontWeight='bold' mb={2} sx={{ color: all > 2200?'#FF8000': all > 1800 ? '#A335EE': all > 1500 ? '#0070FF': all > 1000 ? '#1EFF0C': '#FFFFFF' }}>
                    { Math.round(all) } <span style={{color: 'white'}}>M+</span>
                </Typography>
            </Box>
        </Box>
    )
}

export default ScoreHeaders
