import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Navbar, Home, Player, Guild, Gateway } from "./components";
import './App.css';

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#0d0d0d', width: '100%' }}>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/player/:realm/:id' element={<Player />} />
                <Route path='/guilds/:realm/:id' element={<Guild />} />
                <Route path='/gateway/:id' element={<Gateway />} />
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App
