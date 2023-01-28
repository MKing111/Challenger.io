import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const GuildHeader = ({ guild }) => {
  return (
    <Box m={2} p={3} sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateAreas: `"name stats"`,
            gridAutoFlow: 'row',
            }} >
        <Box>
            <Typography>
                { guild.name }
            </Typography>
            <Typography>
                { guild.faction}
            </Typography>
        </Box>
    </Box>
  )
}


export default GuildHeader