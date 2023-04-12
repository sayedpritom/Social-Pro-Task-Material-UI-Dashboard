import { Box, Typography } from '@mui/material';
import React from 'react';

const TableHeading = ({name, title}) => {
    const boxStyles = {
        textAlign: 'left',
        backgroundColor: "white",
        padding: "20px",
        marginBottom: "10px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        borderRadius: '2px'
    }

    const headingStyles = {
        fontWeight: 'bold'
    }

    return (
        <Box sx={boxStyles}>
            <Typography sx={headingStyles} variant="h6" color="primary">{name}</Typography>
            <Typography sx={headingStyles} variant="h6">{title}</Typography>
        </Box>
    );
};

export default TableHeading;