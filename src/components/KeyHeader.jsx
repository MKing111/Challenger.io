import { Box, Typography } from '@mui/material';

const KeyHeader = () => {
  return (
    <Box className='Header' sx={{
        display: 'grid',
        gridTemplateAreas: `"dung fort rating btime baff"`,
        }}>
    <Box sx={{ gridArea: 'dung', width: '250px' }}>
        <Typography fontWeight='bold' p={0.5} pt={0.75} sx={{ textAlign: 'center', fontFamily: 'Lora' }}>
            Dungeon
        </Typography>
    </Box>
    <Box p={0.5} sx={{ gridArea: 'fort' }}>
        <Typography fontWeight='bold' p={0.5} sx={{ textAlign: 'center', fontFamily: 'Lora' }}>
            Best Key
        </Typography>
    </Box>
    <Box p={0.5}  sx={{ gridArea: 'rating' }}>
        <Typography fontWeight='bold' p={0.5} sx={{ textAlign: 'center', fontFamily: 'Lora' }}>
            Score
        </Typography>
    </Box>
    <Box p={0.5} sx={{ gridArea: 'btime' }}>
        <Typography fontWeight='bold' p={0.5} sx={{ textAlign: 'center', fontFamily: 'Lora' }}>
            Best Time
        </Typography>
    </Box>
    <Box p={0.5} pr={7} sx={{ gridArea: 'baff' }}>
        <Typography fontWeight='bold' p={0.5} sx={{ textAlign: 'center', fontFamily: 'Lora' }}>
            Affixes
        </Typography>
    </Box>
</Box>
  )
}

export default KeyHeader