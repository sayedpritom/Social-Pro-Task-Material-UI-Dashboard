import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Chart from '../Molecules/Chart';


const Charts = () => {

    const data = [
        {
            "id": "$USD",
            "data": [
                {
                    "x": "Progress",
                    "y": 231
                },
                {
                    "x": "Empty",
                    "y": 126
                }
            ]
        },
        {
            "id": "$USD",
            "data": [
                {
                    "x": "Progress",
                    "y": 231
                },
                {
                    "x": "Empty",
                    "y": 126
                }
            ]
        },
        {
            "id": "$USD",
            "data": [
                {
                    "x": "Progress",
                    "y": 231
                },
                {
                    "x": "Empty",
                    "y": 126
                }
            ]
        },
        {
            "id": "$USD",
            "data": [
                {
                    "x": "Progress",
                    "y": 231
                },
                {
                    "x": "Empty",
                    "y": 126
                }
            ]
        },
        {
            "id": "$USD",
            "data": [
                {
                    "x": "Progress",
                    "y": 231
                },
                {
                    "x": "Empty",
                    "y": 126
                }
            ]
        },
        {
            "id": "$USD",
            "data": [
                {
                    "x": "Progress",
                    "y": 231
                },
                {
                    "x": "Empty",
                    "y": 126
                }
            ]
        },
        {
            "id": "$USD",
            "data": [
                {
                    "x": "Progress",
                    "y": 231
                },
                {
                    "x": "Empty",
                    "y": 126
                }
            ]
        },
        {
            "id": "$USD",
            "data": [
                {
                    "x": "Progress",
                    "y": 231
                },
                {
                    "x": "Empty",
                    "y": 126
                }
            ]
        },

    ]


    const radialBarStyle = {
        height: "300px",
        position: 'relative',
        backgroundColor: 'white',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    }

    const heading = {
        backgroundColor: 'gray',
        color: 'white',
        padding: '8px'
    }

    const chart = {
        marginTop: '100px'
    }

    const bigTextStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop: '65px',
        marginLeft: '-10px',
        color: '#1876F2',
        fontWeight: '600',
        fontSize: '45px'
    }

    const startingPointStyle = {
        position: 'absolute',
        top: '78%',
        left: '5%',
        transform: 'translate(-50%, -50%)',
        fontSize: '16px',
        color: '#1876F2',
        fontWeight: 'bold',
    }

    const endingPointStyle = {
        position: 'absolute',
        top: '78%',
        left: '91%',
        transform: 'translate(-50%, -50%)',
        fontSize: '16px',
        color: '#1876F2',
        fontWeight: 'bold',
    }


    return (
        <Grid container spacing={3} sx={{ margin: '35px 24px 35px 0px', width: 'auto' }}>
            {data.map(() => {
                return (
                    <Grid item xl={3} lg={4} sm={6} xs={12}>
                        <Box sx={radialBarStyle}>
                            <Typography sx={heading}>Overall Commitment ($)</Typography>
                            <Chart style={chart} data={data} />
                            <h3 style={bigTextStyle}>63K</h3>
                            <Typography sx={startingPointStyle}>0K</Typography>
                            <Typography sx={endingPointStyle}>100K</Typography>
                        </Box>
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default Charts;