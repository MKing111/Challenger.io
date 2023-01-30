import { Box, Typography, Stack } from '@mui/material';
import { KeyHeader, Loader } from '../components';
import { images, affixes } from '../utils/constants'

const Keys = ({ player }) => {
  
    if(!player?.name) return <Loader />;

    if(!player?.mythic_plus_best_runs) return (
        <Box  m={2} sx={{ boxShadow: 24, }}>
            <Stack spacing={0} className='gradient'>
                <KeyHeader />
                {player.mythic_plus_best_runs.map((instance) => (
                    <Box key={instance.dungeon} sx={{
                        display: 'grid',
                        gridTemplateAreas: `"dung fort rating btime baff"`,
                        border: 1, 
                        borderColor: '#9C7C38',
                        alignItems: 'center',
                        }}>
                        <Box sx={{ gridArea: 'dung', width: '250px' }}>
                            {images.map((image) => (
                                <span key={image.name}>
                                    {image.name === instance.dungeon && 
                                        <img src={image.img}  alt='dungeon' className='thumbnail' />
                                    }
                                </span>
                            ))}
                            <Typography fontWeight='bold' p={2} sx={{ color: 'white', whiteSpace: 'nowrap' }}>
                                { instance.dungeon }
                            </Typography>
                        </Box>
                        <Box p={0.5} pr={5} pl={5} sx={{ gridArea: 'fort' }}>
                            <Typography fontWeight='bold' p={0.5} sx={{ color: 'white', textAlign: 'center' }}>
                            { instance.mythic_level } {instance.num_keystone_upgrades === 1? '*' :instance.num_keystone_upgrades === 2? '**': '' } 
                            </Typography>
                        </Box>
                        <Box p={0.5} pl={1} sx={{ gridArea: 'rating' }}>
                            <Typography fontWeight='bold' p={0.5} sx={{ color: 'white', textAlign: 'center' }}>
                            { Math.round(instance.score) }
                            </Typography>
                        </Box>
                        <Box p={0.5} pl={3} sx={{ gridArea: 'btime' }}>
                            <Typography fontWeight='bold' p={0.5} sx={{ color: 'white', textAlign: 'center' }}>
                               { Math.round(instance.clear_time_ms / 60000 * 100) / 100 }
                            </Typography>
                        </Box>
                        <Box p={0.5} sx={{ gridArea: 'baff' }}>
                            <Typography fontWeight='bold' p={0.5} sx={{ color: 'white', textAlign: 'center' }}>
                                {instance.affixes.map((affix1) => (
                                    <span key={affix1.name}>
                                        {affixes.map((affix2) => (
                                            <span key={affix2.name}>
                                                {affix1.name === affix2.name && 
                                                        <img src={affix2.img} className="affix" alt='logo' />
                                                }
                                            </span>
                                        ))}
                                    </span>
                                ))}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Box>
  )
}

export default Keys