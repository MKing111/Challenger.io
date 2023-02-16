import { Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { DynamicSearchBar} from '../components';

const Navbar = () => {
    return (  
        <Stack 
            direction="row-reverse" 
            alignItems='center'
            justifyContent="space-between" 
            p={2} 
            sx={{ position: 'sticky', background: '#0d0d0d', top:0, pb: 2, borderBottom: 8, mb: 2, borderColor: '#967836', boxShadow: 15 }}>
            <Box></Box>
            <DynamicSearchBar />
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WoW_icon.svg/1200px-WoW_icon.svg.png'} alt="logo" height={45} />
            </Link>
        </Stack>
        )   
}

export default Navbar