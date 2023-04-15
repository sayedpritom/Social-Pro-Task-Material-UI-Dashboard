import React from 'react';
import Typography from '@mui/material/Typography';

const SocialProLogo = () => {
    const style = {
        color: '#1976d2',
        fontSize: '25px',
        padding: '40px',
        display: 'block',
        fontWeight: '500'
    }
    return (
        <h4 style={style}>
            Social<span style={{fontWeight: '600'}}>Pro</span>
        </h4>
    );
};

export default SocialProLogo;