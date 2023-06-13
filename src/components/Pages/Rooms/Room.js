import { Box} from '@mui/material';
import * as React from 'react';

import Tab from '@mui/material/Tab';

import TabPanel from '@mui/lab/TabPanel';

import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import SingleRoom from './SingleRoom';


export default function  Room() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' ,marginTop:"90px", background:"#ccc"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Single Room" value="1" />
            <Tab label="Double Room" value="2" />
           
          </TabList>
        </Box>
        <TabPanel value="1"><SingleRoom/></TabPanel>
        <TabPanel value="2">Double Room</TabPanel>
  
      </TabContext>
    </Box>
  );
}