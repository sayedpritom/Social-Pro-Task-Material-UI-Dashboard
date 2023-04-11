import { Box, Link } from '@mui/material';
import React from 'react';

const linkStyle = {
    marginRight: '10px',
    fontSize: '14px',
    fontWeight: 'medium'
}

const Pagination = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'left', padding: '10px 24px'}}>
            <Link sx={linkStyle} href="#1" underline="hover">{'Previous Page 1 /'}</Link>
            <Link sx={linkStyle} href="#2" underline="hover">{'Previous Page 1 /'}</Link>
            <Link sx={linkStyle} href="#3" underline="hover">{'Previous Page 1'}</Link>
        </Box>
    );
};

export default Pagination;