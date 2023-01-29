import { Box, Typography } from '@mui/material';

const KeyHeader = () => {
  return (
    <Box className='Header' sx={{
        display: 'grid',
        gridTemplateAreas: `"dung fort rating btime baff"`,
        }}>
    <Box sx={{ gridArea: 'dung', width: '250px' }}>
        <Typography fontWeight='bold' p={0.5} sx={{ color: 'black', textAlign: 'center' }}>
            Dungeon
        </Typography>
    </Box>
    <Box p={0.5} sx={{ gridArea: 'fort' }}>
        <Typography fontWeight='bold' p={0.5} sx={{ color: 'black', textAlign: 'center' }}>
            Best Key
        </Typography>
    </Box>
    <Box p={0.5}  sx={{ gridArea: 'rating' }}>
        <Typography fontWeight='bold' p={0.5} sx={{ color: 'black', textAlign: 'center' }}>
            Score
        </Typography>
    </Box>
    <Box p={0.5} sx={{ gridArea: 'btime' }}>
        <Typography fontWeight='bold' p={0.5} sx={{ color: 'black', textAlign: 'center' }}>
            Best Time
        </Typography>
    </Box>
    <Box p={0.5} pr={7} sx={{ gridArea: 'baff' }}>
        <Typography fontWeight='bold' p={0.5} sx={{ color: 'black', textAlign: 'center' }}>
            Affixes
        </Typography>
    </Box>
</Box>
  )
}

export default KeyHeader