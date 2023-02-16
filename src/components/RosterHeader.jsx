import { Box, Typography } from '@mui/material';

const RosterHeader = () => {
  return (
    <Box className='Header' sx={{
      display: 'grid',
      gridTemplateAreas: `"classIcon name rank"`,
      borderColor: '#9C7C38',
      alignItems: 'center',
      justifyContent: 'space-around'
      }}>
        <Box sx={{ gridArea: 'classIcon' }}>
            Class
        </Box>
        <Box sx={{ gridArea: 'name' }}>
            <Typography fontWeight='bold' p={0.5} sx={{ textAlign: 'center'}}>
                Character
            </Typography>
            </Box>
            <Box sx={{ gridArea: 'rank' }}>
                <Typography fontWeight='bold' p={0.5} sx={{ textAlign: 'center' }}>
                    Guild Rank
                </Typography>
            </Box>
      </Box>
  )
}

export default RosterHeader