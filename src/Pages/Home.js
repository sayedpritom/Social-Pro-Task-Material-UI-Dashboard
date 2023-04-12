import React from 'react';
import ApplicationBar from '../Stories/Organisms/ApplicationBar';
import Pagination from '../Stories/Organisms/Pagination';
import { Box } from '@mui/material';
import Tables from '../Stories/Organisms/Tables';

const styles = {
    padding: '0 24px'
}

const Home = () => {
    return (
        <div style={{backgroundColor: "#FAFAF9", height: '100vh'}}>
            <Pagination />
            <ApplicationBar></ApplicationBar>
            <Box sx={styles}>
                <Tables />
            </Box>
        </div>
    );
};

export default Home;