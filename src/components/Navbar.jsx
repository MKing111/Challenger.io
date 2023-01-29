import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchBar} from '../components';
import { useState } from 'react';
import { realmList } from '../utils/constants';
import { FormControl, Select, MenuItem, Paper, InputLabel } from '@mui/material';

const Navbar = () => {
    const [selection, setSelection] = useState('');

    const handleChange = (event) => {
        setSelection(event.target.value)
    }
    
    return (  
        <Stack 
            direction="row-reverse" 
            alignItems='center' 
            p={2} 
            sx={{ position: 'sticky', background: '#1B1B1B', top:0, pb: 2, borderBottom: 8, mb: 2, borderColor: '#9C7C38', boxShadow: 15 }}>
            <Paper
                component='form'
                sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                pr: 2,
                boxShadow: 'none',
                mx: 'auto'
                }}>
                <FormControl variant="standard" sx={{ 
                                width: 250,
                                borderRadius: 20,
                                p: 1,
                                boxShadow: 'none',
                                mx: 'auto'
                                }}>
                    <InputLabel sx={{pl: 2}}>Realm</InputLabel>
                    <Select value={selection} label="Realm" onChange={handleChange}>
                        {realmList.map((realm) => (
                            <MenuItem key={realm} value={realm}>{realm}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Paper>
            <SearchBar selection={selection} />
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WoW_icon.svg/1200px-WoW_icon.svg.png'} alt="logo" height={45} />
            </Link>
        </Stack>
        )   
}

export default Navbar