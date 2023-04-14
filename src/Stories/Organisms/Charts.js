import React from 'react';
import Box from '@mui/material/Box';
import MyResponsiveAreaBump from '../Molecules/Chart';


const Charts = () => {
    return (
        <div>
            <Box sx={{height: '200px', width:'300px'}}>
                <MyResponsiveAreaBump></MyResponsiveAreaBump>
            </Box>
        </div>
    );
};

export default Charts;