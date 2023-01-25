import { useState } from 'react';
import { realmList } from '../utils/constants';
import { FormControl, Select, MenuItem, Paper } from '@mui/material';

const RealmSelector = () => {
  const [selection, setSelection] = useState("Selection");

  const handleChange = (event) => {
    setSelection(event.target.value)
  }


  
  return (
      <Paper
        component='form'
        sx={{
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          pl: 2,
          boxShadow: 'none',
          mx: 'auto'
        }}>
        <FormControl variant="standard" sx={{ 
                        width: 200,
                        borderRadius: 20,
                        p: 0.5,
                        boxShadow: 'none',
                        mx: 'auto'
                        }}>
          <Select value={selection} label="Realm" onChange={handleChange}>
            {realmList.map((realm) => (
                <MenuItem key={realm} value={realm}>{realm}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
  )
}

export default RealmSelector