import React from 'react';

const SocialProLogo = () => {
    const style = {
        color: '#1976d2',
        fontSize: '32px',
        padding: '40px',
        display: 'block',
        fontWeight: '500',
        margin: '0'
    }
    return (
        <h4 style={style}>
            Social<span style={{fontWeight: '600'}}>Pro</span>
        </h4>
    );
};

export default SocialProLogo;