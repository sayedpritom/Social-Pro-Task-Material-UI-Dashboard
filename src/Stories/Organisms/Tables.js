import React from 'react';
import StuartDent from '../Molecules/StuartDent';
import { Grid } from '@mui/material';

const Tables = () => {
    const styles = {
        marginTop: '20px'
    }
    return (
        <Grid container spacing={2} sx={styles}>
            <Grid item xs={12} xl={6}>
                <StuartDent>xs=8</StuartDent>
            </Grid>
            <Grid item xs={12} xl={6}>
                <StuartDent>xs=4</StuartDent>
            </Grid>
        </Grid>
    );
};

export default Tables;